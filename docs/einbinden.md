# Paket in einem Projekt einbinden

Das Repo ist privat. Wer das Paket installiert, braucht deshalb Lesezugriff darauf.

## 1. Auf deinem Rechner

Du bist bei GitHub angemeldet, also reicht:

```bash
npm install github:NicPalapte/conocto-design#v0.1.0
```

`#v0.1.0` ist die Version. Ohne sie nimmt npm immer den neuesten Stand von `main`,
und ein Projekt kann sich ungewollt ändern.

## 2. In GitHub Actions (einmal je Projekt)

GitHub Actions darf das private Repo nicht von selbst lesen. Du gibst ihm dafür einen
Zugangsschlüssel (Token).

**Token anlegen (einmal):**

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → *Generate new token*.
2. Name: `conocto-design lesen`. Ablauf: 1 Jahr.
3. *Repository access*: **Only select repositories** → `conocto-design`.
4. *Permissions* → *Contents*: **Read-only**. Sonst nichts.
5. Token kopieren (wird nur einmal angezeigt).

**Token im Projekt hinterlegen (je Projekt, z. B. BIM-Viewer):**

1. Projekt-Repo → Settings → Secrets and variables → Actions → *New repository secret*.
2. Name: `CONOCTO_DESIGN_TOKEN`, Wert: der Token.

**Im Workflow vor `npm ci` einfügen:**

```yaml
- name: Zugriff auf conocto-design
  run: |
    git config --global url."https://x-access-token:${{ secrets.CONOCTO_DESIGN_TOKEN }}@github.com/".insteadOf "ssh://git@github.com/"
    git config --global --add url."https://x-access-token:${{ secrets.CONOCTO_DESIGN_TOKEN }}@github.com/".insteadOf "https://github.com/"
```

**Wenn du das auslässt:** `npm ci` bricht in GitHub Actions mit „Repository not found“ ab,
Build und Deployment schlagen fehl.

**Wenn der Token abläuft:** dieselbe Fehlermeldung. Dann neuen Token anlegen und das Secret
in jedem Projekt ersetzen.

## 3. Im Code

```ts
// Einmal beim Start der App (z. B. main.tsx):
import '@conocto/design/fonts';
import '@conocto/design/index.css';
```

Bausteine:

```tsx
import { ConoctoLogo, Button, Surface } from '@conocto/design';

<ConoctoLogo name="conocto bim" />
<Button primary>Modell öffnen</Button>
```

Mit Tailwind (`tailwind.config.js`):

```js
import preset from '@conocto/design/tailwind-preset';
export default { presets: [preset], content: ['./src/**/*.{ts,tsx}'] };
```

Dann gehen Klassen wie `bg-surface`, `text-accent`, `rounded-lg`, `font-display`.

Hell/Dunkel: folgt dem System. Fest wählen mit `data-theme="light"` oder `"dark"` an `<html>`.

## 4. Claude im Projekt den Look beibringen

Ordner `claude-skill/conocto-design/` aus dem installierten Paket
(`node_modules/@conocto/design/claude-skill/conocto-design/`) nach `.claude/skills/` im
Projekt kopieren und committen. Dann entwirft Claude dort automatisch im Conocto-Look.
