import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import FlashcardDeck from '../components/FlashcardDeck';
import QuizRunner from '../components/QuizRunner';
import { Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { useApp } from '../context/AppContext';
import { Flashcard, findChapter, getSubject, QuizQuestion } from '../data/subjects';
import { generate } from '../services/generate';
import { useMySubjects } from '../services/mySubjects';
import { recordFlashcards, recordQuiz } from '../services/progress';

/** AI-made flashcards (?mode=cards) or quiz (?mode=quiz) for one syllabus chapter. */
export default function PracticeScreen() {
  const { colors, profile } = useApp();
  const params = useLocalSearchParams<{ mode?: string; subject?: string; chapter?: string }>();
  const mode = params.mode === 'quiz' ? 'quiz' : 'cards';
  const subject = getSubject(params.subject);
  const found = findChapter(subject, params.chapter);
  const { levelOf } = useMySubjects();
  const level = subject.levels === 'core' ? 'core' : levelOf(subject.id) ?? 'SL';

  const [cards, setCards] = useState<Flashcard[] | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function load(refresh = false) {
    if (!found) return;
    setLoading(true);
    setError(null);
    const ref = { subject, level, unitTitle: found.unit.title, chapterId: found.chapter.id, chapterTitle: found.chapter.title } as const;
    try {
      if (mode === 'cards') setCards((await generate('flashcards', ref, { refresh })).cards);
      else setQuestions((await generate('quiz', ref, { refresh })).questions);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not create this set.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ready = mode === 'cards' ? cards : questions;

  return (
    <Screen>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <Title subtitle={`${subject.emoji} ${subject.short ?? subject.name} · ${found?.chapter.id ?? ''} · ${level === 'core' ? 'Core' : level}`}>
        {mode === 'cards' ? '🃏 ' : '📝 '}
        {found?.chapter.title ?? 'Practice'}
      </Title>

      {!ready ? (
        <Card style={{ alignItems: 'center' }}>
          {loading ? (
            <>
              <ActivityIndicator color={colors.primary} />
              <Body style={{ textAlign: 'center', marginTop: 8 }}>
                {profile.tutorName || 'Your tutor'} is writing {mode === 'cards' ? 'flashcards' : 'quiz questions'} for this chapter…
              </Body>
              <Muted style={{ textAlign: 'center', marginTop: 4 }}>About 20–40 seconds the first time; then it’s saved.</Muted>
            </>
          ) : (
            <>
              <Body style={{ textAlign: 'center' }}>⚠️ {error ?? 'Chapter not found.'}</Body>
              {found && <Button title="Try again" onPress={() => load()} style={{ marginTop: 12, alignSelf: 'stretch' }} />}
            </>
          )}
        </Card>
      ) : mode === 'cards' ? (
        <FlashcardDeck
          cards={cards!}
          color={subject.color}
          label={found?.chapter.title ?? ''}
          onMastered={(n) => recordFlashcards(`ch:${subject.id}:${found?.chapter.id}`, n)}
        />
      ) : (
        <QuizRunner
          questions={questions!}
          color={subject.color}
          onFinish={(score, total) => recordQuiz(subject.id, score, total, found?.chapter.id)}
        />
      )}

      {ready && (
        <Muted style={{ marginTop: 14, fontSize: 12, textAlign: 'center' }}>
          ✨ Written by AI for your level. Check key facts against your textbook.{' '}
          <Text style={{ color: colors.primary, fontWeight: '700' }} onPress={() => load(true)}>
            Make a new set
          </Text>
        </Muted>
      )}
    </Screen>
  );
}
