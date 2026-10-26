// Conocto — Surface: schwebende Fläche über der Hauptansicht (Graph, 3D-Modell).
// window = deckend · glass = durchscheinend mit Unschärfe · pill = Kapsel.

import type { CSSProperties, ReactNode } from 'react';

export interface SurfaceProps {
  kind?: 'window' | 'glass' | 'pill';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Surface({ kind = 'window', className, style, children }: SurfaceProps) {
  return (
    <div className={className ? `cn-${kind} ${className}` : `cn-${kind}`} style={style}>
      {children}
    </div>
  );
}
