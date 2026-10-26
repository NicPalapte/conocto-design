// Conocto — StatusPill: Status als reine Anzeige (geprüft / offen / entwurf).
// Das Wort trägt die Bedeutung, die Farbe unterstützt nur.

export type StatusValue = 'geprüft' | 'offen' | 'entwurf';

const STATUS: Record<StatusValue, { bg: string; fg: string; dot: string }> = {
  geprüft: { bg: 'var(--greenS)', fg: 'var(--greenD)', dot: 'var(--greenD)' },
  offen: { bg: 'var(--amberS)', fg: 'var(--amber)', dot: 'var(--amber)' },
  entwurf: { bg: 'var(--sunken)', fg: 'var(--dim)', dot: 'var(--mute)' },
};

export interface StatusPillProps {
  /** Unbekannte Werte erscheinen wie „entwurf". */
  status: string;
}

export function StatusPill({ status }: StatusPillProps) {
  const colors = STATUS[status as StatusValue] ?? STATUS.entwurf;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '1px 7px 1px 6px',
        // Hex-Alpha an var() anhängen geht nicht; color-mix ergibt den zarten Rand.
        border: `1px solid color-mix(in srgb, ${colors.fg} 20%, transparent)`,
        background: colors.bg,
        color: colors.fg,
        borderRadius: 'var(--r-hair)',
        fontFamily: 'var(--sans)',
        fontSize: 'var(--fs-label)',
        lineHeight: '14px',
        letterSpacing: '.3px',
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: colors.dot }} />
      {status}
    </span>
  );
}
