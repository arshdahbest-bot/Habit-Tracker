import { CONTENT, SUBJECTS } from '../data/subjects';
const id = process.argv[2];
const s = SUBJECTS.find((x) => x.id === id)!;
for (const u of s.units) for (const c of u.chapters) {
  const k = CONTENT[id].chapters[c.id];
  console.log(`## ${c.id} ${c.title}${c.hl ? ' (HL)' : ''}`);
  console.log('L: ' + k.lesson.map((x) => x.slice(0, 70)).join(' | '));
  console.log('C: ' + k.cards.map((x) => x.front).join(' | '));
  console.log('Q: ' + k.quiz.map((x) => x.question.slice(0, 60)).join(' | '));
}
