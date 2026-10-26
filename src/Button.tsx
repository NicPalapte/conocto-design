// Conocto — Button: runder Knopf für Hauptaktionen (Startseite, Karten, Dialoge).
// Stil über die Klasse `cn-btn` aus styles.css, damit Hover ohne JS greift.

import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  /** Gefüllt im Akzent. Höchstens ein Primärknopf je Fläche. */
  primary?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  title?: string;
  onClick?: () => void;
}

export function Button({
  children,
  primary = false,
  disabled,
  type = 'button',
  title,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={primary ? 'cn-btn primary' : 'cn-btn'}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
