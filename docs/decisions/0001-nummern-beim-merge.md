# DS-0001 – Nummer, Version und Changelog erst nach dem Merge

- **Status:** akzeptiert
- **Datum:** 2026-11-16
- **Anlass:** Nico, 16.11.2026: gleiche Nummern in parallelen PRs blockieren den Merge; eine
  Logik für alle vier Repos (Plan: https://claude.ai/artifact/X8w2PM99vybAQHQoxF8KcJ)

## Entscheidung

- Neue Entscheidung im PR als `docs/decisions/neu-<titel>.md` mit `# NEU – Titel`, ohne Nummer.
- Statt Version von Hand: eine Datei `changes/<titel>.md` (`art: funktion|korrektur`).
- Nach dem Merge vergibt `.github/workflows/entscheidungen.yml` auf `main` Nummer,
  Tabellenzeile, Version in `package.json` + Lockdatei, `CHANGELOG.md` **und das Tag `vX.Y.Z`**,
  das Conocto Doc und Conocto BIM einbinden.
- Die CI prüft im PR, was später Konflikte macht.
- Nach außen heißen Entscheidungen hier `DS-NNNN`; Verweise in andere Repos mit Präfix.
- Gleiches Werkzeug `.github/conocto/entscheidungen.py` in allen vier Repos; ausführliche
  Begründung in Conocto Doc (gleichnamige Entscheidung).

## Folgen

- Bot-Schlüssel einrichten, wenn auf `main` ein Ruleset liegt: `docs/setup/bot-schluessel.md`.
- Ein Tag entsteht nur noch durch den Bot. Doc und BIM heben die Version weiter von Hand an
  (`package.json` dort).
