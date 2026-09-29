// Rough IB grade (1–7) from a percentage. Real grade boundaries change every exam session
// and differ by subject and level, so this is only a guide for revision.
export function estimateGrade(pct: number) {
  if (pct >= 80) return 7;
  if (pct >= 68) return 6;
  if (pct >= 56) return 5;
  if (pct >= 44) return 4;
  if (pct >= 32) return 3;
  if (pct >= 18) return 2;
  return 1;
}
