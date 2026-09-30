// Checks that every syllabus chapter and unit has content, and that quiz answers are valid.
// Run with: npx tsx scripts/check-content.ts
import { chapterContent, CONTENT, MORE_CONTENT, SUBJECTS, unitOverview } from '../data/subjects';

let problems = 0;
let chapters = 0;
const noMore: string[] = [];
const totals = { steps: 0, cards: 0, quiz: 0 };
for (const s of SUBJECTS) {
  const missing: string[] = [];
  for (const u of s.units) {
    if (!unitOverview(s.id, u.id)?.length) missing.push(`unit ${u.id}`);
    for (const c of u.chapters) {
      chapters++;
      const content = chapterContent(s.id, c.id);
      if (!content) {
        missing.push(c.id);
        continue;
      }
      if (content.lesson.length < 3) console.log(`${s.id} ${c.id}: lesson has only ${content.lesson.length} steps`);
      if (!content.lesson2) noMore.push(c.id);
      else {
        if (content.lesson2.length < 3) console.log(`${s.id} ${c.id}: lesson 2 has only ${content.lesson2.length} steps`);
        if (content.cards.length < 7) console.log(`${s.id} ${c.id}: only ${content.cards.length} flashcards`);
        if (content.quiz.length < 7) console.log(`${s.id} ${c.id}: only ${content.quiz.length} quiz questions`);
      }
      totals.steps += content.lesson.length + (content.lesson2?.length ?? 0);
      totals.cards += content.cards.length;
      totals.quiz += content.quiz.length;
      const fronts = content.cards.map((x) => x.front.toLowerCase());
      fronts.forEach((f, i) => fronts.indexOf(f) !== i && console.log(`${s.id} ${c.id}: duplicate card "${f}"`));
      const qs = content.quiz.map((x) => x.question.toLowerCase());
      qs.forEach((q, i) => qs.indexOf(q) !== i && console.log(`${s.id} ${c.id}: duplicate question "${q}"`));
      content.quiz.forEach((q, i) => {
        if (new Set(q.options).size !== q.options.length) console.log(`${s.id} ${c.id}: question ${i + 1} repeats an option`);
        if (q.answer < 0 || q.answer >= q.options.length) {
          console.log(`${s.id} ${c.id}: quiz question ${i + 1} has an invalid answer index`);
          problems++;
        }
      });
    }
  }
  if (missing.length) {
    problems += missing.length;
    console.log(`${s.id}: missing ${missing.join(', ')}`);
  }
  // Content written for chapters or units that aren't in the syllabus (typos in ids).
  const known = new Set(s.units.flatMap((u) => u.chapters.map((c) => c.id)));
  for (const id of Object.keys(CONTENT[s.id]?.chapters ?? {})) {
    if (!known.has(id)) {
      console.log(`${s.id}: content for unknown chapter ${id}`);
      problems++;
    }
  }
  for (const id of Object.keys(MORE_CONTENT[s.id] ?? {})) {
    if (!known.has(id)) {
      console.log(`${s.id}: extra content for unknown chapter ${id}`);
      problems++;
    }
  }
  for (const id of Object.keys(CONTENT[s.id]?.units ?? {})) {
    if (!s.units.some((u) => u.id === id)) {
      console.log(`${s.id}: overview for unknown unit ${id}`);
      problems++;
    }
  }
}
if (noMore.length) console.log(`${noMore.length} chapters have no second lesson yet`);
console.log(`${totals.steps} lesson steps, ${totals.cards} flashcards, ${totals.quiz} quiz questions`);
console.log(`${chapters} chapters checked, ${problems} problems`);
process.exit(problems ? 1 : 0);
