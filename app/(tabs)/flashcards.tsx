import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, Muted, Screen, SubjectPicker, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { Flashcard, getSubject } from '../../data/subjects';
import { recordFlashcards } from '../../services/progress';

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsScreen() {
  const { colors } = useApp();
  const params = useLocalSearchParams<{ subject?: string }>();
  const [subjectId, setSubjectId] = useState(getSubject(params.subject).id);
  const subject = getSubject(subjectId);

  const [deck, setDeck] = useState<Flashcard[]>(subject.flashcards);
  const [index, setIndex] = useState(0);
  const [known, setKnown] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const flip = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (params.subject) setSubjectId(getSubject(params.subject).id);
  }, [params.subject]);

  useEffect(() => {
    restart(false);
  }, [subjectId]); // eslint-disable-line react-hooks/exhaustive-deps

  function restart(shuffled: boolean) {
    const cards = getSubject(subjectId).flashcards;
    setDeck(shuffled ? shuffle(cards) : cards);
    setIndex(0);
    setKnown(0);
    resetFlip();
  }

  function resetFlip() {
    setFlipped(false);
    flip.setValue(0);
  }

  function toggleFlip() {
    Animated.spring(flip, { toValue: flipped ? 0 : 1, friction: 8, tension: 10, useNativeDriver: true }).start();
    setFlipped(!flipped);
  }

  function answer(gotIt: boolean) {
    if (gotIt) {
      setKnown(known + 1);
      recordFlashcards(subjectId, known + 1);
    }
    else setDeck((d) => [...d, d[index]]); // show it again later
    resetFlip();
    setIndex((i) => i + 1);
  }

  const frontRotate = flip.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = flip.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
  const done = index >= deck.length;
  const total = subject.flashcards.length;
  const card = deck[index];

  const progress = useMemo(() => Math.min(known / total, 1), [known, total]);

  return (
    <Screen>
      <Title subtitle="Tap a card to flip it. Cards you miss come back later.">Flashcards</Title>
      <SubjectPicker value={subjectId} onChange={setSubjectId} />

      <View style={[styles.bar, { backgroundColor: colors.border }]}>
        <View style={{ width: `${progress * 100}%`, height: '100%', backgroundColor: subject.color, borderRadius: 4 }} />
      </View>
      <Muted style={{ marginBottom: 12 }}>
        {known} / {total} mastered
      </Muted>

      {done ? (
        <Card style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48 }}>🏆</Text>
          <Body style={{ fontWeight: '700', marginTop: 8 }}>Deck complete!</Body>
          <Muted style={{ marginBottom: 12 }}>You mastered all {total} {subject.name} cards.</Muted>
          <Button title="🔀 Shuffle & go again" onPress={() => restart(true)} />
        </Card>
      ) : (
        <>
          <Pressable onPress={toggleFlip} accessibilityLabel="Flip card">
            <View style={styles.cardWrap}>
              <Animated.View
                style={[
                  styles.card,
                  { backgroundColor: colors.card, borderColor: subject.color, transform: [{ perspective: 1000 }, { rotateY: frontRotate }] },
                ]}
              >
                <Muted style={styles.label}>QUESTION</Muted>
                <Text style={[styles.cardText, { color: colors.text }]}>{card.front}</Text>
                <Muted style={styles.hint}>Tap to reveal</Muted>
              </Animated.View>
              <Animated.View
                style={[
                  styles.card,
                  { backgroundColor: subject.color, borderColor: subject.color, transform: [{ perspective: 1000 }, { rotateY: backRotate }] },
                ]}
              >
                <Text style={[styles.label, { color: '#ffffffcc' }]}>ANSWER</Text>
                <Text style={[styles.cardText, { color: '#fff' }]}>{card.back}</Text>
              </Animated.View>
            </View>
          </Pressable>

          <View style={styles.row}>
            <Button title="😕 Still learning" variant="secondary" onPress={() => answer(false)} style={{ flex: 1 }} disabled={!flipped} />
            <Button title="✅ Got it" onPress={() => answer(true)} style={{ flex: 1 }} disabled={!flipped} />
          </View>
          <Button title="🔀 Shuffle" variant="secondary" onPress={() => restart(true)} style={{ marginTop: 10 }} />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  bar: { height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 6 },
  cardWrap: { height: 260, marginBottom: 16 },
  card: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: 20,
    borderWidth: 3,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  label: { position: 'absolute', top: 16, left: 20, fontWeight: '700', letterSpacing: 1 },
  hint: { position: 'absolute', bottom: 16 },
  cardText: { fontSize: 22, fontWeight: '700', textAlign: 'center', lineHeight: 30 },
  row: { flexDirection: 'row', gap: 10 },
});
