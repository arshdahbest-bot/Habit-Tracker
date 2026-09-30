import type { DiagramId } from '../../components/econ/diagrams';
import type { ChapterContent, MoreContent } from '../types';

type Card = [front: string, back: string];
type Q = [question: string, options: string[], answer: number, explanation: string];

/** Compact way to write a chapter: lesson steps, flashcards and quiz questions. */
export function C(lesson: string[], cards: Card[], quiz: Q[], diagrams?: Record<number, DiagramId>): ChapterContent {
  return {
    lesson,
    diagrams,
    cards: cards.map(([front, back]) => ({ front, back })),
    quiz: quiz.map(([question, options, answer, explanation]) => ({ question, options, answer, explanation })),
  };
}

type Q2 = [question: string, correct: string, wrong: string[], explanation: string];

/** Extra chapter content: a second lesson, more flashcards and more questions (correct answer first; options are shuffled when shown). */
export function M(lesson2: string[], cards: Card[], quiz: Q2[]): MoreContent {
  return {
    lesson2,
    cards: cards.map(([front, back]) => ({ front, back })),
    quiz: quiz.map(([question, correct, wrong, explanation]) => ({ question, options: [correct, ...wrong], answer: 0, explanation })),
  };
}
