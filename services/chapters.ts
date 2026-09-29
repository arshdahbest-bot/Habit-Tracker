import { lessonsForChapter, Subject } from '../data/subjects';
import { aiLessonId } from './generate';
import type { ProgressData } from './progress';

/** A chapter counts as studied once any lesson for it (built-in or AI) has been finished. */
export function chapterStudied(p: ProgressData | null, subject: Subject, chapterId: string) {
  if (!p) return false;
  if (p.lessonsDone[aiLessonId(subject.id, chapterId)]) return true;
  return lessonsForChapter(subject, chapterId).some((l) => p.lessonsDone[l.id]);
}
