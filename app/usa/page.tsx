"use client";

import { useMemo, useState } from 'react'
import { cards } from '@/data/creditcards'

export default function Page() {
  const [creditCard, setCreditCard] = useState(false)
  const [noFxFee, setNoFxFee] = useState(false)
  const [free, setFree] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [visaMc, setVisaMc] = useState(false)

  // Filter: Für USA geeignete Karten (Credit bevorzugt)
  const filtered = useMemo(() => {
    let result = cards.filter(c => {
      if (creditCard && c.cardType !== 'Credit') return false
      if (noFxFee && c.foreignFee > 0) return false
      if (free && c.annualFee > 0) return false
      if (insurance && !c.travelInsurance) return false
      if (visaMc && c.network !== 'Visa' && c.network !== 'Mastercard') return false
      return true
    })

    // Sortierung: Credit + keine Auslandsgebühr + Reise-Features priorisieren
    // Für USA sind Premium-Features wie Versicherung und Lounge wichtiger als niedrige Jahresgebühr
    result.sort((a, b) => {
      const scoreA = (a.cardType === 'Credit' ? 10 : 0) + 
                     (a.foreignFee === 0 ? 5 : 0) +
                     (a.travelInsurance ? 3 : 0) +
                     (a.loungeAccess ? 2 : 0) +
                     (a.annualFee === 0 ? 1 : 0)
      const scoreB = (b.cardType === 'Credit' ? 10 : 0) + 
                     (b.foreignFee === 0 ? 5 : 0) +
                     (b.travelInsurance ? 3 : 0) +
                     (b.loungeAccess ? 2 : 0) +
                     (b.annualFee === 0 ? 1 : 0)
      return scoreB - scoreA
    })

    return result
  }, [creditCard, noFxFee, free, insurance, visaMc])

  const best = filtered[0]

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Kreditkarten für Reisen in die USA im Vergleich
              </h1>
              <p className="text-gray-600 max-w-prose leading-relaxed">
                In den USA sind Kreditkarten im Alltag stärker verbreitet als in Europa. Für Hotelbuchungen, 
                Mietwagen und viele Geschäfte wird eine Kreditkarte vorausgesetzt. Debitkarten werden häufig 
                nicht akzeptiert oder nur mit Einschränkungen.
              </p>
              <p className="text-sm text-gray-600 max-w-prose">
                Dieser <a href="/" className="text-orange-600 hover:underline">Kreditkarten-Vergleich</a> zeigt Karten mit Eigenschaften, die für USA-Reisen relevant sein können. 
                Die Auswahl basiert auf den gewählten Filterkriterien. Ob eine Karte geeignet ist, hängt 
                vom individuellen Nutzungsverhalten ab.
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
            Worauf kommt es bei Kreditkarten für die USA an?
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💳 Credit vs. Debit</h3>
              <p>
                In den USA ist eine echte Kreditkarte (Credit) erforderlich. Hotels und Mietwagenanbieter 
                autorisieren Kautionen auf der Karte. Debitkarten werden oft nicht akzeptiert, da sie keine 
                Kreditlinie zur Verfügung stellen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌐 Akzeptanz: Visa & Mastercard</h3>
              <p>
                Visa und Mastercard werden in den USA nahezu überall akzeptiert. American Express hat 
                ebenfalls gute Akzeptanz, kann aber bei kleineren Geschäften oder Restaurants abgelehnt 
                werden. Für maximale Flexibilität empfiehlt sich Visa oder Mastercard als Hauptkarte.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">💸 Fremdwährungsgebühren</h3>
              <p>
                Zahlungen in US-Dollar lösen bei vielen Karten eine Fremdwährungsgebühr aus – oft 1–2 % 
                des Umsatzes. Karten ohne diese Gebühr sparen bei jedem Einkauf Kosten.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 Mietwagen</h3>
              <p>
                Autovermietungen in den USA verlangen in der Regel eine Kreditkarte für die Kaution. 
                Debitkarten werden meist nicht akzeptiert oder nur mit erhöhten Anforderungen. 
                Die Karte muss ausreichend Kreditlinie für die Autorisierung bieten.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏨 Hotelbuchungen</h3>
              <p>
                Hotels autorisieren bei Check-in einen Betrag auf der Kreditkarte als Kaution für 
                Nebenkosten. Ohne Kreditkarte kann die Buchung erschwert oder abgelehnt werden. Ähnliche Anforderungen gelten auch für <a href="/kreuzfahrten" className="text-orange-600 hover:underline">Kreditkarten für Kreuzfahrten</a>.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🔢 PIN für Zahlungen</h3>
              <p>
                In den USA ist das Bezahlen per Unterschrift noch üblich. Eine PIN wird seltener benötigt 
                als in Europa. Kontaktloses Bezahlen ist inzwischen weit verbreitet.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Hinweis: Kartensperrung beachten</h3>
              <p>
                Informieren Sie Ihre Bank vor der Reise über geplante Transaktionen in den USA. 
                Einige Banken sperren Karten automatisch bei ungewöhnlichen Aktivitäten im Ausland. 
                Eine kurze Mitteilung kann Kartensperrungen vermeiden.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section id="cards" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <Filter label="💳 Nur Kreditkarten (Credit)" active={creditCard} onClick={() => setCreditCard(!creditCard)} />
          <Filter label="🌍 Keine Auslandsgebühr" active={noFxFee} onClick={() => setNoFxFee(!noFxFee)} />
          <Filter label="💸 Ohne Jahresgebühr" active={free} onClick={() => setFree(!free)} />
          <Filter label="🛡️ Mit Reiseversicherung" active={insurance} onClick={() => setInsurance(!insurance)} />
          <Filter label="💳 Nur Visa/Mastercard" active={visaMc} onClick={() => setVisaMc(!visaMc)} />
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
              <div className="space-y-3 flex-1">
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

                <div>
                  <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.issuer}</p>
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kartentyp:</span>
                    <span className="font-semibold text-gray-900">{c.cardType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Netzwerk:</span>
                    <span className="font-semibold text-gray-900">{c.network}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jahresgebühr:</span>
                    <span className="font-semibold text-gray-900">{c.annualFee === 0 ? 'Kostenlos' : `${c.annualFee} €`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Auslandseinsatzgebühr:</span>
                    <span className="font-semibold text-gray-900">{c.foreignFee === 0 ? 'Keine' : `${c.foreignFee} %`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bargeld abheben:</span>
                    <span className="font-semibold text-gray-900">{c.cashWithdrawal}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {c.travelInsurance && <Badge text="Reiseversicherung" />}
                  {c.loungeAccess && <Badge text="Lounge-Zugang" />}
                  {c.foreignFee === 0 && <Badge text="Keine Auslandsgebühr" />}
                  {c.cardType === 'Credit' && <Badge text="Kreditkarte" />}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href={c.applyUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md text-sm"
                >
                  Jetzt beantragen*
                </a>

                {c.cardType === 'Debit' && (
                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">
                    ⚠️ Debitkarten werden für Mietwagen und Hotels in den USA oft nicht akzeptiert
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* ERLÄUTERUNG */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Typische Situationen in den USA
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚫 Wann Karten ungeeignet sind</h3>
              <p>
                Debitkarten ohne Kreditlinie werden für Mietwagen und Hotels oft nicht akzeptiert. 
                Karten mit hoher Fremdwährungsgebühr summieren sich bei längeren Aufenthalten schnell. 
                American Express kann bei kleineren Händlern abgelehnt werden.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⚠️ Kautionen & Autorisierungen</h3>
              <p>
                Hotels und Mietwagenanbieter autorisieren Beträge auf der Karte, die mehrere hundert 
                Dollar betragen können. Diese Beträge werden vorübergehend blockiert. Eine ausreichende 
                Kreditlinie ist daher wichtig.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏧 Bargeldabhebungen</h3>
              <p>
                In den USA ist Kartenzahlung weit verbreitet. Bargeld wird seltener benötigt als in Europa. 
                Die Gebühren für Bargeldabhebungen können bei Kreditkarten höher ausfallen – prüfen Sie 
                die Konditionen vor der Reise.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-gray-50 rounded-xl p-6 border border-gray-300">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>* „Beste Wahl"</strong> bezeichnet eine Auswahl, die auf Basis der hier dargestellten 
            Vergleichskriterien (z. B. Kartentyp, Netzwerk, Gebühren) als besonders passend für USA-Reisen erscheint. 
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
              <strong>Keine Finanzberatung:</strong> Die Informationen dienen ausschließlich zu Vergleichszwecken 
              und stellen keine Finanz-, Anlage- oder Rechtsberatung dar.
            </p>
            <p>
              <strong>Änderungen vorbehalten:</strong> Konditionen können sich jederzeit ändern. 
              Die Angaben geben den Stand zum Zeitpunkt der Erstellung wieder.
            </p>
            <p>
              <strong>Maßgebliche Angaben:</strong> Verbindliche Informationen erhalten Sie beim jeweiligen Kartenanbieter.
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
            Häufige Fragen zu Kreditkarten für die USA
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Reicht eine Debitkarte für die USA?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nein, in den meisten Fällen nicht. Hotels und Mietwagenanbieter verlangen eine Kreditkarte 
                mit Kreditlinie für Kautionen. Debitkarten werden häufig abgelehnt oder nur mit zusätzlichen 
                Anforderungen akzeptiert. Für eine USA-Reise ist eine echte Kreditkarte empfehlenswert.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Wird eine Kreditkarte für Mietwagen benötigt?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ja, Autovermietungen in den USA verlangen in der Regel eine Kreditkarte. Die Kaution wird 
                auf der Karte autorisiert, nicht abgebucht. Debitkarten werden meist nicht akzeptiert. 
                Prüfen Sie die Kreditlinie Ihrer Karte vor der Buchung.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Fallen Gebühren bei Zahlungen in US-Dollar an?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Das hängt von der Karte ab. Viele Karten erheben eine Fremdwährungsgebühr von 1–2 % bei 
                Zahlungen in US-Dollar. Karten ohne Fremdwährungsgebühr sparen diese Kosten. Prüfen Sie 
                die Konditionen Ihrer Karte vor der Reise.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Brauche ich eine PIN für Zahlungen in den USA?</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Eine PIN wird in den USA seltener benötigt als in Europa. Die meisten Zahlungen erfolgen 
                per Unterschrift oder kontaktlos. Eine PIN kann für Bargeldabhebungen erforderlich sein. 
                Stellen Sie sicher, dass Sie Ihre PIN kennen und aktiviert haben.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

function Filter({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
        active
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  )
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">
      {text}
    </span>
  )
}
