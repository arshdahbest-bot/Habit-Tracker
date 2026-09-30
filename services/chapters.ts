import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { chaptersFor, lessonKey, Level, Subject } from '../data/subjects';
import type { ProgressData } from './progress';

/** A chapter counts as studied when the student ticks it off or finishes its lesson. */
export function chapterStudied(p: ProgressData | null, subject: Subject, chapterId: string) {
  if (!p) return false;
  return !!(p.chaptersDone?.[`${subject.id}:${chapterId}`] || p.lessonsDone[lessonKey(subject.id, chapterId)]);
}

// The chapter last chosen for each subject, so the Cards and Quiz tabs stay in sync.
const lastChapter: Record<string, string> = {};

/** Chapter shown on the Cards/Quiz tabs: the one passed in, else the last used, else the first at the student's level. */
export function useChapterSelection(subject: Subject, level: Level | undefined, param: string | undefined) {
  const available = chaptersFor(subject, level).flatMap((u) => u.chapters.map((c) => c.id));
  const pick = () => {
    const wanted = param ?? lastChapter[subject.id];
    return wanted && available.includes(wanted) ? wanted : available[0];
  };
  const [id, setIdState] = useState(pick);
  const setId = (next: string) => {
    lastChapter[subject.id] = next;
    setIdState(next);
  };
  useEffect(() => {
    const next = pick();
    if (next) lastChapter[subject.id] = next;
    setIdState(next);
  }, [subject.id, level, param]); // eslint-disable-line react-hooks/exhaustive-deps
  // When a tab is revisited, follow the chapter chosen elsewhere in the meantime.
  useFocusEffect(
    useCallback(() => {
      const remembered = lastChapter[subject.id];
      if (remembered && remembered !== id && available.includes(remembered)) setIdState(remembered);
    }, [subject.id, id, available.join()]), // eslint-disable-line react-hooks/exhaustive-deps
  );
  return [id, setId] as const;
}
