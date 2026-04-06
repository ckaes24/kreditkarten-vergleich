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

export default function SEOPageTemplate({
  keyword,
  intro,
  topRecommendation,
  alternatives,
  faq,
  relatedPages,
}: SEOPageProps) {
  const allCards = [topRecommendation, ...alternatives];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Beste Kreditkarte für <span className="text-yellow-300">{keyword}</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto">
              {intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#top-card"
                className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                🏆 Top-Empfehlung ansehen
              </a>
              <a
                href="#comparison"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                📊 Vergleich anzeigen
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Top Recommendation */}
        <section id="top-card" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ⭐ Unsere Nr. 1 Empfehlung
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Die beste Wahl für Ihre Bedürfnisse – getestet und bewährt
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3 bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  {topRecommendation.imageUrl ? (
                    <img
                      src={topRecommendation.imageUrl}
                      alt={topRecommendation.name}
                      className="w-full max-w-xs mx-auto rounded-xl shadow-lg"
                    />
                  ) : (
                    <div className="w-48 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">{topRecommendation.name}</span>
                    </div>
                  )}
                  <div className="mt-4">
                    <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🏆 BELIEBTESTE WAHL
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{topRecommendation.name}</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-bold text-green-700 mb-3 flex items-center">
                      <span className="text-2xl mr-2">✅</span> Top-Vorteile
                    </h4>
                    <ul className="space-y-2">
                      {topRecommendation.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="text-green-700 font-medium">• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center">
                      <span className="text-2xl mr-2">⚠️</span> Zu beachten
                    </h4>
                    <ul className="space-y-2">
                      {topRecommendation.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-red-700 font-medium">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={topRecommendation.affiliateLink}
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transition duration-300 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Jetzt kostenlos beantragen*
                  </a>
                  <p className="text-sm text-gray-500 mt-3">
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
                    {card.imageUrl ? (
                      <img
                        src={card.imageUrl}
                        alt={card.name}
                        className="w-16 h-10 rounded-lg mr-4 shadow-sm"
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
                      <ul className="text-sm text-gray-700 space-y-1">
                        {card.pros.slice(0, 2).map((pro, j) => (
                          <li key={j}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Nachteile</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {card.cons.slice(0, 1).map((con, j) => (
                          <li key={j}>• {con}</li>
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
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Kreditkarte</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Top-Vorteile</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 text-lg">Kosten</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 text-lg">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {allCards.map((card, i) => (
                    <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {card.imageUrl ? (
                            <img
                              src={card.imageUrl}
                              alt={card.name}
                              className="w-12 h-8 rounded mr-3"
                            />
                          ) : (
                            <div className="w-12 h-8 bg-gray-200 rounded mr-3"></div>
                          )}
                          <span className="font-bold text-gray-900">{card.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {card.pros.slice(0, 2).map((pro, j) => (
                            <div key={j} className="mb-1">• {pro}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
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
            {faq.map((item, i) => (
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unser vollständiges Angebot
            </p>
          </div>
          <CreditCards />
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
                  <h3 className="font-bold text-blue-600 hover:text-blue-800 text-lg">{page.title}</h3>
                </div>
              </a>
            ))}
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