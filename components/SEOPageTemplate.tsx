
"use client";

import CreditCards from './CreditCards';
import { SEOCreditCard } from '../data/seoCreditCards';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedPage {
  title: string;
  url: string;
}

interface SEOPageProps {
  keyword: string;
  intro: string;
  topRecommendation: SEOCreditCard;
  alternatives: SEOCreditCard[];
  faq: FAQItem[];
  relatedPages: RelatedPage[];
  title: string;
  description: string;
}

const fixedCardLogos: Record<string, string> = {
  "DKB Visa": "https://a.neqty.net/DKB/Karten/DKB_Visa_Debitkarte_landscape_500x315.png",
  "TF Bank Mastercard": "http://www.fndsda.net/b/tfbank/TFBank_MastercardGold_NeuesKartendesign_01.png",
  "Santander BestCard": "https://www.santander.de/static/img/bestcard_basic_170x135.gif",
  "C24 Mastercard": "https://www.c24.de/assets/images/webp/mastercard/mastercard-header.webp",
  "Gebuehrenfrei Mastercard": "https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp",
  "Gebührenfrei Mastercard": "https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp",
  "American Express Gold": "https://banner.bluesummit.de/American%20Express/DE/gold/gold_yellow/300x190.png",
  "American Express Platinum": "https://banner.bluesummit.de/American%20Express/DE/platin/300x190.png",
  "N26 Mastercard (Empfehlung)": "https://images.ctfassets.net/q33z48p65a6w/6mRcFZaMyr1Kg8MUkGQkLo/e149ce5908cd6a8e2cdf3976b4226244/2310_Web-asset_Mastercard.png",
};

function getCardLogo(card: SEOCreditCard): string | undefined {
  return fixedCardLogos[card.name] || card.imageUrl;
}

function getCountryName(keyword: string): string {
  const raw = keyword
    .replace(/^kreditkarte\s*/i, "")
    .replace(/^beste\s*kreditkarte\s*/i, "")
    .replace(/ohne\s*geb(ue|ü)hren/gi, "")
    .replace(/abheben\s*kostenlos/gi, "")
    .replace(/ohne\s*fremdw(ae|ä)hrungsgeb(ue|ü)hr/gi, "")
    .replace(/reisen?\s*deutsche/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  return raw.length > 0 ? raw : keyword;
}

function getBadgeText(keyword: string): string | null {
  const k = keyword.toLowerCase();
  if (k.includes("usa") || k.includes("kanada") || k.includes("dubai")) {
    return "Empfehlung fuer Mietwagen (True Credit)";
  }
  if (k.includes("thailand") || k.includes("bali") || k.includes("vietnam") || k.includes("mexiko")) {
    return "Top fuer Bargeld am ATM";
  }
  if (k.includes("japan") || k.includes("norwegen") || k.includes("island")) {
    return "Favorit fuer kontaktloses Zahlen";
  }
  return null;
}

function getLocalInsight(keyword: string): string {
  const k = keyword.toLowerCase();
  if (k.includes("usa") || k.includes("dubai")) {
    return "Mietwagen-Kautionen werden haeufig nur mit echter Credit Card akzeptiert. Debitkarten werden am Schalter oft abgelehnt. Fuer Reisen mit Mietwagen immer eine zusaetzliche True-Credit-Karte als Backup einplanen.";
  }
  if (k.includes("thailand") || k.includes("bali") || k.includes("vietnam")) {
    return "Achte auf fixe ATM-Gebuehren (z. B. 220 Baht in Thailand). Hebe seltener und in groesseren Betraegen ab. Am Terminal und ATM immer die Landeswaehrung waehlen, nie EUR-Abrechnung.";
  }
  if (k.includes("island") || k.includes("norwegen")) {
    return "In Island und Norwegen ist Bargeld fast ausgestorben. Du brauchst eine Karte mit 0 Prozent Fremdwaehrungsgebuehr fuer praktisch alle Zahlungen im Alltag.";
  }
  if (k.includes("mexiko")) {
    return "In Mexiko ist DCC am ATM eine haeufige Abzocke. Lehne die Umrechnung in EUR immer ab und lass in Landeswaehrung abrechnen, sonst zahlst du oft einen deutlich schlechteren Kurs.";
  }
  return "Vermeide DCC (Abrechnung in EUR), zahle in Landeswaehrung und achte auf lokale ATM-Aufschlaege. So senkst du die realen Reisekosten spuerbar.";
}

export default function SEOPageTemplate({
  keyword,
  intro,
  topRecommendation,
  alternatives,
  faq,
  relatedPages,
}: SEOPageProps) {
  const allCards = [topRecommendation, ...alternatives];
  const isUsaPage = keyword.toLowerCase().includes('usa');
  const country = getCountryName(keyword);
  const badge = getBadgeText(keyword);
  const effectiveFaq = faq.length > 0 ? faq : [
    {
      question: `Welche Kreditkarte fuer ${keyword} ohne Fremdwaehrungsgebuehr?`,
      answer: 'Achte auf niedrige Auslandskosten, hohe Akzeptanz und transparente Bedingungen. DKB Visa ist mit Aktivstatus fuer viele Reiseszenarien eine starke Option.',
    },
    {
      question: isUsaPage ? 'Welche Kreditkarte fuer Mietwagen in den USA?' : `Soll ich bei ${keyword} in Euro oder Landeswaehrung zahlen?`,
      answer: isUsaPage
        ? 'In den USA verlangen Vermieter fuer Kautionen oft echte Credit-Karten. Eine zusaetzliche Credit-Karte als Backup ist sinnvoll.'
        : 'Immer in Landeswaehrung zahlen. Die EUR-Abrechnung am Terminal ist in der Regel teurer.',
    },
    {
      question: `Wie vermeide ich Kreditkartengebuehren bei ${keyword}?`,
      answer: 'DCC vermeiden, seltener in groesseren Betraegen abheben und eine Karte mit klaren Auslandskonditionen nutzen.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Beste Kreditkarte fuer <span className="text-amber-300">{country}</span> 2026: Gebuehrenfrei bezahlen & abheben
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12 text-slate-100 font-normal">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#top-card"
                className="inline-block bg-white text-slate-900 font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 text-lg"
              >
                🏆 Top-Empfehlung
              </a>
              <a
                href="#comparison"
                className="inline-block bg-amber-500 text-slate-900 font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 text-lg border-2 border-amber-400"
              >
                📊 Vergleich
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-20 max-w-7xl">
        {/* Insider-Schmerzpunkt */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Insider-Tipp: Die häufigste Gebührenfalle vor Ort
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {getLocalInsight(keyword)}
            </p>
          </div>
        </section>

        {/* Top Recommendation */}
        <section id="top-card" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ⭐ Unsere Nr. 1 Empfehlung
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Die beste Wahl für Ihre Bedürfnisse – getestet und bewährt
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-100 p-12 flex items-center justify-center">
                <div className="text-center">
                  {badge ? (
                    <div className="mb-4">
                      <span className="inline-block bg-slate-900 text-amber-300 px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                        {badge}
                      </span>
                    </div>
                  ) : null}
                  <div className="w-80 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-200">
                    {getCardLogo(topRecommendation) ? (
                      <img
                        src={getCardLogo(topRecommendation)}
                        alt={topRecommendation.name}
                        className="w-full h-full object-contain rounded-xl"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-sm text-gray-500">Kein Kartenlogo verfuegbar</div>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                      🏆 BELIEBTESTE WAHL
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">{topRecommendation.name}</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                    <h4 className="font-bold text-green-800 mb-4 flex items-center text-xl">
                      <span className="text-3xl mr-3">✅</span> Top-Vorteile
                    </h4>
                    <ul className="space-y-3">
                      {topRecommendation.pros.slice(0, 4).map((pro, i) => (
                        <li key={i} className="text-green-900 font-medium text-lg leading-relaxed">✅ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center text-xl">
                      <span className="text-3xl mr-3">⚠️</span> Zu beachten
                    </h4>
                    <ul className="space-y-3">
                      {topRecommendation.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-red-900 font-medium text-lg leading-relaxed">❌ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={topRecommendation.affiliateLink}
                    className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold py-5 px-16 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Jetzt kostenlos beantragen*
                  </a>
                  <p className="text-base text-gray-600 mt-4 font-medium">
                    * Affiliate-Link – transparente Provision für uns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💎 Starke Alternativen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wenn unsere Top-Empfehlung nicht passt – diese Optionen sind ebenfalls hervorragend
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {alternatives.map((card, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {getCardLogo(card) ? (
                      <img
                        src={getCardLogo(card)}
                        alt={card.name}
                        className="w-20 h-12 rounded-lg mr-4 shadow-sm object-contain bg-white"
                      />
                    ) : (
                      <div className="w-16 h-10 bg-gray-200 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Logo</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">{card.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Vorteile</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        {card.pros.slice(0, 2).map((pro, j) => (
                          <li key={j}>✅ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Nachteile</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        {card.cons.slice(0, 1).map((con, j) => (
                          <li key={j}>❌ {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={card.affiliateLink}
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl w-full text-center shadow-lg hover:shadow-xl transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vergleichen & Beantragen*
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section id="comparison" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Schnellvergleich
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alle wichtigen Fakten auf einen Blick
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Kreditkarte</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Top-Vorteile</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Kosten</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 text-lg">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {allCards.map((card, i) => (
                    <tr key={i} className="border-t border-gray-200 hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {getCardLogo(card) ? (
                            <img
                              src={getCardLogo(card)}
                              alt={card.name}
                              className="w-12 h-8 rounded mr-3 object-contain bg-white"
                            />
                          ) : (
                            <div className="w-12 h-8 bg-gray-200 rounded mr-3"></div>
                          )}
                          <span className="font-bold text-gray-900">{card.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {card.pros.slice(0, 2).map((pro, j) => (
                            <div key={j} className="mb-1">✅ {pro}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 font-medium">
                          {card.cons.find(con => con.includes('Jahresgebühr') || con.includes('€')) || 'Keine Jahresgebühr'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={card.affiliateLink}
                          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Beantragen*
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ❓ Häufige Fragen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alles was Sie wissen müssen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {effectiveFaq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-blue-500 mr-2 text-xl">💡</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Credit Cards Component */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🔍 Alle Kreditkarten im Detail
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Entdecken Sie unser vollständiges Angebot
            </p>
          </div>
          <div className="text-gray-900">
            <CreditCards />
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Weitere Reisedestinationen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfekte Kreditkarten für andere Länder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page, i) => (
              <a
                key={i}
                href={page.url}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 block border border-gray-100 hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">✈️</div>
                  <h3 className="font-bold text-slate-900 hover:text-blue-800 text-lg">{page.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Vertrauensbox */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img src="/partner-logo.png" alt="Kreditkarten-Finder.de" className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">Unabhängige Redaktion</h3>
              <p className="text-blue-900 leading-relaxed text-base md:text-lg">
                Alle Empfehlungen und Vergleiche basieren auf echten Erfahrungen und sorgfältiger Recherche. Unser Ziel: Die beste Kreditkarte für deine Reise – transparent, unabhängig und aktuell.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">⚖️ Rechtliche Hinweise</h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-800">
            <div>
              <h4 className="font-bold mb-2">💰 Affiliate-Links</h4>
              <p className="leading-relaxed">
                * Bei Links mit * erhalten wir eine Provision vom Anbieter. Dies beeinflusst nicht unsere Bewertungen – wir empfehlen nur das Beste für Sie.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">📋 Haftungsausschluss</h4>
              <p className="leading-relaxed">
                Alle Angaben ohne Gewähr. Konditionen können sich ändern. Prüfen Sie aktuelle Bedingungen direkt bei den Anbietern.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">🎯 Verantwortungsvoller Umgang</h4>
              <p className="leading-relaxed">
                Kreditkarten sind mit Risiken verbunden. Beantragen Sie nur, wenn Sie die Rückzahlung sicherstellen können.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">📞 Support</h4>
              <p className="leading-relaxed">
                Bei Fragen zu Kreditkarten wenden Sie sich direkt an die Banken. Wir bieten unabhängige Informationen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}