import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { Body, Card, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { SUBJECTS } from '../../data/subjects';
import { getProgress, lastDays, ProgressData, streak } from '../../services/progress';

export default function ProgressScreen() {
  const { colors, profile } = useApp();
  const [data, setData] = useState<ProgressData | null>(null);

  // Reload every time the tab is opened so it reflects the latest studying.
  useFocusEffect(
    useCallback(() => {
      getProgress().then(setData);
    }, []),
  );

  if (!data) return <Screen>{null}</Screen>;

  const totalLessons = SUBJECTS.reduce((n, s) => n + s.lessons.length, 0);
  const totalCards = SUBJECTS.reduce((n, s) => n + s.flashcards.length, 0);
  const lessonsDone = SUBJECTS.reduce((n, s) => n + s.lessons.filter((l) => data.lessonsDone[l.id]).length, 0);
  const cardsDone = SUBJECTS.reduce((n, s) => n + Math.min(data.cardsMastered[s.id] ?? 0, s.flashcards.length), 0);
  const quizAvg = data.quizzes.length
    ? Math.round((data.quizzes.reduce((n, q) => n + q.score / q.total, 0) / data.quizzes.length) * 100)
    : null;
  const days = streak(data);

  return (
    <Screen>
      <Title subtitle={profile.name ? `Keep it up, ${profile.name}!` : 'Everything you’ve studied, in one place.'}>
        My Progress
      </Title>

      <View style={styles.tiles}>
        <Tile emoji="🔥" value={`${days}`} label="day streak" />
        <Tile emoji="📚" value={`${lessonsDone}/${totalLessons}`} label="lessons done" />
        <Tile emoji="🃏" value={`${cardsDone}/${totalCards}`} label="cards mastered" />
        <Tile emoji="📝" value={quizAvg === null ? '–' : `${quizAvg}%`} label="avg quiz score" />
      </View>

      <Card>
        <Body style={{ fontWeight: '800' }}>Study activity · last 7 days</Body>
        <Muted style={{ marginBottom: 8 }}>Lessons, flashcards and quizzes completed. Tap a bar for details.</Muted>
        <ActivityChart days={lastDays(data, 7)} />
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>By subject</Body>
        {SUBJECTS.map((s) => {
          const l = s.lessons.filter((x) => data.lessonsDone[x.id]).length;
          const c = Math.min(data.cardsMastered[s.id] ?? 0, s.flashcards.length);
          const qs = data.quizzes.filter((q) => q.subjectId === s.id);
          const best = qs.length ? Math.max(...qs.map((q) => q.score / q.total)) : 0;
          const pct = Math.round(((l / s.lessons.length + c / s.flashcards.length + best) / 3) * 100);
          return (
            <View key={s.id} style={{ marginBottom: 14 }}>
              <View style={styles.subjectRow}>
                <Body style={{ fontWeight: '700' }}>
                  {s.emoji} {s.name}
                </Body>
                <Body style={{ fontWeight: '800' }}>{pct}%</Body>
              </View>
              <View style={[styles.track, { backgroundColor: colors.cardAlt }]}>
                {pct > 0 && <View style={[styles.fill, { width: `${pct}%`, backgroundColor: s.color }]} />}
              </View>
              <Muted style={{ marginTop: 4, fontSize: 12 }}>
                {l}/{s.lessons.length} lessons · {c}/{s.flashcards.length} cards · best quiz{' '}
                {qs.length ? `${Math.round(best * 100)}%` : '–'}
              </Muted>
            </View>
          );
        })}
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 6 }}>Recent quizzes</Body>
        {data.quizzes.length === 0 ? (
          <Muted>No quizzes yet — try one in the Quiz tab.</Muted>
        ) : (
          [...data.quizzes]
            .reverse()
            .slice(0, 5)
            .map((q) => {
              const s = SUBJECTS.find((x) => x.id === q.subjectId);
              return (
                <View key={q.at} style={[styles.quizRow, { borderBottomColor: colors.border }]}>
                  <Body style={{ flex: 1 }}>
                    {s?.emoji} {s?.name ?? q.subjectId}
                  </Body>
                  <Muted style={{ marginRight: 12 }}>{q.day}</Muted>
                  <Body style={{ fontWeight: '800' }}>
                    {q.score}/{q.total}
                  </Body>
                </View>
              );
            })
        )}
      </Card>
    </Screen>
  );
}

function Tile({ emoji, value, label }: { emoji: string; value: string; label: string }) {
  const { colors } = useApp();
  return (
    <View style={[styles.tile, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={{ fontSize: 20 }}>{emoji}</Text>
      <Text style={{ color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 2 }}>{value}</Text>
      <Text style={{ color: colors.textMuted, fontSize: 12 }}>{label}</Text>
    </View>
  );
}

const FONT = Platform.OS === 'web' ? 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' : undefined;
const CHART_H = 150;
const LABEL_H = 22;
const TOP = 22;

function ActivityChart({ days }: { days: { day: string; label: string; count: number }[] }) {
  const { colors } = useApp();
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(days.length - 1); // today by default

  const max = Math.max(4, ...days.map((d) => d.count));
  const slot = width / days.length;
  const barW = Math.min(28, slot * 0.55);
  const plotH = CHART_H - TOP - LABEL_H;
  const baseY = TOP + plotH;

  if (days.every((d) => d.count === 0)) {
    return (
      <View style={[styles.empty, { backgroundColor: colors.cardAlt }]}>
        <Muted>No study activity yet this week. Finish a lesson, a flashcard or a quiz to start your streak!</Muted>
      </View>
    );
  }

  return (
    <View onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}>
      {width > 0 && (
        <Svg width={width} height={CHART_H}>
          <Line x1={0} y1={baseY} x2={width} y2={baseY} stroke={colors.border} strokeWidth={1} />
          {days.map((d, i) => {
            const h = (d.count / max) * plotH;
            const x = i * slot + (slot - barW) / 2;
            const r = Math.min(4, h);
            const isSel = i === selected;
            return (
              <React.Fragment key={d.day}>
                {h > 0 && (
                  // bar with 4px rounded top, square at the baseline
                  <Path
                    d={`M${x},${baseY} V${baseY - h + r} Q${x},${baseY - h} ${x + r},${baseY - h} H${x + barW - r} Q${x + barW},${baseY - h} ${x + barW},${baseY - h + r} V${baseY} Z`}
                    fill={colors.primary}
                    opacity={isSel ? 1 : 0.55}
                  />
                )}
                {isSel && (
                  <SvgText fontFamily={FONT} x={x + barW / 2} y={baseY - h - 6} fill={colors.text} fontSize={12} fontWeight="700" textAnchor="middle">
                    {d.count}
                  </SvgText>
                )}
                <SvgText
                  fontFamily={FONT}
                  x={x + barW / 2}
                  y={CHART_H - 6}
                  fill={isSel ? colors.text : colors.textMuted}
                  fontSize={11}
                  fontWeight={isSel ? '700' : '400'}
                  textAnchor="middle"
                >
                  {d.label}
                </SvgText>
                {/* hit target bigger than the bar */}
                <Rect x={i * slot} y={0} width={slot} height={CHART_H} fill="transparent" onPress={() => setSelected(i)} />
              </React.Fragment>
            );
          })}
        </Svg>
      )}
      <Pressable onPress={() => setSelected(days.length - 1)}>
        <Muted style={{ textAlign: 'center', marginTop: 4 }}>
          {days[selected].label === 'Today' ? 'Today' : days[selected].day}: {days[selected].count}{' '}
          {days[selected].count === 1 ? 'activity' : 'activities'}
        </Muted>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tiles: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12 },
  tile: { flexGrow: 1, flexBasis: '45%', borderWidth: 1, borderRadius: 14, padding: 12 },
  subjectRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  track: { height: 10, borderRadius: 5, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 5 },
  quizRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth },
  empty: { borderRadius: 10, padding: 14 },
});
