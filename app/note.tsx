import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ChapterPicker from '../components/ChapterPicker';
import { Button, Muted, Screen } from '../components/UI';
import { useApp } from '../context/AppContext';
import { getSubject } from '../data/subjects';
import { useMySubjects } from '../services/mySubjects';
import { deleteNote, getNotes, newNote, Note, NOTE_COLORS, saveNote } from '../services/notes';
import { useSpeaker } from '../services/useSpeaker';

// Snippets the toolbar inserts at the cursor.
const SNIPPETS = [
  { label: '• List', text: '\n• ' },
  { label: 'Key term', text: '\n🔑 Key term: ' },
  { label: 'Example', text: '\n🌍 Example: ' },
  { label: 'Exam tip', text: '\n🎯 Exam tip: ' },
  { label: 'Question', text: '\n❓ To ask my teacher: ' },
];

const hasContent = (n: Note) => !!(n.title.trim() || n.body.trim());

export default function NoteScreen() {
  const { colors, mode } = useApp();
  const params = useLocalSearchParams<{ id?: string; subject?: string; chapter?: string }>();
  const { list, levelOf } = useMySubjects();
  const [note, setNote] = useState<Note | null>(null);
  // Cursor position for the snippet toolbar; -1 until the student places the cursor (insert at the end).
  const selection = useRef({ start: -1, end: -1 });
  const [dirty, setDirty] = useState(false);
  const { speaking, say, stop } = useSpeaker();

  // Open the note, or start a new one for the subject/chapter passed in.
  useEffect(() => {
    (async () => {
      const existing = params.id ? (await getNotes()).find((n) => n.id === params.id) : undefined;
      setNote(existing ?? newNote(params.subject, params.chapter));
    })();
  }, [params.id, params.subject, params.chapter]);

  // Autosave shortly after typing stops. Empty notes are never saved.
  useEffect(() => {
    if (!note || !dirty) return;
    const t = setTimeout(() => {
      if (hasContent(note)) saveNote(note);
      setDirty(false);
    }, 400);
    return () => clearTimeout(t);
  }, [note, dirty]);

  if (!note) return <Screen>{null}</Screen>;

  const edit = (patch: Partial<Note>) => {
    setDirty(true);
    setNote((n) => (n ? { ...n, ...patch } : n));
  };

  const close = async () => {
    stop();
    if (dirty && hasContent(note)) await saveNote(note);
    setDirty(false);
    router.back();
  };

  const remove = () => {
    const go = async () => {
      stop();
      setDirty(false);
      await deleteNote(note.id);
      router.back();
    };
    if (Platform.OS === 'web') {
      if (window.confirm('Delete this note?')) go();
    } else {
      Alert.alert('Delete this note?', 'This can’t be undone.', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: go },
      ]);
    }
  };

  const insert = (text: string) => {
    const body = note.body;
    const { start, end } = selection.current.start < 0 ? { start: body.length, end: body.length } : selection.current;
    const at = Math.min(start, body.length);
    // Don't start the note with a blank line.
    const piece = at === 0 ? text.replace(/^\n/, '') : text;
    edit({ body: body.slice(0, at) + piece + body.slice(Math.min(end, body.length)) });
    selection.current = { start: at + piece.length, end: at + piece.length };
  };

  const subject = note.subjectId ? getSubject(note.subjectId) : null;
  const words = note.body.trim() ? note.body.trim().split(/\s+/).length : 0;
  const bg = (NOTE_COLORS[note.color] ?? NOTE_COLORS.plain)[mode];
  const subjectIds = list.map((m) => m.subject.id);
  if (note.subjectId && !subjectIds.includes(note.subjectId)) subjectIds.push(note.subjectId);

  return (
    <Screen>
      <View style={styles.topRow}>
        <Pressable onPress={close} hitSlop={8}>
          <Text style={{ color: colors.primary, fontWeight: '700' }}>‹ Notes</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <Pressable onPress={() => edit({ pinned: !note.pinned })} hitSlop={8} accessibilityLabel={note.pinned ? 'Unpin' : 'Pin'}>
            <Text style={{ color: colors.text, fontWeight: '700', opacity: note.pinned ? 1 : 0.5 }}>📌 {note.pinned ? 'Pinned' : 'Pin'}</Text>
          </Pressable>
          <Pressable onPress={remove} hitSlop={8}>
            <Text style={{ color: colors.danger, fontWeight: '700' }}>Delete</Text>
          </Pressable>
        </View>
      </View>

      <Text style={[styles.label, { color: colors.textMuted }]}>Subject</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginBottom: 10 }}>
        {[undefined, ...subjectIds].map((id) => {
          const s = id ? getSubject(id) : null;
          const active = note.subjectId === id;
          const color = s?.color ?? colors.textMuted;
          return (
            <Pressable
              key={id ?? 'general'}
              onPress={() => edit({ subjectId: id, chapterId: undefined })}
              style={[styles.chip, { backgroundColor: active ? color : colors.card, borderColor: active ? color : colors.border }]}
            >
              <Text style={{ color: active ? '#fff' : colors.text, fontWeight: '600' }}>
                {s ? `${s.emoji} ${s.short ?? s.name}` : 'General'}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {subject && (
        <>
          <ChapterPicker subject={subject} level={levelOf(subject.id)} value={note.chapterId} onChange={(chapterId) => edit({ chapterId })} />
          {note.chapterId && (
            <View style={{ flexDirection: 'row', gap: 16, marginTop: -6, marginBottom: 12 }}>
              <Pressable onPress={() => router.push({ pathname: '/chapter', params: { subject: subject.id, chapter: note.chapterId } })}>
                <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 13 }}>Open chapter ›</Text>
              </Pressable>
              <Pressable onPress={() => edit({ chapterId: undefined })}>
                <Text style={{ color: colors.textMuted, fontWeight: '700', fontSize: 13 }}>Unlink chapter</Text>
              </Pressable>
            </View>
          )}
        </>
      )}

      <View style={[styles.paper, { backgroundColor: bg, borderColor: subject?.color ?? colors.border }]}>
        <TextInput
          value={note.title}
          onChangeText={(title) => edit({ title: title.slice(0, 80) })}
          placeholder="Title"
          placeholderTextColor={colors.textMuted}
          style={[styles.title, { color: colors.text }]}
        />
        <TextInput
          value={note.body}
          onChangeText={(body) => edit({ body })}
          onSelectionChange={(e) => (selection.current = e.nativeEvent.selection)}
          placeholder="Start writing… definitions, examples, diagrams to remember, questions for your teacher."
          placeholderTextColor={colors.textMuted}
          multiline
          textAlignVertical="top"
          autoFocus={!params.id}
          style={[styles.body, { color: colors.text }]}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginTop: 10 }}>
        {SNIPPETS.map((s) => (
          <Pressable key={s.label} onPress={() => insert(s.text)} style={[styles.tool, { backgroundColor: colors.cardAlt, borderColor: colors.border }]}>
            <Text style={{ color: colors.text, fontWeight: '600', fontSize: 13 }}>{s.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {Object.entries(NOTE_COLORS).map(([key, c]) => (
            <Pressable
              key={key}
              onPress={() => edit({ color: key })}
              accessibilityLabel={`Note colour ${key}`}
              style={[styles.swatch, { backgroundColor: c[mode], borderColor: note.color === key ? colors.primary : colors.border }]}
            />
          ))}
        </View>
        <Muted style={{ fontSize: 12 }}>{words} words · {dirty ? 'Saving…' : hasContent(note) ? 'Saved' : 'Not saved yet'}</Muted>
      </View>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
        <Button
          title={speaking ? '⏹ Stop' : '🔊 Read aloud'}
          variant="secondary"
          onPress={() => (speaking ? stop() : say(`${note.title}. ${note.body}`))}
          disabled={!hasContent(note)}
          style={{ flex: 1 }}
        />
        <Button title="Done" onPress={close} style={{ flex: 1 }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  label: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  chip: { paddingVertical: 7, paddingHorizontal: 12, borderRadius: 18, borderWidth: 1, marginRight: 8 },
  paper: { borderWidth: 1, borderTopWidth: 5, borderRadius: 16, padding: 14 },
  title: { fontSize: 22, fontWeight: '800', paddingVertical: 6 },
  body: { fontSize: 16, lineHeight: 24, minHeight: 260, paddingTop: 6 },
  tool: { paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, borderWidth: 1, marginRight: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  swatch: { width: 26, height: 26, borderRadius: 13, borderWidth: 2 },
});
