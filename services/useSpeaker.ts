import * as Speech from 'expo-speech';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';

/** Reads text aloud with the student's chosen voice, speed and pitch. */
export function useSpeaker() {
  const { profile } = useApp();
  const [speaking, setSpeaking] = useState(false);
  const speakId = useRef(0);

  const stop = useCallback(() => {
    speakId.current++;
    Speech.stop();
    setSpeaking(false);
  }, []);

  const say = useCallback(
    (text: string) => {
      stop();
      const id = ++speakId.current;
      setSpeaking(true);
      const done = () => {
        if (speakId.current === id) setSpeaking(false);
      };
      Speech.speak(text, {
        rate: profile.voice.rate,
        pitch: profile.voice.pitch,
        voice: profile.voice.voiceId ?? undefined,
        onDone: done,
        onStopped: done,
        onError: done,
      });
    },
    [stop, profile.voice],
  );

  // Stop talking when the screen using this hook goes away.
  useEffect(() => stop, [stop]);

  return { speaking, say, stop };
}

/** English voices installed on the device, for the voice picker. */
export async function listVoices() {
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const seen = new Set<string>();
    return voices
      .filter((v) => v.language?.toLowerCase().startsWith('en'))
      .filter((v) => (seen.has(v.name) ? false : (seen.add(v.name), true)))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 30);
  } catch {
    return [];
  }
}
