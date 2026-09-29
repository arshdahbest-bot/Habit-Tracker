import Anthropic from '@anthropic-ai/sdk';
import { friendlyError, jsonError, MODEL, NO_KEY_MESSAGE, rateLimited, textOf } from '../../server/claude';

// Writes study material for one syllabus chapter: a spoken lesson, flashcards or a quiz.
// The app caches results on the device, so each chapter is only generated once per level.

type Kind = 'lesson' | 'flashcards' | 'quiz';

type GenerateBody = {
  kind: Kind;
  subject: string;
  level: 'SL' | 'HL' | 'core';
  unit: string;
  chapterId: string;
  chapterTitle: string;
};

const SCHEMAS: Record<Kind, Record<string, unknown>> = {
  lesson: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      steps: { type: 'array', items: { type: 'string' } },
    },
    required: ['title', 'steps'],
    additionalProperties: false,
  },
  flashcards: {
    type: 'object',
    properties: {
      cards: {
        type: 'array',
        items: {
          type: 'object',
          properties: { front: { type: 'string' }, back: { type: 'string' } },
          required: ['front', 'back'],
          additionalProperties: false,
        },
      },
    },
    required: ['cards'],
    additionalProperties: false,
  },
  quiz: {
    type: 'object',
    properties: {
      questions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            question: { type: 'string' },
            options: { type: 'array', items: { type: 'string' } },
            answer: { type: 'integer' },
            explanation: { type: 'string' },
          },
          required: ['question', 'options', 'answer', 'explanation'],
          additionalProperties: false,
        },
      },
    },
    required: ['questions'],
    additionalProperties: false,
  },
};

const TASKS: Record<Kind, string> = {
  lesson:
    'Write a short spoken lesson of 6 to 8 steps. Each step is 2 to 3 sentences that the avatar tutor reads aloud, so use plain text with no Markdown, no bullet symbols and no LaTeX; write maths in words or Unicode (x², √, π). Build up from the key definition, include one worked example or real-world case, and finish with an exam tip that uses IB command terms. The title is the chapter name in plain words.',
  flashcards:
    'Write 10 flashcards covering the key terms, definitions, formulas and facts of this chapter. Fronts are short prompts; backs are concise, accurate answers of at most 30 words.',
  quiz:
    'Write 6 exam-style multiple-choice questions with exactly 4 options each and one correct answer. Vary the position of the correct answer. "answer" is the 0-based index of the correct option. Each explanation is 1 to 2 sentences saying why the answer is right.',
};

function prompt(b: GenerateBody) {
  const level = b.level === 'core' ? 'the DP core' : `${b.level} (${b.level === 'HL' ? 'Higher Level' : 'Standard Level'})`;
  const languageNote =
    /French|Hindi/.test(b.subject)
      ? ' This is a Language B course: explain in English, but give vocabulary, example sentences and flashcard fronts in the target language.'
      : '';
  return [
    `Subject: IB Diploma Programme ${b.subject}, ${level}.`,
    `Chapter ${b.chapterId}: ${b.chapterTitle} (${b.unit}).`,
    `Follow the current IB subject guide for this chapter.${b.level === 'SL' ? ' Stay within SL content; do not include HL-only material.' : ''}${languageNote}`,
    'The audience is a 16 to 19 year old IB student. Be accurate; if the guide is ambiguous, keep to widely taught core content.',
    TASKS[b.kind],
  ].join('\n');
}

function validate(kind: Kind, data: any) {
  if (kind === 'lesson') {
    const steps = Array.isArray(data?.steps) ? data.steps.filter((s: unknown) => typeof s === 'string' && s.trim()) : [];
    return steps.length >= 3 ? { title: String(data.title || ''), steps: steps.slice(0, 10) } : null;
  }
  if (kind === 'flashcards') {
    const cards = Array.isArray(data?.cards)
      ? data.cards.filter((c: any) => typeof c?.front === 'string' && typeof c?.back === 'string')
      : [];
    return cards.length >= 3 ? { cards: cards.slice(0, 15) } : null;
  }
  const questions = Array.isArray(data?.questions)
    ? data.questions.filter(
        (q: any) =>
          typeof q?.question === 'string' &&
          Array.isArray(q.options) &&
          q.options.length >= 2 &&
          Number.isInteger(q.answer) &&
          q.answer >= 0 &&
          q.answer < q.options.length,
      )
    : [];
  return questions.length >= 3 ? { questions: questions.slice(0, 10) } : null;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) return jsonError(500, NO_KEY_MESSAGE);
  if (rateLimited(request, 10)) return jsonError(429, 'Too many requests at once. Please wait a minute and try again.');

  let body: GenerateBody;
  try {
    body = (await request.json()) as GenerateBody;
  } catch {
    return jsonError(400, 'Invalid request.');
  }
  if (!['lesson', 'flashcards', 'quiz'].includes(body.kind) || !body.subject || !body.chapterTitle) {
    return jsonError(400, 'Invalid request.');
  }
  const clean: GenerateBody = {
    kind: body.kind,
    subject: String(body.subject).slice(0, 60),
    level: body.level === 'HL' || body.level === 'core' ? body.level : 'SL',
    unit: String(body.unit ?? '').slice(0, 120),
    chapterId: String(body.chapterId ?? '').slice(0, 12),
    chapterTitle: String(body.chapterTitle).slice(0, 160),
  };

  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'medium', format: { type: 'json_schema', schema: SCHEMAS[clean.kind] } },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      messages: [{ role: 'user', content: prompt(clean) }],
    });
    if (response.stop_reason === 'refusal') return jsonError(422, 'The AI could not create material for this chapter.');
    if (response.stop_reason === 'max_tokens') return jsonError(502, 'The AI ran out of space. Please try again.');

    let parsed: unknown;
    try {
      parsed = JSON.parse(textOf(response));
    } catch {
      return jsonError(502, 'The AI sent back something unreadable. Please try again.');
    }
    const result = validate(clean.kind, parsed);
    if (!result) return jsonError(502, 'The AI’s answer was incomplete. Please try again.');
    return Response.json(result);
  } catch (e) {
    return friendlyError(e);
  }
}
