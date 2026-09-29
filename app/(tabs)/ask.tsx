import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../../components/Avatar';
import { Muted } from '../../components/UI';
import { useApp } from '../../context/AppContext';
import { SUBJECTS } from '../../data/subjects';
import { askTutor, ChatImage, ChatMessage, loadChat, saveChat } from '../../services/ai';
import { useSpeaker } from '../../services/useSpeaker';

const SUGGESTIONS = [
  'Explain the Krebs cycle in simple steps',
  'How do I differentiate x² · sin x?',
  'What is the difference between PED and YED?',
  'Give me a TOK knowledge question about memory',
];

const newId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

export default function AskScreen() {
  const { colors, profile } = useApp();
  const { speaking, say, stop } = useSpeaker();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState<ChatImage | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [busy, setBusy] = useState(false);
  const scroll = useRef<ScrollView>(null);
  const tutorName = profile.tutorName || 'your tutor';

  useEffect(() => {
    loadChat().then(setMessages);
  }, []);

  function update(next: ChatMessage[]) {
    setMessages(next);
    saveChat(next);
  }

  async function send(text: string) {
    const question = text.trim();
    if ((!question && !image) || busy) return;
    stop();
    const userMsg: ChatMessage = { id: newId(), role: 'user', text: question, image: image ?? undefined };
    const history = [...messages, userMsg];
    update(history);
    setInput('');
    setImage(null);
    setBusy(true);
    try {
      const answer = await askTutor(history, {
        tutorName,
        subject: SUBJECTS.find((s) => s.id === subject)?.name,
      });
      update([...history, { id: newId(), role: 'assistant', text: answer }]);
      if (autoSpeak) say(answer);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Something went wrong. Please try again.';
      update([...history, { id: newId(), role: 'assistant', text: msg, error: true }]);
    } finally {
      setBusy(false);
    }
  }

  async function attach(fromCamera: boolean) {
    const perm = fromCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert('Permission needed', 'Please allow access so you can send a photo of your question.');
      return;
    }
    const opts: ImagePicker.ImagePickerOptions = { mediaTypes: ['images'], allowsEditing: true, quality: 0.5, base64: true };
    const result = fromCamera ? await ImagePicker.launchCameraAsync(opts) : await ImagePicker.launchImageLibraryAsync(opts);
    const asset = result.canceled ? null : result.assets?.[0];
    if (asset?.base64) {
      setImage({ uri: asset.uri, base64: asset.base64, mediaType: asset.mimeType ?? 'image/jpeg' });
    }
  }

  function pickPhoto() {
    if (Platform.OS === 'web') {
      attach(false);
      return;
    }
    Alert.alert('Add a photo', 'Snap or choose a picture of your question.', [
      { text: 'Take photo', onPress: () => attach(true) },
      { text: 'Choose from library', onPress: () => attach(false) },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }

  function clearChat() {
    stop();
    update([]);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <Avatar size={52} speaking={speaking} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={[styles.title, { color: colors.text }]}>Ask {tutorName}</Text>
            <Muted>Any question, any subject — type it or send a photo.</Muted>
          </View>
          {messages.length > 0 && (
            <Pressable onPress={clearChat} accessibilityLabel="Clear chat" hitSlop={10}>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>Clear</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.controls}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, flex: 1 }}>
            {[{ id: null, name: 'Any subject', emoji: '✨' }, ...SUBJECTS].map((s) => {
              const active = subject === s.id;
              return (
                <Pressable
                  key={s.id ?? 'any'}
                  onPress={() => setSubject(s.id)}
                  style={[
                    styles.chip,
                    { backgroundColor: active ? colors.primary : colors.card, borderColor: active ? colors.primary : colors.border },
                  ]}
                >
                  <Text style={{ color: active ? colors.primaryText : colors.text, fontWeight: '600', fontSize: 13 }}>
                    {s.emoji} {s.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.speakRow}>
          <Muted>🔊 Read answers aloud</Muted>
          <Switch
            value={autoSpeak}
            onValueChange={(v) => {
              setAutoSpeak(v);
              if (!v) stop();
            }}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor="#fff"
          />
        </View>

        <ScrollView
          ref={scroll}
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16, paddingBottom: 8 }}
          onContentSizeChange={() => scroll.current?.scrollToEnd({ animated: true })}
          keyboardShouldPersistTaps="handled"
        >
          {messages.length === 0 && (
            <View>
              <Muted style={{ marginBottom: 10 }}>Try one of these:</Muted>
              {SUGGESTIONS.map((q) => (
                <Pressable
                  key={q}
                  onPress={() => send(q)}
                  style={[styles.suggestion, { backgroundColor: colors.card, borderColor: colors.border }]}
                >
                  <Text style={{ color: colors.text }}>{q}</Text>
                </Pressable>
              ))}
            </View>
          )}

          {messages.map((m) =>
            m.role === 'user' ? (
              <View key={m.id} style={[styles.bubble, styles.userBubble, { backgroundColor: colors.primary }]}>
                {m.image && <Image source={{ uri: m.image.uri }} style={styles.photo} />}
                {m.text ? <Text style={{ color: colors.primaryText, fontSize: 16, lineHeight: 22 }}>{m.text}</Text> : null}
              </View>
            ) : (
              <View
                key={m.id}
                style={[
                  styles.bubble,
                  styles.aiBubble,
                  { backgroundColor: colors.card, borderColor: m.error ? colors.danger : colors.border },
                ]}
              >
                <Text selectable style={{ color: colors.text, fontSize: 16, lineHeight: 23 }}>
                  {m.error ? '⚠️ ' : ''}
                  {m.text}
                </Text>
                {!m.error && (
                  <Pressable onPress={() => (speaking ? stop() : say(m.text))} style={styles.listen} hitSlop={8}>
                    <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 13 }}>
                      {speaking ? '⏹ Stop' : '🔊 Listen'}
                    </Text>
                  </Pressable>
                )}
              </View>
            ),
          )}

          {busy && (
            <View style={[styles.bubble, styles.aiBubble, styles.thinking, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <ActivityIndicator color={colors.primary} />
              <Muted style={{ marginLeft: 8 }}>{tutorName} is thinking…</Muted>
            </View>
          )}
        </ScrollView>

        {image && (
          <View style={[styles.attachment, { backgroundColor: colors.cardAlt }]}>
            <Image source={{ uri: image.uri }} style={styles.thumb} />
            <Muted style={{ flex: 1, marginLeft: 8 }}>Photo attached</Muted>
            <Pressable onPress={() => setImage(null)} hitSlop={10} accessibilityLabel="Remove photo">
              <Text style={{ color: colors.textMuted, fontSize: 18 }}>✕</Text>
            </Pressable>
          </View>
        )}

        <View style={[styles.inputBar, { borderTopColor: colors.border, backgroundColor: colors.background }]}>
          <Pressable
            onPress={pickPhoto}
            style={[styles.iconBtn, { backgroundColor: colors.cardAlt }]}
            accessibilityLabel="Add a photo of your question"
          >
            <Text style={{ fontSize: 20 }}>📷</Text>
          </Pressable>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder={`Ask ${tutorName} anything…`}
            placeholderTextColor={colors.textMuted}
            multiline
            style={[styles.input, { color: colors.text, backgroundColor: colors.card, borderColor: colors.border }]}
          />
          <Pressable
            onPress={() => send(input)}
            disabled={busy || (!input.trim() && !image)}
            style={[styles.sendBtn, { backgroundColor: colors.primary, opacity: busy || (!input.trim() && !image) ? 0.4 : 1 }]}
            accessibilityLabel="Send"
          >
            <Text style={{ color: colors.primaryText, fontWeight: '800', fontSize: 18 }}>↑</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 10, borderBottomWidth: StyleSheet.hairlineWidth },
  title: { fontSize: 22, fontWeight: '800' },
  controls: { flexDirection: 'row', paddingHorizontal: 16, paddingTop: 10 },
  chip: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1, marginRight: 8 },
  speakRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 6 },
  suggestion: { borderWidth: 1, borderRadius: 14, padding: 12, marginBottom: 8 },
  bubble: { borderRadius: 18, padding: 12, marginBottom: 10, maxWidth: '88%' },
  userBubble: { alignSelf: 'flex-end', borderBottomRightRadius: 4 },
  aiBubble: { alignSelf: 'flex-start', borderWidth: 1, borderBottomLeftRadius: 4 },
  thinking: { flexDirection: 'row', alignItems: 'center' },
  listen: { marginTop: 8, alignSelf: 'flex-start' },
  photo: { width: 200, height: 200, borderRadius: 12, marginBottom: 6 },
  attachment: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 6, padding: 8, borderRadius: 12 },
  thumb: { width: 44, height: 44, borderRadius: 8 },
  inputBar: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, padding: 10, borderTopWidth: StyleSheet.hairlineWidth },
  iconBtn: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  input: { flex: 1, minHeight: 44, maxHeight: 120, borderWidth: 1, borderRadius: 22, paddingHorizontal: 14, paddingVertical: 10, fontSize: 16 },
  sendBtn: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
});
