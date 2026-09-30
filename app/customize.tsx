import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Avatar from '../components/Avatar';
import { ThemeSwatch } from '../components/Background';
import { Body, Button, Card, Muted, Screen, Title } from '../components/UI';
import { ACCENTS, AvatarStyle, BackgroundSettings, BACKGROUNDS, useApp, VoiceSettings } from '../context/AppContext';
import { AVATAR_HATS, AVATAR_TINTS } from '../services/avatarService';
import { listVoices, useSpeaker } from '../services/useSpeaker';

type Option<T> = { label: string; value: T };

function Segmented<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
}) {
  const { colors } = useApp();
  return (
    <View style={[styles.segment, { backgroundColor: colors.cardAlt }]}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <Pressable
            key={String(o.value)}
            onPress={() => onChange(o.value)}
            style={[styles.segmentItem, active && { backgroundColor: colors.primary }]}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
          >
            <Text style={{ color: active ? colors.primaryText : colors.text, fontWeight: '700', fontSize: 13 }}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  const { colors } = useApp();
  return <Text style={[styles.label, { color: colors.text }]}>{children}</Text>;
}

export default function CustomizeScreen() {
  const { colors, mode, toggleTheme, profile, updateProfile } = useApp();
  const { speaking, say, stop } = useSpeaker();
  const [voices, setVoices] = useState<{ identifier: string; name: string }[]>([]);

  useEffect(() => {
    listVoices().then(setVoices);
  }, []);

  const setStyle = (patch: Partial<AvatarStyle>) => updateProfile({ avatarStyle: { ...profile.avatarStyle, ...patch } });
  const setVoice = (patch: Partial<VoiceSettings>) => updateProfile({ voice: { ...profile.voice, ...patch } });
  const setBackground = (patch: Partial<BackgroundSettings>) =>
    updateProfile({ background: { ...profile.background, ...patch } });

  async function pickBackground() {
    try {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) return;
      const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.7 });
      if (!result.canceled && result.assets?.[0]) setBackground({ photoUri: result.assets[0].uri, glass: true });
    } catch {
      // Picker unavailable or cancelled: keep the current background.
    }
  }

  return (
    <Screen>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 8 }}>‹ Back</Text>
      </Pressable>
      <Title subtitle="Make the app and your tutor your own.">Customize 🎨</Title>

      <Card style={{ alignItems: 'center' }}>
        <Avatar size={130} speaking={speaking} />
        <Body style={{ fontWeight: '700', marginTop: 6 }}>Hi, I’m {profile.tutorName || 'your tutor'}!</Body>
        <Button
          title={speaking ? '⏹ Stop' : '🔊 Test voice'}
          variant="secondary"
          onPress={() =>
            speaking
              ? stop()
              : say(`Hi${profile.name ? ' ' + profile.name : ''}! I'm ${profile.tutorName || 'your tutor'}. Ready to study?`)
          }
          style={{ marginTop: 10, alignSelf: 'stretch' }}
        />
      </Card>

      <Card>
        <Label>Tutor name</Label>
        <TextInput
          value={profile.tutorName}
          onChangeText={(t) => updateProfile({ tutorName: t.slice(0, 20) })}
          placeholder="e.g. Nova"
          placeholderTextColor={colors.textMuted}
          style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.cardAlt }]}
        />

        <Label>App colour</Label>
        <View style={styles.wrap}>
          {Object.entries(ACCENTS).map(([key, a]) => (
            <Pressable
              key={key}
              onPress={() => updateProfile({ accent: key })}
              style={[styles.swatch, { backgroundColor: a[mode], borderColor: profile.accent === key ? colors.text : 'transparent' }]}
              accessibilityLabel={`App colour ${a.name}`}
            />
          ))}
        </View>

        <View style={styles.switchRow}>
          <Label>Dark mode</Label>
          <Switch
            value={mode === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor="#fff"
          />
        </View>
      </Card>

      <Card>
        <Body style={{ fontWeight: '800' }}>Background</Body>
        <Label>Theme</Label>
        <View style={styles.wrap}>
          {Object.entries(BACKGROUNDS).map(([key, b]) => {
            const active = profile.background.theme === key;
            return (
              <Pressable
                key={key}
                onPress={() => setBackground({ theme: key })}
                style={[styles.theme, { borderColor: active ? colors.primary : 'transparent' }]}
                accessibilityLabel={`Background ${b.name}`}
                accessibilityState={{ selected: active }}
              >
                <View style={[styles.themeDot, { borderColor: colors.border }]}>
                  <ThemeSwatch theme={key} size={38} />
                </View>
                <Text style={{ color: colors.text, fontSize: 11, fontWeight: active ? '800' : '500' }}>{b.name}</Text>
              </Pressable>
            );
          })}
        </View>

        <Label>Pattern</Label>
        <View style={styles.wrap}>
          {(
            [
              ['none', 'None'],
              ['dots', '• Dots'],
              ['grid', '▦ Grid'],
              ['lines', '☰ Lined'],
              ['diagonal', '⟋ Stripes'],
              ['bubbles', '◯ Bubbles'],
            ] as const
          ).map(([value, label]) => {
            const active = profile.background.pattern === value;
            return (
              <Pressable
                key={value}
                onPress={() => setBackground({ pattern: value })}
                style={[styles.chip, { backgroundColor: active ? colors.primary : colors.cardAlt, borderColor: active ? colors.primary : colors.border }]}
              >
                <Text style={{ color: active ? colors.primaryText : colors.text, fontSize: 13, fontWeight: '600' }}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
        {profile.background.photoUri && profile.background.pattern !== 'none' && (
          <Muted style={{ marginTop: 6 }}>Patterns are hidden while a background photo is set.</Muted>
        )}

        <Label>Your own photo</Label>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button
            title={profile.background.photoUri ? '🖼️ Change photo' : '🖼️ Choose photo'}
            variant="secondary"
            onPress={pickBackground}
            style={{ flex: 1 }}
          />
          {profile.background.photoUri && (
            <Button title="Remove" variant="secondary" onPress={() => setBackground({ photoUri: null })} style={{ flex: 1 }} />
          )}
        </View>
        {profile.background.photoUri && (
          <>
            <Label>Photo fade</Label>
            <Segmented
              value={profile.background.photoFade}
              onChange={(photoFade) => setBackground({ photoFade })}
              options={[
                { label: 'Vivid', value: 0.25 },
                { label: 'Soft', value: 0.55 },
                { label: 'Faint', value: 0.8 },
              ]}
            />
          </>
        )}

        <View style={[styles.switchRow, { marginTop: 8 }]}>
          <View style={{ flex: 1 }}>
            <Label>See-through cards</Label>
            <Muted style={{ marginTop: -4 }}>Let the background show through cards.</Muted>
          </View>
          <Switch
            value={profile.background.glass}
            onValueChange={(glass) => setBackground({ glass })}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor="#fff"
          />
        </View>
      </Card>

      <Card>
        <Body style={{ fontWeight: '800' }}>Avatar</Body>
        <Label>Colour</Label>
        <View style={styles.wrap}>
          {AVATAR_TINTS.map((c) => (
            <Pressable
              key={c}
              onPress={() => setStyle({ hue: c })}
              style={[styles.swatch, { backgroundColor: c, borderColor: profile.avatarStyle.hue === c ? colors.text : 'transparent' }]}
              accessibilityLabel={`Avatar colour ${c}`}
            />
          ))}
        </View>

        <Label>Accessory</Label>
        <View style={styles.wrap}>
          {AVATAR_HATS.map((h) => (
            <Pressable
              key={h || 'none'}
              onPress={() => setStyle({ hat: h })}
              style={[
                styles.hat,
                { borderColor: profile.avatarStyle.hat === h ? colors.primary : colors.border, backgroundColor: colors.cardAlt },
              ]}
              accessibilityLabel={h ? `Accessory ${h}` : 'No accessory'}
            >
              {h ? <Text style={{ fontSize: 22 }}>{h}</Text> : <Text style={{ color: colors.textMuted, fontSize: 11 }}>None</Text>}
            </Pressable>
          ))}
        </View>

        <Label>Shape</Label>
        <Segmented
          value={profile.avatarStyle.shape}
          onChange={(shape) => setStyle({ shape })}
          options={[
            { label: '● Circle', value: 'circle' },
            { label: '▢ Rounded', value: 'rounded' },
            { label: '■ Square', value: 'square' },
          ]}
        />

        <Label>Frame</Label>
        <Segmented
          value={profile.avatarStyle.ring}
          onChange={(ring) => setStyle({ ring })}
          options={[
            { label: 'Thin', value: 'thin' },
            { label: 'Thick', value: 'thick' },
          ]}
        />

        <Label>Cartoon filter</Label>
        <Segmented
          value={profile.avatarStyle.filter}
          onChange={(filter) => setStyle({ filter })}
          options={[
            { label: 'Off', value: 0 },
            { label: 'Light', value: 1 },
            { label: 'Medium', value: 2 },
            { label: 'Strong', value: 3 },
          ]}
        />
      </Card>

      <Card>
        <Body style={{ fontWeight: '800' }}>Avatar voice</Body>
        <Label>Speed</Label>
        <Segmented
          value={profile.voice.rate}
          onChange={(rate) => setVoice({ rate })}
          options={[
            { label: 'Slow', value: 0.75 },
            { label: 'Normal', value: 0.95 },
            { label: 'Fast', value: 1.15 },
          ]}
        />
        <Label>Pitch</Label>
        <Segmented
          value={profile.voice.pitch}
          onChange={(pitch) => setVoice({ pitch })}
          options={[
            { label: 'Low', value: 0.8 },
            { label: 'Normal', value: 1 },
            { label: 'High', value: 1.25 },
          ]}
        />
        <Label>Voice</Label>
        <View style={styles.wrap}>
          {[{ identifier: '', name: 'Phone default' }, ...voices].map((v) => {
            const active = (profile.voice.voiceId ?? '') === v.identifier;
            return (
              <Pressable
                key={v.identifier || 'default'}
                onPress={() => setVoice({ voiceId: v.identifier || null })}
                style={[
                  styles.chip,
                  { backgroundColor: active ? colors.primary : colors.cardAlt, borderColor: active ? colors.primary : colors.border },
                ]}
              >
                <Text style={{ color: active ? colors.primaryText : colors.text, fontSize: 13, fontWeight: '600' }}>{v.name}</Text>
              </Pressable>
            );
          })}
        </View>
        {voices.length === 0 && <Muted style={{ marginTop: 6 }}>Your phone will use its default voice.</Muted>}
      </Card>

      <Button title="Done" onPress={() => router.back()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: '700', marginTop: 12, marginBottom: 6 },
  input: { borderWidth: 1, borderRadius: 12, padding: 12, fontSize: 16 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  swatch: { width: 34, height: 34, borderRadius: 17, borderWidth: 3 },
  hat: { width: 44, height: 44, borderRadius: 12, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  segment: { flexDirection: 'row', borderRadius: 12, padding: 3 },
  segmentItem: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  theme: { alignItems: 'center', gap: 4, padding: 4, borderRadius: 12, borderWidth: 2, width: 64 },
  themeDot: { borderRadius: 20, borderWidth: 1, overflow: 'hidden' },
  chip: { paddingVertical: 7, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1 },
});
