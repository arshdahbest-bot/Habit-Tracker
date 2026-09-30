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
import { Chapter, SYLLABUS, Unit } from './syllabus';
import type { ChapterContent, SubjectContentFile } from './types';

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

export const CONTENT: Record<string, SubjectContentFile> = { eng, fre, hin, econ, bm, hist, psych, bio, chem, phys, cs, ess, math, mai, tok };

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
