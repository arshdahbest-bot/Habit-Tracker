import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Flashcard, Lesson, Level, QuizQuestion, Subject } from '../data/subjects';

// Asks the server to write chapter material with Claude and caches it on the device.

const BASE = (process.env.EXPO_PUBLIC_API_BASE_URL ?? '').replace(/\/$/, '');

type Kinds = {
  lesson: { title: string; steps: string[] };
  flashcards: { cards: Flashcard[] };
  quiz: { questions: QuizQuestion[] };
};

export type ChapterRef = { subject: Subject; level: Level | 'core'; unitTitle: string; chapterId: string; chapterTitle: string };

const cacheKey = (kind: string, r: ChapterRef) => `gen:v1:${kind}:${r.subject.id}:${r.level}:${r.chapterId}`;

export async function getCached<K extends keyof Kinds>(kind: K, ref: ChapterRef): Promise<Kinds[K] | null> {
  try {
    const raw = await AsyncStorage.getItem(cacheKey(kind, ref));
    return raw ? (JSON.parse(raw) as Kinds[K]) : null;
  } catch {
    return null;
  }
}

export async function generate<K extends keyof Kinds>(kind: K, ref: ChapterRef, opts: { refresh?: boolean } = {}): Promise<Kinds[K]> {
  if (!opts.refresh) {
    const cached = await getCached(kind, ref);
    if (cached) return cached;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 180_000);
  let res: Response;
  try {
    res = await fetch(`${BASE}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kind,
        subject: ref.subject.name,
        level: ref.level,
        unit: ref.unitTitle,
        chapterId: ref.chapterId,
        chapterTitle: ref.chapterTitle,
      }),
      signal: controller.signal,
    });
  } catch {
    throw new Error("Couldn't reach the AI tutor. Check your internet, and that the app is running from `npx expo start`.");
  } finally {
    clearTimeout(timer);
  }
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    // handled below
  }
  if (!res.ok || data?.error) throw new Error(data?.error ?? 'The AI tutor is not available right now. Please try again.');
  try {
    await AsyncStorage.setItem(cacheKey(kind, ref), JSON.stringify(data));
  } catch {
    // cache is optional
  }
  return data as Kinds[K];
}

export function aiLessonId(subjectId: string, chapterId: string) {
  return `ai:${subjectId}:${chapterId}`;
}

export function toLesson(subjectId: string, chapterId: string, data: Kinds['lesson']): Lesson {
  return { id: aiLessonId(subjectId, chapterId), chapters: [chapterId], title: data.title, steps: data.steps };
}
