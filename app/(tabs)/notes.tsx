import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { findChapter, getSubject, SUBJECTS } from '../../data/subjects';
import { useMySubjects } from '../../services/mySubjects';
import { Note, NOTE_COLORS, notePreview, useNotes } from '../../services/notes';

const GENERAL = '__general';

function formatDate(t: number) {
  const d = new Date(t);
  const today = new Date();
  if (d.toDateString() === today.toDateString()) {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return d.toLocaleDateString([], { day: 'numeric', month: 'short' });
}

export default function NotesScreen() {
  const { colors, mode } = useApp();
  const { notes } = useNotes();
  const { list } = useMySubjects();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const shown = notes.filter((n) => {
    if (filter === GENERAL && n.subjectId) return false;
    if (filter && filter !== GENERAL && n.subjectId !== filter) return false;
    return !q || `${n.title}\n${n.body}`.toLowerCase().includes(q);
  });

  // Filter chips: the student's subjects, plus any other subject they have notes for.
  const subjectIds = [
    ...list.map((m) => m.subject.id),
    ...SUBJECTS.filter((s) => notes.some((n) => n.subjectId === s.id)).map((s) => s.id),
  ].filter((id, i, all) => all.indexOf(id) === i);

  const chip = (key: string | null, label: string, color: string) => {
    const active = filter === key;
    return (
      <Pressable
        key={key ?? 'all'}
        onPress={() => setFilter(key)}
        style={[styles.chip, { backgroundColor: active ? color : colors.card, borderColor: active ? color : colors.border }]}
      >
        <Text style={{ color: active ? '#fff' : colors.text, fontWeight: '600' }}>{label}</Text>
      </Pressable>
    );
  };

  const create = () =>
    router.push({
      pathname: '/note',
      params: filter && filter !== GENERAL ? { subject: filter } : {},
    });

  return (
    <Screen>
      <Title subtitle="Your own notes, saved on this phone. Link them to a subject and chapter.">My notes 🗒️</Title>

      <View style={styles.row}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="🔍 Search notes"
          placeholderTextColor={colors.textMuted}
          style={[styles.search, { color: colors.text, borderColor: colors.border, backgroundColor: colors.card }]}
        />
        <Button title="＋ New" onPress={create} style={{ paddingHorizontal: 16 }} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14, flexGrow: 0 }}>
        {chip(null, `All (${notes.length})`, colors.primary)}
        {chip(GENERAL, 'General', colors.textMuted)}
        {subjectIds.map((id) => {
          const s = getSubject(id);
          return chip(id, `${s.emoji} ${s.short ?? s.name}`, s.color);
        })}
      </ScrollView>

      {shown.length === 0 ? (
        <View style={[styles.empty, { borderColor: colors.border }]}>
          <Text style={{ fontSize: 40 }}>📝</Text>
          <Muted style={{ textAlign: 'center', marginTop: 8 }}>
            {notes.length === 0
              ? 'No notes yet. Tap “＋ New”, or add a note from any chapter page while you study.'
              : 'No notes match.'}
          </Muted>
        </View>
      ) : (
        shown.map((n) => <NoteRow key={n.id} note={n} mode={mode} />)
      )}
    </Screen>
  );
}

function NoteRow({ note: n, mode }: { note: Note; mode: 'light' | 'dark' }) {
  const { colors } = useApp();
  const subject = n.subjectId ? getSubject(n.subjectId) : null;
  const chapter = subject && n.chapterId ? findChapter(subject, n.chapterId)?.chapter : null;
  const bg = (NOTE_COLORS[n.color] ?? NOTE_COLORS.plain)[mode];
  const body = n.title.trim() ? n.body.trim() : n.body.trim().split('\n').slice(1).join(' ');
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/note', params: { id: n.id } })}
      style={({ pressed }) => [
        styles.note,
        { backgroundColor: bg, borderColor: colors.border, borderLeftColor: subject?.color ?? colors.textMuted, opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        {n.pinned && <Text>📌</Text>}
        <Text style={{ color: colors.text, fontWeight: '800', fontSize: 16, flex: 1 }} numberOfLines={1}>
          {notePreview(n)}
        </Text>
        <Muted style={{ fontSize: 12 }}>{formatDate(n.updatedAt)}</Muted>
      </View>
      {!!body && (
        <Text style={{ color: colors.textMuted, marginTop: 4, lineHeight: 20 }} numberOfLines={2}>
          {body}
        </Text>
      )}
      {subject && (
        <Text style={{ color: subject.color, fontWeight: '700', fontSize: 12, marginTop: 6 }} numberOfLines={1}>
          {subject.emoji} {subject.short ?? subject.name}
          {chapter ? ` · ${chapter.id} ${chapter.title}` : ''}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  search: { flex: 1, borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, fontSize: 16, minHeight: 48 },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1, marginRight: 8 },
  empty: { alignItems: 'center', padding: 28, borderWidth: 1, borderStyle: 'dashed', borderRadius: 16 },
  note: { borderWidth: 1, borderLeftWidth: 5, borderRadius: 14, padding: 14, marginBottom: 10 },
});
