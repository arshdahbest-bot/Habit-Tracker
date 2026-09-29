import AsyncStorage from '@react-native-async-storage/async-storage';

export type ChatImage = { uri: string; base64?: string; mediaType: string };

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  image?: ChatImage;
  error?: boolean;
};

// In development the Expo dev server answers /api/ask itself. For a published app,
// set EXPO_PUBLIC_API_BASE_URL to the server you deployed the API route to (see README).
const BASE = (process.env.EXPO_PUBLIC_API_BASE_URL ?? '').replace(/\/$/, '');
const CHAT_KEY = 'ask:chat';

export async function askTutor(
  history: ChatMessage[],
  opts: { tutorName: string; subject?: string; level?: string },
): Promise<string> {
  const usable = history.filter((m) => !m.error);
  const lastUser = [...usable].reverse().find((m) => m.role === 'user');
  const messages = usable.map((m) => ({
    role: m.role,
    // Only the newest photo is re-sent, to keep requests small.
    text: m.image && m !== lastUser ? `${m.text} [photo sent earlier]`.trim() : m.text,
    image: m === lastUser && m.image?.base64 ? { base64: m.image.base64, mediaType: m.image.mediaType } : undefined,
  }));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 120_000);
  let res: Response;
  try {
    res = await fetch(`${BASE}/api/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, tutorName: opts.tutorName, subject: opts.subject, level: opts.level }),
      signal: controller.signal,
    });
  } catch {
    throw new Error("Couldn't reach the AI tutor. Check your internet, and that the app is running from `npx expo start`.");
  } finally {
    clearTimeout(timer);
  }

  let data: { answer?: string; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    // fall through to the generic message below
  }
  if (!res.ok || !data.answer) throw new Error(data.error ?? 'The AI tutor is not available right now. Please try again.');
  return data.answer;
}

export async function loadChat(): Promise<ChatMessage[]> {
  try {
    const raw = await AsyncStorage.getItem(CHAT_KEY);
    return raw ? (JSON.parse(raw) as ChatMessage[]) : [];
  } catch {
    return [];
  }
}

export async function saveChat(messages: ChatMessage[]) {
  // Keep the last 40 messages; photos are stored by their on-device address only.
  const slim = messages.slice(-40).map((m) => (m.image ? { ...m, image: { uri: m.image.uri, mediaType: m.image.mediaType } } : m));
  try {
    await AsyncStorage.setItem(CHAT_KEY, JSON.stringify(slim));
  } catch {
    // storage full or unavailable — chat still works for this session
  }
}
