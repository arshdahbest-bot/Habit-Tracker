import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, Line, LinearGradient, Pattern, Rect, Stop } from 'react-native-svg';
import { BackgroundPattern, BACKGROUNDS, useApp } from '../context/AppContext';

/** Fills its parent with the student's chosen background: gradient, pattern and optional photo. */
export default function Background() {
  const { mode, colors, profile } = useApp();
  const bg = profile.background;
  const [from, to] = (BACKGROUNDS[bg.theme] ?? BACKGROUNDS.classic)[mode];
  const ink = colors.text;

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">
            <Stop offset="0" stopColor={from} />
            <Stop offset="1" stopColor={to} />
          </LinearGradient>
          <PatternDef pattern={bg.pattern} ink={ink} />
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
        {bg.pattern !== 'none' && !bg.photoUri && <Rect x="0" y="0" width="100%" height="100%" fill="url(#pat)" />}
      </Svg>
      {bg.photoUri && (
        <>
          <Image source={{ uri: bg.photoUri }} style={StyleSheet.absoluteFill} resizeMode="cover" />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: from, opacity: bg.photoFade }]} />
        </>
      )}
    </View>
  );
}

function PatternDef({ pattern, ink }: { pattern: BackgroundPattern; ink: string }) {
  const o = 0.09;
  switch (pattern) {
    case 'dots':
      return (
        <Pattern id="pat" patternUnits="userSpaceOnUse" width="22" height="22">
          <Circle cx="11" cy="11" r="1.8" fill={ink} fillOpacity={o} />
        </Pattern>
      );
    case 'grid':
      return (
        <Pattern id="pat" patternUnits="userSpaceOnUse" width="24" height="24">
          <Line x1="0" y1="0" x2="24" y2="0" stroke={ink} strokeOpacity={o} strokeWidth="1" />
          <Line x1="0" y1="0" x2="0" y2="24" stroke={ink} strokeOpacity={o} strokeWidth="1" />
        </Pattern>
      );
    case 'lines':
      // Like lined notebook paper.
      return (
        <Pattern id="pat" patternUnits="userSpaceOnUse" width="30" height="30">
          <Line x1="0" y1="29" x2="30" y2="29" stroke={ink} strokeOpacity={o * 1.3} strokeWidth="1" />
        </Pattern>
      );
    case 'diagonal':
      return (
        <Pattern id="pat" patternUnits="userSpaceOnUse" width="16" height="16">
          <Line x1="0" y1="16" x2="16" y2="0" stroke={ink} strokeOpacity={o * 0.8} strokeWidth="1.2" />
        </Pattern>
      );
    case 'bubbles':
      return (
        <Pattern id="pat" patternUnits="userSpaceOnUse" width="120" height="120">
          <Circle cx="20" cy="24" r="14" fill={ink} fillOpacity={o * 0.5} />
          <Circle cx="84" cy="40" r="7" fill={ink} fillOpacity={o * 0.6} />
          <Circle cx="60" cy="96" r="20" fill={ink} fillOpacity={o * 0.4} />
          <Circle cx="108" cy="104" r="4" fill={ink} fillOpacity={o * 0.8} />
        </Pattern>
      );
    default:
      return null;
  }
}

/** A small gradient circle showing a background theme, for the Customize screen. */
export function ThemeSwatch({ theme, size = 40 }: { theme: string; size?: number }) {
  const { mode } = useApp();
  const [from, to] = (BACKGROUNDS[theme] ?? BACKGROUNDS.classic)[mode];
  const id = `sw-${theme}`;
  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={from} />
          <Stop offset="1" stopColor={to} />
        </LinearGradient>
      </Defs>
      <Circle cx={size / 2} cy={size / 2} r={size / 2 - 1} fill={`url(#${id})`} />
    </Svg>
  );
}
