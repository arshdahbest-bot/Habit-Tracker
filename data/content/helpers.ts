import type { DiagramId } from '../../components/econ/diagrams';
import type { ChapterContent } from '../types';

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
