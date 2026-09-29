import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Platform, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Avatar from '../../components/Avatar';
import { Body, Button, Card, Muted, Screen, Title } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { SUBJECTS } from '../../data/subjects';
import { generateAiAvatar, isAiAvatarEnabled } from '../../services/avatarService';

export default function HomeScreen() {
  const { colors, mode, toggleTheme, profile, updateProfile } = useApp();
  const [busy, setBusy] = useState(false);

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
        base64: isAiAvatarEnabled(),
      };
      const result = fromCamera
        ? await ImagePicker.launchCameraAsync(options)
        : await ImagePicker.launchImageLibraryAsync(options);
      if (result.canceled || !result.assets?.[0]) return;
      const asset = result.assets[0];
      updateProfile({ photoUri: asset.uri, avatarUri: null });

      if (isAiAvatarEnabled() && asset.base64) {
        setBusy(true);
        const aiUrl = await generateAiAvatar(asset.base64);
        if (aiUrl) updateProfile({ avatarUri: aiUrl });
        setBusy(false);
      }
    } catch {
      setBusy(false);
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
            ? busy
              ? 'Creating your AI avatar…'
              : `Meet ${profile.tutorName || 'your tutor'}! Customize the look and voice below.`
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
          title="🎨 Customize avatar, voice & colours"
          variant="secondary"
          onPress={() => router.push('/customize')}
          style={{ marginTop: 10, alignSelf: 'stretch' }}
        />
      </Card>

      <Text style={[styles.section, { color: colors.text }]}>What do you want to study?</Text>
      {SUBJECTS.map((s) => (
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
            <Body style={{ fontWeight: '700' }}>{s.name}</Body>
            <Muted>
              {s.group} · {s.lessons.length} lessons · {s.flashcards.length} cards
            </Muted>
          </View>
          <Text style={{ color: colors.textMuted, fontSize: 20 }}>›</Text>
        </Pressable>
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

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'flex-start' },
  themeToggle: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
  cardTitle: { fontSize: 18, fontWeight: '700' },
  input: { width: '100%', borderWidth: 1, borderRadius: 12, padding: 12, fontSize: 16, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 10, width: '100%' },
  section: { fontSize: 20, fontWeight: '800', marginTop: 12, marginBottom: 10 },
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
