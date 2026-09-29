import { router, useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Avatar from '../../components/Avatar';
import Diagram from '../../components/econ/Diagram';
import DiagramLab from '../../components/econ/DiagramLab';
import { Body, Button, Card, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { getSubject, Lesson } from '../../data/subjects';
import { getProgress, recordLesson } from '../../services/progress';

export default function TutorScreen() {
  const { colors, profile } = useApp();
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useState(getSubject(params.subject).id);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [step, setStep] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const speakId = useRef(0);

  const subject = getSubject(subjectId);

  // Follow the subject chosen on the Home screen.
  useEffect(() => {
    if (params.subject) {
      setSubjectId(getSubject(params.subject).id);
      setLesson(null);
    }
  }, [params.subject]);

  const stop = useCallback(() => {
    speakId.current++;
    Speech.stop();
    setSpeaking(false);
  }, []);

  const say = useCallback(
    (text: string) => {
      stop();
      if (!voiceOn) return;
      const id = ++speakId.current;
      setSpeaking(true);
      const done = () => {
        if (speakId.current === id) setSpeaking(false);
      };
      Speech.speak(text, { rate: 0.95, onDone: done, onStopped: done, onError: done });
    },
    [stop, voiceOn],
  );

  // Speak each step as it appears.
  useEffect(() => {
    if (lesson) say(lesson.steps[step]);
  }, [lesson, step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Stop talking when leaving the screen / unmounting.
  useEffect(() => stop, [stop]);

  // Reaching the last step counts as completing the lesson.
  const [done, setDone] = useState<Record<string, string>>({});
  useEffect(() => {
    getProgress().then((p) => setDone(p.lessonsDone));
  }, [lesson]);
  useEffect(() => {
    if (lesson && step === lesson.steps.length - 1 && !done[lesson.id]) {
      recordLesson(lesson.id);
      setDone((d) => ({ ...d, [lesson.id]: 'today' }));
    }
  }, [lesson, step, done]);

  function openLesson(l: Lesson) {
    setStep(0);
    setLesson(l);
  }

  if (!lesson) {
    return (
      <Screen>
        <Title subtitle="Pick a subject and a lesson — your avatar will teach you.">Avatar Tutor</Title>
        <SubjectPicker value={subjectId} onChange={setSubjectId} />
        <Card style={{ alignItems: 'center' }}>
          <Avatar size={110} />
          <Body style={{ textAlign: 'center', marginTop: 8 }}>
            {`Hey${profile.name ? ' ' + profile.name : ''}! Ready to learn ${subject.name}? Choose a lesson below.`}
          </Body>
        </Card>
        {subject.lessons.map((l, i) => (
          <Pressable
            key={l.id}
            onPress={() => openLesson(l)}
            style={({ pressed }) => [
              styles.lesson,
              { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <View style={[styles.num, { backgroundColor: subject.color }]}>
              <Text style={{ color: '#fff', fontWeight: '800' }}>{i + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Body style={{ fontWeight: '700' }}>{l.title}</Body>
              <Muted>
                {l.steps.length} steps · ~{Math.ceil(l.steps.length * 0.5)} min
                {l.diagrams ? ' · 📈 diagrams' : ''}
              </Muted>
            </View>
            <Text style={{ color: done[l.id] ? colors.success : colors.textMuted, fontSize: 20 }}>{done[l.id] ? '✓' : '▶'}</Text>
          </Pressable>
        ))}
        {subject.id === 'econ' && <DiagramLab />}
      </Screen>
    );
  }

  const last = step === lesson.steps.length - 1;

  return (
    <Screen>
      <Pressable
        onPress={() => {
          stop();
          setLesson(null);
        }}
      >
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ All lessons</Text>
      </Pressable>
      <Title subtitle={`${subject.emoji} ${subject.name}`}>{lesson.title}</Title>

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
          <View
            key={i}
            style={[styles.dot, { backgroundColor: i <= step ? subject.color : colors.border }]}
          />
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
          <Button
            title="Done ✓"
            onPress={() => {
              stop();
              setLesson(null);
            }}
            style={{ flex: 1 }}
          />
        )}
      </View>

      <View style={styles.voiceRow}>
        <Muted>Avatar voice</Muted>
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

      {last && (
        <Card style={{ marginTop: 12 }}>
          <Body style={{ fontWeight: '700' }}>🎉 Lesson complete! Lock it in:</Body>
          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              title="🃏 Flashcards"
              variant="secondary"
              onPress={() => router.push({ pathname: '/flashcards', params: { subject: subject.id } })}
              style={{ flex: 1 }}
            />
            <Button
              title="📝 Take quiz"
              onPress={() => router.push({ pathname: '/quiz', params: { subject: subject.id } })}
              style={{ flex: 1 }}
            />
          </View>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  lesson: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 14, borderWidth: 1, marginBottom: 10 },
  num: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
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
