'use client'

import { useEffect, useState } from 'react'
import { getConsentStatus, acceptAllCookies, saveCookiePreferences } from '../app/lib/cookies'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Prüfe ob bereits eine Einwilligung existiert
    const consentStatus = getConsentStatus()
    console.log('Consent status:', consentStatus)
    
    // Banner nur anzeigen, wenn noch KEINE Einwilligung erteilt wurde
    if (consentStatus === null) {
      setShow(true)
    }
  }, [])

  const acceptAll = () => {
    acceptAllCookies()
    setShow(false)
    // Seite neu laden, damit Analytics geladen wird
    window.location.reload()
  }

  const acceptNecessary = () => {
    saveCookiePreferences({
      functional: false,
      analytics: false,
      marketing: false
    })
    setShow(false)
  }

  const decline = () => {
    saveCookiePreferences({
      functional: false,
      analytics: false,
      marketing: false
    })
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-black/60 flex items-center justify-center p-4" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">🍪 Cookie-Einstellungen</h2>
          <p className="text-blue-100 text-sm">
            Wir nutzen Cookies und ähnliche Technologien. Mit Ihrer Zustimmung analysieren wir die Nutzung unserer Website.
          </p>
        </div>

        <div className="p-6 space-y-4">
          {!showDetails ? (
            <>
              <p className="text-gray-700 text-sm leading-relaxed">
                Diese Website verwendet Cookies für Analyse-Zwecke (Google Analytics). 
                Durch Klick auf <strong>&quot;Alle akzeptieren&quot;</strong> stimmen Sie der Nutzung zu.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                <strong>Wichtig:</strong> Ohne Ihre Zustimmung werden keine Tracking-Cookies gesetzt und 
                Google Analytics bleibt deaktiviert.
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <button onClick={acceptAll} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  ✓ Alle akzeptieren
                </button>
                
                <button onClick={acceptNecessary} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Nur notwendige Cookies
                </button>

                <button onClick={decline} className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Ablehnen
                </button>

                <button onClick={() => setShowDetails(true)} className="text-sm text-blue-600 hover:text-blue-800 underline mt-2">
                  Mehr Informationen
                </button>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => setShowDetails(false)} className="text-sm text-blue-600 hover:text-blue-800 mb-4">
                ← Zurück
              </button>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2">✓ Notwendige Cookies</h3>
                  <p className="text-xs">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📊 Analyse-Cookies (Google Analytics)</h3>
                  <p className="text-xs mb-2">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Anbieter:</strong> Google Ireland Limited<br/>
                    <strong>Zweck:</strong> Webanalyse, anonymisierte Nutzungsstatistiken<br/>
                    <strong>Laufzeit:</strong> Bis zu 2 Jahre
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t mt-4">
                <button onClick={acceptAll} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  ✓ Alle akzeptieren
                </button>
                
                <button onClick={acceptNecessary} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Nur notwendige Cookies
                </button>

                <button onClick={decline} className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Ablehnen
                </button>
              </div>
            </>
          )}
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t text-center">
          <p className="text-xs text-gray-600">
            Weitere Informationen in unserer{' '}
            <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a>
          </p>
        </div>
      </div>
    </div>
  )
}
