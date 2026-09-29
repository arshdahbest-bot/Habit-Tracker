// Turns the student's photo into their tutor avatar.
//
// Offline (default): the app builds a cartoon-style avatar on-device — the photo is
// cropped into a circle, colour-tinted, given a thick outline, a graduation cap and
// animated eyes/mouth (see components/Avatar.tsx). No data leaves the phone.
//
// Online (optional): set EXPO_PUBLIC_AVATAR_API_URL to your own server endpoint that
// calls an image-generation model. Never put a paid AI API key inside the app itself —
// keep it on your server. The endpoint receives { imageBase64 } and returns { avatarUrl }.

const AVATAR_API_URL = process.env.EXPO_PUBLIC_AVATAR_API_URL;

export const AVATAR_TINTS = ['#4F46E5', '#EC4899', '#0EA5E9', '#16A34A', '#F59E0B', '#8B5CF6'];
export const AVATAR_HATS = ['🎓', '👑', '🧢', '🎩', '⭐', '🌸'];

export function isAiAvatarEnabled() {
  return !!AVATAR_API_URL;
}

export async function generateAiAvatar(imageBase64: string): Promise<string | null> {
  if (!AVATAR_API_URL) return null;
  try {
    const res = await fetch(AVATAR_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64 }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { avatarUrl?: string };
    return json.avatarUrl ?? null;
  } catch {
    return null;
  }
}
