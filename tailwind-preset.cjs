// Conocto — Tailwind-Preset (v3). Farben und Schriften zeigen auf die CSS-Variablen
// aus tokens/tokens.css, damit Hell/Dunkel ohne Tailwind-Varianten wechselt.
const tokens = require('./tokens/tokens.json');

const colors = Object.fromEntries(tokens.color.tokens.map((t) => [t.name, `var(--${t.name})`]));
const fromFamily = (fam, prefix) =>
  Object.fromEntries(tokens[fam].tokens.map((t) => [t.name.replace(prefix, ''), `var(--${t.name})`]));

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily: { display: 'var(--display)', sans: 'var(--sans)', mono: 'var(--sans)' },
      borderRadius: fromFamily('radius', 'r-'),
      boxShadow: { DEFAULT: 'var(--shadow)', sm: 'var(--shadow-sm)', hairline: 'var(--shadow-hairline)' },
      fontSize: fromFamily('fontSize', 'fs-'),
    },
  },
};
