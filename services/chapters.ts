import { lessonsForChapter, Subject } from '../data/subjects';
import type { ProgressData } from './progress';

/** A chapter counts as studied when the student ticks it off or finishes a lesson for it. */
export function chapterStudied(p: ProgressData | null, subject: Subject, chapterId: string) {
  if (!p) return false;
  if (p.chaptersDone?.[`${subject.id}:${chapterId}`]) return true;
  return lessonsForChapter(subject, chapterId).some((l) => p.lessonsDone[l.id]);
}
