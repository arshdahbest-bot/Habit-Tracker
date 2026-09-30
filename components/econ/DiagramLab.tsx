import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useApp } from '../../context/AppContext';
import { Button, Card, Muted } from '../UI';
import EconGraph, { GraphSpec } from './EconGraph';
import { curve, D_A, D_M, intersect, S_A, S_M } from './diagrams';

const BASE = intersect(D_A, D_M, S_A, S_M);

/** Interactive supply & demand: shift the curves and watch the equilibrium move. */
export default function DiagramLab() {
  const { colors } = useApp();
  const [dShift, setD] = useState(0);
  const [sShift, setS] = useState(0);

  const dA = D_A + dShift;
  const sA = S_A - sShift; // supply "increase" = shift right = lower intercept
  const e = intersect(dA, D_M, sA, S_M);

  const lines = [];
  if (dShift !== 0) lines.push(curve(D_A, D_M, colors.primary, 'D₁', { faded: true }));
  if (sShift !== 0) lines.push(curve(S_A, S_M, colors.accent, 'S₁', { faded: true }));
  lines.push(curve(dA, D_M, colors.primary, dShift !== 0 ? 'D₂' : 'D'));
  lines.push(curve(sA, S_M, colors.accent, sShift !== 0 ? 'S₂' : 'S'));

  const spec: GraphSpec = {
    lines,
    guides: [
      ...(dShift !== 0 || sShift !== 0 ? [{ at: BASE, pLabel: 'P₁', qLabel: 'Q₁' }] : []),
      { at: e, pLabel: dShift !== 0 || sShift !== 0 ? 'P₂' : 'Pe', qLabel: dShift !== 0 || sShift !== 0 ? 'Q₂' : 'Qe' },
    ],
  };

  const dp = e[1] - BASE[1];
  const dq = e[0] - BASE[0];
  const dir = (v: number) => (Math.abs(v) < 0.01 ? 'unchanged' : v > 0 ? 'rises ↑' : 'falls ↓');

  const clamp = (v: number) => Math.max(-2, Math.min(2, v));

  return (
    <Card>
      <Text style={[styles.title, { color: colors.text }]}>📈 Diagram Lab</Text>
      <Muted style={{ marginBottom: 6 }}>Shift the curves and see what happens to equilibrium.</Muted>
      <EconGraph spec={spec} />
      <View style={[styles.result, { backgroundColor: colors.cardAlt }]}>
        <Text style={{ color: colors.text, fontWeight: '700' }}>
          Price {dir(dp)} · Quantity {dir(dq)}
        </Text>
        <Muted>
          P = {e[1].toFixed(1)} · Q = {e[0].toFixed(1)}
        </Muted>
      </View>
      <Text style={[styles.label, { color: colors.text }]}>Demand</Text>
      <View style={styles.row}>
        <Button title="◀ Decrease" variant="secondary" onPress={() => setD((v) => clamp(v - 1))} style={styles.btn} disabled={dShift <= -2} />
        <Button title="Increase ▶" variant="secondary" onPress={() => setD((v) => clamp(v + 1))} style={styles.btn} disabled={dShift >= 2} />
      </View>
      <Text style={[styles.label, { color: colors.text }]}>Supply</Text>
      <View style={styles.row}>
        <Button title="◀ Decrease" variant="secondary" onPress={() => setS((v) => clamp(v - 1))} style={styles.btn} disabled={sShift <= -2} />
        <Button title="Increase ▶" variant="secondary" onPress={() => setS((v) => clamp(v + 1))} style={styles.btn} disabled={sShift >= 2} />
      </View>
      <Button
        title="Reset"
        onPress={() => {
          setD(0);
          setS(0);
        }}
        style={{ marginTop: 10 }}
        disabled={dShift === 0 && sShift === 0}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '800' },
  result: { borderRadius: 10, padding: 10, marginVertical: 8, alignItems: 'center' },
  label: { fontWeight: '700', marginTop: 6, marginBottom: 4 },
  row: { flexDirection: 'row', gap: 8 },
  btn: { flex: 1, paddingVertical: 10 },
});
