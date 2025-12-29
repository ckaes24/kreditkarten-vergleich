"use client"

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

export default function OhneFremdwaehrungsgebuehrPage() {
  const [free, setFree] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [creditCard, setCreditCard] = useState(false)
  const [lounge, setLounge] = useState(false)

  // Filter: Nur Karten ohne Fremdwährungsgebühr
  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      // Hauptkriterium: Keine Fremdwährungsgebühr
      if (c.foreignFee > 0) return false
      
      if (free && c.annualFee > 0) return false
      if (insurance && !c.travelInsurance) return false
      if (creditCard && c.cardType !== 'Credit') return false
      if (lounge && !c.loungeAccess) return false
      return true
    })

    // Sortierung: Zusatzleistungen bevorzugen
    result.sort((a, b) => {
      const scoreA = (a.annualFee === 0 ? 5 : 0) + (a.travelInsurance ? 3 : 0) + (a.loungeAccess ? 2 : 0)
      const scoreB = (b.annualFee === 0 ? 5 : 0) + (b.travelInsurance ? 3 : 0) + (b.loungeAccess ? 2 : 0)
      return scoreB - scoreA
    })

    return result
  }, [free, insurance, creditCard, lounge])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Kreditkarten ohne Fremdwährungsgebühr im Vergleich
              </h1>
              <p className="text-gray-600 max-w-prose leading-relaxed">
                Wer im Ausland bezahlt oder online in Fremdwährung einkauft, zahlt bei vielen Kreditkarten eine 
                Fremdwährungsgebühr – oft zwischen 1 % und 2 % des Umsatzes. Kreditkarten ohne diese Gebühr 
                können bei regelmäßigen Auslandszahlungen spürbare Einsparungen bringen.
              </p>
              <p className="text-sm text-gray-600 max-w-prose">
                Dieser Vergleich zeigt ausschließlich Kreditkarten, die keine Fremdwährungsgebühr erheben, 
                und hilft dabei, die passende Karte für internationale Zahlungen zu finden.
              </p>

              <div className="flex gap-3">
                <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm shadow">
                  Zum Vergleich
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WARUM WICHTIG */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Warum ist die Fremdwährungsgebühr relevant?
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💸 Kosten bei Auslandszahlungen</h3>
              <p>
                Die Fremdwährungsgebühr fällt an, wenn in einer anderen Währung als Euro bezahlt wird – 
                etwa im Urlaub, bei Online-Käufen oder Geschäftsreisen. Bei einer Gebühr von 2 % zahlt man 
                bei 1.000 € Umsatz zusätzlich 20 € Gebühren.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌍 Online-Shopping in Fremdwährung</h3>
              <p>
                Auch beim Online-Shopping in US-Dollar, britischen Pfund oder anderen Währungen wird die 
                Fremdwährungsgebühr berechnet. Karten ohne diese Gebühr sind daher auch für Online-Käufe 
                aus dem Ausland vorteilhaft.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✈️ Häufige Reisen ins Ausland</h3>
              <p>
                Wer regelmäßig außerhalb der Eurozone unterwegs ist, profitiert besonders von Karten ohne 
                Fremdwährungsgebühr. Die Ersparnis kann sich bei mehreren Reisen im Jahr summieren.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏧 Bargeldabhebungen im Ausland</h3>
              <p>
                Zusätzlich zur Fremdwährungsgebühr können bei Bargeldabhebungen weitere Gebühren anfallen. 
                Die Konditionen für Bargeldabhebungen sollten daher zusätzlich geprüft werden.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section id="cards" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <div className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border bg-gray-900 text-white border-gray-900">
            🌍 Keine Fremdwährungsgebühr (aktiv)
          </div>
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
          <Filter label="🛡️ Mit Reiseversicherung" active={insurance} onClick={() => setInsurance(!insurance)} />
          <Filter label="💳 Nur Kreditkarten (Credit)" active={creditCard} onClick={() => setCreditCard(!creditCard)} />
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
                    ⭐ Empfohlen
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
                  <li className="font-semibold text-green-700">🌍 Fremdwährungsgebühr: {c.foreignFee} % (keine)</li>
                  <li>💳 Jahresgebühr: {c.annualFee} €</li>
                  <li>💳 Kartentyp: {c.cardType === 'Credit' ? 'Kreditkarte' : 'Debitkarte'}</li>
                  <li>🌐 Netzwerk: {c.network}</li>
                  <li>🛡️ Reiseversicherung: {c.travelInsurance ? 'Ja' : 'Nein'}</li>
                  <li>✈️ Loungezugang: {c.loungeAccess ? 'Ja' : 'Nein'}</li>
                </ul>

                <details className="text-sm text-gray-700">
                  <summary className="cursor-pointer font-medium text-gray-900">
                    Warum diese Karte?
                  </summary>
                  <p className="mt-2">
                    {getFxReason(c)}
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
            Direkter Vergleich: Karten ohne Fremdwährungsgebühr
          </h2>

          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b text-gray-900">
                <th className="p-2 text-left">Karte</th>
                <th className="p-2 text-center">Netzwerk</th>
                <th className="p-2 text-center">Typ</th>
                <th className="p-2 text-center">Jahresgebühr</th>
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
                  <td className="p-2 text-center">{c.cardType === 'Credit' ? 'Credit' : 'Debit'}</td>
                  <td className="p-2 text-center">{c.annualFee} €</td>
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

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Häufige Fragen zu Kreditkarten ohne Fremdwährungsgebühr
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Was ist eine Fremdwährungsgebühr?
              </summary>
              <p className="mt-2">
                Die Fremdwährungsgebühr (auch Auslandseinsatzgebühr genannt) ist eine Gebühr, die Banken erheben, 
                wenn mit der Karte in einer anderen Währung als Euro bezahlt wird. Sie liegt typischerweise zwischen 
                1 % und 2 % des Zahlungsbetrags.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Wann fällt die Fremdwährungsgebühr an?
              </summary>
              <p className="mt-2">
                Die Gebühr wird berechnet, wenn in einer Fremdwährung gezahlt wird – zum Beispiel im Urlaub außerhalb 
                der Eurozone, beim Online-Shopping auf internationalen Websites oder bei Geschäftsreisen. Auch 
                innerhalb der EU kann die Gebühr anfallen, wenn nicht in Euro bezahlt wird (z. B. in Schweden oder Polen).
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Lohnt sich eine kostenlose Karte ohne Fremdwährungsgebühr?
              </summary>
              <p className="mt-2">
                Wenn Sie regelmäßig im Ausland bezahlen oder online in Fremdwährung einkaufen, kann sich eine Karte 
                ohne Fremdwährungsgebühr schnell lohnen. Bei 2.000 € Auslandsumsatz im Jahr sparen Sie bei einer 
                Gebühr von 2 % bereits 40 €.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Gibt es weitere Gebühren im Ausland?
              </summary>
              <p className="mt-2">
                Zusätzlich zur Fremdwährungsgebühr können weitere Kosten entstehen – etwa für Bargeldabhebungen am 
                Automaten oder durch die Dynamic Currency Conversion (DCC), wenn Sie am Terminal in Euro statt in 
                der Landeswährung bezahlen. Prüfen Sie die Konditionen Ihrer Karte im Detail.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Sind alle hier gezeigten Karten wirklich ohne Fremdwährungsgebühr?
              </summary>
              <p className="mt-2">
                Ja, alle hier aufgeführten Kreditkarten erheben keine Fremdwährungsgebühr. Die Angaben basieren 
                auf den aktuellen Konditionen der Anbieter. Da sich Konditionen ändern können, empfehlen wir, 
                die Bedingungen vor Beantragung direkt beim Anbieter zu prüfen.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Hinweis zu Provisionen und Aktualität
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Mit * gekennzeichnete Links sind Affiliate-Links. Wenn Sie über einen solchen Link eine Karte 
                beantragen, erhalten wir ggf. eine Provision. Für Sie entstehen keine zusätzlichen Kosten. 
                Alle Angaben ohne Gewähr – verbindliche Informationen erhalten Sie beim jeweiligen Anbieter.
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
            <a href="/ausland" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">✈️ Kreditkarte fürs Ausland</span>
              <p className="text-xs text-gray-600 mt-1">Speziell für internationale Reisen</p>
            </a>
            <a href="/kreuzfahrten" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🚢 Kreditkarte für Kreuzfahrten</span>
              <p className="text-xs text-gray-600 mt-1">Optimal für Schiffsreisen</p>
            </a>
            <a href="/reiseversicherung" className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-600 transition">
              <span className="font-medium text-gray-900">🛡️ Kreditkarte mit Reiseversicherung</span>
              <p className="text-xs text-gray-600 mt-1">Karten mit integriertem Versicherungsschutz</p>
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}

function getFxReason(c: any) {
  const reasons = []
  
  reasons.push('keine Fremdwährungsgebühr beim Bezahlen in Fremdwährungen')
  
  if (c.annualFee === 0) {
    reasons.push('keine Jahresgebühr')
  }
  
  if (c.travelInsurance) {
    reasons.push('integrierte Reiseversicherung')
  }
  
  if (c.loungeAccess) {
    reasons.push('Loungezugang')
  }
  
  if (c.network === 'Visa' || c.network === 'Mastercard') {
    reasons.push(`weltweite Akzeptanz durch ${c.network}`)
  }

  return `Diese Karte bietet ${reasons.join(', ')}. Damit eignet sie sich besonders für internationale Zahlungen und Reisen.`
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
