import AsyncStorage from '@react-native-async-storage/async-storage';

export type GameId = 'snake' | 'pong';

export type ScoreEntry = {
  playerId: string;
  name: string;
  score: number;
  game: GameId;
  day: string; // YYYY-MM-DD (device local date)
  isDemo?: boolean;
};

const PLAYED_KEY = 'break:lastPlayed';
const LOCAL_SCORES_KEY = 'break:localScores';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export function isOnlineLeaderboard() {
  return !!(SUPABASE_URL && SUPABASE_KEY);
}

export function todayKey(d = new Date()) {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

// ---------- once-a-day lock ----------

export type PlayedToday = { day: string; game: GameId; score: number };

export async function getPlayedToday(): Promise<PlayedToday | null> {
  try {
    const raw = await AsyncStorage.getItem(PLAYED_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PlayedToday;
    return parsed.day === todayKey() ? parsed : null;
  } catch {
    return null;
  }
}

/** Called the moment a game starts, so quitting mid-game still uses up today's play. */
export async function lockToday(game: GameId) {
  await markPlayed(game, 0);
}

async function markPlayed(game: GameId, score: number) {
  const entry: PlayedToday = { day: todayKey(), game, score };
  await AsyncStorage.setItem(PLAYED_KEY, JSON.stringify(entry));
}

// ---------- leaderboard ----------

// Offline demo players so the leaderboard is never empty when no server is set up.
// They are seeded from the date, so they change every day and look the same all day.
const DEMO_NAMES = ['Aarav', 'Maya', 'Leo', 'Zara', 'Kenji', 'Sofia', 'Omar', 'Priya', 'Lucas', 'Amara', 'Noah', 'Ines'];

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function demoScores(game: GameId, day: string): ScoreEntry[] {
  const seed = Number(day.replace(/-/g, '')) + (game === 'snake' ? 7 : 13);
  const rand = seededRandom(seed);
  const max = game === 'snake' ? 40 : 30;
  return DEMO_NAMES.slice(0, 9).map((name, i) => ({
    playerId: `demo_${i}`,
    name,
    score: Math.floor(rand() * max) + 1,
    game,
    day,
    isDemo: true,
  }));
}

async function readLocalScores(): Promise<ScoreEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(LOCAL_SCORES_KEY);
    return raw ? (JSON.parse(raw) as ScoreEntry[]) : [];
  } catch {
    return [];
  }
}

function supabaseHeaders() {
  return {
    apikey: SUPABASE_KEY as string,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  };
}

/** Saves the player's score for today and locks the break game until tomorrow. */
export async function submitScore(entry: Omit<ScoreEntry, 'day'>) {
  const day = todayKey();
  const full: ScoreEntry = { ...entry, day };
  await markPlayed(entry.game, entry.score);

  if (isOnlineLeaderboard()) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/scores`, {
        method: 'POST',
        headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
        body: JSON.stringify({
          player_id: full.playerId,
          name: full.name,
          score: full.score,
          game: full.game,
          day: full.day,
        }),
      });
    } catch {
      // fall through — score is still kept locally below
    }
  }

  const local = (await readLocalScores()).filter((s) => s.day === day);
  local.push(full);
  await AsyncStorage.setItem(LOCAL_SCORES_KEY, JSON.stringify(local));
}

/** Today's leaderboard for one game, highest score first. */
export async function getLeaderboard(game: GameId): Promise<ScoreEntry[]> {
  const day = todayKey();

  if (isOnlineLeaderboard()) {
    try {
      const url =
        `${SUPABASE_URL}/rest/v1/scores?select=player_id,name,score,game,day` +
        `&game=eq.${game}&day=eq.${day}&order=score.desc&limit=50`;
      const res = await fetch(url, { headers: supabaseHeaders() });
      if (res.ok) {
        const rows = (await res.json()) as {
          player_id: string; name: string; score: number; game: GameId; day: string;
        }[];
        return rows.map((r) => ({ playerId: r.player_id, name: r.name, score: r.score, game: r.game, day: r.day }));
      }
    } catch {
      // offline — use local fallback
    }
  }

  const mine = (await readLocalScores()).filter((s) => s.day === day && s.game === game);
  return [...demoScores(game, day), ...mine].sort((a, b) => b.score - a.score);
}
