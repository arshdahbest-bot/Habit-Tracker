import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DiagramLab from '../components/econ/DiagramLab';
import PedCalculator from '../components/econ/PedCalculator';
import { Badge, Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { findChapter, getSubject, lessonsForChapter } from '../data/subjects';
import { chapterStudied } from '../services/chapters';
import { useMySubjects } from '../services/mySubjects';
import { getProgress, ProgressData, setChapterStudied } from '../services/progress';

// Interactive tools shown on specific chapters.
const TOOLS: Record<string, Record<string, React.ComponentType>> = {
  econ: { '2.1': DiagramLab, '2.2': DiagramLab, '2.3': DiagramLab, '2.5': PedCalculator },
};

export default function ChapterScreen() {
  const { colors } = useApp();
  const params = useLocalSearchParams<{ subject?: string; chapter?: string }>();
  const subject = getSubject(params.subject);
  const found = findChapter(subject, params.chapter);
  const { levelOf } = useMySubjects();
  const level = levelOf(subject.id);
  const [progress, setProgress] = useState<ProgressData | null>(null);

  useFocusEffect(
    useCallback(() => {
      getProgress().then(setProgress);
    }, []),
  );

  if (!found) {
    return (
      <Screen>
        <Muted>Chapter not found.</Muted>
      </Screen>
    );
  }
  const { unit, chapter } = found;
  const builtIn = lessonsForChapter(subject, chapter.id);
  const Tool = TOOLS[subject.id]?.[chapter.id];
  const studied = chapterStudied(progress, subject, chapter.id);

  async function toggleStudied() {
    await setChapterStudied(subject.id, chapter.id, !studied);
    setProgress(await getProgress());
  }

  return (
    <Screen>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <View style={{ flexDirection: 'row', gap: 6, marginBottom: 6 }}>
        <Badge text={chapter.id} color={subject.color} />
        {chapter.hl && <Badge text="HL only" color={colors.danger} />}
        {subject.levels !== 'core' && level && <Badge text={`You: ${level}`} color={colors.textMuted} />}
      </View>
      <Title subtitle={`${subject.emoji} ${subject.name} · ${unit.title}`}>{chapter.title}</Title>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>Learn</Body>
        {builtIn.map((l) => (
          <Pressable
            key={l.id}
            onPress={() => router.push({ pathname: '/lesson', params: { subject: subject.id, lesson: l.id, chapter: chapter.id } })}
            style={[styles.item, { borderColor: colors.border }]}
          >
            <Text style={{ fontSize: 20 }}>📘</Text>
            <View style={{ flex: 1 }}>
              <Body style={{ fontWeight: '700' }}>{l.title}</Body>
              <Muted>
                Built-in lesson · {l.steps.length} steps{l.diagrams ? ' · 📈 diagrams' : ''}
              </Muted>
            </View>
            <Text style={{ color: progress?.lessonsDone[l.id] ? colors.success : colors.textMuted, fontSize: 18 }}>
              {progress?.lessonsDone[l.id] ? '✓' : '▶'}
            </Text>
          </Pressable>
        ))}
        {builtIn.length === 0 && (
          <Muted>
            There’s no built-in lesson for this chapter yet. Study it from your textbook or class notes, then tick it off
            below.
          </Muted>
        )}
        <Button
          title={studied ? '✓ Studied — tap to undo' : 'Mark as studied'}
          variant={studied ? 'secondary' : 'primary'}
          onPress={toggleStudied}
          style={{ marginTop: 12 }}
        />
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>Practise {subject.short ?? subject.name}</Body>
        <View style={styles.row}>
          <Button
            title="🃏 Flashcards"
            variant="secondary"
            onPress={() => router.push({ pathname: '/flashcards', params: { subject: subject.id } })}
            style={{ flex: 1 }}
          />
          <Button
            title="📝 Quiz"
            onPress={() => router.push({ pathname: '/quiz', params: { subject: subject.id } })}
            style={{ flex: 1 }}
          />
        </View>
      </Card>

      {Tool && <Tool />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderTopWidth: StyleSheet.hairlineWidth },
  row: { flexDirection: 'row', gap: 8 },
});
