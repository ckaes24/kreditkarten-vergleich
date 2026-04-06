"use client"

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

export default function Page() {
  const [noFxFee, setNoFxFee] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [free, setFree] = useState(false)
  const [creditCard, setCreditCard] = useState(false)

  // Filter: Für Kreuzfahrten relevante Karten
  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      if (noFxFee && c.foreignFee > 0) return false
      if (insurance && !c.travelInsurance) return false
      if (free && c.annualFee > 0) return false
      if (creditCard && c.cardType !== 'Credit') return false
      return true
    })

    // Sortierung: Visa/Mastercard bevorzugt (AmEx oft nicht akzeptiert), niedrige FX-Gebühr + Versicherung
    result.sort((a, b) => {
      const scoreA = (a.foreignFee === 0 ? 5 : 0) + 
                     (a.travelInsurance ? 3 : 0) + 
                     (a.cardType === 'Credit' ? 2 : 0) +
                     ((a.network === 'Visa' || a.network === 'Mastercard') ? 10 : -5)
      const scoreB = (b.foreignFee === 0 ? 5 : 0) + 
                     (b.travelInsurance ? 3 : 0) + 
                     (b.cardType === 'Credit' ? 2 : 0) +
                     ((b.network === 'Visa' || b.network === 'Mastercard') ? 10 : -5)
      return scoreB - scoreA
    })

    return result
  }, [noFxFee, insurance, free, creditCard])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Kreditkarten für Kreuzfahrten im Vergleich
              </h1>
              <p className="text-gray-600 max-w-prose leading-relaxed">
                Auf Kreuzfahrten werden Kreditkarten häufig für das Bordkonto, für Zahlungen an Bord und 
                bei Landausflügen benötigt. Dabei können verschiedene Faktoren relevant werden: Akzeptanz durch die Reederei, 
                Gebühren für Fremdwährungen, Verfügbarkeit eines Kreditrahmens oder optionale Versicherungsleistungen.
              </p>
              <p className="text-sm text-gray-600 max-w-prose">
                Die Anforderungen können je nach Reederei, Reiseziel und persönlicher Nutzung variieren. 
                Dieser Vergleich stellt verschiedene Karten mit unterschiedlichen Merkmalen gegenüber.
              </p>

              <div className="flex gap-3">
                <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm shadow">
                  Zum Vergleich
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WICHTIGE KRITERIEN */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Wichtige Kriterien für Kreditkarten auf Kreuzfahrten
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌍 Fremdwährungsgebühren</h3>
              <p>
                Viele Reedereien rechnen Bordkonten in US-Dollar oder anderen Währungen ab. 
                Karten ohne Fremdwährungsgebühr können hier Kosten sparen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💳 Akzeptanz an Bord</h3>
              <p>
                Die meisten Kreuzfahrtschiffe akzeptieren Visa und Mastercard. 
                American Express wird seltener akzeptiert – eine Prüfung bei der jeweiligen Reederei ist empfehlenswert.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏦 Kreditrahmen & Kautionsfähigkeit</h3>
              <p>
                Echte Kreditkarten (Credit) werden von Reedereien bevorzugt, da diese einen Kreditrahmen bieten. 
                Debitkarten werden nicht immer akzeptiert oder erfordern eine höhere Kaution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌏 Einsatz außerhalb der EU</h3>
              <p>
                Kreuzfahrten führen oft in Nicht-EU-Länder. Karten sollten weltweit einsetzbar sein 
                und idealerweise keine Gebühren für Bargeldabhebungen oder Zahlungen im Ausland erheben.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🛡️ Optionale Versicherungsleistungen</h3>
              <p>
                Einige Kreditkarten bieten Reiseversicherungen, die auch auf Kreuzfahrten greifen können. 
                Der Umfang variiert je nach Anbieter – eine Prüfung der Versicherungsbedingungen ist ratsam.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 Mobile Payment & Online-Zahlungen</h3>
              <p>
                Moderne Kreditkarten unterstützen kontaktloses Bezahlen und können in digitalen Wallets hinterlegt werden. 
                Das kann bei Landgängen und an Bord praktisch sein.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section id="cards" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <Filter label="🌍 Keine Fremdwährungsgebühr" active={noFxFee} onClick={() => setNoFxFee(!noFxFee)} />
          <Filter label="🛡️ Mit Reiseversicherung" active={insurance} onClick={() => setInsurance(!insurance)} />
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
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
                  <li>💳 Jahresgebühr: {c.annualFee} €</li>
                  <li>🌍 Fremdwährungsgebühr: {c.foreignFee} %</li>
                  <li>💳 Kartentyp: {c.cardType === 'Credit' ? 'Kreditkarte' : 'Debitkarte'}</li>
                  <li>🌐 Netzwerk: {c.network}</li>
                  <li>🛡️ Reiseversicherung: {c.travelInsurance ? 'Ja' : 'Nein'}</li>
                  <li>💶 Bargeldabhebung: {c.cashWithdrawal}</li>
                </ul>

                <details className="text-sm text-gray-700">
                  <summary className="cursor-pointer font-medium text-gray-900">
                    Eignung für Kreuzfahrten
                  </summary>
                  <p className="mt-2">
                    {getCruiseReason(c)}
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
            Kreditkarten für Kreuzfahrten im direkten Vergleich
          </h2>

          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b text-gray-900">
                <th className="p-2 text-left">Karte</th>
                <th className="p-2 text-center">Netzwerk</th>
                <th className="p-2 text-center">Typ</th>
                <th className="p-2 text-center">Gebühr/Jahr</th>
                <th className="p-2 text-center">Fremdwährung</th>
                <th className="p-2 text-center">Vers.</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="p-2 font-medium">{c.name}</td>
                  <td className="p-2 text-center">{c.network}</td>
                  <td className="p-2 text-center">{c.cardType === 'Credit' ? 'Credit' : 'Debit'}</td>
                  <td className="p-2 text-center">{c.annualFee} €</td>
                  <td className="p-2 text-center">{c.foreignFee} %</td>
                  <td className="p-2 text-center">{c.travelInsurance ? '✔' : '✖'}</td>
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
            Vergleichskriterien (z. B. Kartentyp, Gebühren, Netzwerk-Akzeptanz) als besonders passend 
            für dieses Nutzungsszenario erscheint. Dies stellt keine Finanzberatung dar. 
            Maßgeblich sind die Angaben des jeweiligen Kartenanbieters und der Reederei.
          </p>
        </section>

        {/* HINWEISE */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Wichtige Hinweise
          </h2>
          
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">Bordkonto & Kaution:</strong> Die meisten Reedereien verlangen beim Check-in die Hinterlegung 
              einer Kreditkarte für das Bordkonto. Echte Kreditkarten (Credit) werden dabei bevorzugt, da sie über einen 
              Verfügungsrahmen verfügen. Debitkarten werden nicht immer akzeptiert.
            </p>
            
            <p>
              <strong className="text-gray-900">Akzeptanz je nach Reederei:</strong> Die Akzeptanz von Kreditkarten kann je nach Reederei 
              und Schiff variieren. Während Visa und Mastercard nahezu überall akzeptiert werden, kann die Nutzung von 
              American Express eingeschränkt sein. Eine Nachfrage vor Reiseantritt ist empfehlenswert.
            </p>
            
            <p>
              <strong className="text-gray-900">Gebühren können sich ändern:</strong> Konditionen und Leistungen von Kreditkarten 
              unterliegen Änderungen. Die hier dargestellten Informationen geben den Stand zum Zeitpunkt des Vergleichs 
              wieder. Verbindliche Angaben erhalten Sie direkt beim jeweiligen Kartenanbieter.
            </p>
            
            <p>
              <strong className="text-gray-900">Versicherungsleistungen prüfen:</strong> Falls eine Karte Reiseversicherungen umfasst, 
              sollten die Versicherungsbedingungen im Detail geprüft werden. Nicht alle Versicherungen gelten automatisch 
              für Kreuzfahrten oder decken alle Eventualitäten ab.
            </p>
            
            <p>
              <strong className="text-gray-900">Fremdwährungsabrechnung:</strong> Viele Reedereien rechnen in US-Dollar ab, 
              auch wenn das Schiff in Europa startet. Karten ohne Fremdwährungsgebühr können hier Vorteile bieten.
            </p>
            
            <p className="mt-4">
              <strong className="text-gray-900">Keine Finanzberatung:</strong> Die Informationen auf dieser Seite dienen 
              ausschließlich zu Vergleichszwecken und stellen keine Finanz- oder Rechtsberatung dar.
            </p>
            
            <p>
              <strong className="text-gray-900">Affiliate-Hinweis:</strong> Links mit * sind Affiliate-Links. 
              Bei Abschluss erhalten wir ggf. eine Provision, ohne dass Ihnen zusätzliche Kosten entstehen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Häufige Fragen
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Wird auf Kreuzfahrten immer eine Kreditkarte benötigt?
              </summary>
              <p className="mt-2">
                Die meisten Reedereien verlangen beim Check-in die Hinterlegung einer Zahlungsmethode für das Bordkonto. 
                In der Regel wird eine Kreditkarte bevorzugt. Einige Reedereien akzeptieren auch Debitkarten, verlangen 
                dann aber oft eine höhere Kaution. Eine Bargeldabwicklung ist an Bord meist nicht üblich.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Funktionieren Debitkarten an Bord?
              </summary>
              <p className="mt-2">
                Das hängt von der Reederei ab. Einige akzeptieren Debitkarten (z. B. Visa Debit), andere nicht. 
                Selbst wenn Debitkarten akzeptiert werden, kann eine höhere Kaution verlangt werden. 
                Echte Kreditkarten (Credit) werden in der Regel bevorzugt.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Fallen zusätzliche Gebühren an?
              </summary>
              <p className="mt-2">
                Das kann von mehreren Faktoren abhängen: Manche Karten erheben Fremdwährungsgebühren, wenn in einer 
                anderen Währung als Euro abgerechnet wird. Auch Bargeldabhebungen an Bord oder in Häfen können 
                Gebühren verursachen. Die Konditionen sollten vor Reiseantritt beim Kartenanbieter geprüft werden.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Welche Karten werden typischerweise akzeptiert?
              </summary>
              <p className="mt-2">
                Visa und Mastercard werden auf den meisten Kreuzfahrtschiffen weltweit akzeptiert. 
                American Express wird seltener unterstützt. Eine Nachfrage bei der jeweiligen Reederei 
                vor Buchung ist empfehlenswert.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Sind Versicherungen bei Kreditkarten für Kreuzfahrten relevant?
              </summary>
              <p className="mt-2">
                Einige Kreditkarten bieten Reiseversicherungen, die auch auf Kreuzfahrten greifen können. 
                Der Leistungsumfang variiert jedoch stark. Es ist ratsam, die Versicherungsbedingungen im Detail 
                zu prüfen und gegebenenfalls mit einer separaten Reiseversicherung zu ergänzen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Können zusätzliche Kosten anfallen?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Neben eventuellen Fremdwährungsgebühren der Karte können auch Gebühren seitens der Reederei 
                oder bei Bargeldabhebungen an Bord anfallen. Zudem kann es bei der Abrechnung am Ende der Reise 
                zu Wechselkursaufschlägen kommen. Die genauen Konditionen sollten vor Reiseantritt bei der 
                Reederei und beim Kartenanbieter geprüft werden.
              </p>
            </details>
          </div>
        </section>

        {/* INTERNE VERLINKUNG */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-3 text-gray-900">
            Weitere thematische Vergleiche
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Interessieren Sie sich für spezifische Kartenmerkmale? Weitere Vergleiche finden Sie hier:
          </p>
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

function getCruiseReason(c: any) {
  const reasons = []
  
  if (c.foreignFee === 0) {
    reasons.push('keine Fremdwährungsgebühren beim Bezahlen in anderen Währungen')
  }
  
  if (c.cardType === 'Credit') {
    reasons.push('echte Kreditkarte mit Kreditrahmen, von Reedereien bevorzugt')
  }
  
  if (c.travelInsurance) {
    reasons.push('integrierte Reiseversicherung')
  }
  
  if (c.annualFee === 0) {
    reasons.push('keine Jahresgebühr')
  }
  
  if (c.network === 'Visa' || c.network === 'Mastercard') {
    reasons.push(`${c.network} wird auf den meisten Schiffen weltweit akzeptiert`)
  }

  if (reasons.length === 0) {
    return 'Diese Karte kann grundsätzlich auf Kreuzfahrten eingesetzt werden. Prüfen Sie die Akzeptanz bei Ihrer Reederei.'
  }

  return `Diese Karte bietet ${reasons.join(', ')}. Damit eignet sie sich für den Einsatz auf Kreuzfahrten.`
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
