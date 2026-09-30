import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DiagramLab from '../components/econ/DiagramLab';
import PedCalculator from '../components/econ/PedCalculator';
import { Badge, Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { chapterContent, findChapter, getSubject, lesson2Key, lessonKey } from '../data/subjects';
import { chapterStudied } from '../services/chapters';
import { useMySubjects } from '../services/mySubjects';
import { notePreview, useNotes } from '../services/notes';
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
  const { notes } = useNotes();

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
  const chapterNotes = notes.filter((n) => n.subjectId === subject.id && n.chapterId === chapter.id);

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
          [
            { part: '1', icon: '📘', name: 'Lesson 1 · Core ideas', steps: content.lesson, key: lessonKey(subject.id, chapter.id), diagrams: !!content.diagrams },
            ...(content.lesson2
              ? [{ part: '2', icon: '📗', name: 'Lesson 2 · Deeper dive & exam skills', steps: content.lesson2, key: lesson2Key(subject.id, chapter.id), diagrams: false }]
              : []),
          ].map((l) => {
            const done = !!progress?.lessonsDone[l.key];
            return (
              <Pressable
                key={l.part}
                onPress={() => router.push({ pathname: '/lesson', params: { subject: subject.id, chapter: chapter.id, part: l.part } })}
                style={[styles.item, { borderColor: colors.border }]}
              >
                <Text style={{ fontSize: 20 }}>{l.icon}</Text>
                <View style={{ flex: 1 }}>
                  <Body style={{ fontWeight: '700' }}>{l.name}</Body>
                  <Muted>
                    {l.steps.length} steps · read aloud{l.diagrams ? ' · 📈 diagrams' : ''}
                  </Muted>
                </View>
                <Text style={{ color: done ? colors.success : colors.textMuted, fontSize: 18 }}>{done ? '✓' : '▶'}</Text>
              </Pressable>
            );
          })
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

      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Body style={{ fontWeight: '800', flex: 1 }}>🗒️ My notes</Body>
          <Pressable
            onPress={() => router.push({ pathname: '/note', params: { subject: subject.id, chapter: chapter.id } })}
            hitSlop={8}
          >
            <Text style={{ color: colors.primary, fontWeight: '700' }}>＋ Add note</Text>
          </Pressable>
        </View>
        {chapterNotes.length === 0 ? (
          <Muted>Write down key terms, examples and anything you want to remember from this chapter.</Muted>
        ) : (
          chapterNotes.map((n) => (
            <Pressable
              key={n.id}
              onPress={() => router.push({ pathname: '/note', params: { id: n.id } })}
              style={[styles.item, { borderColor: colors.border }]}
            >
              <Text style={{ fontSize: 16 }}>{n.pinned ? '📌' : '📝'}</Text>
              <View style={{ flex: 1 }}>
                <Body style={{ fontWeight: '700' }} >{notePreview(n)}</Body>
                {!!n.body.trim() && (
                  <Muted style={{ marginTop: 2 }}>{n.body.trim().replace(/\s+/g, ' ').slice(0, 90)}</Muted>
                )}
              </View>
              <Text style={{ color: colors.textMuted, fontSize: 18 }}>›</Text>
            </Pressable>
          ))
        )}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderTopWidth: StyleSheet.hairlineWidth },
  row: { flexDirection: 'row', gap: 8 },
});
