// IB exam sessions. Exams run from roughly the last week of April (May session) or the
// last week of October (November session); the start dates here are approximate.

export type ExamSession = { id: string; label: string; start: Date };

export function sessionFromId(id: string | null): ExamSession | null {
  const m = id?.match(/^([MN])(\d\d)$/);
  if (!m) return null;
  const year = 2000 + Number(m[2]);
  return m[1] === 'M'
    ? { id: id!, label: `May ${year}`, start: new Date(year, 3, 25) }
    : { id: id!, label: `November ${year}`, start: new Date(year, 9, 23) };
}

/** The next few exam sessions that haven't started yet. */
export function upcomingSessions(count = 4, now = new Date()): ExamSession[] {
  const out: ExamSession[] = [];
  for (let year = now.getFullYear() % 100; out.length < count; year++) {
    for (const s of ['M', 'N']) {
      const session = sessionFromId(`${s}${String(year).padStart(2, '0')}`)!;
      if (session.start > now && out.length < count) out.push(session);
    }
  }
  return out;
}

export function daysUntil(date: Date, now = new Date()) {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.round((date.getTime() - start.getTime()) / 86_400_000));
}
