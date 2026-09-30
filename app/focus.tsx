import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Body, Button, Card, Muted, Screen, SubjectPicker, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { getSubject } from '../data/subjects';
import { useSubjectSelection } from '../services/mySubjects';
import { recordFocus } from '../services/progress';
import { useSpeaker } from '../services/useSpeaker';

// Pomodoro-style presets: minutes of focus, then minutes of break.
const PRESETS = [
  { label: '25 / 5', focus: 25, rest: 5 },
  { label: '50 / 10', focus: 50, rest: 10 },
  { label: '15 / 3', focus: 15, rest: 3 },
];

type Phase = 'focus' | 'break';

const RING = 220;
const STROKE = 14;

function mmss(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

export default function FocusScreen() {
  const { colors } = useApp();
  const [subjectId, setSubjectId] = useSubjectSelection(undefined);
  const subject = getSubject(subjectId);
  const [preset, setPreset] = useState(0);
  const [phase, setPhase] = useState<Phase>('focus');
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(PRESETS[0].focus * 60_000);
  const [sessions, setSessions] = useState(0);
  const endAt = useRef(0);
  const { say } = useSpeaker();

  const { focus, rest } = PRESETS[preset];
  const total = (phase === 'focus' ? focus : rest) * 60_000;

  // The countdown works from an end time, so it stays correct if the app is backgrounded.
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      const left = endAt.current - Date.now();
      setRemaining(left);
      if (left <= 0) {
        clearInterval(t);
        finishPhase();
      }
    }, 250);
    return () => clearInterval(t);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  function finishPhase() {
    setRunning(false);
    if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    if (phase === 'focus') {
      recordFocus(focus);
      setSessions((n) => n + 1);
      say(`Great focus session! Take a ${rest} minute break.`);
      setPhase('break');
      setRemaining(rest * 60_000);
    } else {
      say('Break over. Ready for another session?');
      setPhase('focus');
      setRemaining(focus * 60_000);
    }
  }

  function start() {
    endAt.current = Date.now() + remaining;
    setRunning(true);
  }

  function pause() {
    setRunning(false);
    setRemaining(endAt.current - Date.now());
  }

  function reset(nextPreset = preset) {
    // Count the minutes already studied in an unfinished focus session.
    if (phase === 'focus') {
      const left = running ? endAt.current - Date.now() : remaining;
      const done = Math.floor((PRESETS[preset].focus * 60_000 - left) / 60_000);
      if (done >= 1) recordFocus(done);
    }
    setRunning(false);
    setPhase('focus');
    setPreset(nextPreset);
    setRemaining(PRESETS[nextPreset].focus * 60_000);
  }

  const color = phase === 'focus' ? subject.color : colors.success;
  const r = (RING - STROKE) / 2;
  const circumference = 2 * Math.PI * r;
  const fraction = Math.min(1, Math.max(0, remaining / total));

  return (
    <Screen>
      <Pressable
        onPress={() => {
          if (running) pause();
          router.back();
        }}
      >
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <Title subtitle="Study in focused blocks with short breaks — the Pomodoro technique.">Focus timer ⏱️</Title>

      <SubjectPicker value={subjectId} onChange={setSubjectId} />

      <View style={styles.presets}>
        {PRESETS.map((p, i) => (
          <Pressable
            key={p.label}
            onPress={() => reset(i)}
            style={[
              styles.preset,
              { backgroundColor: i === preset ? colors.primary : colors.card, borderColor: i === preset ? colors.primary : colors.border },
            ]}
          >
            <Text style={{ color: i === preset ? colors.primaryText : colors.text, fontWeight: '700' }}>{p.label}</Text>
          </Pressable>
        ))}
      </View>

      <Card style={{ alignItems: 'center', paddingVertical: 24 }}>
        <Text style={{ color, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
          {phase === 'focus' ? `${subject.emoji} Focus · ${subject.short ?? subject.name}` : '☕ Break'}
        </Text>
        <View style={{ width: RING, height: RING, alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={RING} height={RING} style={StyleSheet.absoluteFill}>
            <Circle cx={RING / 2} cy={RING / 2} r={r} stroke={colors.cardAlt} strokeWidth={STROKE} fill="none" />
            <Circle
              cx={RING / 2}
              cy={RING / 2}
              r={r}
              stroke={color}
              strokeWidth={STROKE}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={circumference * (1 - fraction)}
              transform={`rotate(-90 ${RING / 2} ${RING / 2})`}
            />
          </Svg>
          <Text style={{ color: colors.text, fontSize: 48, fontWeight: '900', fontVariant: ['tabular-nums'] }}>{mmss(remaining)}</Text>
          <Muted>{phase === 'focus' ? `${focus} min focus` : `${rest} min break`}</Muted>
        </View>

        <View style={{ flexDirection: 'row', gap: 8, marginTop: 20, alignSelf: 'stretch' }}>
          {running ? (
            <Button title="⏸ Pause" onPress={pause} style={{ flex: 1 }} />
          ) : (
            <Button title={remaining < total ? '▶ Resume' : '▶ Start'} onPress={start} style={{ flex: 1 }} />
          )}
          <Button title="↺ Reset" variant="secondary" onPress={() => reset()} style={{ flex: 1 }} />
          {phase === 'break' && <Button title="Skip ›" variant="secondary" onPress={finishPhase} style={{ flex: 1 }} />}
        </View>
      </Card>

      <Card>
        <Body style={{ fontWeight: '800' }}>🍅 {sessions} session{sessions === 1 ? '' : 's'} finished</Body>
        <Muted style={{ marginTop: 4 }}>
          Focus minutes are added to your Progress tab. Tip: put your phone face down, close other apps and pick one chapter per session.
        </Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  presets: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  preset: { flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: 12, borderWidth: 1 },
});
