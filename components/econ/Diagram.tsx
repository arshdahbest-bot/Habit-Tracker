import React from 'react';
import { View } from 'react-native';
import { useApp } from '../../context/AppContext';
import { buildDiagram, DiagramId } from './diagrams';
import EconGraph from './EconGraph';

/** Renders a named diagram (one or more graphs side by side / stacked). */
export default function Diagram({ id }: { id: DiagramId }) {
  const { colors } = useApp();
  const specs = buildDiagram(id, colors);
  return (
    <View style={{ gap: 12 }}>
      {specs.map((s, i) => (
        <EconGraph key={i} spec={s} height={specs.length > 1 ? 200 : 240} />
      ))}
    </View>
  );
}
