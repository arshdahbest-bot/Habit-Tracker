import type { Palette } from '../../context/AppContext';
import type { GraphLine, GraphSpec, Pt } from './EconGraph';

// Ready-made IB Economics diagrams. Lessons refer to them by id (see data/subjects.ts).

export type DiagramId =
  | 'demand'
  | 'demand-shift'
  | 'supply'
  | 'equilibrium'
  | 'surplus'
  | 'ped'
  | 'ped-extremes'
  | 'ped-linear'
  | 'revenue'
  | 'externality';

/** A straight line P = a + m·Q, clipped to the visible 0.5–9.5 box. */
export function lineSeg(a: number, m: number): [Pt, Pt] {
  const lo = 0.5;
  const hi = 9.5;
  let q0: number;
  let q1: number;
  if (m < 0) {
    q0 = Math.max(lo, (hi - a) / m);
    q1 = Math.min(hi, (lo - a) / m);
  } else {
    q0 = Math.max(lo, (lo - a) / m);
    q1 = Math.min(hi, (hi - a) / m);
  }
  return [
    [q0, a + m * q0],
    [q1, a + m * q1],
  ];
}

export function intersect(a1: number, m1: number, a2: number, m2: number): Pt {
  const q = (a2 - a1) / (m1 - m2);
  return [q, a1 + m1 * q];
}

const qAt = (a: number, m: number, p: number) => (p - a) / m;

export function curve(a: number, m: number, color: string, label: string, extra?: Partial<GraphLine>): GraphLine {
  const [from, to] = lineSeg(a, m);
  return { from, to, color, label, ...extra };
}

// Base model used everywhere: D: P = 8 − 0.7Q, S: P = 1 + 0.7Q  → Pe = 4.5, Qe = 5
export const D_A = 8;
export const D_M = -0.7;
export const S_A = 1;
export const S_M = 0.7;

export function buildDiagram(id: DiagramId, c: Palette): GraphSpec[] {
  const dCol = c.primary;
  const sCol = c.accent;

  switch (id) {
    case 'demand': {
      const q1 = qAt(D_A, D_M, 6);
      const q2 = qAt(D_A, D_M, 3);
      return [
        {
          title: 'Law of demand: movement along D',
          lines: [curve(D_A, D_M, dCol, 'D')],
          guides: [
            { at: [q1, 6], pLabel: 'P₁', qLabel: 'Q₁' },
            { at: [q2, 3], pLabel: 'P₂', qLabel: 'Q₂' },
          ],
          arrows: [{ from: [q1 + 0.4, 6.1], to: [q2 + 0.2, 3.5] }],
        },
      ];
    }
    case 'demand-shift': {
      const e1 = qAt(D_A, D_M, 4.5);
      const e2 = qAt(D_A + 2, D_M, 4.5);
      return [
        {
          title: 'Income rises → demand shifts right',
          lines: [curve(D_A, D_M, dCol, 'D₁', { faded: true }), curve(D_A + 2, D_M, dCol, 'D₂')],
          arrows: [{ from: [e1 + 0.3, 4.5], to: [e2 - 0.3, 4.5] }],
        },
      ];
    }
    case 'supply': {
      const q1 = qAt(S_A, S_M, 3);
      const q2 = qAt(S_A, S_M, 6);
      return [
        {
          title: 'Law of supply: higher price → more supplied',
          lines: [curve(S_A, S_M, sCol, 'S')],
          guides: [
            { at: [q1, 3], pLabel: 'P₁', qLabel: 'Q₁' },
            { at: [q2, 6], pLabel: 'P₂', qLabel: 'Q₂' },
          ],
          arrows: [{ from: [q1 + 0.4, 3.2], to: [q2 - 0.1, 5.7] }],
        },
      ];
    }
    case 'equilibrium': {
      const e = intersect(D_A, D_M, S_A, S_M);
      return [
        {
          title: 'Market equilibrium',
          lines: [curve(D_A, D_M, dCol, 'D'), curve(S_A, S_M, sCol, 'S')],
          guides: [{ at: e, pLabel: 'Pe', qLabel: 'Qe' }],
        },
      ];
    }
    case 'surplus': {
      const pMin = 6.5;
      const qd = qAt(D_A, D_M, pMin);
      const qs = qAt(S_A, S_M, pMin);
      return [
        {
          title: 'Price above equilibrium → excess supply',
          lines: [
            curve(D_A, D_M, dCol, 'D'),
            curve(S_A, S_M, sCol, 'S'),
            { from: [0, pMin], to: [9.3, pMin], color: c.danger, dashed: true },
          ],
          guides: [
            { at: [qd, pMin], pLabel: 'Pmin', qLabel: 'Qd' },
            { at: [qs, pMin], qLabel: 'Qs' },
          ],
          notes: [{ at: [(qd + qs) / 2, pMin + 0.6], text: 'Excess supply', bold: true }],
        },
      ];
    }
    case 'ped': {
      // Same starting point (P₁ = 4, Q₁ = 6) and the same 37.5% price rise on both curves,
      // so the only difference is how responsive quantity demanded is.
      const p1 = 4;
      const p2 = 5.5;
      const q1 = 6;
      const eM = -0.4;
      const iM = -3;
      const eA = p1 - eM * q1;
      const iA = p1 - iM * q1;
      const qe = qAt(eA, eM, p2);
      const qi = qAt(iA, iM, p2);
      const pct = (v: number) => `${v > 0 ? '+' : '−'}${Math.abs(v * 100).toFixed(1)}%`;
      const dP = (p2 - p1) / p1;
      const ped = (q: number) => ((q - q1) / q1 / dP).toFixed(2).replace('-', '−');
      return [
        {
          title: 'Elastic demand: |PED| > 1',
          lines: [curve(eA, eM, dCol, 'D')],
          guides: [
            { at: [q1, p1], pLabel: 'P₁', qLabel: 'Q₁' },
            { at: [qe, p2], pLabel: 'P₂', qLabel: 'Q₂' },
          ],
          notes: [
            { at: [7.6, 9.2], text: `%ΔP ${pct(dP)}` },
            { at: [7.6, 8.4], text: `%ΔQ ${pct((qe - q1) / q1)}` },
            { at: [7.6, 7.5], text: `PED ≈ ${ped(qe)}`, bold: true },
          ],
        },
        {
          title: 'Inelastic demand: |PED| < 1',
          lines: [curve(iA, iM, dCol, 'D')],
          guides: [
            { at: [q1, p1], pLabel: 'P₁', qLabel: 'Q₁', qAnchor: 'start' },
            { at: [qi, p2], pLabel: 'P₂', qLabel: 'Q₂', qAnchor: 'end' },
          ],
          notes: [
            { at: [7.6, 9.2], text: `%ΔP ${pct(dP)}` },
            { at: [7.6, 8.4], text: `%ΔQ ${pct((qi - q1) / q1)}` },
            { at: [7.6, 7.5], text: `PED ≈ ${ped(qi)}`, bold: true },
          ],
        },
      ];
    }
    case 'ped-extremes': {
      return [
        {
          title: 'Perfectly inelastic: PED = 0',
          lines: [{ from: [5, 9.3], to: [5, 0.7], color: dCol, label: 'D' }],
          notes: [{ at: [7.6, 6], text: 'Same Q at any price' }],
        },
        {
          title: 'Perfectly elastic: PED = ∞',
          lines: [{ from: [0.3, 5], to: [8.8, 5], color: dCol, label: 'D' }],
          notes: [{ at: [5, 6.2], text: 'Any price rise → Qd falls to 0' }],
        },
      ];
    }
    case 'ped-linear': {
      const a = 9;
      const m = -0.9;
      const mid: Pt = [5, 4.5];
      return [
        {
          title: 'PED changes along a straight-line demand curve',
          lines: [curve(a, m, dCol, 'D')],
          guides: [{ at: mid, pLabel: 'P½', qLabel: 'Q½' }],
          notes: [
            { at: [4.1, 7.4], text: '|PED| > 1 (elastic)', bold: true },
            { at: [6.9, 4.9], text: '|PED| = 1' },
            { at: [6.2, 1.0], text: '|PED| < 1 (inelastic)', bold: true },
          ],
        },
      ];
    }
    case 'revenue': {
      const a = 10;
      const m = -1.6;
      const p1 = 3;
      const p2 = 5;
      const q1 = qAt(a, m, p1);
      const q2 = qAt(a, m, p2);
      return [
        {
          title: 'Inelastic good: price ↑ → total revenue ↑',
          lines: [curve(a, m, dCol, 'D')],
          areas: [
            { points: [[0, p1], [q2, p1], [q2, p2], [0, p2]], color: c.success },
            { points: [[q2, 0], [q1, 0], [q1, p1], [q2, p1]], color: c.danger },
          ],
          guides: [
            { at: [q1, p1], pLabel: 'P₁', qLabel: 'Q₁' },
            { at: [q2, p2], pLabel: 'P₂', qLabel: 'Q₂' },
          ],
          notes: [
            { at: [q2 / 2, (p1 + p2) / 2], text: 'Gain', bold: true },
            { at: [q1 + 0.9, p1 / 2], text: '← Loss', bold: true },
          ],
        },
      ];
    }
    case 'externality': {
      const mscA = 3;
      const m = intersect(D_A, D_M, S_A, S_M); // market outcome
      const o = intersect(D_A, D_M, mscA, S_M); // social optimum
      const mscAtQm: Pt = [m[0], mscA + S_M * m[0]];
      return [
        {
          title: 'Negative production externality',
          lines: [
            curve(D_A, D_M, dCol, 'MPB = MSB'),
            curve(S_A, S_M, sCol, 'MPC'),
            curve(mscA, S_M, c.danger, 'MSC'),
          ],
          areas: [{ points: [o, mscAtQm, m], color: c.danger }],
          guides: [
            { at: m, pLabel: 'Pm', qLabel: 'Qm' },
            { at: o, pLabel: 'P*', qLabel: 'Q*' },
          ],
          notes: [{ at: [m[0] + 1.6, m[1] + 1], text: 'Welfare loss', bold: true }],
        },
      ];
    }
  }
}
