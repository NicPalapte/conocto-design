---
name: conocto-design
description: Conocto-Designsystem (Farben, Schrift, Logo, React-Bausteine) für alle Conocto-Produkte. Verwenden bei jeder Oberfläche, jedem Mockup oder Entwurf für Conocto oder ein Schwesterprodukt (z. B. BIM-Viewer).
---

# Conocto Design

Quelle: Paket `@conocto/design` (Repo `NicPalapte/conocto-design`).

- Werte: `node_modules/@conocto/design/tokens/tokens.json` (Farben hell/dunkel, Größen, Radien, Schatten). Nur die Variablennamen daraus verwenden.
- Einbinden: `import '@conocto/design/fonts'; import '@conocto/design/index.css';`
- Bausteine: `import { ConoctoLogo, Button, Chip, ValueChip, ChipGroup, SegmentedControl, StatusPill, PanelHeader, BlockLabel, PropField, PropGrid, EmptyState, Surface } from '@conocto/design'`.
- Typen und Props: `node_modules/@conocto/design/dist/*.d.ts`.
- Mockups/Artifacts ohne Paket: Werte aus `tokens/tokens.css` übernehmen, Logo aus `assets/logo/`.
- Verboten: neue Akzentfarbe, Rot für Hinweise, Icon-Bibliotheken, Emoji, Inter/Roboto/Space Grotesk, Festbreitenschrift, `tabular-nums`, Hex-Farben direkt im Code. Stattdessen: Tokens, Unicode-Zeichen, Schibsted/Hanken.

Conocto macht ein Leistungsverzeichnis lesbar: ein ruhiger, dichter Arbeitsplatz für Kalkulation, AVA und Bauleitung. Die Hauptansicht (Graph, später 3D-Modell) ist die Bühne, alles andere schwebt darüber. Dieses System gilt für alle Conocto-Produkte, auch für den BIM-Viewer.

## Grundsätze

- **Ruhig und klar, ohne Verspieltes.** Reines Weiß (`paper`) in Hell, Schwarz in Dunkel, neutrale Grautöne. Keine Verläufe, keine Bilder, keine Texturen.
- **Ein Akzent.** Ziegelrot `accent` (`#c8362b`, Dunkel `#e5554a`) heißt ausgewählt, aktiv, klickbar. Nichts sonst. Abstufungen: `accent-soft` (Fläche), `accent-ink` (Text darauf), `accent-fill` / `accent-fill-hover` (gefüllter Knopf).
- **Hinweise amber, nie rot.** `amber` / `amberS` für offen und Achtung, `greenD` / `greenS` für erledigt, `red` nur für echte Fehler wie eine kaputte Datei.
- **So wenig Erklärtext wie möglich.** Labels statt Sätze; der Rest erschließt sich per Klick.
- **Hell und Dunkel gleichwertig.** Jede Farbe ist ein Token mit zwei Werten. Nie eine Hex-Farbe direkt in eine Komponente schreiben.

## Texte

- Deutsch, Vokabular der Baubranche: Position, OZ, Los, Abschnitt, Langtext, Menge, Einheit, EP, GP.
- Labels als Substantiv („Hinweise", „Menge"), Aktionen als Verb („Datei öffnen", „Vergleichen").
- Leerzustände als kurze Nominalphrase: „Keine Hinweise". Keine Entschuldigung, kein Ausrufezeichen.
- Labels und Eyebrows in Großbuchstaben mit Laufweite `ls-label`; Inhalte in Satzschreibung.
- Zahlen deutsch: `1.250,000 m³`. Fehlender Wert oder Preis: „—".
- Keine Emoji. Prüfhinweise sind Hinweise, nie Urteile oder Rechtsrat.

## Farbe

- Flächen: `paper` (Bühne), `surface` (Fenster, Karten, Menüs), `sunken` (Hover, Umschaltgruppen), `panel` (ruhige Seitenflächen).
- Text: `ink` Haupttext, `dim` Zweittext, `mute` Labels und Metadaten; alle drei mindestens 4,5:1 auf `paper`, `surface` und `sunken` in beiden Themen.
- Linien: `line` für jeden 1px-Rahmen, `line2` für Hover und gestrichelte „hinzufügen"-Kanten.
- Auswahl: Fläche `accent-soft`, Text `accent-ink`, 2px-Balken (`sel-bar`) in `accent` links. Hover ist nur ein Flächenwechsel.
- Primärknopf: `accent-fill` mit weißem Text, Hover `accent-fill-hover`.
- Kategorien: `cat-1` … `cat-10` als Flächen, `dot-1` … `dot-10` als Punkte; gedämpft, gleichrangig, ohne Rangsignal. `heat-1` … `heat-5` für Kacheln nach Anzahl.
- Eigene Markierungen im Text: sechs feste `paint-*`-Farben, Schrift darauf immer `paint-ink`.

## Schrift

- **Hanken Grotesk** (500–700) nur für Titel und die Wortmarke: Stile `title-lg`, `title`, `title-sm`, Laufweite `ls-title`.
- **Schibsted Grotesk** (400–700) für alles andere: Labels, Zahlen, OZ, Tabellen, Langtext.
- Keine Festbreitenschrift. Kein `tabular-nums`: Schibsted macht damit auch Punkt und Komma ziffernbreit, OZ und Mengen zerfallen.
- Größen dicht: 11–14px für Bedienung (`label`, `meta`, `body`, `row`, `cell`, `prose`), 15–19px für Titel. Untergrenze `fs-micro` 11px.
- Schriftdateien liegen unter `fonts/` (latin, mit Umlauten). Im Code über `@fontsource/hanken-grotesk` und `@fontsource/schibsted-grotesk` selbst ausliefern, kein Aufruf an Google Fonts.

## Flächen, Radien, Schatten

- Was über der Hauptansicht schwebt, bekommt Schatten: `shadow` für Fenster, Karten, Panels; `shadow-sm` für Kapseln und das gewählte Segment. Immer mit 1px `line`-Rahmen.
- Innerhalb einer Fläche trennen Linien. Keine verschachtelten Schatten, kein farbiger Rand links als Schmuck.
- Glas: `glass` / `glass-strong` mit `backdrop-filter: blur(14px)`, nur für Flächen direkt über dem Graphen. Sonst ist nichts durchscheinend.
- Radien: `r-lg` 14px Fenster und Karten · `r-md` 10px Menüs und Popover · `r-sm` 7px Knöpfe in Gruppen, Eingabefelder · `r-pill` Chips, Pillen, runde Knöpfe. Tabellenzeilen, Zellen und Baumzeilen bleiben eckig (`r-none`).
- Gestrichelt (1px) heißt immer: leer, hinzufügen, zurücksetzen, hier ablegen.

## Abstand und Maße

- Die Skala ist klein: `sp-2` 4 · `sp-3` 6 · `sp-4` 8 · `sp-6` 12 · `sp-8` 16 px deckt fast alles ab.
- Feste Maße: Kopfleiste `h-topbar` 54px, Bereichskopf `h-view-head` 44px, Raster hinter dem Graphen `grid-cell` 24px.
- Zusammengesetzte Innenabstände: `--pad-chip`, `--pad-row`, `--pad-panel-head`, `--pad-panel-block`.

## Bewegung und Filter

- Nur Farbwechsel: `dur-fast` / `dur-base` mit `ease`. Kein Einblenden, kein Federn, kein Anheben beim Hover.
- Ausnahme: Wechsel der Anordnung im Graphen gleitet 0,9s, nie bei `prefers-reduced-motion`.
- Filtern ist sichtbar, nicht zerstörend: Nicht-Treffer werden gedimmt (`dim-nonmatch` 0,32, Abschnitte `dim-section` 0,4) oder ausgeblendet, nach Wahl.

## Symbole und Marke

- Keine Icon-Bibliothek. Wenn nötig Unicode-Zeichen (→ ↓ × · ✓), in Textfarbe.
- Einzige Bildmarke ist die Krake (`assets/logo/`). Wortmarke = Zeichen + „conocto" klein, Komponente `ConoctoLogo`. Für ein Schwesterprodukt bleibt das Zeichen, nur der Schriftzug ändert sich.
- Fokus: 2px durchgehende Linie in `accent-ink`, Abstand 1px (`styles.css`).

## Bausteine

`@conocto/design` exportiert React-Bausteine (React ≥ 18). Sie sind fachfrei und lassen sich in jedem Conocto-Produkt verwenden: `ConoctoLogo`, `Button`, `Chip`, `ValueChip` mit `ChipGroup`, `SegmentedControl`, `StatusPill`, `PanelHeader` mit `BlockLabel`, `PropField` mit `PropGrid`, `EmptyState`, `Surface`. Ohne React gibt es die Klassen `cn-window`, `cn-glass`, `cn-pill`, `cn-btn`.
