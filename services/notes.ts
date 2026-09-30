import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

// The student's own notes, stored on the device. A note can belong to a subject and a chapter.

export type Note = {
  id: string;
  title: string;
  body: string;
  subjectId?: string;
  chapterId?: string;
  color: string; // key of NOTE_COLORS
  pinned: boolean;
  createdAt: number;
  updatedAt: number;
};

export const NOTE_COLORS: Record<string, { light: string; dark: string }> = {
  plain: { light: '#FFFFFF', dark: '#1A1F33' },
  yellow: { light: '#FEF9C3', dark: '#3F3A12' },
  green: { light: '#DCFCE7', dark: '#133524' },
  blue: { light: '#DBEAFE', dark: '#172A4A' },
  pink: { light: '#FCE7F3', dark: '#431A33' },
  purple: { light: '#EDE9FE', dark: '#2E2152' },
};

const KEY = 'notes:v1';

export async function getNotes(): Promise<Note[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const notes: Note[] = raw ? JSON.parse(raw) : [];
    return notes.sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
}

// Writes are chained so quick autosaves can't overwrite each other.
let queue: Promise<unknown> = Promise.resolve();

function write(fn: (notes: Note[]) => Note[]) {
  queue = queue
    .then(async () => AsyncStorage.setItem(KEY, JSON.stringify(fn(await getNotes()))))
    .catch(() => {});
  return queue;
}

export function newNote(subjectId?: string, chapterId?: string): Note {
  const now = Date.now();
  return {
    id: 'n_' + now.toString(36) + Math.random().toString(36).slice(2, 6),
    title: '',
    body: '',
    subjectId,
    chapterId,
    color: 'plain',
    pinned: false,
    createdAt: now,
    updatedAt: now,
  };
}

export function saveNote(note: Note) {
  return write((notes) => [...notes.filter((n) => n.id !== note.id), { ...note, updatedAt: Date.now() }]);
}

export function deleteNote(id: string) {
  return write((notes) => notes.filter((n) => n.id !== id));
}

/** Notes, reloaded whenever the screen comes into focus. */
export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const reload = useCallback(() => {
    getNotes().then(setNotes);
  }, []);
  useFocusEffect(reload);
  return { notes, reload };
}

export function notePreview(n: Note) {
  return n.title.trim() || n.body.trim().split('\n')[0] || 'Untitled note';
}
