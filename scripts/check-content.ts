// Checks that every syllabus chapter and unit has content, and that quiz answers are valid.
// Run with: npx tsx scripts/check-content.ts
import { chapterContent, CONTENT, SUBJECTS, unitOverview } from '../data/subjects';

let problems = 0;
let chapters = 0;
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
      if (content.cards.length < 3) console.log(`${s.id} ${c.id}: only ${content.cards.length} flashcards`);
      if (content.quiz.length < 3) console.log(`${s.id} ${c.id}: only ${content.quiz.length} quiz questions`);
      content.quiz.forEach((q, i) => {
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
  for (const id of Object.keys(CONTENT[s.id]?.units ?? {})) {
    if (!s.units.some((u) => u.id === id)) {
      console.log(`${s.id}: overview for unknown unit ${id}`);
      problems++;
    }
  }
}
console.log(`${chapters} chapters checked, ${problems} problems`);
process.exit(problems ? 1 : 0);
