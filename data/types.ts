import type { DiagramId } from '../components/econ/diagrams';

export type Flashcard = { front: string; back: string };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // index into options
  explanation: string;
};

/** Everything a student can study for one syllabus chapter. */
export type ChapterContent = {
  lesson: string[]; // Lesson 1, core ideas: each step is one "slide" the avatar reads aloud
  diagrams?: Record<number, DiagramId>; // step index -> diagram shown under that step
  lesson2?: string[]; // Lesson 2, deeper dive: worked examples, common mistakes and exam technique
  cards: Flashcard[];
  quiz: QuizQuestion[];
};

/** Content for one subject: a short overview per unit and full content per chapter. */
export type SubjectContentFile = {
  units: Record<string, string[]>;
  chapters: Record<string, ChapterContent>;
};

/** Extra content for a chapter, kept in data/content/more/<subject id>.ts and merged in. */
export type MoreContent = { lesson2: string[]; cards: Flashcard[]; quiz: QuizQuestion[] };
