"use client"

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

export default function ReiseversicherungPage() {
  const [free, setFree] = useState(false)
  const [noFxFee, setNoFxFee] = useState(false)
  const [lounge, setLounge] = useState(false)
  const [creditCard, setCreditCard] = useState(false)

  // Filter: Nur Karten MIT Reiseversicherung
  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      // Hauptkriterium: Reiseversicherung vorhanden
      if (!c.travelInsurance) return false
      
      if (free && c.annualFee > 0) return false
      if (noFxFee && c.foreignFee > 0) return false
      if (lounge && !c.loungeAccess) return false
      if (creditCard && c.cardType !== 'Credit') return false
      return true
    })

    // Sortierung: Premium-Karten mit umfangreichen Leistungen bevorzugt (Lounge-Zugang als Indikator)
    result.sort((a, b) => {
      const scoreA = (a.loungeAccess ? 10 : 0) + 
                     (a.foreignFee === 0 ? 5 : 0) + 
                     (a.annualFee === 0 ? 2 : 0)
      const scoreB = (b.loungeAccess ? 10 : 0) + 
                     (b.foreignFee === 0 ? 5 : 0) + 
                     (b.annualFee === 0 ? 2 : 0)
      return scoreB - scoreA
    })

    return result
  }, [free, noFxFee, lounge, creditCard])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Kreditkarten mit Reiseversicherung im Vergleich
              </h1>
              <p className="text-gray-600 max-w-prose leading-relaxed">
                Manche Kreditkarten beinhalten Versicherungsleistungen, die bei Reisen greifen können. 
                Der Umfang variiert stark: von Reiserücktritt über Auslandskrankenversicherung bis zu Mietwagenabsicherung. 
                Die Leistungen sind oft an Bedingungen geknüpft, etwa dass die Reise mit der Karte bezahlt wurde.
              </p>
              <p className="text-sm text-gray-600 max-w-prose">
                Dieser Vergleich stellt Karten mit Versicherungskomponenten gegenüber. Ob diese eine separate 
                Reiseversicherung ersetzen können, hängt vom individuellen Bedarf und den konkreten Versicherungsbedingungen ab, 
                die vor Abschluss geprüft werden sollten.
              </p>

              <div className="flex gap-3">
                <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm shadow">
                  Zum Vergleich
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VERSICHERUNGSLEISTUNGEN */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Welche Versicherungsleistungen können enthalten sein?
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🛡️ Reiserücktrittsversicherung</h3>
              <p>
                Deckt Stornokosten ab, wenn eine Reise aus bestimmten Gründen (z. B. Krankheit) nicht angetreten 
                werden kann. Der Umfang und die anerkannten Gründe variieren je nach Anbieter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏥 Auslandskrankenversicherung</h3>
              <p>
                Übernimmt medizinische Kosten im Ausland, die über die gesetzliche Krankenversicherung hinausgehen. 
                Oft sind auch Krankenrücktransporte eingeschlossen. Die Gültigkeitsdauer pro Reise kann begrenzt sein.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🧳 Reisegepäckversicherung</h3>
              <p>
                Ersetzt Schäden oder Verlust von Reisegepäck bis zu einem bestimmten Betrag. Oft gibt es 
                Höchstgrenzen pro Einzelgegenstand und Ausschlüsse für bestimmte Wertgegenstände.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 Mietwagenversicherung</h3>
              <p>
                Deckt Schäden am Mietwagen ab und kann die Selbstbeteiligung bei Mietwagenunfällen übernehmen. 
                Die Bedingungen unterscheiden sich stark – teils nur außerhalb Deutschlands gültig.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✈️ Flugverspätung / Reiseabbruch</h3>
              <p>
                Manche Karten erstatten Kosten bei erheblichen Flugverspätungen oder Reiseabbruch. 
                Die Mindestdauer der Verspätung und die Höchstbeträge sind oft festgelegt.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">⚠️ Wichtiger Hinweis</h3>
              <p className="text-xs">
                Die Versicherungen sind oft an Bedingungen geknüpft – etwa dass die Reise mit der Karte bezahlt 
                wurde oder dass bestimmte Mindestbeträge umgesetzt wurden. Zudem gibt es häufig Obergrenzen, 
                Selbstbeteiligungen und Ausschlüsse. Die detaillierten Versicherungsbedingungen sollten vor 
                Beantragung und vor jeder Reise beim Anbieter eingesehen werden.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section id="cards" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <div className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border bg-gray-900 text-white border-gray-900">
            🛡️ Mit Reiseversicherung (aktiv)
          </div>
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
          <Filter label="🌍 Keine Fremdwährungsgebühr" active={noFxFee} onClick={() => setNoFxFee(!noFxFee)} />
          <Filter label="✈️ Mit Loungezugang" active={lounge} onClick={() => setLounge(!lounge)} />
          <Filter label="💳 Nur Kreditkarten (Credit)" active={creditCard} onClick={() => setCreditCard(!creditCard)} />
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
                  <li className="font-semibold text-green-700">🛡️ Reiseversicherung: Ja</li>
                  <li>💳 Jahresgebühr: {c.annualFee} €</li>
                  <li>🌍 Fremdwährungsgebühr: {c.foreignFee} %</li>
                  <li>💳 Kartentyp: {c.cardType === 'Credit' ? 'Kreditkarte' : 'Debitkarte'}</li>
                  <li>🌐 Netzwerk: {c.network}</li>
                  <li>✈️ Loungezugang: {c.loungeAccess ? 'Ja' : 'Nein'}</li>
                </ul>

                <details className="text-sm text-gray-700">
                  <summary className="cursor-pointer font-medium text-gray-900">
                    Warum diese Karte?
                  </summary>
                  <p className="mt-2">
                    {getInsuranceReason(c)}
                  </p>
                </details>

                <div className="bg-blue-50 border border-blue-200 rounded p-2 text-xs text-gray-700">
                  <strong>Hinweis:</strong> Versicherungsbedingungen beim Anbieter prüfen
                </div>
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
            Kreditkarten mit Reiseversicherung im direkten Vergleich
          </h2>

          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b text-gray-900">
                <th className="p-2 text-left">Karte</th>
                <th className="p-2 text-center">Netzwerk</th>
                <th className="p-2 text-center">Jahresgebühr</th>
                <th className="p-2 text-center">FX-Gebühr</th>
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
            Vergleichskriterien (z. B. Verfügbarkeit von Versicherungsleistungen, Gebührenstruktur) als 
            besonders passend für dieses Nutzungsszenario erscheint. Dies stellt keine Finanzberatung dar. 
            Die Versicherungsbedingungen müssen individuell geprüft werden. Maßgeblich sind die Angaben des 
            jeweiligen Kartenanbieters und Versicherers.
          </p>
        </section>

        {/* RECHTLICHE HINWEISE */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Rechtliche Hinweise
          </h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Keine Versicherungsberatung:</strong> Die Informationen zu Versicherungsleistungen sind allgemeiner Natur 
              und stellen keine Versicherungs-, Finanz- oder Rechtsberatung dar. Verbindliche Angaben zum Versicherungsschutz 
              finden sich ausschließlich in den Versicherungsbedingungen des jeweiligen Anbieters.
            </p>
            <p>
              <strong>Versicherungsbedingungen prüfen:</strong> Vor Abschluss sollten die Versicherungsbedingungen im Detail 
              geprüft werden. Oft gibt es Ausschlüsse, Höchstgrenzen, Selbstbeteiligungen oder Bedingungen (z. B. Bezahlung 
              der Reise mit der Karte).
            </p>
            <p>
              <strong>Änderungen vorbehalten:</strong> Konditionen und Versicherungsleistungen können sich jederzeit ändern. 
              Die Angaben geben den Stand zum Zeitpunkt der Erstellung wieder.
            </p>
            <p>
              <strong>Affiliate-Hinweis:</strong> Links mit * sind Affiliate-Links. Bei Abschluss erhalten wir ggf. 
              eine Provision, ohne dass Ihnen zusätzliche Kosten entstehen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Häufige Fragen zu Kreditkarten mit Reiseversicherung
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Können Kreditkarten-Versicherungen eine separate Reiseversicherung ersetzen?
              </summary>
              <p className="mt-2">
                Das hängt vom Umfang der inkludierten Versicherungen und den individuellen Anforderungen ab. 
                Manche Karten bieten umfangreiche Leistungen, andere nur Basisschutz. Oft gibt es Einschränkungen 
                bei Deckungssummen, Reisedauer, versicherten Personen oder bestimmte Ausschlüsse. Die Versicherungsbedingungen 
                sollten vor Reiseantritt im Detail geprüft werden.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Muss ich die Reise mit der Karte bezahlt haben?
              </summary>
              <p className="mt-2">
                Bei vielen Kreditkarten ist der Versicherungsschutz daran gebunden, dass die Reise (oder Teile davon) 
                mit der Karte bezahlt wurde. Die genauen Bedingungen unterscheiden sich je nach Anbieter und sollten 
                vor Buchung geprüft werden.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Sind Familienangehörige mitversichert?
              </summary>
              <p className="mt-2">
                Das variiert je nach Karte und Versicherungsbedingungen. Manche Karten versichern nur den Karteninhaber, 
                andere schließen mitreisende Familienangehörige ein. Premium-Karten bieten oft erweiterten Schutz – 
                die Details finden sich in den Versicherungsbedingungen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Gibt es Höchstgrenzen bei den Versicherungsleistungen?
              </summary>
              <p className="mt-2">
                Ja, fast alle Kreditkarten-Versicherungen haben Höchstgrenzen für Erstattungen. Auch die Reisedauer 
                kann begrenzt sein (z. B. maximal 90 Tage pro Reise). Zudem gibt es oft Selbstbeteiligungen und 
                Ausschlüsse für bestimmte Risiken oder Vorerkrankungen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Kann ich den Versicherungsschutz vor der Reise prüfen?
              </summary>
              <p className="mt-2">
                Ja, die Versicherungsbedingungen sollten vor jeder Reise beim Kartenanbieter eingesehen werden. 
                Viele Anbieter stellen detaillierte Versicherungsinformationen online zur Verfügung. Bei Unklarheiten 
                kann der Kundenservice weiterhelfen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Wann kann sich eine Karte mit Jahresgebühr und Versicherung rechnen?
              </summary>
              <p className="mt-2">
                Das hängt von der Reisehäufigkeit und den Kosten vergleichbarer separater Versicherungen ab. 
                Bei mehreren Reisen pro Jahr kann eine integrierte Versicherung günstiger sein als Einzelabschlüsse. 
                Bei seltenen Reisen kann eine kostenlose Karte mit bedarfsweise abgeschlossener Versicherung wirtschaftlicher sein. 
                Ein individueller Vergleich ist ratsam.
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
            <a href="/ausland" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">✈️ Kreditkarte fürs Ausland</span>
              <p className="text-xs text-gray-600 mt-1">Speziell für internationale Reisen</p>
            </a>
            <a href="/kreuzfahrten" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🚢 Kreditkarte für Kreuzfahrten</span>
              <p className="text-xs text-gray-600 mt-1">Optimal für Schiffsreisen</p>
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}

function getInsuranceReason(c: any) {
  const reasons = []
  
  reasons.push('integrierte Reiseversicherung')
  
  if (c.annualFee === 0) {
    reasons.push('ohne Jahresgebühr')
  }
  
  if (c.foreignFee === 0) {
    reasons.push('keine Fremdwährungsgebühren')
  }
  
  if (c.loungeAccess) {
    reasons.push('Lounge-Zugang')
  }
  
  if (c.network === 'Visa' || c.network === 'Mastercard') {
    reasons.push(`weltweite Akzeptanz durch ${c.network}`)
  }

  return `Diese Karte bietet ${reasons.join(', ')}. Die Versicherungsbedingungen sollten vor Beantragung beim Anbieter geprüft werden.`
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
