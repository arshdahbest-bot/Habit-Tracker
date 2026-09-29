import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import QuizRunner from '../../components/QuizRunner';
import { Button, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { getSubject } from '../../data/subjects';
import { useSubjectSelection } from '../../services/mySubjects';
import { recordQuiz } from '../../services/progress';

const bestKey = (id: string) => `quiz:best:${id}`;

export default function QuizScreen() {
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useSubjectSelection(params.subject);
  const subject = getSubject(subjectId);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(bestKey(subjectId))
      .then((v) => setBest(v ? Number(v) : null))
      .catch(() => setBest(null));
  }, [subjectId]);

  function finish(score: number, total: number) {
    recordQuiz(subjectId, score, total);
    if (best === null || score > best) {
      setBest(score);
      AsyncStorage.setItem(bestKey(subjectId), String(score)).catch(() => {});
    }
  }

  return (
    <Screen>
      <Title subtitle="IB-style multiple choice, with an explanation after every answer.">Quiz</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />
      <QuizRunner questions={subject.quiz} color={subject.color} best={best} onFinish={finish} />
      <Muted style={{ marginTop: 16, textAlign: 'center' }}>Want a quiz on one chapter? Open it from the syllabus.</Muted>
      <Button
        title="📚 Browse chapters"
        variant="secondary"
        onPress={() => router.push({ pathname: '/tutor', params: { subject: subjectId } })}
        style={{ marginTop: 8 }}
      />
    </Screen>
  );
}
