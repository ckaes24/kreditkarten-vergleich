// app/lib/cookies.ts
"use client"

const COOKIE_NAME = 'cookie_consent'
const COOKIE_PREFERENCES_NAME = 'cookie_preferences'

export interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

export type ConsentStatus = 'accepted' | 'declined' | 'partial' | null

/**
 * Standardeinstellungen für Cookies (nur notwendige)
 */
const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: Date.now()
}

/**
 * Liefert den gespeicherten Consent-Status aus dem Cookie-Banner.
 */
export function getConsentStatus(): ConsentStatus {
  const value = getCookie(COOKIE_NAME)
  if (value === 'accepted') return 'accepted'
  if (value === 'declined') return 'declined'
  if (value === 'partial') return 'partial'
  return null
}

/**
 * Gibt die gespeicherten Cookie-Präferenzen zurück
 */
export function getCookiePreferences(): CookiePreferences {
  const value = getCookie(COOKIE_PREFERENCES_NAME)
  if (!value) return DEFAULT_PREFERENCES
  
  try {
    const parsed = JSON.parse(value)
    return {
      necessary: true, // Immer true
      functional: parsed.functional ?? false,
      analytics: parsed.analytics ?? false,
      marketing: parsed.marketing ?? false,
      timestamp: parsed.timestamp ?? Date.now()
    }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

/**
 * Speichert die Cookie-Präferenzen
 */
export function saveCookiePreferences(prefs: Partial<CookiePreferences>) {
  const preferences: CookiePreferences = {
    necessary: true,
    functional: prefs.functional ?? false,
    analytics: prefs.analytics ?? false,
    marketing: prefs.marketing ?? false,
    timestamp: Date.now()
  }
  
  setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(preferences), 365)
  
  // Status bestimmen
  if (preferences.functional && preferences.analytics && preferences.marketing) {
    setCookie(COOKIE_NAME, 'accepted', 365)
  } else if (!preferences.functional && !preferences.analytics && !preferences.marketing) {
    setCookie(COOKIE_NAME, 'declined', 365)
  } else {
    setCookie(COOKIE_NAME, 'partial', 365)
  }
  
  // Event auslösen für andere Komponenten
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('CookieConsentChanged', { 
      detail: preferences 
    }))
  }
}

/**
 * Akzeptiert alle Cookies
 */
export function acceptAllCookies() {
  saveCookiePreferences({
    functional: true,
    analytics: true,
    marketing: true
  })
}

/**
 * Akzeptiert nur notwendige Cookies
 */
export function acceptNecessaryCookies() {
  saveCookiePreferences({
    functional: false,
    analytics: false,
    marketing: false
  })
}

/**
 * Gibt true zurück, wenn Analytics-Cookies zugelassen sind.
 */
export function hasAnalyticsConsent(): boolean {
  const prefs = getCookiePreferences()
  return prefs.analytics
}

/**
 * Gibt true zurück, wenn Marketing-Cookies zugelassen sind.
 */
export function hasMarketingConsent(): boolean {
  const prefs = getCookiePreferences()
  return prefs.marketing
}

/**
 * Gibt true zurück, wenn funktionale Cookies zugelassen sind.
 */
export function hasFunctionalConsent(): boolean {
  const prefs = getCookiePreferences()
  return prefs.functional
}

/**
 * Liest ein Cookie aus `document.cookie` aus.
 * @param name - Cookie-Name
 * @returns Cookie-Wert oder `null` wenn nicht vorhanden
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((c) => c.startsWith(name + '='))
  if (!match) return null
  return decodeURIComponent(match.split('=').slice(1).join('='))
}

/**
 * Setzt ein Cookie
 * @param name - Cookie-Name
 * @param value - Cookie-Wert
 * @param days - Anzahl der Tage bis zum Ablauf
 */
export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)

  // Secure Flag wird automatisch gesetzt bei HTTPS
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${secure}`
}

/**
 * Registriert einen Callback, der ausgeführt wird, wenn sich die Consent-Entscheidung ändert.
 */
export function onConsentChanged(callback: (prefs: CookiePreferences) => void) {
  if (typeof window === 'undefined') return
  if (!window.addEventListener) return
  
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<CookiePreferences>
    callback(customEvent.detail)
  }
  
  window.addEventListener('CookieConsentChanged', handler)
  return () => window.removeEventListener('CookieConsentChanged', handler)
}