import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import Diagram from '../components/econ/Diagram';
import { Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { chapterContent, findChapter, getSubject, lesson2Key, lessonKey, unitOverview } from '../data/subjects';
import { getProgress, recordLesson } from '../services/progress';
import { useSpeaker } from '../services/useSpeaker';

/**
 * Plays a lesson step by step with the avatar reading it aloud.
 * ?subject=econ&chapter=2.5  → the chapter's lesson
 * ?subject=econ&unit=2       → the unit overview
 */
export default function LessonScreen() {
  const { colors } = useApp();
  const params = useLocalSearchParams<{ subject?: string; chapter?: string; unit?: string; part?: string }>();
  const part2 = params.part === '2';
  const subject = getSubject(params.subject);
  const found = findChapter(subject, params.chapter);
  const unit = subject.units.find((u) => u.id === params.unit);
  const lesson = useMemo(() => {
    if (found) {
      const c = chapterContent(subject.id, found.chapter.id);
      if (part2) {
        return c?.lesson2
          ? { id: lesson2Key(subject.id, found.chapter.id), title: `Deeper dive: ${found.chapter.title}`, steps: c.lesson2, diagrams: undefined }
          : null;
      }
      return c ? { id: lessonKey(subject.id, found.chapter.id), title: found.chapter.title, steps: c.lesson, diagrams: c.diagrams } : null;
    }
    const overview = unit ? unitOverview(subject.id, unit.id) : null;
    return unit && overview ? { id: `unit:${subject.id}:${unit.id}`, title: `Overview: ${unit.title}`, steps: overview, diagrams: undefined } : null;
  }, [subject.id, found?.chapter.id, unit?.id, part2]); // eslint-disable-line react-hooks/exhaustive-deps
  const [step, setStep] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);
  const { speaking, say, stop } = useSpeaker();

  // Speak each step as it appears.
  useEffect(() => {
    if (lesson && voiceOn) say(lesson.steps[step]);
  }, [lesson, step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reaching the last step counts as completing the lesson.
  useEffect(() => {
    if (!lesson || step !== lesson.steps.length - 1) return;
    getProgress().then((p) => {
      if (!p.lessonsDone[lesson.id]) recordLesson(lesson.id);
    });
  }, [lesson, step]);

  const back = () => {
    stop();
    router.back();
  };

  const header = (
    <View style={styles.headerRow}>
      <Pressable onPress={back}>
        <Text style={{ color: colors.primary, fontWeight: '700' }}>‹ Back</Text>
      </Pressable>
      {found && (
        <Pressable
          onPress={() => router.push({ pathname: '/note', params: { subject: subject.id, chapter: found.chapter.id } })}
          hitSlop={8}
        >
          <Text style={{ color: colors.primary, fontWeight: '700' }}>🗒️ Take a note</Text>
        </Pressable>
      )}
    </View>
  );

  if (!lesson) {
    return (
      <Screen>
        {header}
        <Muted>This lesson isn’t available yet.</Muted>
      </Screen>
    );
  }

  const last = step === lesson.steps.length - 1;

  return (
    <Screen>
      {header}
      <Title subtitle={`${subject.emoji} ${subject.name}${found ? ` · ${found.chapter.id} · Lesson ${part2 ? 2 : 1}` : ''}`}>
        {lesson.title}
      </Title>

      <View style={{ alignItems: 'center', marginBottom: 12 }}>
        <Avatar size={150} speaking={speaking} />
      </View>

      <View style={[styles.bubble, { backgroundColor: colors.card, borderColor: subject.color }]}>
        <View style={[styles.tail, { borderBottomColor: subject.color }]} />
        <Body style={{ fontSize: 17, lineHeight: 26 }}>{lesson.steps[step]}</Body>
      </View>

      {lesson.diagrams?.[step] && (
        <Card style={{ marginTop: 12 }}>
          <Diagram id={lesson.diagrams[step]} />
        </Card>
      )}

      <View style={styles.progress}>
        {lesson.steps.map((_, i) => (
          <View key={i} style={[styles.dot, { backgroundColor: i <= step ? subject.color : colors.border }]} />
        ))}
      </View>

      <View style={styles.row}>
        <Button title="‹ Back" variant="secondary" disabled={step === 0} onPress={() => setStep((s) => s - 1)} style={{ flex: 1 }} />
        <Button
          title={speaking ? '⏸ Stop' : '🔊 Repeat'}
          variant="secondary"
          onPress={() => (speaking ? stop() : say(lesson.steps[step]))}
          style={{ flex: 1 }}
        />
        {!last ? (
          <Button title="Next ›" onPress={() => setStep((s) => s + 1)} style={{ flex: 1 }} />
        ) : (
          <Button title="Done ✓" onPress={back} style={{ flex: 1 }} />
        )}
      </View>

      <View style={styles.voiceRow}>
        <Muted>Read each step aloud</Muted>
        <Switch
          value={voiceOn}
          onValueChange={(v) => {
            setVoiceOn(v);
            if (!v) stop();
          }}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor="#fff"
        />
      </View>

      {last && found && (
        <Card style={{ marginTop: 12 }}>
          <Body style={{ fontWeight: '700' }}>🎉 Lesson complete! Lock it in:</Body>
          {!part2 && chapterContent(subject.id, found.chapter.id)?.lesson2 && (
            <Button
              title="📗 Next: Lesson 2 · Deeper dive"
              variant="secondary"
              onPress={() => {
                stop();
                router.replace({ pathname: '/lesson', params: { subject: subject.id, chapter: found.chapter.id, part: '2' } });
              }}
              style={{ marginTop: 10 }}
            />
          )}
          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              title="🃏 Flashcards"
              variant="secondary"
              onPress={() => router.replace({ pathname: '/flashcards', params: { subject: subject.id, chapter: found?.chapter.id } })}
              style={{ flex: 1 }}
            />
            <Button
              title="📝 Quiz"
              onPress={() => router.replace({ pathname: '/quiz', params: { subject: subject.id, chapter: found?.chapter.id } })}
              style={{ flex: 1 }}
            />
          </View>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  bubble: { borderWidth: 2, borderRadius: 18, padding: 18, minHeight: 140 },
  tail: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    left: '50%',
    marginLeft: -12,
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  progress: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: 14 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  row: { flexDirection: 'row', gap: 8 },
  voiceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
});
