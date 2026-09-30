import * as Haptics from 'expo-haptics';
import React, { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';
import type { QuizQuestion } from '../data/subjects';
import { estimateGrade } from '../services/grades';
import { Body, Button, Card, Muted } from './UI';

/** Shuffles each question's options (keeping track of the right answer) so its position varies. */
function shuffleOptions(questions: QuizQuestion[]): QuizQuestion[] {
  return questions.map((q) => {
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
  });
}

function buzz(success: boolean) {
  if (Platform.OS === 'web') return;
  Haptics.notificationAsync(
    success ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error,
  ).catch(() => {});
}

/** Runs a multiple-choice quiz with feedback after each answer and a results card. */
export default function QuizRunner({
  questions: source,
  color,
  best,
  onFinish,
}: {
  questions: QuizQuestion[];
  color: string;
  best?: number | null;
  onFinish?: (score: number, total: number) => void;
}) {
  const { colors } = useApp();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(() => shuffleOptions(source));

  function restart() {
    setQuestions(shuffleOptions(source));
    setIndex(0);
    setSelected(null);
    setScore(0);
  }

  useEffect(() => {
    restart();
  }, [source]); // eslint-disable-line react-hooks/exhaustive-deps

  const total = questions.length;
  const finished = index >= total;
  const q = questions[index];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.answer;
    if (correct) setScore((s) => s + 1);
    buzz(correct);
  }

  function next() {
    const nextIndex = index + 1;
    setSelected(null);
    setIndex(nextIndex);
    if (nextIndex >= total) onFinish?.(score, total);
  }

  if (total === 0) {
    return (
      <Card>
        <Muted>No questions here yet.</Muted>
      </Card>
    );
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const grade = estimateGrade(pct);
    return (
      <Card style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 52 }}>{grade >= 6 ? '🏆' : grade >= 4 ? '👏' : '💪'}</Text>
        <Text style={{ fontSize: 32, fontWeight: '800', color: colors.text, marginTop: 8 }}>
          {score} / {total}
        </Text>
        <Body style={{ marginTop: 4, fontWeight: '700' }}>≈ IB grade {grade} ({pct}%)</Body>
        <Muted style={{ marginBottom: 4, textAlign: 'center' }}>
          {grade === 7 ? 'Excellent — that’s 7 territory!' : grade >= 5 ? 'Solid work. Review what you missed.' : 'Keep going — revisit the lesson and try again.'}
        </Muted>
        {best != null && <Muted style={{ marginBottom: 12 }}>Your best: {best} / {total}</Muted>}
        <Muted style={{ fontSize: 11, marginBottom: 12, textAlign: 'center' }}>
          Estimate only — real IB grade boundaries change every session.
        </Muted>
        <Button title="Try again" onPress={restart} style={{ alignSelf: 'stretch' }} />
      </Card>
    );
  }

  return (
    <View>
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
            <View style={[styles.letter, { backgroundColor: color }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  option: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 14, borderWidth: 2, marginBottom: 10 },
  letter: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
});
