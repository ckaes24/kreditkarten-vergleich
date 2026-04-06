"use client"

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

// Next.js 13+ Metadata wird über layout.tsx und generateMetadata exportiert
// Für client components nutzen wir nächste/head im useEffect

export default function Page() {
  const [noFxFee, setNoFxFee] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [free, setFree] = useState(false)
  const [lounge, setLounge] = useState(false)

  // Filter: Für Ausland geeignete Karten (Credit bevorzugt, weltweit akzeptiert)
  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      if (noFxFee && c.foreignFee > 0) return false
      if (insurance && !c.travelInsurance) return false
      if (free && c.annualFee > 0) return false
      if (lounge && !c.loungeAccess) return false
      return true
    })

    // Sortierung: niedrige FX-Gebühren + Versicherung + weltweit akzeptierte Netzwerke
    result.sort((a, b) => {
      const scoreA = (a.foreignFee === 0 ? 5 : 0) + 
                     (a.travelInsurance ? 3 : 0) + 
                     (a.loungeAccess ? 2 : 0) +
                     ((a.network === 'Visa' || a.network === 'Mastercard') ? 2 : 0)
      const scoreB = (b.foreignFee === 0 ? 5 : 0) + 
                     (b.travelInsurance ? 3 : 0) + 
                     (b.loungeAccess ? 2 : 0) +
                     ((b.network === 'Visa' || b.network === 'Mastercard') ? 2 : 0)
      return scoreB - scoreA
    })

    return result
  }, [noFxFee, insurance, free, lounge])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Kreditkarten für Auslandsreisen im Vergleich
              </h1>
              <p className="text-gray-600 max-w-prose leading-relaxed">
                Bei Auslandsreisen können verschiedene Anforderungen an Kreditkarten relevant werden: 
                weltweite Akzeptanz, Gebühren für Fremdwährungszahlungen, Verfügbarkeit von Bargeld, 
                Einsetzbarkeit als Kaution oder optionale Zusatzleistungen wie Versicherungen.
              </p>
              <p className="text-sm text-gray-600 max-w-prose">
                Dieser Vergleich stellt Kreditkarten mit unterschiedlichen Merkmalen gegenüber. 
                Welche Karte geeignet ist, hängt vom individuellen Nutzungsverhalten und Reiseziel ab. 
                Die Konditionen können je nach Anbieter stark variieren.
              </p>

              <div className="flex gap-3">
                <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm shadow">
                  Zum Vergleich
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KRITERIEN */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Worauf kommt es bei Kreditkarten fürs Ausland an?
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌍 Weltweite Akzeptanz</h3>
              <p>
                Visa und Mastercard werden weltweit am häufigsten akzeptiert. American Express ist seltener vertreten, 
                vor allem in Asien und Südamerika. Für maximale Flexibilität empfiehlt sich eine Visa- oder Mastercard.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💸 Fremdwährungsgebühren vermeiden</h3>
              <p>
                Karten ohne Fremdwährungsgebühr sparen bei jedem Einkauf im Nicht-Euro-Ausland Kosten. 
                Bei häufigen Reisen oder höheren Ausgaben summiert sich die Ersparnis schnell.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏧 Bargeldabhebungen im Ausland</h3>
              <p>
                Einige Karten erlauben kostenlose Bargeldabhebungen weltweit, andere erheben Gebühren ab der ersten 
                Abhebung. Die Konditionen unterscheiden sich erheblich und sollten vor Reiseantritt geprüft werden.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🛡️ Reiseversicherungen inklusive</h3>
              <p>
                Viele Reisekreditkarten bieten integrierte Versicherungen wie Reiserücktrittsversicherung, 
                Auslandskrankenversicherung oder Mietwagenversicherung. Der Umfang variiert stark – 
                ein Vergleich der Versicherungsbedingungen lohnt sich.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 Mietwagen im Ausland</h3>
              <p>
                Für Mietwagenbuchungen im Ausland wird in der Regel eine Kreditkarte benötigt – als Kaution 
                und zur Absicherung. Echte Kreditkarten (Credit) werden von Autovermietungen bevorzugt, 
                Debitkarten werden oft nicht akzeptiert. Einige Premium-Karten bieten zudem einen 
                Mietwagenversicherungsschutz, der die Selbstbeteiligung bei Schäden abdecken kann.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✈️ Lounge-Zugang an Flughäfen</h3>
              <p>
                Premium-Kreditkarten bieten oft Zugang zu Airport-Lounges weltweit. Das kann besonders bei 
                längeren Reisen mit Zwischenstopps komfortabel sein.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 Kontaktloses Bezahlen & Mobile Payment</h3>
              <p>
                Moderne Kreditkarten unterstützen kontaktloses Bezahlen und lassen sich in Apple Pay, Google Pay 
                oder ähnliche Dienste einbinden – praktisch für schnelle Zahlungen unterwegs.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Tipp: Mehrere Karten als Backup</h3>
              <p>
                Für Auslandsreisen empfiehlt es sich, mindestens zwei Kreditkarten unterschiedlicher Netzwerke 
                dabei zu haben. So sind Sie abgesichert, falls eine Karte nicht akzeptiert wird, verloren geht 
                oder gesperrt werden muss. Idealerweise sollten die Karten getrennt aufbewahrt werden.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section id="cards" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <Filter label="🌍 Keine Fremdwährungsgebühr" active={noFxFee} onClick={() => setNoFxFee(!noFxFee)} />
          <Filter label="🛡️ Mit Reiseversicherung" active={insurance} onClick={() => setInsurance(!insurance)} />
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
          <Filter label="✈️ Mit Loungezugang" active={lounge} onClick={() => setLounge(!lounge)} />
        </section>

        {/* KARTEN */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <div
              key={c.id}
              className={`relative bg-white rounded-xl p-6 shadow-sm border flex flex-col
                ${best?.id === c.id ? 'border-yellow-400 ring-2 ring-yellow-300' : 'border-gray-200'}
              `}
            >
              <div className="space-y-3">
                {best?.id === c.id && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-yellow-50 border border-yellow-400 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Beste Wahl*
                  </div>
                )}

                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.issuer} Logo`}
                    className={
                      c.id === 'santander'
                        ? 'block h-14 sm:h-18 md:h-22 lg:h-26 object-contain max-w-[260px]'
                        : 'block h-12 sm:h-16 md:h-20 lg:h-24 object-contain max-w-[220px]'
                    }
                  />
                ) : (
                  <div className="h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    Logo folgt
                  </div>
                )}

                <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.issuer}</p>

                <ul className="text-sm text-gray-700 space-y-1">
                  <li>💳 Jahresgebühr: {c.annualFee} €</li>
                  <li className={c.foreignFee === 0 ? 'font-semibold text-green-700' : ''}>
                    🌍 Fremdwährungsgebühr: {c.foreignFee} %
                  </li>
                  <li>🌐 Netzwerk: {c.network}</li>
                  <li>🛡️ Reiseversicherung: {c.travelInsurance ? 'Ja' : 'Nein'}</li>
                  <li>✈️ Loungezugang: {c.loungeAccess ? 'Ja' : 'Nein'}</li>
                  <li>💶 Bargeldabhebung: {c.cashWithdrawal}</li>
                </ul>

                <details className="text-sm text-gray-700">
                  <summary className="cursor-pointer font-medium text-gray-900">
                    Eignung fürs Ausland
                  </summary>
                  <p className="mt-2">
                    {getTravelReason(c)}
                  </p>
                </details>
              </div>

              <a
                href={c.applyUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="mt-5 text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md text-sm"
              >
                Jetzt beantragen*
              </a>
            </div>
          ))}
        </section>

        {/* VERGLEICHSTABELLE */}
        <section className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Kreditkarten fürs Ausland im direkten Vergleich
          </h2>

          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b text-gray-900">
                <th className="p-2 text-left">Karte</th>
                <th className="p-2 text-center">Netzwerk</th>
                <th className="p-2 text-center">Jahresgebühr</th>
                <th className="p-2 text-center">FX-Gebühr</th>
                <th className="p-2 text-center">Vers.</th>
                <th className="p-2 text-center">Lounge</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="p-2 font-medium">{c.name}</td>
                  <td className="p-2 text-center">{c.network}</td>
                  <td className="p-2 text-center">{c.annualFee} €</td>
                  <td className="p-2 text-center">{c.foreignFee} %</td>
                  <td className="p-2 text-center">{c.travelInsurance ? '✔' : '✖'}</td>
                  <td className="p-2 text-center">{c.loungeAccess ? '✔' : '✖'}</td>
                  <td className="p-2 text-center">
                    <a
                      href={c.applyUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold px-3 py-1 rounded"
                    >
                      Beantragen*
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>* „Beste Wahl"</strong> bezeichnet eine Auswahl, die auf Basis der hier dargestellten 
            Vergleichskriterien (z. B. Gebühren, Akzeptanz, Versicherungsleistungen) als besonders passend 
            für dieses Nutzungsszenario erscheint. Dies stellt keine Finanzberatung dar. 
            Maßgeblich sind die Angaben des jeweiligen Kartenanbieters.
          </p>
        </section>

        {/* RECHTLICHE HINWEISE */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Rechtliche Hinweise
          </h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Keine Finanzberatung:</strong> Die Informationen auf dieser Seite stellen keine Finanz-, 
              Anlage- oder Rechtsberatung dar. Sie dienen ausschließlich zu Vergleichszwecken.
            </p>
            <p>
              <strong>Änderungen vorbehalten:</strong> Konditionen, Gebühren und Leistungen können sich jederzeit ändern. 
              Die hier dargestellten Informationen geben den Stand zum Zeitpunkt der Erstellung wieder.
            </p>
            <p>
              <strong>Maßgebliche Angaben:</strong> Verbindliche Informationen zu Konditionen, Versicherungsleistungen 
              und Gebühren erhalten Sie ausschließlich beim jeweiligen Kartenanbieter.
            </p>
            <p>
              <strong>Affiliate-Hinweis:</strong> Links mit * sind Affiliate-Links. Bei Abschluss über diese Links 
              erhalten wir ggf. eine Provision, ohne dass Ihnen zusätzliche Kosten entstehen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Häufige Fragen zu Kreditkarten fürs Ausland
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Welche Kriterien sind bei Kreditkarten für Auslandsreisen relevant?
              </summary>
              <p className="mt-2">
                Relevante Faktoren können sein: Fremdwährungsgebühren, weltweite Akzeptanz des Netzwerks (Visa, Mastercard, Amex), 
                Konditionen für Bargeldabhebungen, Verfügbarkeit eines Kreditrahmens, optionale Versicherungsleistungen 
                und eventuelle Jahresgebühren. Die Gewichtung hängt vom individuellen Nutzungsverhalten ab.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Brauche ich im Ausland unbedingt eine Kreditkarte?
              </summary>
              <p className="mt-2">
                In vielen Ländern außerhalb Europas ist eine Kreditkarte praktisch unverzichtbar – etwa für Hotelreservierungen, 
                Mietwagen oder als Zahlungsmittel in Regionen mit geringer Bargeldnutzung. Debitkarten werden nicht überall akzeptiert.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Was ist bei Bargeldabhebungen im Ausland zu beachten?
              </summary>
              <p className="mt-2">
                Neben möglichen Gebühren der eigenen Bank können auch Gebühren des Automatenbetreibers anfallen. 
                Zudem sollten Sie am Automaten immer in der Landeswährung abheben und nicht in Euro umrechnen lassen 
                (Dynamic Currency Conversion), da sonst ungünstige Wechselkurse berechnet werden.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Sind Versicherungen bei Reisekreditkarten ausreichend?
              </summary>
              <p className="mt-2">
                Einige Kreditkarten bieten umfangreiche Reiseversicherungen, die je nach Kartenmodell eine separate 
                Reiseversicherung ersetzen können. Die Versicherungsbedingungen sollten aber genau geprüft werden – 
                oft gibt es Ausschlüsse oder Beschränkungen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Funktionieren deutsche Kreditkarten weltweit?
              </summary>
              <p className="mt-2">
                Visa und Mastercard funktionieren nahezu weltweit. American Express hat eine geringere Akzeptanz, 
                besonders außerhalb Europas und Nordamerikas. Für maximale Sicherheit empfiehlt es sich, 
                mindestens zwei Karten verschiedener Netzwerke dabei zu haben.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Gibt es Unterschiede bei der Akzeptanz verschiedener Kreditkarten-Netzwerke?
              </summary>
              <p className="mt-2">
                Visa und Mastercard werden weltweit am häufigsten akzeptiert. American Express ist in manchen Regionen, 
                insbesondere in Asien und Südamerika, weniger verbreitet. Bei Reisen in weniger touristische Gebiete 
                kann es sinnvoll sein, mehrere Karten verschiedener Netzwerke dabei zu haben.
              </p>
            </details>
          </div>
        </section>

        {/* INTERNE VERLINKUNG */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-3 text-gray-900">
            Weitere thematische Vergleiche
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            <a href="/" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🌍 Alle Kreditkarten im Vergleich</span>
              <p className="text-xs text-gray-600 mt-1">Übersicht aller verglichenen Karten</p>
            </a>
            <a href="/ohne-fremdwaehrungsgebuehr" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">💸 Ohne Fremdwährungsgebühr</span>
              <p className="text-xs text-gray-600 mt-1">Karten ohne Gebühren bei Fremdwährung</p>
            </a>
            <a href="/kreuzfahrten" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🚢 Kreditkarte für Kreuzfahrten</span>
              <p className="text-xs text-gray-600 mt-1">Optimal für Schiffsreisen</p>
            </a>
            <a href="/reiseversicherung" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🛡️ Mit Reiseversicherung</span>
              <p className="text-xs text-gray-600 mt-1">Karten mit integriertem Versicherungsschutz</p>
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}

function getTravelReason(c: any) {
  const reasons = []
  
  if (c.network === 'Visa' || c.network === 'Mastercard') {
    reasons.push(`weltweite Akzeptanz durch ${c.network}`)
  }
  
  if (c.foreignFee === 0) {
    reasons.push('keine Fremdwährungsgebühren')
  }
  
  if (c.travelInsurance) {
    reasons.push('integrierte Reiseversicherung')
  }
  
  if (c.loungeAccess) {
    reasons.push('Lounge-Zugang an Flughäfen')
  }
  
  if (c.annualFee === 0) {
    reasons.push('ohne Jahresgebühr')
  }

  if (reasons.length === 0) {
    return 'Diese Karte kann grundsätzlich für Auslandsreisen genutzt werden. Prüfen Sie die Konditionen für Ihr Reiseziel.'
  }

  return `Diese Karte bietet ${reasons.join(', ')}. Damit eignet sie sich gut für internationale Reisen.`
}

function Filter({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition
        ${active
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-800 border-gray-300 hover:border-gray-500'}
      `}
    >
      {label}
    </button>
  )
}
