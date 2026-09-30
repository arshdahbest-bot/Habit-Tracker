import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { SUBJECTS } from '../data/subjects';

type Choice = 'off' | 'SL' | 'HL' | 'core';

export default function MySubjectsScreen() {
  const { colors, profile, updateProfile } = useApp();
  const picks = profile.subjects;

  function set(id: string, choice: Choice) {
    const next = { ...picks };
    if (choice === 'off') delete next[id];
    else next[id] = choice;
    updateProfile({ subjects: next });
  }

  const ids = Object.keys(picks).filter((id) => picks[id] !== 'core');
  const hl = ids.filter((id) => picks[id] === 'HL').length;
  const sl = ids.length - hl;
  const hasTok = picks.tok === 'core';

  const tips: string[] = [];
  if (ids.length > 0 && ids.length !== 6) tips.push(`Most IB students take 6 subjects — you have ${ids.length}.`);
  if (ids.length > 0 && (hl < 3 || hl > 4)) tips.push(`The Diploma needs 3 or 4 subjects at HL — you have ${hl}.`);
  if (ids.length > 0 && !hasTok) tips.push('Don’t forget TOK — it’s part of the DP core.');

  // Group subjects under their IB group heading, keeping the order from data/subjects.ts.
  const groups: { name: string; ids: string[] }[] = [];
  for (const s of SUBJECTS) {
    const g = groups.find((x) => x.name === s.group);
    if (g) g.ids.push(s.id);
    else groups.push({ name: s.group, ids: [s.id] });
  }

  return (
    <Screen>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <Title subtitle="Choose your subjects and levels. SL hides HL-only chapters.">My IB subjects</Title>

      <Card style={{ backgroundColor: colors.cardAlt }}>
        <Body style={{ fontWeight: '800' }}>
          {ids.length} subjects · {hl} HL · {sl} SL{hasTok ? ' · TOK' : ''}
        </Body>
        {tips.length === 0 ? (
          <Muted style={{ marginTop: 4 }}>
            {ids.length === 0 ? 'Pick at least one subject to personalise the app.' : 'Looks like a complete Diploma programme 🎉'}
          </Muted>
        ) : (
          tips.map((t) => (
            <Muted key={t} style={{ marginTop: 4 }}>
              • {t}
            </Muted>
          ))
        )}
      </Card>

      {groups.map((g) => (
        <View key={g.name} style={{ marginBottom: 8 }}>
          <Text style={[styles.group, { color: colors.textMuted }]}>{g.name}</Text>
          {g.ids.map((id) => {
            const s = SUBJECTS.find((x) => x.id === id)!;
            const current: Choice = (picks[id] as Choice) ?? 'off';
            const options: Choice[] = s.levels === 'core' ? ['off', 'core'] : ['off', 'SL', 'HL'];
            return (
              <View key={id} style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <Text style={{ fontSize: 22 }}>{s.emoji}</Text>
                <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>
                  {s.name}
                </Text>
                <View style={[styles.segment, { backgroundColor: colors.cardAlt }]}>
                  {options.map((o) => {
                    const active = current === o;
                    return (
                      <Pressable
                        key={o}
                        onPress={() => set(id, o)}
                        style={[styles.segItem, active && { backgroundColor: o === 'off' ? colors.border : s.color }]}
                        accessibilityLabel={`${s.name}: ${o === 'off' ? 'not taking' : o === 'core' ? 'taking' : o}`}
                      >
                        <Text style={{ color: active && o !== 'off' ? '#fff' : colors.text, fontWeight: '700', fontSize: 12 }}>
                          {o === 'off' ? '–' : o === 'core' ? 'On' : o}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      ))}

      <Button title="Done" onPress={() => router.back()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  group: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 8, marginBottom: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, borderRadius: 12, borderWidth: 1, marginBottom: 8 },
  name: { flex: 1, fontSize: 15, fontWeight: '700' },
  segment: { flexDirection: 'row', borderRadius: 10, padding: 2 },
  segItem: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, minWidth: 34, alignItems: 'center' },
});
