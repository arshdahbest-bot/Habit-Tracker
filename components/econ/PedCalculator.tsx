import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useApp } from '../../context/AppContext';
import { Card, Muted } from '../UI';

/** Enter two prices and quantities to calculate PED and see what happens to total revenue. */
export default function PedCalculator() {
  const { colors } = useApp();
  const [v, setV] = useState({ p1: '4', p2: '5', q1: '200', q2: '120' });
  const n = (s: string) => Number(s.replace(',', '.'));
  const p1 = n(v.p1);
  const p2 = n(v.p2);
  const q1 = n(v.q1);
  const q2 = n(v.q2);
  const valid = [p1, p2, q1, q2].every((x) => Number.isFinite(x) && x >= 0) && p1 > 0 && q1 > 0 && p1 !== p2;

  let result: { ped: number; dp: number; dq: number; label: string; tr1: number; tr2: number } | null = null;
  if (valid) {
    const dp = (p2 - p1) / p1;
    const dq = (q2 - q1) / q1;
    const ped = dq / dp;
    const abs = Math.abs(ped);
    const label =
      abs === 0 ? 'Perfectly inelastic' : Math.abs(abs - 1) < 0.005 ? 'Unit elastic' : abs > 1 ? 'Price elastic' : 'Price inelastic';
    result = { ped, dp, dq, label, tr1: p1 * q1, tr2: p2 * q2 };
  }

  const field = (key: keyof typeof v, label: string) => (
    <View style={{ flex: 1 }}>
      <Muted style={{ marginBottom: 4 }}>{label}</Muted>
      <TextInput
        value={v[key]}
        onChangeText={(t) => setV({ ...v, [key]: t })}
        keyboardType="decimal-pad"
        style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.cardAlt }]}
        accessibilityLabel={label}
      />
    </View>
  );

  const pct = (x: number) => `${x > 0 ? '+' : x < 0 ? '−' : ''}${Math.abs(x * 100).toFixed(1)}%`;
  const money = (x: number) => x.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <Card>
      <Text style={[styles.title, { color: colors.text }]}>🧮 PED calculator</Text>
      <Muted style={{ marginBottom: 8 }}>PED = %Δ quantity demanded ÷ %Δ price</Muted>
      <View style={styles.row}>
        {field('p1', 'Old price P₁')}
        {field('p2', 'New price P₂')}
      </View>
      <View style={styles.row}>
        {field('q1', 'Old quantity Q₁')}
        {field('q2', 'New quantity Q₂')}
      </View>
      {result ? (
        <View style={[styles.result, { backgroundColor: colors.cardAlt }]}>
          <Text style={{ color: colors.text }}>
            %ΔQd = {pct(result.dq)} · %ΔP = {pct(result.dp)}
          </Text>
          <Text style={{ color: colors.text, fontSize: 22, fontWeight: '900', marginVertical: 4 }}>
            PED = {result.ped.toFixed(2).replace('-', '−')}
          </Text>
          <Text style={{ color: colors.text, fontWeight: '700' }}>{result.label}</Text>
          <Muted style={{ marginTop: 4, textAlign: 'center' }}>
            Total revenue: {money(result.tr1)} → {money(result.tr2)} (
            {result.tr2 > result.tr1 ? 'rises' : result.tr2 < result.tr1 ? 'falls' : 'unchanged'})
          </Muted>
          {result.ped > 0 && <Muted style={{ marginTop: 4 }}>A positive PED is unusual — check your numbers.</Muted>}
        </View>
      ) : (
        <Muted style={{ marginTop: 8 }}>Enter positive numbers, with different old and new prices.</Muted>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '800' },
  row: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  input: { borderWidth: 1, borderRadius: 10, padding: 10, fontSize: 16 },
  result: { borderRadius: 10, padding: 12, alignItems: 'center' },
});
