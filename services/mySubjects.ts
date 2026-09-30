import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Level, Subject, SUBJECTS } from '../data/subjects';

export type MySubject = { subject: Subject; level: Level | undefined; levelLabel: string };

/** The student's chosen subjects with their levels (all subjects at HL if none chosen yet). */
export function useMySubjects(): { list: MySubject[]; chosen: boolean; levelOf: (id: string) => Level | undefined } {
  const { profile } = useApp();
  const chosen = Object.keys(profile.subjects).length > 0;
  const levelOf = (id: string): Level | undefined => {
    const v = profile.subjects[id];
    if (v === 'SL' || v === 'HL') return v;
    return chosen ? undefined : 'HL';
  };
  const list = SUBJECTS.filter((s) => !chosen || profile.subjects[s.id]).map((subject) => {
    const level = levelOf(subject.id);
    return {
      subject,
      level,
      levelLabel: subject.levels === 'core' ? 'Core' : chosen ? level ?? '' : 'SL/HL',
    };
  });
  return { list, chosen, levelOf };
}

// The subject last chosen on any screen, so the Cards and Quiz tabs stay in sync.
let lastSubject: string | undefined;

/** Picks the subject a screen should open on: the one passed in, else the last used, else the first. */
export function useSubjectSelection(param: string | undefined) {
  const { list } = useMySubjects();
  const first = list[0]?.subject.id ?? SUBJECTS[0].id;
  const [id, setIdState] = useState(param ?? lastSubject ?? first);
  const setId = (next: string) => {
    lastSubject = next;
    setIdState(next);
  };
  useEffect(() => {
    if (param) setId(param);
  }, [param]); // eslint-disable-line react-hooks/exhaustive-deps
  // When a tab is revisited, follow the subject chosen elsewhere in the meantime.
  useFocusEffect(
    useCallback(() => {
      if (lastSubject && lastSubject !== id) setIdState(lastSubject);
    }, [id]),
  );
  // If the student removes the current subject from "My subjects", move to one they take.
  useEffect(() => {
    if (!list.some((m) => m.subject.id === id)) setId(first);
  }, [list, id, first]);
  return [id, setId] as const;
}
