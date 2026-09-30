import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { chaptersFor, findChapter, Level, Subject } from '../data/subjects';

/** A button showing the current chapter; tapping it opens the subject's syllabus to pick another. */
export default function ChapterPicker({
  subject,
  level,
  value,
  onChange,
}: {
  subject: Subject;
  level: Level | undefined;
  value: string | undefined;
  onChange: (chapterId: string) => void;
}) {
  const { colors } = useApp();
  const [open, setOpen] = useState(false);
  const current = findChapter(subject, value);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={[styles.button, { backgroundColor: colors.card, borderColor: subject.color }]}
        accessibilityLabel="Choose chapter"
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: subject.color, fontWeight: '800', fontSize: 12 }}>{current?.chapter.id ?? 'Chapter'}</Text>
          <Text style={{ color: colors.text, fontWeight: '700', fontSize: 15 }} numberOfLines={2}>
            {current?.chapter.title ?? 'Choose a chapter'}
          </Text>
        </View>
        <Text style={{ color: colors.textMuted, fontSize: 13, fontWeight: '700' }}>Change ▾</Text>
      </Pressable>

      <Modal visible={open} animationType="slide" onRequestClose={() => setOpen(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: '800', flex: 1 }}>
              {subject.emoji} {subject.short ?? subject.name}
            </Text>
            <Pressable onPress={() => setOpen(false)} hitSlop={10}>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>Close</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
            {chaptersFor(subject, level).map(({ unit, chapters }) =>
              chapters.length === 0 ? null : (
                <View key={unit.id} style={{ marginBottom: 12 }}>
                  <Text style={[styles.unit, { color: colors.textMuted }]}>{unit.title}</Text>
                  {chapters.map((c) => {
                    const active = c.id === value;
                    return (
                      <Pressable
                        key={c.id}
                        onPress={() => {
                          onChange(c.id);
                          setOpen(false);
                        }}
                        style={[
                          styles.row,
                          { backgroundColor: active ? subject.color : colors.card, borderColor: active ? subject.color : colors.border },
                        ]}
                      >
                        <Text style={{ color: active ? '#fff' : subject.color, fontWeight: '800', fontSize: 12 }}>{c.id}</Text>
                        <Text style={{ color: active ? '#fff' : colors.text, fontSize: 15 }}>
                          {c.title}
                          {c.hl ? '  · HL' : ''}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              ),
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 2, borderRadius: 14, padding: 12, marginBottom: 14 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: StyleSheet.hairlineWidth },
  unit: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  row: { borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 6, gap: 2 },
});
