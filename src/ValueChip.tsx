// Conocto — ValueChip: runder Wert-Chip mit Zähler (Filterwerte, Merkmalswahl).
// Chips brechen in ChipGroup um, statt über den Fensterrand zu laufen.

import type { ReactNode } from 'react';

export interface ValueChipProps {
  children: ReactNode;
  on: boolean;
  onClick: () => void;
  /** Zahl rechts im Chip, z. B. Positionen mit diesem Wert; deutsch formatiert. */
  count?: number;
  title?: string;
  /** `radio` in einer Einfachauswahl, sonst Mehrfachauswahl. */
  kind?: 'toggle' | 'radio';
}

const zahl = new Intl.NumberFormat('de-DE');

export function ValueChip({ children, on, onClick, count, title, kind = 'toggle' }: ValueChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      role={kind === 'radio' ? 'radio' : undefined}
      aria-checked={kind === 'radio' ? on : undefined}
      aria-pressed={kind === 'toggle' ? on : undefined}
      className={on ? 'cn-vchip on' : 'cn-vchip'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        maxWidth: '100%',
        padding: '0 10px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--accent)' : 'var(--line)'}`,
        background: on ? 'var(--accent-soft)' : 'var(--surface)',
        color: on ? 'var(--accent-ink)' : 'var(--ink)',
        fontFamily: 'var(--sans)',
        fontSize: 11.5,
      }}
    >
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      {count !== undefined && (
        <span style={{ fontSize: 11, color: on ? 'var(--accent-ink)' : 'var(--mute)' }}>
          {zahl.format(count)}
        </span>
      )}
    </button>
  );
}

export interface ChipGroupProps {
  /** Name der Gruppe für Screenreader. */
  label: string;
  radio?: boolean;
  children: ReactNode;
}

/** Umbrechende Gruppe aus Chips; als Einfachauswahl mit `radio`-Chips. */
export function ChipGroup({ label, radio = false, children }: ChipGroupProps) {
  return (
    <div
      role={radio ? 'radiogroup' : 'group'}
      aria-label={label}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
    >
      {children}
    </div>
  );
}
