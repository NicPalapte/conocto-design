// Rendert jeden Baustein einmal auf dem Server: fängt Laufzeitfehler im Build ab.
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as C from '../dist/index.js';

const noop = () => {};
const faelle = [
  h(C.ConoctoLogo, { name: 'conocto bim' }),
  h(C.Button, { primary: true }, 'Datei öffnen'),
  h(C.Chip, { on: true, count: 3 }, 'm³'),
  h(C.ChipGroup, { label: 'Abschnitt' }, h(C.ValueChip, { on: false, onClick: noop, count: 1250 }, 'Rohbau')),
  h(C.SegmentedControl, { value: 'a', onChange: noop, options: [{ value: 'a', label: 'dimmen' }] }),
  h(C.StatusPill, { status: 'offen' }),
  h(C.PanelHeader, { eyebrow: 'Position', title: 'Bodenplatte' }),
  h(C.PropGrid, null, h(C.PropField, { label: 'Menge', value: null })),
  h(C.EmptyState, { action: true }, '+ Kommentar'),
  h(C.Surface, { kind: 'glass' }, 'x'),
];
for (const el of faelle) renderToStaticMarkup(el);
const html = renderToStaticMarkup(h(C.ValueChip, { on: true, onClick: noop, count: 1250 }, 'Rohbau'));
if (!html.includes('1.250')) throw new Error('Zahl nicht deutsch formatiert: ' + html);
console.log(`${faelle.length} Bausteine gerendert.`);
