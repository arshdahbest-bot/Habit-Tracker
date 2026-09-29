import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import Diagram from '../components/econ/Diagram';
import { Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { findChapter, getSubject, Lesson } from '../data/subjects';
import { generate, toLesson } from '../services/generate';
import { useMySubjects } from '../services/mySubjects';
import { getProgress, recordLesson } from '../services/progress';
import { useSpeaker } from '../services/useSpeaker';

/**
 * Plays one lesson step by step with the avatar reading it aloud.
 * ?subject=econ&lesson=econ-elasticity  → a built-in lesson
 * ?subject=bio&chapter=C1.2            → an AI-written lesson for that chapter (cached)
 */
export default function LessonScreen() {
  const { colors, profile } = useApp();
  const params = useLocalSearchParams<{ subject?: string; lesson?: string; chapter?: string }>();
  const subject = getSubject(params.subject);
  const { levelOf } = useMySubjects();
  const level = subject.levels === 'core' ? 'core' : levelOf(subject.id) ?? 'SL';
  const found = findChapter(subject, params.chapter);

  const [lesson, setLesson] = useState<Lesson | null>(() => subject.lessons.find((l) => l.id === params.lesson) ?? null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);
  const { speaking, say, stop } = useSpeaker();

  async function loadAi(refresh = false) {
    if (!found) return;
    stop();
    setLoading(true);
    setError(null);
    try {
      const data = await generate(
        'lesson',
        { subject, level, unitTitle: found.unit.title, chapterId: found.chapter.id, chapterTitle: found.chapter.title },
        { refresh },
      );
      setStep(0);
      setLesson(toLesson(subject.id, found.chapter.id, data));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not create the lesson.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!params.lesson && found) loadAi();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    <Pressable onPress={back}>
      <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
    </Pressable>
  );

  if (!lesson) {
    return (
      <Screen>
        {header}
        <Title subtitle={`${subject.emoji} ${subject.name}${found ? ` · ${found.chapter.id}` : ''}`}>
          {found?.chapter.title ?? 'Lesson'}
        </Title>
        <Card style={{ alignItems: 'center' }}>
          <Avatar size={120} speaking={loading} />
          {loading ? (
            <>
              <ActivityIndicator color={colors.primary} style={{ marginTop: 12 }} />
              <Body style={{ textAlign: 'center', marginTop: 8 }}>
                {profile.tutorName || 'Your tutor'} is preparing a {level === 'core' ? '' : `${level} `}lesson…
              </Body>
              <Muted style={{ textAlign: 'center', marginTop: 4 }}>This takes about 20–40 seconds the first time.</Muted>
            </>
          ) : (
            <>
              <Body style={{ textAlign: 'center', marginTop: 10 }}>⚠️ {error ?? 'Lesson not found.'}</Body>
              {found && <Button title="Try again" onPress={() => loadAi()} style={{ marginTop: 12, alignSelf: 'stretch' }} />}
            </>
          )}
        </Card>
      </Screen>
    );
  }

  const last = step === lesson.steps.length - 1;
  const isAi = lesson.id.startsWith('ai:');

  return (
    <Screen>
      {header}
      <Title subtitle={`${subject.emoji} ${subject.name}${found ? ` · ${found.chapter.id}` : ''}${isAi ? ' · ✨ AI lesson' : ''}`}>
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

      {isAi && (
        <Muted style={{ marginTop: 10, fontSize: 12 }}>
          AI-written for {level === 'core' ? 'TOK' : `${level}`}. Check anything important against your textbook.{' '}
          <Text style={{ color: colors.primary, fontWeight: '700' }} onPress={() => loadAi(true)}>
            Write a new version
          </Text>
        </Muted>
      )}

      {last && (
        <Card style={{ marginTop: 12 }}>
          <Body style={{ fontWeight: '700' }}>🎉 Lesson complete! Lock it in:</Body>
          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              title="🃏 Flashcards"
              variant="secondary"
              onPress={() =>
                found
                  ? router.replace({ pathname: '/practice', params: { mode: 'cards', subject: subject.id, chapter: found.chapter.id } })
                  : router.replace({ pathname: '/flashcards', params: { subject: subject.id } })
              }
              style={{ flex: 1 }}
            />
            <Button
              title="📝 Quiz"
              onPress={() =>
                found
                  ? router.replace({ pathname: '/practice', params: { mode: 'quiz', subject: subject.id, chapter: found.chapter.id } })
                  : router.replace({ pathname: '/quiz', params: { subject: subject.id } })
              }
              style={{ flex: 1 }}
            />
          </View>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
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
