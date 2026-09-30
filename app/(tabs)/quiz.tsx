import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import ChapterPicker from '../../components/ChapterPicker';
import QuizRunner from '../../components/QuizRunner';
import { Screen, SubjectPicker, Title } from '../../components/UI';
import { chapterContent, getSubject } from '../../data/subjects';
import { useChapterSelection } from '../../services/chapters';
import { useMySubjects, useSubjectSelection } from '../../services/mySubjects';
import { recordQuiz } from '../../services/progress';

const NO_QUESTIONS: never[] = [];
const bestKey = (subjectId: string, chapterId: string) => `quiz:best:${subjectId}:${chapterId}`;

export default function QuizScreen() {
  const params = useLocalSearchParams<{ subject?: string; chapter?: string }>();
  const [subjectId, setSubjectId] = useSubjectSelection(params.subject);
  const subject = getSubject(subjectId);
  const { levelOf } = useMySubjects();
  const level = levelOf(subject.id);
  const [chapterId, setChapterId] = useChapterSelection(subject, level, params.chapter);
  const content = chapterContent(subject.id, chapterId);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    if (!chapterId) return;
    AsyncStorage.getItem(bestKey(subject.id, chapterId))
      .then((v) => setBest(v ? Number(v) : null))
      .catch(() => setBest(null));
  }, [subject.id, chapterId]);

  function finish(score: number, total: number) {
    if (!chapterId) return;
    recordQuiz(subject.id, score, total, chapterId);
    if (best === null || score > best) {
      setBest(score);
      AsyncStorage.setItem(bestKey(subject.id, chapterId), String(score)).catch(() => {});
    }
  }

  return (
    <Screen>
      <Title subtitle="IB-style questions on one chapter at a time, with an explanation after every answer.">Quiz</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />
      <ChapterPicker subject={subject} level={level} value={chapterId} onChange={setChapterId} />
      <QuizRunner questions={content?.quiz ?? NO_QUESTIONS} color={subject.color} best={best} onFinish={finish} />
    </Screen>
  );
}
