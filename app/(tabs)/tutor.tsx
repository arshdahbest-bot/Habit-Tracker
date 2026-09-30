import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from '../../components/Avatar';
import { Badge, Body, Card, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { chaptersFor, getSubject, unitOverview } from '../../data/subjects';
import { chapterStudied } from '../../services/chapters';
import { useMySubjects, useSubjectSelection } from '../../services/mySubjects';
import { getProgress, ProgressData } from '../../services/progress';

export default function TutorScreen() {
  const { colors, profile } = useApp();
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useSubjectSelection(params.subject);
  const subject = getSubject(subjectId);
  const { levelOf, chosen } = useMySubjects();
  const level = levelOf(subject.id);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useFocusEffect(
    useCallback(() => {
      getProgress().then(setProgress);
    }, []),
  );

  const units = chaptersFor(subject, level);
  const all = units.flatMap((u) => u.chapters);
  const hiddenHl = subject.units.flatMap((u) => u.chapters).length - all.length;
  const studied = all.filter((c) => chapterStudied(progress, subject, c.id)).length;
  const isOpen = (unitId: string, i: number) => open[`${subject.id}:${unitId}`] ?? i === 0;

  return (
    <Screen>
      <Title subtitle="Pick a chapter from the IB syllabus — your avatar teaches it.">Learn with {profile.tutorName || 'your tutor'}</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />

      <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar size={64} />
        <View style={{ flex: 1 }}>
          <Body style={{ fontWeight: '800' }}>
            {subject.emoji} {subject.name}
          </Body>
          <Muted>
            {subject.levels === 'core' ? 'DP core' : chosen && level ? `${level} · ` : ''}
            {studied}/{all.length} chapters studied
            {hiddenHl > 0 ? ` · ${hiddenHl} HL-only hidden` : ''}
          </Muted>
          <Pressable onPress={() => router.push('/subjects')} hitSlop={8}>
            <Text style={{ color: colors.primary, fontWeight: '700', marginTop: 4 }}>
              {chosen ? 'Change subjects or level' : 'Choose your subjects & SL/HL'}
            </Text>
          </Pressable>
        </View>
      </Card>

      {units.map(({ unit, chapters }, i) =>
        chapters.length === 0 ? null : (
          <View key={unit.id} style={[styles.unit, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Pressable
              onPress={() => setOpen((o) => ({ ...o, [`${subject.id}:${unit.id}`]: !isOpen(unit.id, i) }))}
              style={styles.unitHeader}
              accessibilityRole="button"
            >
              <View style={{ flex: 1 }}>
                <Body style={{ fontWeight: '800' }}>{unit.title}</Body>
                <Muted>
                  {chapters.filter((c) => chapterStudied(progress, subject, c.id)).length}/{chapters.length} studied
                </Muted>
              </View>
              <Text style={{ color: colors.textMuted, fontSize: 18 }}>{isOpen(unit.id, i) ? '▾' : '▸'}</Text>
            </Pressable>
            {isOpen(unit.id, i) && unitOverview(subject.id, unit.id) && (
              <Pressable
                onPress={() => router.push({ pathname: '/lesson', params: { subject: subject.id, unit: unit.id } })}
                style={[styles.chapter, { borderTopColor: colors.border }]}
              >
                <Text style={{ color: colors.primary, fontWeight: '700', flex: 1 }}>▶ Unit overview with {profile.tutorName || 'your tutor'}</Text>
              </Pressable>
            )}
            {isOpen(unit.id, i) &&
              chapters.map((c) => {
                const done = chapterStudied(progress, subject, c.id);
                return (
                  <Pressable
                    key={c.id}
                    onPress={() => router.push({ pathname: '/chapter', params: { subject: subject.id, chapter: c.id } })}
                    style={({ pressed }) => [styles.chapter, { borderTopColor: colors.border, opacity: pressed ? 0.7 : 1 }]}
                  >
                    <View style={{ flex: 1 }}>
                      <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                        <Text style={[styles.code, { color: subject.color }]}>{c.id}</Text>
                        {c.hl && <Badge text="HL" color={colors.danger} />}
                      </View>
                      <Text style={{ color: colors.text, fontSize: 15, marginTop: 2 }}>{c.title}</Text>
                    </View>
                    <Text style={{ color: done ? colors.success : colors.textMuted, fontSize: 16 }}>{done ? '✓' : '›'}</Text>
                  </Pressable>
                );
              })}
          </View>
        ),
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  unit: { borderWidth: 1, borderRadius: 14, marginBottom: 10, overflow: 'hidden' },
  unitHeader: { flexDirection: 'row', alignItems: 'center', padding: 14 },
  chapter: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10, paddingHorizontal: 14, borderTopWidth: StyleSheet.hairlineWidth },
  code: { fontWeight: '800', fontSize: 12 },
});
