import React, { useEffect, useReducer, useRef } from 'react';
import { GestureResponderEvent, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useApp } from '../../context/AppContext';

const HEIGHT = 440;
const PADDLE_W = 80;
const PADDLE_H = 12;
const BALL = 14;
const AI_SPEED = 3.6; // px per frame — beatable when the ball gets fast

/**
 * Ping pong vs. the computer. +1 every time you return the ball, +3 when the
 * computer misses. One miss and the game is over.
 */
export default function PongGame({ onGameOver }: { onGameOver: (score: number) => void }) {
  const { colors } = useApp();
  const { width: winW } = useWindowDimensions();
  const W = Math.min(winW - 32, 380);

  const [, render] = useReducer((n: number) => n + 1, 0);
  const player = useRef(W / 2 - PADDLE_W / 2);
  const ai = useRef(W / 2 - PADDLE_W / 2);
  const ball = useRef({ x: W / 2, y: HEIGHT / 2, vx: 2.2, vy: -3 }); // first serve goes to the computer
  const score = useRef(0);
  const over = useRef(false);
  const keys = useRef({ left: false, right: false });
  const onGameOverRef = useRef(onGameOver);
  onGameOverRef.current = onGameOver;

  function serve(towardsPlayer: boolean) {
    const speed = 3 + score.current * 0.08;
    ball.current = {
      x: W / 2,
      y: HEIGHT / 2,
      vx: (Math.random() > 0.5 ? 1 : -1) * (1.5 + Math.random() * 1.5),
      vy: towardsPlayer ? speed : -speed,
    };
  }

  useEffect(() => {
    let frame: number;
    const tick = () => {
      if (over.current) return;
      const b = ball.current;

      if (keys.current.left) player.current = Math.max(0, player.current - 7);
      if (keys.current.right) player.current = Math.min(W - PADDLE_W, player.current + 7);

      b.x += b.vx;
      b.y += b.vy;

      // side walls
      if (b.x <= 0 || b.x >= W - BALL) {
        b.vx = -b.vx;
        b.x = Math.max(0, Math.min(W - BALL, b.x));
      }

      // computer paddle follows the ball with a capped speed
      const aiCenter = ai.current + PADDLE_W / 2;
      const target = b.x + BALL / 2;
      if (Math.abs(target - aiCenter) > 6) ai.current += Math.sign(target - aiCenter) * AI_SPEED;
      ai.current = Math.max(0, Math.min(W - PADDLE_W, ai.current));

      // player paddle (bottom)
      const playerTop = HEIGHT - 24 - PADDLE_H;
      if (b.vy > 0 && b.y + BALL >= playerTop && b.y + BALL <= playerTop + PADDLE_H + 8) {
        if (b.x + BALL >= player.current && b.x <= player.current + PADDLE_W) {
          const hit = (b.x + BALL / 2 - (player.current + PADDLE_W / 2)) / (PADDLE_W / 2);
          b.vy = -Math.min(Math.abs(b.vy) * 1.06, 11);
          b.vx = hit * 5;
          b.y = playerTop - BALL;
          score.current += 1;
        }
      }

      // computer paddle (top)
      const aiBottom = 24 + PADDLE_H;
      if (b.vy < 0 && b.y <= aiBottom && b.y >= 24 - 8) {
        if (b.x + BALL >= ai.current && b.x <= ai.current + PADDLE_W) {
          b.vy = Math.abs(b.vy);
          b.vx += (Math.random() - 0.5) * 2;
          b.y = aiBottom;
        }
      }

      // computer missed → bonus points and serve again
      if (b.y < -BALL) {
        score.current += 3;
        serve(true);
      }

      // player missed → game over
      if (b.y > HEIGHT) {
        over.current = true;
        render();
        onGameOverRef.current(score.current);
        return;
      }

      render();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [W]); // eslint-disable-line react-hooks/exhaustive-deps

  // Arrow keys when running in a browser.
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const set = (e: KeyboardEvent, v: boolean) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.current.left = v;
      if (e.key === 'ArrowRight' || e.key === 'd') keys.current.right = v;
    };
    const down = (e: KeyboardEvent) => set(e, true);
    const up = (e: KeyboardEvent) => set(e, false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  function move(e: GestureResponderEvent) {
    const x = e.nativeEvent.locationX;
    player.current = Math.max(0, Math.min(W - PADDLE_W, x - PADDLE_W / 2));
  }

  const b = ball.current;
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[styles.score, { color: colors.text }]}>🏓 {score.current}</Text>
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={move}
        onResponderMove={move}
        style={[styles.table, { width: W, height: HEIGHT, backgroundColor: colors.cardAlt, borderColor: colors.border }]}
      >
        <View pointerEvents="none" style={[styles.net, { backgroundColor: colors.border }]} />
        <View
          pointerEvents="none"
          style={[styles.paddle, { left: ai.current, top: 24, backgroundColor: colors.danger }]}
        />
        <View
          pointerEvents="none"
          style={[styles.paddle, { left: player.current, top: HEIGHT - 24 - PADDLE_H, backgroundColor: colors.primary }]}
        />
        <View pointerEvents="none" style={[styles.ball, { left: b.x, top: b.y, backgroundColor: colors.accent }]} />
      </View>
      <Text style={{ color: colors.textMuted, marginTop: 10 }}>Drag on the table to move your paddle (blue).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  table: { borderWidth: 2, borderRadius: 12, overflow: 'hidden' },
  net: { position: 'absolute', left: 0, right: 0, top: HEIGHT / 2 - 1, height: 2 },
  paddle: { position: 'absolute', width: PADDLE_W, height: PADDLE_H, borderRadius: 6 },
  ball: { position: 'absolute', width: BALL, height: BALL, borderRadius: BALL / 2 },
});
