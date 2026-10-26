# conocto-design – Regeln für Claude

- Zweck: gemeinsames Designsystem aller Conocto-Produkte. Nur fachfreie Bausteine; nichts mit LV-, GAEB- oder BIM-Logik.
- Quelle aller Werte: `tokens/tokens.json`. `tokens/tokens.css` nur über `npm run tokens` erzeugen, nie von Hand ändern.
- Farben im Code nur als `var(--name)`; keine Hex-Werte in `src/` (Ausnahme: weiße Schrift auf `accent-fill`).
- Akzent heißt `accent*` (nicht `blue*` wie im LV-Viewer).
- Neuer Baustein: `src/<Name>.tsx` + Export in `src/index.ts` + Fall in `scripts/smoke.mjs` + Eintrag in `claude-skill/conocto-design/SKILL.md`.
- Vor jedem Commit: `npm run check:tokens` und `npm test`.
- Strikte TS-Types, kein `any`. Zeilenlänge ≤ 100.
- Commits: Conventional Commits, Scopes `tokens · components · assets · docs · ci`.
- Texte für den Owner (README, docs/) in einfachem Deutsch, Ergebnis zuerst; Owner ist kein Software-Experte.
