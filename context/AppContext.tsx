import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

export type ThemeMode = 'light' | 'dark';

export type Palette = {
  background: string;
  card: string;
  cardAlt: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryText: string;
  accent: string;
  success: string;
  danger: string;
  border: string;
};

const light: Palette = {
  background: '#F5F7FB',
  card: '#FFFFFF',
  cardAlt: '#EEF1F8',
  text: '#1B1F2A',
  textMuted: '#5E6679',
  primary: '#4F46E5',
  primaryText: '#FFFFFF',
  accent: '#F59E0B',
  success: '#16A34A',
  danger: '#DC2626',
  border: '#DDE2EC',
};

const dark: Palette = {
  background: '#0F1220',
  card: '#1A1F33',
  cardAlt: '#242A42',
  text: '#F1F3F9',
  textMuted: '#A3ABC2',
  primary: '#818CF8',
  primaryText: '#0F1220',
  accent: '#FBBF24',
  success: '#4ADE80',
  danger: '#F87171',
  border: '#2E3552',
};

export type AvatarShape = 'circle' | 'rounded' | 'square';

export type AvatarStyle = {
  hue: string; // tint colour laid over the photo
  hat: string; // emoji accessory
  shape: AvatarShape;
  filter: number; // strength of the cartoon colour wash, 0 (off) to 3 (strong)
  ring: 'thin' | 'thick';
};

export type VoiceSettings = {
  rate: number; // speaking speed
  pitch: number;
  voiceId: string | null; // null = the phone's default voice
};

export type BackgroundPattern = 'none' | 'dots' | 'grid' | 'lines' | 'diagonal' | 'bubbles';

export type BackgroundSettings = {
  theme: string; // key of BACKGROUNDS
  pattern: BackgroundPattern;
  photoUri: string | null; // the student's own background picture
  photoFade: number; // how much the theme colour covers the photo, 0.25 to 0.85
  glass: boolean; // see-through cards so the background shows
};

// Background themes: a two-colour gradient for light and for dark mode.
export const BACKGROUNDS: Record<string, { name: string; light: [string, string]; dark: [string, string] }> = {
  classic: { name: 'Classic', light: ['#F5F7FB', '#F5F7FB'], dark: ['#0F1220', '#0F1220'] },
  sky: { name: 'Sky', light: ['#E0F2FE', '#F5F7FB'], dark: ['#0B1B2E', '#0F1220'] },
  ocean: { name: 'Ocean', light: ['#CCFBF1', '#DBEAFE'], dark: ['#062A2E', '#0B1736'] },
  forest: { name: 'Forest', light: ['#DCFCE7', '#F0FDF4'], dark: ['#0A2415', '#0E1A12'] },
  sunset: { name: 'Sunset', light: ['#FFE4E6', '#FEF3C7'], dark: ['#2A0F1D', '#2A1A08'] },
  lavender: { name: 'Lavender', light: ['#EDE9FE', '#FCE7F3'], dark: ['#1C1433', '#2A1027'] },
  peach: { name: 'Peach', light: ['#FFEDD5', '#FFF7ED'], dark: ['#2A160A', '#1E130C'] },
  paper: { name: 'Paper', light: ['#FAF6EC', '#F3ECDC'], dark: ['#1C1A15', '#15130F'] },
  slate: { name: 'Slate', light: ['#E2E8F0', '#F8FAFC'], dark: ['#111827', '#1F2937'] },
  midnight: { name: 'Midnight', light: ['#E0E7FF', '#C7D2FE'], dark: ['#020617', '#1E1B4B'] },
};

export type Profile = {
  id: string;
  name: string;
  tutorName: string;
  photoUri: string | null;
  avatarStyle: AvatarStyle;
  voice: VoiceSettings;
  accent: string; // key of ACCENTS
  // The student's IB subjects and levels, e.g. { bio: 'HL', math: 'SL', tok: 'core' }.
  // Empty until they choose, in which case every subject is shown.
  subjects: Record<string, 'SL' | 'HL' | 'core'>;
  background: BackgroundSettings;
  examSession: string | null; // e.g. "M27" = May 2027, "N26" = November 2026
};

// App colour choices. Each has a light- and a dark-mode shade.
export const ACCENTS: Record<string, { name: string; light: string; dark: string }> = {
  indigo: { name: 'Indigo', light: '#4F46E5', dark: '#818CF8' },
  blue: { name: 'Blue', light: '#2563EB', dark: '#60A5FA' },
  teal: { name: 'Teal', light: '#0D9488', dark: '#2DD4BF' },
  green: { name: 'Green', light: '#15803D', dark: '#4ADE80' },
  orange: { name: 'Orange', light: '#C2410C', dark: '#FB923C' },
  pink: { name: 'Pink', light: '#DB2777', dark: '#F472B6' },
  purple: { name: 'Purple', light: '#7C3AED', dark: '#A78BFA' },
};

type AppState = {
  ready: boolean;
  mode: ThemeMode;
  colors: Palette;
  toggleTheme: () => void;
  profile: Profile;
  updateProfile: (patch: Partial<Profile>) => void;
};

const STORAGE_THEME = 'app:theme';
const STORAGE_PROFILE = 'app:profile';

function makeId() {
  return 'p_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

const defaultProfile: Profile = {
  id: '',
  name: '',
  tutorName: 'Nova',
  photoUri: null,
  avatarStyle: { hue: '#4F46E5', hat: '🎓', shape: 'circle', filter: 2, ring: 'thick' },
  voice: { rate: 0.95, pitch: 1, voiceId: null },
  accent: 'indigo',
  subjects: {},
  background: { theme: 'classic', pattern: 'none', photoUri: null, photoFade: 0.55, glass: false },
  examSession: null,
};

function themedColors(mode: ThemeMode, profile: Profile): Palette {
  const base = mode === 'dark' ? dark : light;
  const bg = profile.background;
  const card = bg.glass ? base.card + (mode === 'dark' ? 'CC' : 'D9') : base.card;
  return {
    ...base,
    background: (BACKGROUNDS[bg.theme] ?? BACKGROUNDS.classic)[mode][0],
    card,
    primary: (ACCENTS[profile.accent] ?? ACCENTS.indigo)[mode],
  };
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(system === 'dark' ? 'dark' : 'light');
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [savedTheme, savedProfile] = await Promise.all([
          AsyncStorage.getItem(STORAGE_THEME),
          AsyncStorage.getItem(STORAGE_PROFILE),
        ]);
        if (savedTheme === 'light' || savedTheme === 'dark') setMode(savedTheme);
        const saved = savedProfile ? (JSON.parse(savedProfile) as Partial<Profile>) : {};
        // Merge nested settings so profiles saved by older versions pick up new defaults.
        const parsed: Profile = {
          ...defaultProfile,
          ...saved,
          avatarStyle: { ...defaultProfile.avatarStyle, ...saved.avatarStyle },
          voice: { ...defaultProfile.voice, ...saved.voice },
          background: { ...defaultProfile.background, ...saved.background },
        };
        if (!parsed.id) parsed.id = makeId();
        setProfile(parsed);
        await AsyncStorage.setItem(STORAGE_PROFILE, JSON.stringify(parsed));
      } catch {
        setProfile({ ...defaultProfile, id: makeId() });
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((m) => {
      const next = m === 'dark' ? 'light' : 'dark';
      AsyncStorage.setItem(STORAGE_THEME, next).catch(() => {});
      return next;
    });
  }, []);

  const updateProfile = useCallback((patch: Partial<Profile>) => {
    setProfile((p) => {
      const next = { ...p, ...patch };
      AsyncStorage.setItem(STORAGE_PROFILE, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      ready,
      mode,
      colors: themedColors(mode, profile),
      toggleTheme,
      profile,
      updateProfile,
    }),
    [ready, mode, toggleTheme, profile, updateProfile],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
