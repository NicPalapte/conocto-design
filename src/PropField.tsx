// Conocto — PropField: Mikro-Label über dem Wert, im 2-Spalten-Raster.

import type { ReactNode } from 'react';

export interface PropFieldProps {
  label: string;
  value: ReactNode;
}

export function PropField({ label, value }: PropFieldProps) {
  return (
    <div style={{ padding: '5px 0' }}>
      <div
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'var(--fs-micro)',
          letterSpacing: 'var(--ls-caps)',
          textTransform: 'uppercase',
          color: 'var(--mute)',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'var(--fs-row)',
          color: 'var(--ink)',
          marginTop: 2,
        }}
      >
        {value === null || value === '' ? '—' : value}
      </div>
    </div>
  );
}

export function PropGrid({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 18px' }}>{children}</div>
  );
}
