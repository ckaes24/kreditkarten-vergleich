import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { SEOCreditCard, seoCreditCards } from '../../data/seoCreditCards';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedPage {
  title: string;
  url: string;
}

interface SEOPageData {
  keyword: string;
  intro: string;
  topRecommendation: SEOCreditCard;
  alternatives: SEOCreditCard[];
  faq: FAQItem[];
  relatedPages: RelatedPage[];
  title: string;
  description: string;
}

const pageData: SEOPageData = {
  keyword: 'Kreditkarte Mexiko ohne Gebühren',
  intro: 'In Mexiko ist die Lage gemischt: große Hotels akzeptieren Karten, lokale Märkte verlangen Bargeld. Eine Karte ohne Fremdwährungsgebühr spart vor allem bei Zahlungen in Pesos.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht vollständig. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht lokale ATM-Gebühren.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Mexiko ist DKB Visa als Aktivkunde die beste Wahl für Karten und Geldabhebungen.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele mexikanische ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber plane 40-60 Pesos ein.',
    },
    {
      question: 'Sollte ich in Euro oder Pesos zahlen?',
      answer: 'Immer in Pesos zahlen. Euro-Abrechnung nutzt schlechte Wechselkurse und ist oft teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Mexiko ohne Gebühren | Beste Karten für Pesos',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für Mexiko. Spare bei Zahlungen und Abhebungen in Pesos.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
