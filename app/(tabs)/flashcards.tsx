import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import FlashcardDeck from '../../components/FlashcardDeck';
import { Button, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { getSubject } from '../../data/subjects';
import { useSubjectSelection } from '../../services/mySubjects';
import { recordFlashcards } from '../../services/progress';

export default function FlashcardsScreen() {
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useSubjectSelection(params.subject);
  const subject = getSubject(subjectId);

  return (
    <Screen>
      <Title subtitle="Tap a card to flip it. Cards you miss come back later.">Flashcards</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />
      <FlashcardDeck
        cards={subject.flashcards}
        color={subject.color}
        label={subject.short ?? subject.name}
        onMastered={(n) => recordFlashcards(subjectId, n)}
      />
      <Muted style={{ marginTop: 16, textAlign: 'center' }}>Want cards for one chapter? Open it from the syllabus.</Muted>
      <Button
        title="📚 Browse chapters"
        variant="secondary"
        onPress={() => router.push({ pathname: '/tutor', params: { subject: subjectId } })}
        style={{ marginTop: 8 }}
      />
    </Screen>
  );
}
