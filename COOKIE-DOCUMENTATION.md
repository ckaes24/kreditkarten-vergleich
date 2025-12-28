# Cookie-Banner - Rechtliche Dokumentation

## Übersicht
Die Website verwendet einen eigenen DSGVO-konformen Cookie-Banner mit Google Consent Mode v2 Integration.

## Implementierte Features

### ✅ DSGVO-Konformität
- **Opt-In-Prinzip**: Keine nicht-notwendigen Cookies werden ohne Zustimmung gesetzt
- **Granulare Kontrolle**: Nutzer können einzelne Cookie-Kategorien aktivieren/deaktivieren
- **Transparenz**: Detaillierte Informationen zu jeder Cookie-Kategorie
- **Widerrufsmöglichkeit**: Cookie-Einstellungen können jederzeit geändert werden (Footer)
- **Privacy by Default**: Standardmäßig sind nur notwendige Cookies aktiviert

### 🍪 Cookie-Kategorien

1. **Notwendige Cookies** (immer aktiv)
   - Cookie-Consent-Status (`cookie_consent`)
   - Cookie-Präferenzen (`cookie_preferences`)
   - Laufzeit: 365 Tage
   - Zweck: Speicherung der Nutzer-Einwilligung

2. **Funktionale Cookies** (optional)
   - Zweck: Erweiterte Funktionalität, Personalisierung
   - Beispiel: Filter-Einstellungen, Layout-Präferenzen

3. **Analyse-Cookies** (optional)
   - Anbieter: Google Ireland Limited
   - Zweck: Google Analytics mit IP-Anonymisierung
   - Laufzeit: Bis zu 2 Jahre
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)

4. **Marketing-Cookies** (optional)
   - Anbieter: Google Ireland Limited
   - Zweck: Personalisierte Werbung, Remarketing
   - Laufzeit: Bis zu 2 Jahre
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)

### 🔒 Google Consent Mode v2

Die Implementierung nutzt Googles Consent Mode v2 (seit März 2024 verpflichtend):

**Default Consent (vor Nutzer-Entscheidung):**
- `ad_storage`: denied
- `ad_user_data`: denied
- `ad_personalization`: denied
- `analytics_storage`: denied
- `functionality_storage`: denied
- `personalization_storage`: denied
- `security_storage`: granted (notwendig)

**Nach Zustimmung:**
- Consent-Status wird dynamisch aktualisiert
- Google Analytics lädt nur bei analytics_storage: granted
- Werbefunktionen nur bei marketing: granted

**Vorteile:**
- ✅ Conversion-Modellierung auch ohne Cookies (aggregierte Daten)
- ✅ Keine vollständige Blockierung von Google Analytics
- ✅ DSGVO-konforme Implementierung
- ✅ Region-spezifische Einstellungen (EU/UK)

### 🔐 Sicherheitsfeatures

- **SameSite=Lax**: Schutz vor CSRF-Angriffen
- **Secure Flag**: Nur bei HTTPS (automatisch)
- **HttpOnly**: Nicht gesetzt (für JavaScript-Zugriff benötigt)
- **Domain**: auto (First-Party Cookies)
- **Path**: / (gesamte Domain)

### 📱 Design & UX

- Responsive Design (Mobile-First)
- Overlay mit Backdrop (nicht wegklickbar ohne Entscheidung)
- Zwei Ansichten:
  1. Vereinfachte Ansicht (Schnellentscheidung)
  2. Detailansicht (Granulare Kontrolle)
- Animationen für bessere UX
- Accessibility-Features

## Technische Implementierung

### Dateien

1. **app/lib/cookies.ts**
   - Cookie-Verwaltungslogik
   - Consent-Status-Tracking
   - Event-System für Änderungen

2. **components/CookieBanner.tsx**
   - Haupt-Cookie-Banner
   - Zeigt sich bei erstem Besuch
   - Zwei Ansichten (einfach/detailliert)

3. **components/CookieSettings.tsx**
   - Wiederöffnen der Einstellungen
   - Eingebunden im Footer
   - DSGVO-Anforderung: Widerrufsmöglichkeit

4. **components/GoogleAnalytics.tsx**
   - Google Analytics Integration
   - Consent Mode v2 Implementation
   - Dynamisches Laden basierend auf Zustimmung

### API

```typescript
// Status abrufen
getConsentStatus(): 'accepted' | 'declined' | 'partial' | null

// Präferenzen abrufen
getCookiePreferences(): CookiePreferences

// Präferenzen speichern
saveCookiePreferences(prefs: Partial<CookiePreferences>): void

// Alle akzeptieren
acceptAllCookies(): void

// Nur notwendige
acceptNecessaryCookies(): void

// Prüfungen
hasAnalyticsConsent(): boolean
hasMarketingConsent(): boolean
hasFunctionalConsent(): boolean

// Event-Listener
onConsentChanged(callback: (prefs) => void): () => void
```

## Hosting-Spezifika

### Vercel
- ✅ Next.js optimiert
- ✅ Edge Functions unterstützt
- ✅ HTTPS standardmäßig (Secure Flag)
- ✅ Globale CDN-Verteilung

### All-Inkl
- ✅ Shared Hosting kompatibel
- ✅ Keine serverseitigen Abhängigkeiten
- ✅ Reine Client-Side Implementierung
- ⚠️ HTTPS muss aktiviert sein (für Secure Flag)

## Rechtliche Checkliste

- ✅ Opt-In statt Opt-Out
- ✅ Granulare Einwilligungsmöglichkeiten
- ✅ Transparente Informationen
- ✅ Widerrufsmöglichkeit im Footer
- ✅ Link zur Datenschutzerklärung
- ✅ Privacy by Default
- ✅ Consent Mode v2 (Google-Anforderung)
- ✅ IP-Anonymisierung bei Google Analytics
- ✅ Cookie-Laufzeiten dokumentiert
- ✅ Drittanbieter genannt (Google Ireland Limited)

## Empfohlene Ergänzungen zur Datenschutzerklärung

Die Datenschutzerklärung sollte enthalten:

1. **Cookie-Übersicht**
   - Liste aller verwendeten Cookies
   - Zweck, Laufzeit, Anbieter

2. **Google Analytics**
   - Datenverarbeitungsvertrag mit Google
   - Hinweis auf IP-Anonymisierung
   - Link zu Google-Datenschutz
   - Opt-Out-Möglichkeit

3. **Drittland-Transfer**
   - Hinweis auf mögliche Datenübermittlung in die USA
   - Standardvertragsklauseln
   - Angemessenheitsbeschluss (falls vorhanden)

4. **Widerrufsrecht**
   - Hinweis auf Cookie-Einstellungen im Footer
   - Browser-Einstellungen für Cookie-Löschung

## Testing

### Manuelle Tests
1. Banner erscheint bei erstem Besuch
2. "Alle akzeptieren" setzt alle Cookies
3. "Nur notwendige" blockiert Analytics/Marketing
4. "Einstellungen anpassen" zeigt Detailansicht
5. Google Analytics lädt nur bei Zustimmung
6. Cookie-Einstellungen im Footer funktionieren
7. Einstellungen bleiben nach Reload erhalten

### Browser-DevTools
```javascript
// Console-Tests
document.cookie // Alle Cookies anzeigen
window.gtag // Google Analytics verfügbar?
window.dataLayer // DataLayer vorhanden?
```

### Browser-Kompatibilität
- ✅ Chrome/Edge (88+)
- ✅ Firefox (78+)
- ✅ Safari (14+)
- ✅ Mobile Browser

## Performance

- Consent Mode Default wird vor gtag.js geladen
- Analytics-Script lädt nur bei Zustimmung
- Keine Render-Blocking Scripts
- Minimaler JavaScript-Footprint
- CSS-Animationen (GPU-beschleunigt)

## Wartung

### Updates erforderlich bei:
- Neue Cookie-Kategorien
- Änderungen bei Google Analytics
- Neue Drittanbieter-Tools
- DSGVO-Änderungen
- Browser-Updates (Cookie-Policies)

### Monitoring
- Analytics-Tracking der Consent-Rate
- Fehler-Logging (falls gewünscht)
- A/B-Tests für bessere Acceptance-Rate

## Support

Bei Fragen zur Implementierung:
1. Prüfe Browser-Console auf Fehler
2. Teste in verschiedenen Browsern
3. Validiere Cookie-Speicherung
4. Prüfe Google Consent Mode in DevTools

---

**Letzte Aktualisierung:** 28. Dezember 2025
**Version:** 1.0.0
**Status:** ✅ Produktionsbereit
