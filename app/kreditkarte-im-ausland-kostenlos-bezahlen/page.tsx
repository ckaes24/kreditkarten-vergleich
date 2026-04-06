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
  keyword: 'Kreditkarte im Ausland kostenlos bezahlen',
  intro: 'Im Ausland kosten normale Karten oft 1,75-3% extra. Mit einer Kreditkarte ohne Fremdwährungsgebühr sparst du bei jeder Zahlung und hältst Reisekosten niedriger.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht alle lokalen Zusatzkosten.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Wenn du im Ausland hauptsächlich zahlen willst, nimm DKB Visa als Aktivkunde. Wenn du 0% willst und Einschränkungen akzeptierst, nimm Amex Gold.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, ATM-Gebühren können bleiben. Spare die Fremdwährungsgebühr, aber plane lokale Automatenkosten ein.',
    },
    {
      question: 'Sollte ich in Euro oder der Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte ohne Auslandeinsatzgebühr', url: '/kreditkarte-ohne-auslandseinsatzgebuehr' },
    { title: 'Beste Kreditkarte Urlaub', url: '/beste-kreditkarte-urlaub' },
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
  ],
  title: 'Kreditkarte im Ausland kostenlos bezahlen | Beste Karten',
  description: 'Vergleich der besten Kreditkarten für kostenloses Bezahlen im Ausland. Spare bei Auslandszahlungen mit der richtigen Karte.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
