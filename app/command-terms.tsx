import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Badge, Body, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { COMMAND_TERMS } from '../data/commandTerms';

const LEVELS = {
  1: { name: 'AO1 · Knowledge', color: '#0EA5E9' },
  2: { name: 'AO2 · Application', color: '#F59E0B' },
  3: { name: 'AO3 · Evaluation', color: '#DC2626' },
} as const;

export default function CommandTermsScreen() {
  const { colors } = useApp();
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<1 | 2 | 3 | null>(null);
  const q = query.trim().toLowerCase();
  const terms = COMMAND_TERMS.filter(
    (t) => (!level || t.level === level) && (!q || `${t.term} ${t.meaning}`.toLowerCase().includes(q)),
  );

  return (
    <Screen>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <Title subtitle="The first word of every IB exam question tells you what the examiner wants.">Command terms 🎯</Title>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="🔍 Search, e.g. evaluate"
        placeholderTextColor={colors.textMuted}
        style={[styles.search, { color: colors.text, borderColor: colors.border, backgroundColor: colors.card }]}
      />
      <View style={styles.filters}>
        {([null, 1, 2, 3] as const).map((l) => {
          const active = level === l;
          const color = l ? LEVELS[l].color : colors.primary;
          return (
            <Pressable
              key={String(l)}
              onPress={() => setLevel(l)}
              style={[styles.filter, { backgroundColor: active ? color : colors.card, borderColor: active ? color : colors.border }]}
            >
              <Text style={{ color: active ? '#fff' : colors.text, fontWeight: '700', fontSize: 12 }}>{l ? LEVELS[l].name : 'All'}</Text>
            </Pressable>
          );
        })}
      </View>

      {terms.map((t) => (
        <Card key={t.term}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Body style={{ fontWeight: '900', fontSize: 18 }}>{t.term}</Body>
            <Badge text={LEVELS[t.level].name.split(' ')[0]} color={LEVELS[t.level].color} />
          </View>
          <Body style={{ marginTop: 4 }}>{t.meaning}</Body>
          <Muted style={{ marginTop: 6 }}>💡 {t.tip}</Muted>
        </Card>
      ))}
      {terms.length === 0 && <Muted>No command terms match.</Muted>}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, fontSize: 16, minHeight: 48, marginBottom: 10 },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 14 },
  filter: { paddingVertical: 7, paddingHorizontal: 10, borderRadius: 16, borderWidth: 1 },
});
