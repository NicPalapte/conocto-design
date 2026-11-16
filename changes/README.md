# Changelog-Einträge

Jeder PR, der am Designsystem etwas ändert, legt hier **eine** Datei an, z. B.
`changes/neue-pill.md`:

```markdown
---
art: funktion
---
Neue Pill

- `cn-pill` hat eine kleine Variante.
```

- `art: funktion` → mittlere Zahl der Version steigt, `art: korrektur` → letzte Zahl.
- Nicht von Hand ändern: Version in `package.json`/`package-lock.json`, `CHANGELOG.md`, Tags.
- Nach dem Merge macht der Bot daraus Version, Changelog und Tag `vX.Y.Z` und löscht die Datei
  (Entscheidung 0001).
