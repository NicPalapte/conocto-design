// Conocto — EmptyState: Platzhalter mit gestrichelter Linie. Leerzustände sind
// eine kurze Nominalphrase, nie eine Entschuldigung (README des Design-Systems).

import type { ReactNode } from 'react';

export interface EmptyStateProps {
  children: ReactNode;
  /** Klickbare „+ … hinzufügen"-Variante. */
  action?: boolean;
  onClick?: () => void;
}

export function EmptyState({ children, action = false, onClick }: EmptyStateProps) {
  if (action) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          display: 'block',
          width: '100%',
          marginTop: 8,
          padding: '5px 8px',
          border: '1px dashed var(--line2)',
          background: 'transparent',
          color: 'var(--dim)',
          fontFamily: 'var(--sans)',
          fontSize: 'var(--fs-meta)',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <div
      style={{
        fontFamily: 'var(--sans)',
        fontSize: 'var(--fs-meta)',
        color: 'var(--mute)',
        padding: '8px 0',
        borderTop: '1px dashed var(--grid2)',
        borderBottom: '1px dashed var(--grid2)',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
