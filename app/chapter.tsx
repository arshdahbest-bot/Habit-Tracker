import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DiagramLab from '../components/econ/DiagramLab';
import PedCalculator from '../components/econ/PedCalculator';
import { Badge, Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { findChapter, getSubject, lessonsForChapter } from '../data/subjects';
import { aiLessonId } from '../services/generate';
import { useMySubjects } from '../services/mySubjects';
import { getProgress, ProgressData } from '../services/progress';

// Interactive tools shown on specific chapters.
const TOOLS: Record<string, Record<string, React.ComponentType>> = {
  econ: { '2.1': DiagramLab, '2.2': DiagramLab, '2.3': DiagramLab, '2.5': PedCalculator },
};

export default function ChapterScreen() {
  const { colors, profile } = useApp();
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
  const tutor = profile.tutorName || 'your tutor';
  const quizzes = progress?.quizzes.filter((q) => q.subjectId === subject.id && q.chapterId === chapter.id) ?? [];
  const bestPct = quizzes.length ? Math.round(Math.max(...quizzes.map((q) => q.score / q.total)) * 100) : null;
  const aiDone = !!progress?.lessonsDone[aiLessonId(subject.id, chapter.id)];

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
        <Pressable
          onPress={() => router.push({ pathname: '/lesson', params: { subject: subject.id, chapter: chapter.id } })}
          style={[styles.item, { borderColor: colors.border }]}
        >
          <Text style={{ fontSize: 20 }}>✨</Text>
          <View style={{ flex: 1 }}>
            <Body style={{ fontWeight: '700' }}>Full lesson with {tutor}</Body>
            <Muted>AI-written for {subject.levels === 'core' ? 'TOK' : level ?? 'your level'} · read aloud</Muted>
          </View>
          <Text style={{ color: aiDone ? colors.success : colors.textMuted, fontSize: 18 }}>{aiDone ? '✓' : '▶'}</Text>
        </Pressable>
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>Practise</Body>
        <View style={styles.row}>
          <Button
            title="🃏 Flashcards"
            variant="secondary"
            onPress={() => router.push({ pathname: '/practice', params: { mode: 'cards', subject: subject.id, chapter: chapter.id } })}
            style={{ flex: 1 }}
          />
          <Button
            title="📝 Quiz"
            onPress={() => router.push({ pathname: '/practice', params: { mode: 'quiz', subject: subject.id, chapter: chapter.id } })}
            style={{ flex: 1 }}
          />
        </View>
        {bestPct !== null && <Muted style={{ marginTop: 8 }}>Best quiz score on this chapter: {bestPct}%</Muted>}
        <Button
          title={`💬 Ask ${tutor} about this chapter`}
          variant="secondary"
          onPress={() =>
            router.push({
              pathname: '/ask',
              params: { subject: subject.id, prompt: `Can you explain ${chapter.id} ${chapter.title} simply, with an example?` },
            })
          }
          style={{ marginTop: 10 }}
        />
      </Card>

      {Tool && <Tool />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderTopWidth: StyleSheet.hairlineWidth },
  row: { flexDirection: 'row', gap: 8 },
});
