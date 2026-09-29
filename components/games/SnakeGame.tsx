import React, { useEffect, useReducer, useRef } from 'react';
import { PanResponder, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useApp } from '../../context/AppContext';
import { Button } from '../UI';

type Point = { x: number; y: number };
type Dir = 'up' | 'down' | 'left' | 'right';

const GRID = 16;
const START_SPEED = 150; // ms per move
const MIN_SPEED = 70;

const VECTORS: Record<Dir, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const OPPOSITE: Record<Dir, Dir> = { up: 'down', down: 'up', left: 'right', right: 'left' };

function randomFood(snake: Point[]): Point {
  while (true) {
    const p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    if (!snake.some((s) => s.x === p.x && s.y === p.y)) return p;
  }
}

export default function SnakeGame({ onGameOver }: { onGameOver: (score: number) => void }) {
  const { colors } = useApp();
  const { width } = useWindowDimensions();
  const boardSize = Math.min(width - 32, 380);
  const cell = boardSize / GRID;

  const [, render] = useReducer((n: number) => n + 1, 0);
  const snake = useRef<Point[]>([{ x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }]);
  const food = useRef<Point>(randomFood(snake.current));
  const dir = useRef<Dir>('right');
  const queued = useRef<Dir[]>([]);
  const score = useRef(0);
  const over = useRef(false);
  const onGameOverRef = useRef(onGameOver);
  onGameOverRef.current = onGameOver;

  function turn(d: Dir) {
    const last = queued.current[queued.current.length - 1] ?? dir.current;
    if (d !== last && d !== OPPOSITE[last] && queued.current.length < 3) queued.current.push(d);
  }

  // Game loop — speeds up as the snake grows.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      if (over.current) return;
      const next = queued.current.shift();
      if (next) dir.current = next;
      const v = VECTORS[dir.current];
      const head = snake.current[0];
      const newHead = { x: head.x + v.x, y: head.y + v.y };

      const hitWall = newHead.x < 0 || newHead.y < 0 || newHead.x >= GRID || newHead.y >= GRID;
      const hitSelf = snake.current.slice(0, -1).some((s) => s.x === newHead.x && s.y === newHead.y);
      if (hitWall || hitSelf) {
        over.current = true;
        render();
        onGameOverRef.current(score.current);
        return;
      }

      const ate = newHead.x === food.current.x && newHead.y === food.current.y;
      snake.current = [newHead, ...snake.current];
      if (ate) {
        score.current += 1;
        food.current = randomFood(snake.current);
      } else {
        snake.current.pop();
      }
      render();
      timer = setTimeout(step, Math.max(MIN_SPEED, START_SPEED - score.current * 3));
    };
    timer = setTimeout(step, START_SPEED);
    return () => clearTimeout(timer);
  }, []);

  // Arrow keys / WASD when running in a browser.
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const keys: Record<string, Dir> = {
      ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
      w: 'up', s: 'down', a: 'left', d: 'right',
    };
    const onKey = (e: KeyboardEvent) => {
      const d = keys[e.key];
      if (d) {
        e.preventDefault();
        turn(d);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Swipe anywhere on the board to turn.
  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dx) < 10 && Math.abs(g.dy) < 10) return;
        if (Math.abs(g.dx) > Math.abs(g.dy)) turn(g.dx > 0 ? 'right' : 'left');
        else turn(g.dy > 0 ? 'down' : 'up');
      },
    }),
  ).current;

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[styles.score, { color: colors.text }]}>🍎 {score.current}</Text>
      <View
        {...pan.panHandlers}
        style={[styles.board, { width: boardSize, height: boardSize, backgroundColor: colors.cardAlt, borderColor: colors.border }]}
      >
        <View
          pointerEvents="none"
          style={[styles.cell, { left: food.current.x * cell, top: food.current.y * cell, width: cell, height: cell }]}
        >
          <Text style={{ fontSize: cell * 0.8, lineHeight: cell }}>🍎</Text>
        </View>
        {snake.current.map((p, i) => (
          <View
            key={i}
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: p.x * cell + 1,
              top: p.y * cell + 1,
              width: cell - 2,
              height: cell - 2,
              borderRadius: i === 0 ? cell / 2 : 4,
              backgroundColor: i === 0 ? colors.primary : colors.success,
            }}
          />
        ))}
      </View>

      <View style={styles.pad}>
        <Button title="▲" variant="secondary" onPress={() => turn('up')} style={styles.padBtn} />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button title="◀" variant="secondary" onPress={() => turn('left')} style={styles.padBtn} />
          <Button title="▼" variant="secondary" onPress={() => turn('down')} style={styles.padBtn} />
          <Button title="▶" variant="secondary" onPress={() => turn('right')} style={styles.padBtn} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  score: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  board: { borderWidth: 2, borderRadius: 12, overflow: 'hidden' },
  cell: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  pad: { alignItems: 'center', gap: 8, marginTop: 14 },
  padBtn: { width: 64, paddingVertical: 12 },
});
