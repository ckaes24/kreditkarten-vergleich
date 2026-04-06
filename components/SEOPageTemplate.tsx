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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beste Kreditkarte für {keyword}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {intro}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Top Recommendation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🏆 Unsere Top-Empfehlung
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {topRecommendation.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✅ Vorteile</h4>
                    <ul className="space-y-1">
                      {topRecommendation.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="text-gray-700">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">⚠️ Nachteile</h4>
                    <ul className="space-y-1">
                      {topRecommendation.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-gray-700">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href={topRecommendation.affiliateLink}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jetzt kostenlos beantragen*
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  * Affiliate-Link – wir erhalten Provision
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            💡 Gute Alternativen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {alternatives.map((card, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.name}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Vorteile</h4>
                  <ul className="space-y-1 mb-3">
                    {card.pros.slice(0, 2).map((pro, j) => (
                      <li key={j} className="text-gray-700 text-sm">• {pro}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-red-700 mb-2">Nachteile</h4>
                  <ul className="space-y-1">
                    {card.cons.slice(0, 1).map((con, j) => (
                      <li key={j} className="text-gray-700 text-sm">• {con}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={card.affiliateLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg w-full text-center transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vergleichen & Beantragen*
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📊 Detaillierter Vergleich
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Kreditkarte</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Vorteile</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Nachteile</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {allCards.map((card, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">{card.name}</td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-700">
                          {card.pros.map((pro, j) => (
                            <li key={j}>• {pro}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-700">
                          {card.cons.map((con, j) => (
                            <li key={j}>• {con}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={card.affiliateLink}
                          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
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
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Häufige Fragen
          </h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credit Cards Component */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔍 Alle Kreditkarten im Vergleich
          </h2>
          <CreditCards />
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 Ähnliche Themen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((page, i) => (
              <a
                key={i}
                href={page.url}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 block"
              >
                <h3 className="font-semibold text-blue-600 hover:text-blue-800">{page.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">⚖️ Rechtliche Hinweise</h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p>
              * Affiliate-Links: Wir erhalten eine Provision für erfolgreiche Vermittlungen.
              Dies hat keinen Einfluss auf unsere Bewertungen und Empfehlungen.
            </p>
            <p>
              Alle Angaben sind ohne Gewähr. Konditionen können sich ändern.
              Prüfen Sie die aktuellen Bedingungen direkt bei den Anbietern.
            </p>
            <p>
              Kreditkarten sind mit Risiken verbunden. Beantragen Sie nur, wenn Sie die Rückzahlung sicherstellen können.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}