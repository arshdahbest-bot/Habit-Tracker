import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { useApp } from '../../context/AppContext';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>;
}

export default function TabsLayout() {
  const { colors } = useApp();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarLabelStyle: { fontSize: 10 },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} /> }} />
      <Tabs.Screen name="tutor" options={{ title: 'Tutor', tabBarIcon: ({ focused }) => <TabIcon emoji="🧑‍🏫" focused={focused} /> }} />
      <Tabs.Screen name="flashcards" options={{ title: 'Cards', tabBarIcon: ({ focused }) => <TabIcon emoji="🃏" focused={focused} /> }} />
      <Tabs.Screen name="quiz" options={{ title: 'Quiz', tabBarIcon: ({ focused }) => <TabIcon emoji="📝" focused={focused} /> }} />
      <Tabs.Screen name="notes" options={{ title: 'Notes', tabBarIcon: ({ focused }) => <TabIcon emoji="🗒️" focused={focused} /> }} />
      <Tabs.Screen name="progress" options={{ title: 'Progress', tabBarIcon: ({ focused }) => <TabIcon emoji="📊" focused={focused} /> }} />
      <Tabs.Screen name="break" options={{ title: 'Break', tabBarIcon: ({ focused }) => <TabIcon emoji="🎮" focused={focused} /> }} />
    </Tabs>
  );
}
