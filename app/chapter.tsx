import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DiagramLab from '../components/econ/DiagramLab';
import PedCalculator from '../components/econ/PedCalculator';
import { Badge, Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { chapterContent, findChapter, getSubject } from '../data/subjects';
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
  const content = chapterContent(subject.id, chapter.id);
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
        {content ? (
          <Pressable
            onPress={() => router.push({ pathname: '/lesson', params: { subject: subject.id, chapter: chapter.id } })}
            style={[styles.item, { borderColor: colors.border }]}
          >
            <Text style={{ fontSize: 20 }}>📘</Text>
            <View style={{ flex: 1 }}>
              <Body style={{ fontWeight: '700' }}>Lesson: {chapter.title}</Body>
              <Muted>
                {content.lesson.length} steps · read aloud{content.diagrams ? ' · 📈 diagrams' : ''}
              </Muted>
            </View>
            <Text style={{ color: studied ? colors.success : colors.textMuted, fontSize: 18 }}>{studied ? '✓' : '▶'}</Text>
          </Pressable>
        ) : (
          <Muted>This chapter’s lesson is coming soon. Study it from your textbook, then tick it off below.</Muted>
        )}
        <Button
          title={studied ? '✓ Studied — tap to undo' : 'Mark as studied'}
          variant={studied ? 'secondary' : 'primary'}
          onPress={toggleStudied}
          style={{ marginTop: 12 }}
        />
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>Practise this chapter</Body>
        <View style={styles.row}>
          <Button
            title={`🃏 Flashcards (${content?.cards.length ?? 0})`}
            variant="secondary"
            onPress={() => router.push({ pathname: '/flashcards', params: { subject: subject.id, chapter: chapter.id } })}
            style={{ flex: 1 }}
            disabled={!content?.cards.length}
          />
          <Button
            title={`📝 Quiz (${content?.quiz.length ?? 0})`}
            onPress={() => router.push({ pathname: '/quiz', params: { subject: subject.id, chapter: chapter.id } })}
            style={{ flex: 1 }}
            disabled={!content?.quiz.length}
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
