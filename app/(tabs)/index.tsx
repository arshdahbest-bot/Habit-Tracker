import * as ImagePicker from 'expo-image-picker';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, Platform, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Avatar from '../../components/Avatar';
import { Badge, Body, Button, Card, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { byGroup, chaptersFor } from '../../data/subjects';
import { chapterStudied } from '../../services/chapters';
import { daysUntil, sessionFromId, upcomingSessions } from '../../services/exams';
import { useMySubjects } from '../../services/mySubjects';
import { getProgress, ProgressData } from '../../services/progress';

export default function HomeScreen() {
  const { colors, mode, toggleTheme, profile, updateProfile } = useApp();
  const { list, chosen } = useMySubjects();
  const [progress, setProgress] = useState<ProgressData | null>(null);
  useFocusEffect(
    useCallback(() => {
      getProgress().then(setProgress);
    }, []),
  );

  async function pickPhoto(fromCamera: boolean) {
    try {
      const perm = fromCamera
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) {
        Alert.alert('Permission needed', 'Please allow access so we can create your avatar.');
        return;
      }
      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.6,
      };
      const result = fromCamera
        ? await ImagePicker.launchCameraAsync(options)
        : await ImagePicker.launchImageLibraryAsync(options);
      if (result.canceled || !result.assets?.[0]) return;
      const asset = result.assets[0];
      updateProfile({ photoUri: asset.uri });
    } catch {
      Alert.alert('Oops', 'Could not load that photo. Please try another one.');
    }
  }

  return (
    <Screen>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Title subtitle="Your IBDP study buddy">
            {profile.name ? `Hi, ${profile.name}! 👋` : 'Welcome! 👋'}
          </Title>
        </View>
        <View style={styles.themeToggle}>
          <Text style={{ fontSize: 18 }}>{mode === 'dark' ? '🌙' : '☀️'}</Text>
          <Switch
            value={mode === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor="#fff"
            accessibilityLabel="Dark mode"
          />
        </View>
      </View>

      <Card style={{ alignItems: 'center' }}>
        <Avatar size={140} />
        <Text style={[styles.cardTitle, { color: colors.text, marginTop: 8 }]}>Your Tutor Avatar</Text>
        <Muted style={{ textAlign: 'center', marginBottom: 12 }}>
          {profile.photoUri
            ? `Meet ${profile.tutorName || 'your tutor'}! Customize the look and voice below.`
            : 'Add your picture and it becomes the avatar that teaches you.'}
        </Muted>

        <TextInput
          placeholder="Your name"
          placeholderTextColor={colors.textMuted}
          value={profile.name}
          onChangeText={(name) => updateProfile({ name: name.slice(0, 20) })}
          style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.cardAlt }]}
        />

        <View style={styles.row}>
          <Button title="📷 Take photo" onPress={() => pickPhoto(true)} style={{ flex: 1 }} variant="secondary" disabled={Platform.OS === 'web'} />
          <Button title="🖼️ Choose photo" onPress={() => pickPhoto(false)} style={{ flex: 1 }} />
        </View>

        <Button
          title="🎨 Customize avatar, voice & background"
          variant="secondary"
          onPress={() => router.push('/customize')}
          style={{ marginTop: 10, alignSelf: 'stretch' }}
        />
      </Card>

      <ExamCountdown />

      <View style={styles.tools}>
        {[
          { emoji: '⏱️', label: 'Focus timer', go: () => router.push('/focus') },
          { emoji: '🗒️', label: 'My notes', go: () => router.push('/notes') },
          { emoji: '🎯', label: 'Command terms', go: () => router.push('/command-terms') },
        ].map((t) => (
          <Pressable
            key={t.label}
            onPress={t.go}
            style={({ pressed }) => [styles.tool, { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={{ fontSize: 24 }}>{t.emoji}</Text>
            <Text style={{ color: colors.text, fontWeight: '700', fontSize: 12, marginTop: 4, textAlign: 'center' }}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.sectionRow}>
        <Text style={[styles.section, { color: colors.text }]}>{chosen ? 'My IB subjects' : 'IB subjects'}</Text>
        <Pressable onPress={() => router.push('/subjects')} hitSlop={8}>
          <Text style={{ color: colors.primary, fontWeight: '700' }}>{chosen ? 'Edit' : 'Choose mine'}</Text>
        </Pressable>
      </View>
      {!chosen && (
        <Card style={{ backgroundColor: colors.cardAlt }}>
          <Body style={{ fontWeight: '700' }}>🎯 Set up your Diploma</Body>
          <Muted style={{ marginTop: 4 }}>
            Choose your 6 subjects and whether each is SL or HL. SL hides HL-only chapters, and your tutor pitches lessons at your level.
          </Muted>
          <Button title="Choose my subjects" onPress={() => router.push('/subjects')} style={{ marginTop: 10 }} />
        </Card>
      )}
      {byGroup(list, (m) => m.subject).map(({ group, items }) => (
        <View key={group}>
          <Text style={[styles.group, { color: colors.textMuted }]}>{group}</Text>
          {items.map(({ subject: s, level, levelLabel }) => {
        const chapters = chaptersFor(s, level).flatMap((u) => u.chapters);
        const done = chapters.filter((c) => chapterStudied(progress, s, c.id)).length;
        return (
          <Pressable
            key={s.id}
            onPress={() => router.push({ pathname: '/tutor', params: { subject: s.id } })}
            style={({ pressed }) => [
              styles.subject,
              { backgroundColor: colors.card, borderColor: colors.border, borderLeftColor: s.color, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={{ fontSize: 28 }}>{s.emoji}</Text>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Body style={{ fontWeight: '700', flexShrink: 1 }}>{s.name}</Body>
                {chosen && levelLabel ? <Badge text={levelLabel} color={s.color} /> : null}
              </View>
              <Muted>
                {chapters.length} chapters · {done} studied
              </Muted>
            </View>
            <Text style={{ color: colors.textMuted, fontSize: 20 }}>›</Text>
          </Pressable>
        );
          })}
        </View>
      ))}

      <Card style={{ marginTop: 8, backgroundColor: colors.cardAlt }}>
        <Body style={{ fontWeight: '700' }}>🎮 Need a break?</Body>
        <Muted style={{ marginTop: 4 }}>
          After studying, play one quick game per day in the Break tab and see how you rank on today’s leaderboard.
        </Muted>
      </Card>
    </Screen>
  );
}

function ExamCountdown() {
  const { colors, profile, updateProfile } = useApp();
  const [editing, setEditing] = useState(false);
  const session = sessionFromId(profile.examSession);

  if (!session || editing) {
    return (
      <Card>
        <Body style={{ fontWeight: '800' }}>📅 When are your final IB exams?</Body>
        <Muted style={{ marginTop: 4, marginBottom: 10 }}>We’ll count down the days so you can plan your revision.</Muted>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {upcomingSessions().map((s) => (
            <Pressable
              key={s.id}
              onPress={() => {
                updateProfile({ examSession: s.id });
                setEditing(false);
              }}
              style={[
                styles.session,
                { borderColor: s.id === profile.examSession ? colors.primary : colors.border, backgroundColor: colors.cardAlt },
              ]}
            >
              <Text style={{ color: colors.text, fontWeight: '700' }}>{s.label}</Text>
            </Pressable>
          ))}
        </View>
      </Card>
    );
  }

  const days = daysUntil(session.start);
  const weeks = Math.floor(days / 7);
  return (
    <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12, borderColor: colors.primary }}>
      <View style={[styles.countBox, { backgroundColor: colors.primary }]}>
        <Text style={{ color: colors.primaryText, fontSize: 26, fontWeight: '900' }}>{days}</Text>
        <Text style={{ color: colors.primaryText, fontSize: 11, fontWeight: '700' }}>days</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Body style={{ fontWeight: '800' }}>until {session.label} exams</Body>
        <Muted>
          {days === 0 ? 'Exams are here — good luck! 🍀' : `About ${weeks} week${weeks === 1 ? '' : 's'} of revision left. Start date is approximate — check your school’s timetable.`}
        </Muted>
        <Pressable onPress={() => setEditing(true)} hitSlop={8}>
          <Text style={{ color: colors.primary, fontWeight: '700', marginTop: 4 }}>Change</Text>
        </Pressable>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  tools: { flexDirection: 'row', gap: 8, marginBottom: 4 },
  tool: { flex: 1, alignItems: 'center', paddingVertical: 12, paddingHorizontal: 4, borderRadius: 14, borderWidth: 1 },
  session: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, borderWidth: 2 },
  countBox: { width: 72, height: 72, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  header: { flexDirection: 'row', alignItems: 'flex-start' },
  themeToggle: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
  cardTitle: { fontSize: 18, fontWeight: '700' },
  input: { width: '100%', borderWidth: 1, borderRadius: 12, padding: 12, fontSize: 16, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 10, width: '100%' },
  section: { fontSize: 20, fontWeight: '800' },
  group: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 6, marginBottom: 6 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, marginBottom: 10 },
  subject: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderLeftWidth: 6,
    marginBottom: 10,
  },
});
