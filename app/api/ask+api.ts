import Anthropic from '@anthropic-ai/sdk';

// Server-side route: the Ask AI tab posts here. Runs on the Expo dev server (npx expo start)
// or on your hosted server — never inside the app — so ANTHROPIC_API_KEY stays secret.
// Put the key in a .env file next to package.json:  ANTHROPIC_API_KEY=sk-ant-...

type IncomingMessage = {
  role: 'user' | 'assistant';
  text: string;
  image?: { base64: string; mediaType: string };
};

type AskBody = { messages: IncomingMessage[]; tutorName?: string; subject?: string };

const MAX_MESSAGES = 20;
const MAX_TEXT = 4000;
const MAX_IMAGE_BASE64 = 7_000_000; // ~5 MB image
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'] as const;
type ImageType = (typeof IMAGE_TYPES)[number];

// Best-effort limit per IP so one person can't run up your bill (resets when the server restarts).
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 15;
}

function systemPrompt(tutorName: string, subject?: string) {
  return [
    `You are ${tutorName}, a friendly study tutor inside a study app for IB Diploma Programme students (usually aged 16 to 19).`,
    'Help with any school question: explain ideas clearly, work through problems step by step, and check the student understands.',
    'Use IB command terms and syllabus conventions where they are relevant.',
    'Keep answers focused and conversational. Your reply is also read aloud, so write plain text with no Markdown: no #, **, tables or LaTeX. Use short numbered steps when helpful and Unicode for maths (x², √, π, ≤, →).',
    'If the question is part of assessed work (Internal Assessment, Extended Essay, TOK essay), guide the student with questions, structure and feedback instead of writing it for them.',
    'If a photo is unclear, say what you cannot read. If you are not sure of something, say so.',
    subject ? `The student is currently studying ${subject}.` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function error(status: number, message: string) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return error(500, 'The AI tutor is not set up yet. Add ANTHROPIC_API_KEY to the .env file (see README), then restart.');
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (rateLimited(ip)) return error(429, 'Too many questions at once. Please wait a minute and try again.');

  let body: AskBody;
  try {
    body = (await request.json()) as AskBody;
  } catch {
    return error(400, 'Invalid request.');
  }
  if (!Array.isArray(body.messages) || body.messages.length === 0) return error(400, 'Please ask a question.');

  const recent = body.messages.slice(-MAX_MESSAGES);
  const messages: Anthropic.Beta.BetaMessageParam[] = [];
  for (const m of recent) {
    if (m.role !== 'user' && m.role !== 'assistant') continue;
    const text = String(m.text ?? '').slice(0, MAX_TEXT);
    if (m.role === 'user' && m.image) {
      const type = m.image.mediaType as ImageType;
      if (!IMAGE_TYPES.includes(type) || typeof m.image.base64 !== 'string' || m.image.base64.length > MAX_IMAGE_BASE64) {
        return error(400, 'That photo could not be used. Try a smaller JPG or PNG.');
      }
      messages.push({
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: type, data: m.image.base64 } },
          { type: 'text', text: text || 'Please help me with the question in this photo.' },
        ],
      });
    } else if (text) {
      messages.push({ role: m.role, content: text });
    }
  }
  if (messages.length === 0 || messages[0].role !== 'user') return error(400, 'Please ask a question.');

  const tutorName = String(body.tutorName || 'your tutor').slice(0, 30);
  const subject = body.subject ? String(body.subject).slice(0, 40) : undefined;

  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'medium' },
      // If the main model declines, the API retries on a suitable fallback model automatically.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: systemPrompt(tutorName, subject),
      messages,
    });

    if (response.stop_reason === 'refusal') {
      return Response.json({ answer: "Sorry, I can't help with that one. Try asking it a different way, or ask about something else you're studying." });
    }
    const answer = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();
    return Response.json({ answer: answer || "I couldn't come up with an answer. Please try rephrasing your question." });
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) return error(500, 'The AI key is not valid. Check ANTHROPIC_API_KEY in .env.');
    if (e instanceof Anthropic.RateLimitError) return error(429, 'The AI is busy right now. Please try again in a moment.');
    if (e instanceof Anthropic.BadRequestError) return error(400, 'The AI could not read that request. Try a shorter question or a different photo.');
    if (e instanceof Anthropic.APIError) return error(502, 'The AI service had a problem. Please try again.');
    return error(502, 'Could not reach the AI service. Check your internet connection.');
  }
}
