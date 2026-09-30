import bio from './content/bio';
import bm from './content/bm';
import chem from './content/chem';
import cs from './content/cs';
import econ from './content/econ';
import eng from './content/eng';
import ess from './content/ess';
import fre from './content/fre';
import hin from './content/hin';
import hist from './content/hist';
import mai from './content/mai';
import math from './content/math';
import phys from './content/phys';
import psych from './content/psych';
import tok from './content/tok';
import bioMore from './content/more/bio';
import bmMore from './content/more/bm';
import chemMore from './content/more/chem';
import csMore from './content/more/cs';
import econMore from './content/more/econ';
import engMore from './content/more/eng';
import essMore from './content/more/ess';
import freMore from './content/more/fre';
import hinMore from './content/more/hin';
import histMore from './content/more/hist';
import maiMore from './content/more/mai';
import mathMore from './content/more/math';
import physMore from './content/more/phys';
import psychMore from './content/more/psych';
import tokMore from './content/more/tok';
import { Chapter, SYLLABUS, Unit } from './syllabus';
import type { ChapterContent, MoreContent, SubjectContentFile } from './types';

export type { ChapterContent, Flashcard, QuizQuestion } from './types';

// IBDP subjects. The syllabus (units and chapters) is in data/syllabus.ts, and each
// subject's lessons, flashcards and quizzes are in data/content/<subject id>.ts.

export type Level = 'SL' | 'HL';

export type SubjectMeta = {
  id: string;
  name: string;
  short?: string; // shorter name for chips and tabs
  group: string;
  emoji: string;
  color: string;
  levels: 'SLHL' | 'core'; // 'core' = TOK (no SL/HL)
};

export type Subject = SubjectMeta & { units: Unit[] };

// Ordered by IB subject group, with TOK (DP core) last.
const META: SubjectMeta[] = [
  { id: 'eng', name: 'English A: Language & Literature', short: 'English A', group: 'Group 1 · Studies in language and literature', emoji: '📖', color: '#0F766E', levels: 'SLHL' },
  { id: 'fre', name: 'French B', group: 'Group 2 · Language acquisition', emoji: '🇫🇷', color: '#2563EB', levels: 'SLHL' },
  { id: 'hin', name: 'Hindi B', group: 'Group 2 · Language acquisition', emoji: '🇮🇳', color: '#EA580C', levels: 'SLHL' },
  { id: 'econ', name: 'Economics', group: 'Group 3 · Individuals and societies', emoji: '📈', color: '#EC4899', levels: 'SLHL' },
  { id: 'bm', name: 'Business Management', short: 'Business', group: 'Group 3 · Individuals and societies', emoji: '💼', color: '#9333EA', levels: 'SLHL' },
  { id: 'hist', name: 'History', group: 'Group 3 · Individuals and societies', emoji: '🏛️', color: '#B45309', levels: 'SLHL' },
  { id: 'psych', name: 'Psychology', group: 'Group 3 · Individuals and societies', emoji: '🧠', color: '#DB2777', levels: 'SLHL' },
  { id: 'bio', name: 'Biology', group: 'Group 4 · Sciences', emoji: '🧬', color: '#16A34A', levels: 'SLHL' },
  { id: 'chem', name: 'Chemistry', group: 'Group 4 · Sciences', emoji: '⚗️', color: '#0EA5E9', levels: 'SLHL' },
  { id: 'phys', name: 'Physics', group: 'Group 4 · Sciences', emoji: '🪐', color: '#8B5CF6', levels: 'SLHL' },
  { id: 'cs', name: 'Computer Science', short: 'Comp Sci', group: 'Group 4 · Sciences', emoji: '💻', color: '#0891B2', levels: 'SLHL' },
  { id: 'ess', name: 'Environmental Systems & Societies', short: 'ESS', group: 'Groups 3 & 4 · Interdisciplinary', emoji: '🌍', color: '#65A30D', levels: 'SLHL' },
  { id: 'math', name: 'Maths: Analysis & Approaches', short: 'Maths AA', group: 'Group 5 · Mathematics', emoji: '📐', color: '#F59E0B', levels: 'SLHL' },
  { id: 'mai', name: 'Maths: Applications & Interpretation', short: 'Maths AI', group: 'Group 5 · Mathematics', emoji: '📊', color: '#C026D3', levels: 'SLHL' },
  { id: 'tok', name: 'Theory of Knowledge', short: 'TOK', group: 'DP Core', emoji: '🤔', color: '#475569', levels: 'core' },
];

const BASE: Record<string, SubjectContentFile> = { eng, fre, hin, econ, bm, hist, psych, bio, chem, phys, cs, ess, math, mai, tok };
const MORE: Record<string, Record<string, MoreContent>> = {
  eng: engMore, fre: freMore, hin: hinMore, econ: econMore, bm: bmMore, hist: histMore, psych: psychMore, bio: bioMore,
  chem: chemMore, phys: physMore, cs: csMore, ess: essMore, math: mathMore, mai: maiMore, tok: tokMore,
};

// Each chapter's core content merged with its second lesson and extra cards and questions.
export const CONTENT: Record<string, SubjectContentFile> = Object.fromEntries(
  Object.entries(BASE).map(([id, file]) => [
    id,
    {
      units: file.units,
      chapters: Object.fromEntries(
        Object.entries(file.chapters).map(([chapterId, base]) => {
          const more = MORE[id]?.[chapterId];
          const merged: ChapterContent = more
            ? { ...base, lesson2: more.lesson2, cards: [...base.cards, ...more.cards], quiz: [...base.quiz, ...more.quiz] }
            : base;
          return [chapterId, merged];
        }),
      ),
    },
  ]),
);

/** Extra content written for chapter ids that don't exist (used by the content checker). */
export const MORE_CONTENT = MORE;

export const SUBJECTS: Subject[] = META.map((m) => ({ ...m, units: SYLLABUS[m.id] ?? [] }));

export function getSubject(id: string | undefined) {
  return SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];
}

/** Chapters a student at this level studies (SL students don't see HL-only chapters). */
export function chaptersFor(subject: Subject, level: Level | undefined): { unit: Unit; chapters: Chapter[] }[] {
  return subject.units.map((unit) => ({
    unit,
    chapters: unit.chapters.filter((c) => level === 'HL' || subject.levels === 'core' || !c.hl),
  }));
}

export function findChapter(subject: Subject, chapterId: string | undefined) {
  for (const unit of subject.units) {
    const chapter = unit.chapters.find((c) => c.id === chapterId);
    if (chapter) return { unit, chapter };
  }
  return null;
}

export function chapterContent(subjectId: string, chapterId: string | undefined): ChapterContent | null {
  if (!chapterId) return null;
  return CONTENT[subjectId]?.chapters[chapterId] ?? null;
}

export function unitOverview(subjectId: string, unitId: string | undefined): string[] | null {
  if (!unitId) return null;
  return CONTENT[subjectId]?.units[unitId] ?? null;
}

/** Progress key for finishing a chapter's lesson. */
export const lessonKey = (subjectId: string, chapterId: string) => `${subjectId}:${chapterId}`;
export const lesson2Key = (subjectId: string, chapterId: string) => `${subjectId}:${chapterId}#2`;

/** "Group 3 · Individuals and societies" -> "Group 3". */
export const groupShort = (group: string) => group.split(' · ')[0];

/** Splits items into IB subject groups, in the order the groups appear in SUBJECTS. */
export function byGroup<T>(items: T[], subjectOf: (item: T) => Subject): { group: string; items: T[] }[] {
  const out: { group: string; items: T[] }[] = [];
  const order = (t: T) => SUBJECTS.indexOf(subjectOf(t));
  for (const item of [...items].sort((a, b) => order(a) - order(b))) {
    const group = subjectOf(item).group;
    const g = out.find((x) => x.group === group);
    if (g) g.items.push(item);
    else out.push({ group, items: [item] });
  }
  return out;
}
