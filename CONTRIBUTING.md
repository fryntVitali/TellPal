# Beitragen zu Tell Pal

Vielen Dank für dein Interesse! Hier erfährst du, wie du zum Projekt beitragen kannst.

## 🐛 Bugs melden

1. Öffne ein [GitHub Issue](../../issues)
2. Beschreibe das Problem so genau wie möglich
3. Nenne Browser, Gerät und Betriebssystem

## 🌍 Neue Sprache hinzufügen

Um eine neue Sprache (z.B. Französisch `fr`) hinzuzufügen:

### 1. `js/i18n.js` – Sprache registrieren

```javascript
// In der languages-Map hinzufügen:
fr: { name: 'Français', flag: '🇫🇷', speechLang: 'fr-FR' },
```

### 2. `js/i18n.js` – UI-Übersetzungen

Einen neuen Block `fr: { ... }` in der `ui`-Map anlegen mit allen Keys (kopiere `en` als Vorlage).

### 3. `js/data.js` – Datenübersetzungen

Für jedes Item in jeder Kategorie `fr: { label: '...', speech: '...' }` hinzufügen.

### 4. Testen

- TTS-Stimme für die neue Sprache prüfen
- Alle Kategorien durchklicken
- Einstellungen → Sprachwechsel testen

## 📦 Neue Kategorie hinzufügen

In `js/data.js` im `APP_DATA.categories`-Array einen neuen Eintrag ergänzen:

```javascript
{
    id: 'meine-kategorie', emoji: '🎯', color: 'blue',
    i18n: {
        de: { label: 'Meine Kategorie', speech: 'Ich möchte ...' },
        en: { label: 'My Category', speech: 'I want ...' },
        // ... alle Sprachen
    },
    items: [
        // Einzelsymbole hier
    ]
}
```

Verfügbare Farben: `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `teal`.

## 💻 Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/DEIN-USERNAME/TellPal.git
cd TellPal

# Lokalen Server starten
python -m http.server 8080
# oder
npx serve .

# Browser öffnen: http://localhost:8080
```

Es gibt keine Build-Tools oder Abhängigkeiten — einfach die Dateien bearbeiten und im Browser testen.

## 📐 Code-Konventionen

- Vanilla JavaScript (kein Framework)
- Alle UI-Texte über `I18N.t('key')` statt hardcoded Strings
- Alle Daten-Labels über `getItemText(item)` statt direktem Zugriff
- CSS-Variablen nutzen (definiert in `:root` in `style.css`)
