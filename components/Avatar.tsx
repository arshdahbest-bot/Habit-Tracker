import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';

type Props = {
  size?: number;
  speaking?: boolean;
};

/**
 * The student's tutor avatar. Built from their photo: circular crop, colour tint,
 * cartoon outline and a hat. It bobs and shows "voice" bars while it is speaking.
 */
export default function Avatar({ size = 120, speaking = false }: Props) {
  const { profile, colors } = useApp();
  const bob = useRef(new Animated.Value(0)).current;
  const bars = [useRef(new Animated.Value(0.3)).current, useRef(new Animated.Value(0.3)).current, useRef(new Animated.Value(0.3)).current];

  useEffect(() => {
    if (!speaking) {
      bob.stopAnimation();
      bob.setValue(0);
      bars.forEach((b) => {
        b.stopAnimation();
        b.setValue(0.3);
      });
      return;
    }
    const bobLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(bob, { toValue: 1, duration: 350, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(bob, { toValue: 0, duration: 350, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ]),
    );
    const barLoops = bars.map((b, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(b, { toValue: 1, duration: 180 + i * 70, useNativeDriver: true }),
          Animated.timing(b, { toValue: 0.3, duration: 180 + i * 70, useNativeDriver: true }),
        ]),
      ),
    );
    bobLoop.start();
    barLoops.forEach((l) => l.start());
    return () => {
      bobLoop.stop();
      barLoops.forEach((l) => l.stop());
    };
  }, [speaking]); // eslint-disable-line react-hooks/exhaustive-deps

  const tint = profile.avatarStyle.hue;
  const translateY = bob.interpolate({ inputRange: [0, 1], outputRange: [0, -6] });
  const imageUri = profile.avatarUri ?? profile.photoUri;
  const ring = Math.max(4, Math.round(size * 0.05));

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <View
          style={[
            styles.ring,
            { width: size, height: size, borderRadius: size / 2, borderColor: tint, borderWidth: ring, backgroundColor: colors.cardAlt },
          ]}
        >
          {imageUri ? (
            <>
              <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
              {!profile.avatarUri && (
                // Cartoon-style colour wash on top of the raw photo.
                <View style={[StyleSheet.absoluteFill, { backgroundColor: tint, opacity: 0.22 }]} />
              )}
            </>
          ) : (
            <Text style={{ fontSize: size * 0.5 }}>😄</Text>
          )}
        </View>
        <Text style={[styles.hat, { fontSize: size * 0.32, top: -size * 0.16, right: -size * 0.02 }]}>
          {profile.avatarStyle.hat}
        </Text>
      </Animated.View>
      <View style={[styles.voice, { opacity: speaking ? 1 : 0 }]}>
        {bars.map((b, i) => (
          <Animated.View key={i} style={[styles.bar, { backgroundColor: tint, transform: [{ scaleY: b }] }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ring: { overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  hat: { position: 'absolute', transform: [{ rotate: '15deg' }] },
  voice: { flexDirection: 'row', gap: 4, height: 18, marginTop: 6, alignItems: 'center' },
  bar: { width: 5, height: 18, borderRadius: 3 },
});
