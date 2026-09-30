import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import ChapterPicker from '../../components/ChapterPicker';
import FlashcardDeck from '../../components/FlashcardDeck';
import { Screen, SubjectPicker, Title } from '../../components/UI';
import { chapterContent, findChapter, getSubject } from '../../data/subjects';
import { useChapterSelection } from '../../services/chapters';
import { useMySubjects, useSubjectSelection } from '../../services/mySubjects';
import { recordFlashcards } from '../../services/progress';

const NO_CARDS: never[] = [];

export default function FlashcardsScreen() {
  const params = useLocalSearchParams<{ subject?: string; chapter?: string }>();
  const [subjectId, setSubjectId] = useSubjectSelection(params.subject);
  const subject = getSubject(subjectId);
  const { levelOf } = useMySubjects();
  const level = levelOf(subject.id);
  const [chapterId, setChapterId] = useChapterSelection(subject, level, params.chapter);
  const content = chapterContent(subject.id, chapterId);
  const chapter = findChapter(subject, chapterId)?.chapter;

  return (
    <Screen>
      <Title subtitle="Cards for one chapter at a time. Tap to flip; missed cards come back later.">Flashcards</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />
      <ChapterPicker subject={subject} level={level} value={chapterId} onChange={setChapterId} />
      <FlashcardDeck
        cards={content?.cards ?? NO_CARDS}
        color={subject.color}
        label={chapter?.title ?? ''}
        onMastered={(n) => chapterId && recordFlashcards(`${subject.id}:${chapterId}`, n)}
      />
    </Screen>
  );
}
