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

export type Profile = {
  id: string;
  name: string;
  tutorName: string;
  photoUri: string | null;
  avatarUri: string | null; // AI-generated avatar, if an avatar service is configured
  avatarStyle: AvatarStyle;
  voice: VoiceSettings;
  accent: string; // key of ACCENTS
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
  avatarUri: null,
  avatarStyle: { hue: '#4F46E5', hat: '🎓', shape: 'circle', filter: 2, ring: 'thick' },
  voice: { rate: 0.95, pitch: 1, voiceId: null },
  accent: 'indigo',
};

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
      colors: {
        ...(mode === 'dark' ? dark : light),
        primary: (ACCENTS[profile.accent] ?? ACCENTS.indigo)[mode],
      },
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
