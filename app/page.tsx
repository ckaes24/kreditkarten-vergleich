"use client"

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

export default function Home() {
  const [free, setFree] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [lounge, setLounge] = useState(false)
  const [noFxFee, setNoFxFee] = useState(false)
  const [recommended, setRecommended] = useState(false)

  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      if (free && c.annualFee > 0) return false
      if (insurance && !c.travelInsurance) return false
      if (lounge && !c.loungeAccess) return false
      if (noFxFee && c.foreignFee > 0) return false
      return true
    })

    result.sort((a, b) => score(b) - score(a))
    if (recommended) result = result.slice(0, 3)

    return result
  }, [free, insurance, lounge, noFxFee, recommended])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

          {/* HERO */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Kreditkarten für Reisen & Alltag im Vergleich
                </h1>
                <p className="text-gray-600 max-w-prose">
                  Wir vergleichen unabhängig und klar — damit du die Karte findest, die zu deinen Reisen und deinem Alltag passt.
                </p>

                <div className="flex gap-3">
                  <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm shadow">Jetzt vergleichen</a>
                  <button onClick={() => setRecommended(!recommended)} className="inline-block bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm">Top‑Empfehlungen</button>
                </div>

                <p className="text-sm text-gray-600 mt-3 max-w-prose">Unabhängiger Vergleich — klar & transparent.</p>
              </div>

              <div>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-lg p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900">So funktioniert's</h3>
                  <ol className="mt-3 text-sm text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Filter auswählen (z. B. keine Jahresgebühr)</li>
                    <li>Karten vergleichen und Leistungen prüfen</li>
                    <li>Über den markierten Link zur Anbieterseite</li>
                  </ol>
                  <div className="mt-4">
                    <a href="#cards" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md text-sm">Zum Vergleich</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* FILTER */}
        <section className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
          <Filter label="🛡️ Reiseversicherung" active={insurance} onClick={() => setInsurance(!insurance)} />
          <Filter label="✈️ Loungezugang" active={lounge} onClick={() => setLounge(!lounge)} />
          <Filter label="🌍 Keine Auslandseinsatzgebühr" active={noFxFee} onClick={() => setNoFxFee(!noFxFee)} />
          <Filter label="⭐ Top-Empfehlungen" active={recommended} onClick={() => setRecommended(!recommended)} />
        </section>

        {/* KARTEN */}
        <section id="cards" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <div
              key={c.id}
              className={`relative bg-white rounded-xl p-6 shadow-sm border flex flex-col
                ${best?.id === c.id ? 'border-yellow-400 ring-2 ring-yellow-300' : 'border-gray-200'}
              `}
            >
              <div className="space-y-3">
                {best?.id === c.id && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-yellow-50 border border-yellow-400 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Beste Wahl*
                  </div>
                )}

                {/* Logo Platzhalter -> Option A: render logo if available */}
                {('logo' in c) && c.logo ? (
                  // @ts-ignore allow optional logo on type
                  <img
                    src={(c as any).logo}
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
                  <li>🌍 Auslandseinsatzgebühr: {c.foreignFee} %</li>
                  <li>🛡️ Reiseversicherung: {c.travelInsurance ? 'Ja' : 'Nein'}</li>
                  <li>✈️ Loungezugang: {c.loungeAccess ? 'Ja' : 'Nein'}</li>
                  <li>🏦 Akzeptanz: {c.acceptance ?? 'Sehr gut'}</li>
                  <li>💳 Netzwerk: {c.network}</li>
                  <li>🏧 Neues Girokonto erforderlich: {c.requiresNewGiro ? 'Ja' : 'Nein'}</li>
                  <li>📇 Kartentyp: {c.cardType}</li>
                  <li>💶 Bargeldabhebung: {c.cashWithdrawal ?? 'Möglich'}</li>
                </ul>

                <details className="text-sm text-gray-700">
                  <summary className="cursor-pointer font-medium text-gray-900">
                    Warum diese Karte?
                  </summary>
                  <p className="mt-2">
                    {bestReason(c)}
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
            Kreditkarten im direkten Vergleich
          </h2>

          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b text-gray-900">
                <th className="p-2 text-left">Karte</th>
                <th className="p-2 text-center">Netzwerk</th>
                <th className="p-2 text-center">Neues Girokonto</th>
                <th className="p-2 text-center">Gebühr</th>
                <th className="p-2 text-center">Ausland</th>
                <th className="p-2 text-center">Vers.</th>
                <th className="p-2 text-center">Lounge</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {cards.map(c => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="p-2 font-medium">{c.name}</td>
                  <td className="p-2 text-center">{c.network}</td>
                  <td className="p-2 text-center">{c.requiresNewGiro ? 'Ja' : 'Nein'}</td>
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
            Vergleichskriterien (z. B. Gebühren, Leistungen, Akzeptanz) als besonders ausgewogen erscheint. 
            Dies stellt keine Finanzberatung dar. Maßgeblich sind die Angaben des jeweiligen Kartenanbieters.
          </p>
        </section>

        {/* RECHTLICHE HINWEISE */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Rechtliche Hinweise
          </h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Keine Finanzberatung:</strong> Die Informationen auf dieser Website stellen keine Finanz-, 
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
              erhalten wir ggf. eine Provision vom Anbieter, ohne dass Ihnen zusätzliche Kosten entstehen.
            </p>
            <p>
              <strong>Haftungsausschluss:</strong> Wir übernehmen keine Gewähr für die Vollständigkeit, Richtigkeit 
              oder Aktualität der Angaben. Alle Angaben ohne Gewähr.
            </p>
          </div>
        </section>

        {/* FAZIT */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            Fazit & Einordnung
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Die beste Kreditkarte hängt stark vom persönlichen Nutzungsverhalten ab.
            Während einige Karten durch kostenlose Nutzung und geringe Gebühren
            überzeugen, bieten andere zusätzliche Leistungen wie Versicherungen oder
            Loungezugang. Unser Vergleich hilft dabei, die passende Karte für Reisen
            und Alltag strukturiert und transparent auszuwählen.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Häufige Fragen
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Welche Kriterien sind bei der Auswahl einer Kreditkarte wichtig?
              </summary>
              <p className="mt-2">
                Relevante Faktoren können sein: Jahresgebühr, Fremdwährungsgebühren, weltweite Akzeptanz, 
                optionale Versicherungsleistungen, Loungezugang und Konditionen für Bargeldabhebungen. 
                Die Gewichtung hängt vom individuellen Nutzungsverhalten ab.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Entstehen bei Abschluss über diese Seite zusätzliche Kosten?
              </summary>
              <p className="mt-2">
                Nein. Bei Abschluss über einen mit * gekennzeichneten Link erhalten wir ggf. eine Provision 
                vom Anbieter. Für Sie entstehen dadurch keine zusätzlichen Kosten.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Warum unterscheiden sich Leistungen und Gebühren so stark?
              </summary>
              <p className="mt-2">
                Kreditkarten richten sich an unterschiedliche Zielgruppen. Karten
                mit Zusatzleistungen wie Versicherungen oder Bonusprogrammen haben
                meist höhere Gebühren als einfache Basiskarten.
              </p>
            </details>

            <details>
              <summary className="cursor-pointer font-medium text-gray-900">
                Wie aktuell sind die Informationen?
              </summary>
              <p className="mt-2">
                Wir bemühen uns, alle Angaben regelmäßig zu prüfen und anzupassen. 
                Da sich Konditionen jederzeit ändern können, empfehlen wir, vor Abschluss 
                die aktuellen Bedingungen beim jeweiligen Anbieter zu prüfen.
              </p>
            </details>
          </div>
        </section>

      </div>
    </main>
  )
}

function score(c: any) {
  return (
    (c.travelInsurance ? 3 : 0) +
    (c.loungeAccess ? 3 : 0) +
    (c.annualFee === 0 ? 2 : 0) -
    c.foreignFee
  )
}

function bestReason(c: any) {
  const reasons = []
  if (c.annualFee === 0) reasons.push('keine Jahresgebühr')
  if (c.foreignFee === 0) reasons.push('keine Auslandseinsatzgebühr')
  if (c.travelInsurance) reasons.push('integrierte Reiseversicherung')
  if (c.loungeAccess) reasons.push('Loungezugang')

  return reasons.length
    ? `Sie kombiniert ${reasons.join(', ')} und eignet sich damit gut für Reisen und den täglichen Einsatz.`
    : 'Solide Leistungen im Vergleich.'
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
