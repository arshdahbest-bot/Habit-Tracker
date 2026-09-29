import React, { useState } from 'react';
import { LayoutChangeEvent, Platform, Text, View } from 'react-native';
import Svg, { Circle, G, Line, Polygon, Text as SvgText } from 'react-native-svg';
import { useApp } from '../../context/AppContext';

// A small economics-diagram renderer. Every diagram lives in a 0–10 × 0–10 space
// (quantity along x, price along y) so presets can be written in plain numbers.

export type Pt = [number, number]; // [quantity, price]

export type GraphLine = { from: Pt; to: Pt; label?: string; color: string; dashed?: boolean; faded?: boolean };
export type Guide = { at: Pt; pLabel?: string; qLabel?: string; qAnchor?: 'start' | 'middle' | 'end' };
export type Area = { points: Pt[]; color: string };
export type Arrow = { from: Pt; to: Pt };
export type Note = { at: Pt; text: string; bold?: boolean };

export type GraphSpec = {
  title?: string;
  lines: GraphLine[];
  guides?: Guide[];
  areas?: Area[];
  arrows?: Arrow[];
  notes?: Note[];
  xLabel?: string;
  yLabel?: string;
};

const PAD = { l: 34, r: 30, t: 16, b: 30 };
const FONT = Platform.OS === 'web' ? 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' : undefined;

export default function EconGraph({ spec, height = 240 }: { spec: GraphSpec; height?: number }) {
  const { colors } = useApp();
  const [width, setWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setWidth(Math.round(e.nativeEvent.layout.width));

  const w = Math.max(width - PAD.l - PAD.r, 10);
  const h = height - PAD.t - PAD.b;
  const x = (q: number) => PAD.l + (q / 10) * w;
  const y = (p: number) => PAD.t + (1 - p / 10) * h;
  const pts = (list: Pt[]) => list.map(([q, p]) => `${x(q)},${y(p)}`).join(' ');

  const ink = colors.text;
  const muted = colors.textMuted;

  return (
    <View onLayout={onLayout} style={{ width: '100%' }}>
      {spec.title ? (
        <Text style={{ color: ink, fontSize: 13, fontWeight: '700', textAlign: 'center', marginBottom: 2 }}>{spec.title}</Text>
      ) : null}
      {width > 0 && (
        <Svg width={width} height={height}>
          {/* shaded areas first so lines sit on top */}
          {spec.areas?.map((a, i) => (
            <Polygon key={`a${i}`} points={pts(a.points)} fill={a.color} fillOpacity={0.25} />
          ))}

          {/* axes */}
          <Line x1={x(0)} y1={y(0)} x2={x(0)} y2={y(10)} stroke={muted} strokeWidth={1.5} />
          <Line x1={x(0)} y1={y(0)} x2={x(10)} y2={y(0)} stroke={muted} strokeWidth={1.5} />
          <SvgText fontFamily={FONT} x={x(0) - 6} y={y(10) + 4} fill={muted} fontSize={12} fontWeight="700" textAnchor="end">
            {spec.yLabel ?? 'P'}
          </SvgText>
          <SvgText fontFamily={FONT} x={x(10)} y={y(0) + 22} fill={muted} fontSize={12} fontWeight="700" textAnchor="end">
            {spec.xLabel ?? 'Q'}
          </SvgText>

          {/* dashed guides from a point to both axes */}
          {spec.guides?.map((g, i) => (
            <G key={`g${i}`}>
              <Line x1={x(0)} y1={y(g.at[1])} x2={x(g.at[0])} y2={y(g.at[1])} stroke={muted} strokeWidth={1} strokeDasharray="4 4" />
              <Line x1={x(g.at[0])} y1={y(g.at[1])} x2={x(g.at[0])} y2={y(0)} stroke={muted} strokeWidth={1} strokeDasharray="4 4" />
              {g.pLabel ? (
                <SvgText fontFamily={FONT} x={x(0) - 5} y={y(g.at[1]) + 4} fill={ink} fontSize={11} textAnchor="end">
                  {g.pLabel}
                </SvgText>
              ) : null}
              {g.qLabel ? (
                <SvgText
                  fontFamily={FONT}
                  x={x(g.at[0]) + (g.qAnchor === 'start' ? 2 : g.qAnchor === 'end' ? -2 : 0)}
                  y={y(0) + 14}
                  fill={ink}
                  fontSize={11}
                  textAnchor={g.qAnchor ?? 'middle'}
                >
                  {g.qLabel}
                </SvgText>
              ) : null}
            </G>
          ))}

          {/* curves, labelled at their end in text ink (not the line colour) */}
          {spec.lines.map((l, i) => (
            <G key={`l${i}`} opacity={l.faded ? 0.35 : 1}>
              <Line
                x1={x(l.from[0])}
                y1={y(l.from[1])}
                x2={x(l.to[0])}
                y2={y(l.to[1])}
                stroke={l.color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray={l.dashed ? '6 4' : undefined}
              />
              {l.label ? (
                // Near the right edge, tuck the label above the line end so it isn't cut off.
                l.to[0] > 8.5 ? (
                  <SvgText fontFamily={FONT} x={x(l.to[0])} y={y(l.to[1]) - 8} fill={ink} fontSize={12} fontWeight="700" textAnchor="end">
                    {l.label}
                  </SvgText>
                ) : (
                  <SvgText fontFamily={FONT} x={x(l.to[0]) + 4} y={y(l.to[1]) + 4} fill={ink} fontSize={12} fontWeight="700">
                    {l.label}
                  </SvgText>
                )
              ) : null}
            </G>
          ))}

          {/* points where guides meet the curves */}
          {spec.guides?.map((g, i) => (
            <Circle key={`c${i}`} cx={x(g.at[0])} cy={y(g.at[1])} r={4.5} fill={ink} stroke={colors.card} strokeWidth={2} />
          ))}

          {spec.arrows?.map((a, i) => {
            const x1 = x(a.from[0]);
            const y1 = y(a.from[1]);
            const x2 = x(a.to[0]);
            const y2 = y(a.to[1]);
            const ang = Math.atan2(y2 - y1, x2 - x1);
            const s = 8;
            const head = [
              [x2, y2],
              [x2 - s * Math.cos(ang - 0.45), y2 - s * Math.sin(ang - 0.45)],
              [x2 - s * Math.cos(ang + 0.45), y2 - s * Math.sin(ang + 0.45)],
            ]
              .map((p) => p.join(','))
              .join(' ');
            return (
              <G key={`ar${i}`}>
                <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth={1.5} />
                <Polygon points={head} fill={ink} />
              </G>
            );
          })}

          {spec.notes?.map((n, i) => (
            <SvgText
              fontFamily={FONT}
              key={`n${i}`}
              x={x(n.at[0])}
              y={y(n.at[1])}
              fill={ink}
              fontSize={11}
              fontWeight={n.bold ? '700' : '400'}
              textAnchor="middle"
            >
              {n.text}
            </SvgText>
          ))}
        </Svg>
      )}
    </View>
  );
}

