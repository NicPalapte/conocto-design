// Erzeugt tokens/tokens.css aus tokens/tokens.json. `--check` bricht ab, wenn die
// CSS-Datei nicht zur JSON passt (CI), statt sie zu schreiben.
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const tokens = JSON.parse(readFileSync(new URL('tokens/tokens.json', root), 'utf8'));
const [first, ...others] = tokens.color.themes.map((t) => t.id);

const valueIn = (v, theme) => (typeof v === 'string' ? v : (v[theme] ?? v[first]));
const resolve = (v) => v.replace(/^\{(.+)\}$/, 'var(--$1)');
const line = (name, value) => `  --${name}: ${value};`;

const themed = [...tokens.color.tokens, ...tokens.shadow.tokens];
const plainFamilies = Object.entries(tokens).filter(
  ([key, fam]) => !['color', 'shadow', 'type'].includes(key) && Array.isArray(fam?.tokens),
);

const lightLines = themed.map((t) => line(t.name, resolve(valueIn(t.value, first))));
const restLines = plainFamilies.flatMap(([, fam]) => fam.tokens.map((t) => line(t.name, t.value)));
const fontLines = Object.entries(tokens.type.families).map(([k, v]) => line(k, v));

const darkBlock = (theme) =>
  themed
    .filter((t) => typeof t.value !== 'string' && t.value[theme] !== undefined)
    .map((t) => '  ' + line(t.name, resolve(t.value[theme])))
    .join('\n');

const out = [
  '/* Conocto — aus tokens/tokens.json erzeugt (npm run tokens). Nicht von Hand ändern. */',
  ':root {',
  ...lightLines,
  ...restLines,
  ...fontLines,
  "  --mono: var(--sans); /* Alt-Name aus der App: keine Festbreitenschrift */",
  '  --shadow-popover: var(--shadow);',
  '  color-scheme: light;',
  '}',
  '',
  ...others.flatMap((theme) => [
    '@media (prefers-color-scheme: dark) {',
    `  :root:not([data-theme='${first}']) {`,
    darkBlock(theme),
    `    color-scheme: ${theme};`,
    '  }',
    '}',
    '',
    `:root[data-theme='${theme}'] {`,
    darkBlock(theme).replace(/^  /gm, ''),
    `  color-scheme: ${theme};`,
    '}',
    '',
  ]),
].join('\n');

const target = new URL('tokens/tokens.css', root);
if (process.argv.includes('--check')) {
  const current = readFileSync(target, 'utf8');
  if (current !== out) {
    console.error('tokens/tokens.css ist veraltet: npm run tokens ausführen.');
    process.exit(1);
  }
  console.log('tokens/tokens.css ist aktuell.');
} else {
  writeFileSync(target, out);
  console.log('tokens/tokens.css geschrieben.');
}
