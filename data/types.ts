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
  lesson: string[]; // each step is one "slide" the avatar reads aloud
  diagrams?: Record<number, DiagramId>; // step index -> diagram shown under that step
  cards: Flashcard[];
  quiz: QuizQuestion[];
};

/** Content for one subject: a short overview per unit and full content per chapter. */
export type SubjectContentFile = {
  units: Record<string, string[]>;
  chapters: Record<string, ChapterContent>;
};
