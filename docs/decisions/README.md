# Entscheidungen

Eine Datei je Weichenstellung. Im Gesamtprodukt Conocto heißen diese Entscheidungen `DS-NNNN`
(Conocto Doc `DOC-`, core `CORE-`, BIM `BIM-`). Frühere Weichenstellungen zum Designsystem
stehen in Conocto Doc, z. B. DOC-0069 (Look) und DOC-0076 (Designsystem als Paket).

## Übersicht

| Nr.  | Entscheidung | Status | Datum |
| ---- | ------------ | ------ | ----- |
| 0001 | [Nummer, Version und Changelog erst nach dem Merge](0001-nummern-beim-merge.md) | akzeptiert | 2026-11-16 |

## Regeln

- Neue Entscheidung im PR **ohne Nummer**: `neu-kurzer-titel.md` (nur a–z, 0–9, `-`), erste Zeile
  `# NEU – Titel`. Verweise im selben PR: `neu-kurzer-titel`.
- Nach dem Merge vergibt der Bot die Nummer, setzt `# DS-NNNN – Titel`, ersetzt die Verweise
  und ergänzt die Zeile oben. **Nicht von Hand:** Nummer, neue Tabellenzeile.
- Getroffene Entscheidungen nicht umschreiben: Status auf `ersetzt durch NNNN` setzen, neue
  Datei anlegen. Den Status in der Tabelle darf man dabei von Hand anpassen.
- Status beginnt mit: vorgeschlagen · akzeptiert · ersetzt durch · teilweise ersetzt durch ·
  ergänzt durch · verworfen.
- Verweise in andere Repos immer mit Präfix, z. B. `DOC-0076`.

## Vorlage

```markdown
# NEU – Titel

- **Status:** akzeptiert
- **Datum:** JJJJ-MM-TT

## Worum geht's

## Entscheidung

## Warum

## Folgen
```
