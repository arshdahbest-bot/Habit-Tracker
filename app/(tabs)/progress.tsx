import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { G, Line, Rect, Text as SvgText } from 'react-native-svg';
import { Body, Card, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { chaptersFor, SUBJECTS } from '../../data/subjects';
import { chapterStudied } from '../../services/chapters';
import { estimateGrade } from '../../services/grades';
import { useMySubjects } from '../../services/mySubjects';
import { getProgress, lastDays, ProgressData, streak } from '../../services/progress';

export default function ProgressScreen() {
  const { colors, profile } = useApp();
  const [data, setData] = useState<ProgressData | null>(null);
  const { list, chosen } = useMySubjects();

  // Reload every time the tab is opened so it reflects the latest studying.
  useFocusEffect(
    useCallback(() => {
      getProgress().then(setData);
    }, []),
  );

  if (!data) return <Screen>{null}</Screen>;


  // Per-subject stats for the student's subjects, at their level.
  const stats = list.map(({ subject: s, level, levelLabel }) => {
    const chapters = chaptersFor(s, level).flatMap((u) => u.chapters);
    const studied = chapters.filter((c) => chapterStudied(data, s, c.id)).length;
    const recent = data.quizzes.filter((q) => q.subjectId === s.id).slice(-5);
    const avg = recent.length ? Math.round((recent.reduce((n, q) => n + q.score / q.total, 0) / recent.length) * 100) : null;
    return { s, levelLabel, chapters: chapters.length, studied, avg, grade: avg === null ? null : estimateGrade(avg) };
  });
  const totalChapters = stats.reduce((n, x) => n + x.chapters, 0);
  const totalStudied = stats.reduce((n, x) => n + x.studied, 0);
  const quizAvg = data.quizzes.length
    ? Math.round((data.quizzes.reduce((n, q) => n + q.score / q.total, 0) / data.quizzes.length) * 100)
    : null;
  const days = streak(data);
  const graded = stats.filter((x) => x.s.levels !== 'core');
  const predicted = chosen && graded.length > 0 && graded.every((x) => x.grade !== null) ? graded.reduce((n, x) => n + (x.grade ?? 0), 0) : null;

  return (
    <Screen>
      <Title subtitle={profile.name ? `Keep it up, ${profile.name}!` : 'Everything you’ve studied, in one place.'}>
        My Progress
      </Title>

      <View style={styles.tiles}>
        <Tile emoji="🔥" value={`${days}`} label="day streak" />
        <Tile emoji="📚" value={`${totalStudied}/${totalChapters}`} label="chapters studied" />
        <Tile emoji="📝" value={quizAvg === null ? '–' : `${quizAvg}%`} label="avg quiz score" />
        <Tile emoji="🎓" value={predicted === null ? '–' : `${predicted}/${graded.length * 7}`} label="predicted points" />
      </View>
      <Muted style={{ marginTop: -4, marginBottom: 12, fontSize: 12 }}>
        {predicted === null
          ? chosen
            ? 'Take a quiz in each of your subjects to see a predicted Diploma total.'
            : 'Choose your subjects on Home to see a predicted Diploma total.'
          : `Plus up to 3 core points from TOK and the Extended Essay (max 45). Estimates from your recent quiz scores — not official IB grades.`}
      </Muted>

      <Card>
        <Body style={{ fontWeight: '800' }}>Study activity · last 7 days</Body>
        <Muted style={{ marginBottom: 8 }}>Lessons, flashcards and quizzes completed. Tap a bar for details.</Muted>
        <ActivityChart days={lastDays(data, 7)} />
      </Card>

      <Card>
        <Body style={{ fontWeight: '800', marginBottom: 8 }}>By subject</Body>
        {stats.map(({ s, levelLabel, chapters, studied, avg, grade }) => {
          const pct = chapters ? Math.round((studied / chapters) * 100) : 0;
          return (
            <View key={s.id} style={{ marginBottom: 14 }}>
              <View style={styles.subjectRow}>
                <Body style={{ fontWeight: '700', flexShrink: 1 }}>
                  {s.emoji} {s.short ?? s.name}
                  {chosen && levelLabel ? ` · ${levelLabel}` : ''}
                </Body>
                <Body style={{ fontWeight: '800' }}>{grade === null ? '–' : `≈ ${grade}`}</Body>
              </View>
              <View style={[styles.track, { backgroundColor: colors.cardAlt }]}>
                {pct > 0 && <View style={[styles.fill, { width: `${pct}%`, backgroundColor: s.color }]} />}
              </View>
              <Muted style={{ marginTop: 4, fontSize: 12 }}>
                {studied}/{chapters} chapters studied · recent quiz avg {avg === null ? '–' : `${avg}%`}
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
                    {s?.emoji} {s?.short ?? s?.name ?? q.subjectId}
                    {q.chapterId ? ` · ${q.chapterId}` : ''}
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
                  // bar with a 4px rounded top and a square base on the baseline
                  <G opacity={isSel ? 1 : 0.55}>
                    <Rect x={x} y={baseY - h} width={barW} height={h} rx={r} ry={r} fill={colors.primary} />
                    <Rect x={x} y={baseY - Math.min(h, r)} width={barW} height={Math.min(h, r)} fill={colors.primary} />
                  </G>
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
              </React.Fragment>
            );
          })}
        </Svg>
      )}
      {/* tap targets: one full-height column per day, bigger than the bar itself */}
      {width > 0 && (
        <View style={[StyleSheet.absoluteFill, { flexDirection: 'row', height: CHART_H }]}>
          {days.map((d, i) => (
            <Pressable
              key={d.day}
              style={{ flex: 1 }}
              onPress={() => setSelected(i)}
              accessibilityLabel={`${d.label}: ${d.count} activities`}
            />
          ))}
        </View>
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
