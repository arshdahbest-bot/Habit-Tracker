import AsyncStorage from '@react-native-async-storage/async-storage';
import { todayKey } from './dailyGame';

// Everything the Progress tab shows is stored on the device under one key.

export type QuizResult = { subjectId: string; chapterId?: string; score: number; total: number; day: string; at: number };

export type ProgressData = {
  lessonsDone: Record<string, string>; // lessonId -> day completed
  cardsMastered: Record<string, number>; // subjectId -> best number of cards mastered
  quizzes: QuizResult[];
  activity: Record<string, number>; // day -> number of study actions
};

const KEY = 'progress:v1';

const empty = (): ProgressData => ({ lessonsDone: {}, cardsMastered: {}, quizzes: [], activity: {} });

export async function getProgress(): Promise<ProgressData> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? { ...empty(), ...JSON.parse(raw) } : empty();
  } catch {
    return empty();
  }
}

// Writes are chained so two quick updates can't overwrite each other.
let queue: Promise<unknown> = Promise.resolve();

function update(fn: (p: ProgressData) => void) {
  queue = queue.then(async () => {
    const p = await getProgress();
    fn(p);
    const day = todayKey();
    p.activity[day] = (p.activity[day] ?? 0) + 1;
    await AsyncStorage.setItem(KEY, JSON.stringify(p));
  }).catch(() => {});
  return queue;
}

export function recordLesson(lessonId: string) {
  return update((p) => {
    if (!p.lessonsDone[lessonId]) p.lessonsDone[lessonId] = todayKey();
  });
}

export function recordFlashcards(subjectId: string, mastered: number) {
  return update((p) => {
    p.cardsMastered[subjectId] = Math.max(p.cardsMastered[subjectId] ?? 0, mastered);
  });
}

export function recordQuiz(subjectId: string, score: number, total: number, chapterId?: string) {
  return update((p) => {
    p.quizzes.push({ subjectId, chapterId, score, total, day: todayKey(), at: Date.now() });
    if (p.quizzes.length > 200) p.quizzes = p.quizzes.slice(-200);
  });
}

export async function resetProgress() {
  await AsyncStorage.removeItem(KEY);
}

/** Last `n` days (oldest first) with how many study actions happened on each. */
export function lastDays(p: ProgressData, n = 7) {
  const out: { day: string; label: string; count: number }[] = [];
  const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const day = todayKey(d);
    out.push({ day, label: i === 0 ? 'Today' : names[d.getDay()], count: p.activity[day] ?? 0 });
  }
  return out;
}

/** Consecutive days with study activity, ending today (or yesterday if nothing yet today). */
export function streak(p: ProgressData) {
  const d = new Date();
  if (!p.activity[todayKey(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (p.activity[todayKey(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
