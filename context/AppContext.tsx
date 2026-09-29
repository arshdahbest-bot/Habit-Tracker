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

export type AvatarStyle = {
  hue: string; // tint colour laid over the photo
  hat: string; // emoji accessory
};

export type Profile = {
  id: string;
  name: string;
  photoUri: string | null;
  avatarUri: string | null; // AI-generated avatar, if an avatar service is configured
  avatarStyle: AvatarStyle;
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
  photoUri: null,
  avatarUri: null,
  avatarStyle: { hue: '#4F46E5', hat: '🎓' },
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
        const parsed: Profile = savedProfile
          ? { ...defaultProfile, ...JSON.parse(savedProfile) }
          : { ...defaultProfile };
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
      colors: mode === 'dark' ? dark : light,
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
