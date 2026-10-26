// Erzeugt docs/vorschau.html: Farben, Schrift und Bausteine auf einer Seite, hell und dunkel.
// Bilder fürs README: Seite im Browser öffnen und je Thema einen Screenshot speichern
// (docs/vorschau-hell.png, docs/vorschau-dunkel.png).
import { readFileSync, writeFileSync } from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as C from '../dist/index.js';

const root = new URL('../', import.meta.url);
const tokens = JSON.parse(readFileSync(new URL('tokens/tokens.json', root), 'utf8'));
const noop = () => {};

const KERN = [
  'paper', 'surface', 'sunken', 'line', 'ink', 'dim', 'mute',
  'accent', 'accent-soft', 'accent-ink', 'amber', 'amberS', 'greenD', 'greenS', 'red',
];
const swatch = (name) =>
  `<div class="sw"><span style="background:var(--${name})"></span><code>${name}</code></div>`;
const reihe = (prefix) =>
  tokens.color.tokens
    .filter((t) => t.name.startsWith(prefix))
    .map((t) => `<span class="chip" style="background:var(--${t.name})" title="${t.name}"></span>`)
    .join('');

const bausteine = renderToStaticMarkup(
  h('div', { className: 'demo' },
    h('div', { className: 'zeile' },
      h(C.ConoctoLogo, { size: 28 }),
      h(C.Button, { primary: true }, 'Datei öffnen'),
      h(C.Button, null, 'Demo laden'),
      h(C.SegmentedControl, { value: 'dim', onChange: noop, label: 'Nicht-Treffer', options: [
        { value: 'dim', label: 'dimmen' }, { value: 'hide', label: 'ausblenden' }] })),
    h('div', { className: 'zeile' },
      h(C.Chip, { on: true, count: 42 }, 'm³'),
      h(C.Chip, { count: 7 }, 'Stk'),
      h(C.Chip, { dashed: true }, '+ Filter'),
      h(C.ChipGroup, { label: 'Abschnitt' },
        h(C.ValueChip, { on: true, onClick: noop, count: 1250 }, '02 Rohbau'),
        h(C.ValueChip, { on: false, onClick: noop, count: 128 }, '01 Erdarbeiten')),
      h(C.StatusPill, { status: 'geprüft' }),
      h(C.StatusPill, { status: 'offen' })),
    h(C.Surface, { style: { maxWidth: 380 } },
      h(C.PanelHeader, { eyebrow: 'Position · OZ 03.010', title: 'Stahlbeton C30/37 für Bodenplatte',
        size: 15, right: h(C.StatusPill, { status: 'offen' }) }),
      h('div', { style: { padding: 'var(--pad-panel-block)' } },
        h(C.PropGrid, null,
          h(C.PropField, { label: 'Menge', value: '1.250,000 m³' }),
          h(C.PropField, { label: 'Einheitspreis', value: null })),
        h(C.EmptyState, { action: true }, '+ Kommentar')))));

const font = (pkg, w) =>
  `@font-face{font-family:'${pkg === 'hanken-grotesk' ? 'Hanken Grotesk' : 'Schibsted Grotesk'}';` +
  `font-weight:${w};src:url(../node_modules/@fontsource/${pkg}/files/${pkg}-latin-${w}-normal.woff2)}`;

const html = `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><title>Conocto Design – Vorschau</title>
<link rel="stylesheet" href="../tokens/tokens.css"><link rel="stylesheet" href="../styles.css">
<style>
${[500, 600, 700].map((w) => font('hanken-grotesk', w)).join('\n')}
${[400, 500, 600, 700].map((w) => font('schibsted-grotesk', w)).join('\n')}
body{margin:0;padding:40px;width:960px}
h1{font-family:var(--display);font-weight:600;font-size:30px;letter-spacing:-.02em;margin:0 0 4px}
h2{font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--mute);
  font-weight:500;margin:28px 0 10px}
p{color:var(--dim);margin:0}
.swatches{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.sw{display:flex;align-items:center;gap:8px}
.sw span{width:28px;height:28px;border-radius:var(--r-sm);border:1px solid var(--line)}
code{font-family:var(--sans);font-size:12px;color:var(--dim)}
.skala{display:flex;gap:4px;margin-top:8px}
.chip{width:40px;height:20px;border-radius:var(--r-hair)}
.typo div{margin:4px 0}
.demo{display:flex;flex-direction:column;gap:14px}
.zeile{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
</style></head>
<body>
<h1>Conocto Design</h1>
<p>Ein Akzent, Hinweise amber, Titel in Hanken Grotesk, Text in Schibsted Grotesk.</p>
<h2>Farben</h2>
<div class="swatches">${KERN.map(swatch).join('')}</div>
<div class="skala">${reihe('cat-')}</div>
<div class="skala">${reihe('dot-')}</div>
<h2>Schrift</h2>
<div class="typo">
<div style="font-family:var(--display);font-weight:600;font-size:19px">03 Rohbau · Stahlbeton</div>
<div style="font-family:var(--display);font-weight:600;font-size:15px">Stahlbeton C30/37 für Bodenplatte</div>
<div style="font-size:13.5px">Expositionsklasse XC4, XF1. Bewehrung wird gesondert vergütet.</div>
<div style="font-size:12px;color:var(--dim)">01.02.0030  Schalung Bodenplatte · 1.250,000 m³</div>
</div>
<h2>Bausteine</h2>
${bausteine}
</body></html>
`;
writeFileSync(new URL('docs/vorschau.html', root), html);
console.log('docs/vorschau.html geschrieben.');
