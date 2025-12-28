"use client"

import { useState } from 'react'
import { 
  getCookiePreferences, 
  acceptAllCookies, 
  acceptNecessaryCookies,
  saveCookiePreferences,
  type CookiePreferences 
} from '../app/lib/cookies'

/**
 * Cookie-Einstellungen-Komponente
 * Kann in der Datenschutzerklärung oder im Footer eingebunden werden
 */
export default function CookieSettings() {
  const [showModal, setShowModal] = useState(false)
  const savedPrefs = getCookiePreferences()
  const [prefs, setPrefs] = useState<Omit<CookiePreferences, 'necessary' | 'timestamp'>>({
    functional: savedPrefs.functional,
    analytics: savedPrefs.analytics,
    marketing: savedPrefs.marketing
  })

  const handleAcceptAll = () => {
    acceptAllCookies()
    setShowModal(false)
    alert('Alle Cookies wurden akzeptiert.')
  }

  const handleAcceptNecessary = () => {
    acceptNecessaryCookies()
    setShowModal(false)
    alert('Nur notwendige Cookies wurden akzeptiert.')
  }

  const handleSavePreferences = () => {
    saveCookiePreferences(prefs)
    setShowModal(false)
    alert('Ihre Einstellungen wurden gespeichert.')
  }

  if (!showModal) {
    return (
      <button
        onClick={() => setShowModal(true)}
        className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
      >
        🍪 Cookie-Einstellungen ändern
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              🍪 Cookie-Einstellungen
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Notwendige Cookies */}
          <div className="border rounded-xl p-5 bg-gray-50">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">🔒 Notwendige Cookies</h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Immer aktiv
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mt-1 h-5 w-5 rounded border-gray-300"
              />
            </div>
          </div>

          {/* Funktionale Cookies */}
          <div className="border rounded-xl p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">⚙️ Funktionale Cookies</h3>
                <p className="text-sm text-gray-600">
                  Erweiterte Funktionalität und Personalisierung.
                </p>
              </div>
              <input
                type="checkbox"
                checked={prefs.functional}
                onChange={(e) => setPrefs({ ...prefs, functional: e.target.checked })}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Analyse Cookies */}
          <div className="border rounded-xl p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">📊 Analyse-Cookies</h3>
                <p className="text-sm text-gray-600">
                  Google Analytics für anonymisierte Statistiken.
                </p>
              </div>
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="border rounded-xl p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Marketing-Cookies</h3>
                <p className="text-sm text-gray-600">
                  Personalisierte Werbung und Remarketing.
                </p>
              </div>
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptNecessary}
              className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Auswahl speichern
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              ✓ Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
