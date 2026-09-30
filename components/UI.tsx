import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import Background from './Background';
import { byGroup, groupShort } from '../data/subjects';
import { useMySubjects } from '../services/mySubjects';

export function Screen({ children, scroll = true }: { children: React.ReactNode; scroll?: boolean }) {
  const { colors } = useApp();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top', 'left', 'right']}>
      <Background />
      {scroll ? (
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, { flex: 1 }]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

export function Title({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  const { colors } = useApp();
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: colors.text }}>{children}</Text>
      {subtitle ? <Text style={{ fontSize: 15, color: colors.textMuted, marginTop: 4 }}>{subtitle}</Text> : null}
    </View>
  );
}

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  const { colors } = useApp();
  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }, style]}>{children}</View>
  );
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled,
  style,
}: {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: ViewStyle;
}) {
  const { colors } = useApp();
  const primary = variant === 'primary';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: primary ? colors.primary : colors.cardAlt,
          opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      <Text style={{ color: primary ? colors.primaryText : colors.text, fontWeight: '700', fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
}

export function Body({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const { colors } = useApp();
  return <Text style={[{ color: colors.text, fontSize: 16, lineHeight: 24 }, style]}>{children}</Text>;
}

export function Muted({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const { colors } = useApp();
  return <Text style={[{ color: colors.textMuted, fontSize: 14 }, style]}>{children}</Text>;
}

// "Group 1 · …" -> "G1", "Groups 3 & 4 · …" -> "G3/4", "DP Core" -> "Core".
const groupTag = (group: string) =>
  groupShort(group).replace(/^Groups? /, 'G').replace(' & ', '/').replace('DP Core', 'Core');

export function SubjectPicker({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  const { colors } = useApp();
  const { list } = useMySubjects();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16, flexGrow: 0 }}>
      {byGroup(list, (m) => m.subject).map(({ group, items }) => (
        <View key={group} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.groupLabel, { color: colors.textMuted }]}>{groupTag(group)}</Text>
          {items.map(({ subject: s, levelLabel }) => {
        const active = s.id === value;
        return (
          <Pressable
            key={s.id}
            onPress={() => onChange(s.id)}
            style={[
              styles.chip,
              { backgroundColor: active ? s.color : colors.card, borderColor: active ? s.color : colors.border },
            ]}
          >
            <Text style={{ color: active ? '#fff' : colors.text, fontWeight: '600' }}>
              {s.emoji} {s.short ?? s.name}
              {levelLabel && levelLabel !== 'SL/HL' ? ` · ${levelLabel}` : ''}
            </Text>
          </Pressable>
        );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

export function Badge({ text, color }: { text: string; color: string }) {
  return (
    <View style={{ backgroundColor: color, borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2, alignSelf: 'flex-start' }}>
      <Text style={{ color: '#fff', fontSize: 11, fontWeight: '800' }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  card: { borderRadius: 16, padding: 16, borderWidth: 1, marginBottom: 12 },
  button: { paddingVertical: 14, paddingHorizontal: 18, borderRadius: 12, alignItems: 'center' },
  groupLabel: { fontSize: 10, fontWeight: '900', marginRight: 6, opacity: 0.8 },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1, marginRight: 8 },
});
