import { useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import PongGame from '../../components/games/PongGame';
import SnakeGame from '../../components/games/SnakeGame';
import { Body, Button, Card, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import {
  GameId,
  getLeaderboard,
  getPlayedToday,
  isOnlineLeaderboard,
  lockToday,
  PlayedToday,
  ScoreEntry,
  submitScore,
} from '../../services/dailyGame';

const GAMES: { id: GameId; name: string; emoji: string; blurb: string }[] = [
  { id: 'snake', name: 'Snake', emoji: '🐍', blurb: 'Eat apples, grow longer, don’t hit the walls or yourself.' },
  { id: 'pong', name: 'Ping Pong', emoji: '🏓', blurb: 'Return the ball as many times as you can. One miss and it’s over.' },
];

function timeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const mins = Math.ceil((midnight.getTime() - now.getTime()) / 60000);
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

type Phase = 'loading' | 'menu' | 'countdown' | 'playing' | 'results';

export default function BreakScreen() {
  const { colors, profile } = useApp();
  const [phase, setPhase] = useState<Phase>('loading');
  const [game, setGame] = useState<GameId>('snake');
  const [played, setPlayed] = useState<PlayedToday | null>(null);
  const [board, setBoard] = useState<ScoreEntry[] | null>(null);
  const [count, setCount] = useState(3);
  const inGame = useRef(false);

  const loadBoard = useCallback(async (g: GameId) => {
    setBoard(null);
    setBoard(await getLeaderboard(g));
  }, []);

  // Re-check the daily lock every time the tab is opened (the date may have changed).
  useFocusEffect(
    useCallback(() => {
      let active = true;
      getPlayedToday().then((p) => {
        if (!active) return;
        if (inGame.current) return;
        setPlayed(p);
        if (p) {
          setGame(p.game);
          loadBoard(p.game);
          setPhase('results');
        } else {
          setPhase('menu');
        }
      });
      return () => {
        active = false;
      };
    }, [loadBoard]),
  );

  // 3‑2‑1 countdown before the game starts.
  useEffect(() => {
    if (phase !== 'countdown') return;
    if (count === 0) {
      setPhase('playing');
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 700);
    return () => clearTimeout(t);
  }, [phase, count]);

  function start(g: GameId) {
    inGame.current = true;
    lockToday(g);
    setGame(g);
    setCount(3);
    setPhase('countdown');
  }

  async function handleGameOver(score: number) {
    const entry = { playerId: profile.id, name: profile.name || 'You', score, game };
    await submitScore(entry);
    inGame.current = false;
    setPlayed({ day: '', game, score });
    setPhase('results');
    loadBoard(game);
  }

  if (phase === 'loading') {
    return (
      <Screen>
        <ActivityIndicator color={colors.primary} />
      </Screen>
    );
  }

  if (phase === 'countdown' || phase === 'playing') {
    const meta = GAMES.find((g) => g.id === game)!;
    return (
      <Screen scroll={false}>
        <Title subtitle="You only get one go today — make it count!">
          {meta.emoji} {meta.name}
        </Title>
        {phase === 'countdown' ? (
          <View style={styles.countdown}>
            <Text style={{ fontSize: 96, fontWeight: '900', color: colors.primary }}>{count}</Text>
            <Muted>Get ready…</Muted>
          </View>
        ) : game === 'snake' ? (
          <SnakeGame onGameOver={handleGameOver} />
        ) : (
          <PongGame onGameOver={handleGameOver} />
        )}
      </Screen>
    );
  }

  if (phase === 'menu') {
    return (
      <Screen>
        <Title subtitle="You’ve earned it. Pick one game — you can play once per day.">Break Time ☕</Title>
        {GAMES.map((g) => (
          <Card key={g.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Text style={{ fontSize: 40 }}>{g.emoji}</Text>
              <View style={{ flex: 1 }}>
                <Body style={{ fontWeight: '800', fontSize: 18 }}>{g.name}</Body>
                <Muted>{g.blurb}</Muted>
              </View>
            </View>
            <Button title={`Play ${g.name}`} onPress={() => start(g.id)} style={{ marginTop: 12 }} />
          </Card>
        ))}
        <Muted style={{ textAlign: 'center', marginTop: 4 }}>
          ⚠️ Choosing a game uses today’s play. The leaderboard resets at midnight.
        </Muted>
      </Screen>
    );
  }

  // results / leaderboard
  const myRank = board ? board.findIndex((e) => e.playerId === profile.id) + 1 : 0;
  return (
    <Screen>
      <Title subtitle={`Today’s leaderboard · next game in ${timeUntilMidnight()}`}>Break Time ☕</Title>

      {played && (
        <Card style={{ alignItems: 'center', backgroundColor: colors.cardAlt }}>
          <Muted>Your score today</Muted>
          <Text style={{ fontSize: 44, fontWeight: '900', color: colors.primary }}>{played.score}</Text>
          {myRank > 0 && <Body>You’re ranked #{myRank} today {myRank <= 3 ? '🔥' : ''}</Body>}
          <Muted style={{ marginTop: 6 }}>Come back tomorrow for another go. Now back to studying! 📚</Muted>
        </Card>
      )}

      <View style={styles.tabs}>
        {GAMES.map((g) => (
          <Pressable
            key={g.id}
            onPress={() => {
              setGame(g.id);
              loadBoard(g.id);
            }}
            style={[
              styles.tab,
              { backgroundColor: game === g.id ? colors.primary : colors.card, borderColor: colors.border },
            ]}
          >
            <Text style={{ color: game === g.id ? colors.primaryText : colors.text, fontWeight: '700' }}>
              {g.emoji} {g.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <Card style={{ paddingVertical: 8 }}>
        {!board ? (
          <ActivityIndicator color={colors.primary} style={{ margin: 20 }} />
        ) : board.length === 0 ? (
          <Muted style={{ padding: 12, textAlign: 'center' }}>No scores yet today.</Muted>
        ) : (
          board.map((e, i) => {
            const me = e.playerId === profile.id;
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
            return (
              <View
                key={`${e.playerId}-${i}`}
                style={[
                  styles.rowItem,
                  { borderBottomColor: colors.border, backgroundColor: me ? colors.primary + '22' : 'transparent' },
                ]}
              >
                <Text style={[styles.rank, { color: colors.textMuted }]}>{medal}</Text>
                <Body style={{ flex: 1, fontWeight: me ? '800' : '500' }}>
                  {e.name}
                  {me && e.name !== 'You' ? ' (you)' : ''}
                </Body>
                <Body style={{ fontWeight: '800' }}>{e.score}</Body>
              </View>
            );
          })
        )}
      </Card>
      {!isOnlineLeaderboard() && (
        <Muted style={{ textAlign: 'center' }}>
          Offline mode: other players are demo players. Connect Supabase to compete with real students (see README).
        </Muted>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  countdown: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabs: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  tab: { flex: 1, padding: 10, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  rank: { width: 36, fontSize: 18, fontWeight: '800', textAlign: 'center' },
});
