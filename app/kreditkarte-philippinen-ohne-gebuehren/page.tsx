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
  keyword: 'Kreditkarte Philippinen ohne Gebühren',
  intro: 'Auf den Philippinen brauchst du oft Bargeld und musst Gebühren im Auge behalten. Eine Karte ohne Fremdwährungsgebühr reduziert die Kosten bei Zahlungen in Pesos.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht die lokalen ATM-Gebühren.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für die Philippinen ist DKB Visa als Aktivkunde die beste Wahl. Amex Gold ist nur sinnvoll, wenn du sicher bist, dass sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber plane 150-250 PHP pro Abhebung ein.',
    },
    {
      question: 'Sollte ich in Euro oder Pesos zahlen?',
      answer: 'Immer in Pesos zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Bali ohne Gebühren', url: '/kreditkarte-bali-ohne-gebuehren' },
    { title: 'Kreditkarte Vietnam ohne Gebühren', url: '/kreditkarte-vietnam-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Philippinen ohne Gebühren | Beste Karten für Pesos',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für die Philippinen. Spare bei Zahlungen und Abhebungen in Pesos.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
