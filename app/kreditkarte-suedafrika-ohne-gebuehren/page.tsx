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
  keyword: 'Kreditkarte Südafrika ohne Gebühren',
  intro: 'Südafrika nutzt Karten häufig, aber du musst auf Gebühren achten. Eine Karte ohne Fremdwährungsgebühr reduziert Kosten bei Rand-Zahlungen.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht lokale ATM-Gebühren.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Südafrika ist DKB Visa als Aktivkunde die beste Wahl. Amex Gold ist nur sinnvoll, wenn sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber plane 20-40 ZAR pro Abhebung ein.',
    },
    {
      question: 'Sollte ich in Euro oder Rand zahlen?',
      answer: 'Immer in Rand zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
  ],
  title: 'Kreditkarte Südafrika ohne Gebühren | Beste Karten für Rand',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für Südafrika. Spare bei Zahlungen und Abhebungen in Südafrikanischem Rand.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
