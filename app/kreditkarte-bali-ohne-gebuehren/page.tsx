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
  keyword: 'Kreditkarte Bali ohne Gebühren',
  intro: 'Auf Bali brauchst du oft Bargeld und zahlst ATM-Gebühren. Eine Karte ohne Fremdwährungsgebühren reduziert die Kosten bei jeder Zahlung in Rupiah.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa kannst du als Aktivkunde die Fremdwährungsgebühren sparen, aber lokale ATM-Gebühren bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'DKB Visa ist die beste Wahl für Bali, wenn du Aktivkunde bist. Amex Gold ist nur sinnvoll, wenn du sie sicher verwenden kannst.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele BALi-ATMs verlangen 220.000 Rupiah oder mehr Gebühren. Spare die Fremdwährungsgebühr, aber rechne mit ATM-Kosten.',
    },
    {
      question: 'Sollte ich in Euro oder Rupiah zahlen?',
      answer: 'Immer in Rupiah zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft 5-10% teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
  ],
  title: 'Kreditkarte Bali ohne Gebühren | Beste Karten für Rupiah',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Bali. Spare bei Zahlungen und Abhebungen in Indonesien.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}