import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { getSubject } from '../../data/subjects';

const bestKey = (id: string) => `quiz:best:${id}`;

function buzz(success: boolean) {
  if (Platform.OS === 'web') return;
  Haptics.notificationAsync(
    success ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error,
  ).catch(() => {});
}

export default function QuizScreen() {
  const { colors } = useApp();
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useState(getSubject(params.subject).id);
  const subject = getSubject(subjectId);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    if (params.subject) setSubjectId(getSubject(params.subject).id);
  }, [params.subject]);

  useEffect(() => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    AsyncStorage.getItem(bestKey(subjectId))
      .then((v) => setBest(v ? Number(v) : null))
      .catch(() => setBest(null));
  }, [subjectId]);

  const total = subject.quiz.length;
  const finished = index >= total;
  const q = subject.quiz[index];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.answer;
    if (correct) setScore((s) => s + 1);
    buzz(correct);
  }

  async function next() {
    const nextIndex = index + 1;
    setSelected(null);
    setIndex(nextIndex);
    if (nextIndex >= total && (best === null || score > best)) {
      setBest(score);
      AsyncStorage.setItem(bestKey(subjectId), String(score)).catch(() => {});
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
  }

  return (
    <Screen>
      <Title subtitle="IB-style multiple choice. Explanations after every answer.">Quiz</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />

      {finished ? (
        <Card style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 52 }}>{score === total ? '🏆' : score >= total / 2 ? '👏' : '💪'}</Text>
          <Text style={{ fontSize: 32, fontWeight: '800', color: colors.text, marginTop: 8 }}>
            {score} / {total}
          </Text>
          <Muted style={{ marginBottom: 4 }}>
            {score === total ? 'Perfect score — a 7 in the making!' : score >= total / 2 ? 'Nice work! Review what you missed.' : 'Keep going — revisit the lesson and try again.'}
          </Muted>
          {best !== null && <Muted style={{ marginBottom: 12 }}>Best for {subject.name}: {best} / {total}</Muted>}
          <Button title="Try again" onPress={restart} style={{ alignSelf: 'stretch' }} />
        </Card>
      ) : (
        <>
          <View style={styles.meta}>
            <Muted>
              Question {index + 1} of {total}
            </Muted>
            <Muted>Score: {score}</Muted>
          </View>
          <Card>
            <Body style={{ fontSize: 19, fontWeight: '700', lineHeight: 27 }}>{q.question}</Body>
          </Card>

          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = i === selected;
            let bg = colors.card;
            let border = colors.border;
            if (selected !== null && isAnswer) {
              bg = colors.success + '22';
              border = colors.success;
            } else if (isPicked) {
              bg = colors.danger + '22';
              border = colors.danger;
            }
            return (
              <Pressable
                key={i}
                onPress={() => choose(i)}
                style={({ pressed }) => [
                  styles.option,
                  { backgroundColor: bg, borderColor: border, opacity: pressed && selected === null ? 0.8 : 1 },
                ]}
              >
                <View style={[styles.letter, { backgroundColor: subject.color }]}>
                  <Text style={{ color: '#fff', fontWeight: '800' }}>{String.fromCharCode(65 + i)}</Text>
                </View>
                <Body style={{ flex: 1 }}>{opt}</Body>
                {selected !== null && isAnswer && <Text>✅</Text>}
                {isPicked && !isAnswer && <Text>❌</Text>}
              </Pressable>
            );
          })}

          {selected !== null && (
            <Card style={{ backgroundColor: colors.cardAlt, marginTop: 4 }}>
              <Body style={{ fontWeight: '700' }}>{selected === q.answer ? 'Correct! 🎉' : 'Not quite.'}</Body>
              <Muted style={{ marginTop: 4, fontSize: 15 }}>{q.explanation}</Muted>
            </Card>
          )}
          <Button title={index === total - 1 ? 'See results' : 'Next question ›'} onPress={next} disabled={selected === null} />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  option: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 14, borderWidth: 2, marginBottom: 10 },
  letter: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
});
