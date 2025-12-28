'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { getCookiePreferences, onConsentChanged, type CookiePreferences } from '../app/lib/cookies'

const GA_ID = 'G-HCVQ47XDNM'

export default function GoogleAnalytics() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)

  useEffect(() => {
    // Initiale Einstellungen laden
    const prefs = getCookiePreferences()
    setPreferences(prefs)

    // Auf Änderungen lauschen
    const unsubscribe = onConsentChanged((newPrefs) => {
      setPreferences(newPrefs)
      updateGtagConsent(newPrefs)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (preferences) {
      updateGtagConsent(preferences)
    }
  }, [preferences])

  // Analytics nur laden, wenn explizit zugestimmt wurde
  if (!preferences || !preferences.analytics) {
    console.log('Analytics blocked - no consent given')
    return null
  }

  console.log('Analytics enabled - consent given')

  return (
    <>
      {/* Google Consent Mode v2 - Initialisierung mit granted Status */}
      <Script
        id="google-consent-mode"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Consent Mode mit granted Status (da User bereits zugestimmt hat)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted',
              'functionality_storage': ${preferences.functional ? "'granted'" : "'denied'"},
              'personalization_storage': ${preferences.functional ? "'granted'" : "'denied'"},
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `,
        }}
      />

      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=Lax;Secure',
              'cookie_domain': 'auto',
              'cookie_expires': 63072000, // 2 Jahre in Sekunden
              'allow_google_signals': ${preferences.marketing ? 'true' : 'false'},
              'allow_ad_personalization_signals': ${preferences.marketing ? 'true' : 'false'}
            });
          `,
        }}
      />
    </>
  )
}

/**
 * Aktualisiert die Google Consent Mode Einstellungen
 */
function updateGtagConsent(prefs: CookiePreferences) {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  const gtag = (window as any).gtag

  gtag('consent', 'update', {
    'ad_storage': prefs.marketing ? 'granted' : 'denied',
    'ad_user_data': prefs.marketing ? 'granted' : 'denied',
    'ad_personalization': prefs.marketing ? 'granted' : 'denied',
    'analytics_storage': prefs.analytics ? 'granted' : 'denied',
    'functionality_storage': prefs.functional ? 'granted' : 'denied',
    'personalization_storage': prefs.functional ? 'granted' : 'denied',
  })
}