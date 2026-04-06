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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Beste Kreditkarte für {keyword}</h1>
      <p className="text-lg mb-8">{intro}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top-Empfehlung</h2>
        <div className="border p-4 rounded">
          <h3 className="text-xl font-bold">{topRecommendation.name}</h3>
          <ul className="list-disc list-inside mb-2">
            {topRecommendation.pros.slice(0, 3).map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
          <p className="text-red-600 mb-4">Nachteil: {topRecommendation.cons[0]}</p>
          <a
            href={topRecommendation.affiliateLink}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt beantragen
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alternativen</h2>
        {alternatives.map((card, i) => (
          <div key={i} className="border p-4 rounded mb-4">
            <h3 className="text-xl font-bold">{card.name}</h3>
            <ul className="list-disc list-inside mb-2">
              {card.pros.slice(0, 3).map((pro, j) => (
                <li key={j}>{pro}</li>
              ))}
            </ul>
            <p className="text-red-600 mb-4">Nachteil: {card.cons[0]}</p>
            <a
              href={card.affiliateLink}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jetzt beantragen
            </a>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vergleichstabelle</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Karte</th>
              <th className="border border-gray-300 px-4 py-2">Vorteile</th>
              <th className="border border-gray-300 px-4 py-2">Nachteile</th>
              <th className="border border-gray-300 px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {allCards.map((card, i) => (
              <tr key={i}>
                <td className="border border-gray-300 px-4 py-2">{card.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    {card.pros.map((pro, j) => (
                      <li key={j}>{pro}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    {card.cons.map((con, j) => (
                      <li key={j}>{con}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={card.affiliateLink}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beantragen
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Häufige Fragen</h2>
        {faq.map((item, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-lg font-bold">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <CreditCards />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ähnliche Seiten</h2>
        <ul className="list-disc list-inside">
          {relatedPages.map((page, i) => (
            <li key={i}>
              <a href={page.url} className="text-blue-500">
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}