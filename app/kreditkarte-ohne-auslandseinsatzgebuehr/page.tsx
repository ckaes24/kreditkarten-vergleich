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
  keyword: 'Kreditkarte ohne Auslandeinsatzgebühr',
  intro: 'Beste Kreditkarte ohne Auslandsgebühr 2026: Mit einer Karte ohne Fremdwährungsgebühr und ohne Jahresgebühr sparst du bei jeder Zahlung im Ausland bares Geld. Ideal für Reisen, Online-Shopping in Fremdwährung und längere Auslandsaufenthalte. So vermeidest du versteckte Kosten und hast volle Kostenkontrolle.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Auslandeinsatzgebühr, aber lokale Zusatzkosten bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Auslandeinsatz ist DKB Visa als Aktivkunde die beste Allround-Karte. Amex Gold ist nur sinnvoll bei sicherer Akzeptanz.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, ATM-Gebühren können bestehen. Spare die Fremdwährungsgebühr, aber rechne mit lokalen Automatenkosten.',
    },
    {
      question: 'Sollte ich in Euro oder der Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung nutzt schlechte Wechselkurse und ist teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte im Ausland kostenlos bezahlen', url: '/kreditkarte-im-ausland-kostenlos-bezahlen' },
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
    { title: 'Beste Kreditkarte Urlaub', url: '/beste-kreditkarte-urlaub' },
  ],
  title: 'Kreditkarte ohne Auslandeinsatzgebühr | Beste Karten',
  description: 'Vergleich der besten Kreditkarten ohne Auslandeinsatzgebühr. Spare bei Auslandszahlungen mit der richtigen Karte.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
