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
  keyword: 'Beste Kreditkarte für Weltreise',
  intro: 'Beste Kreditkarte für die Weltreise 2026: Auf Weltreise brauchst du eine Karte mit weltweiter Akzeptanz, ohne Fremdwährungsgebühr und mit günstigen Konditionen für Bargeldabhebungen. So bist du in jedem Land flexibel, sparst Gebühren und hast immer Zugriff auf dein Geld – egal ob in Asien, Amerika oder Afrika.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber lokale Gebühren können bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für eine Weltreise ist DKB Visa als Aktivkunde die beste Allround-Karte. Amex Gold ist nur sinnvoll, wenn du weltweit Akzeptanz sicherstellen kannst.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, ATM-Gebühren variieren je Land. Spare die Fremdwährungsgebühr, aber plane lokale Automatenkosten ein.',
    },
    {
      question: 'Sollte ich in Euro oder der Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung hat deutlich schlechtere Wechselkurse.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte im Ausland kostenlos bezahlen', url: '/kreditkarte-im-ausland-kostenlos-bezahlen' },
    { title: 'Kreditkarte ohne Auslandeinsatzgebühr', url: '/kreditkarte-ohne-auslandseinsatzgebuehr' },
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
  ],
  title: 'Beste Kreditkarte für Weltreise | Beste Karten für Reisende',
  description: 'Vergleich der besten Kreditkarten für Weltreisen. Spare bei Fremdwährungsgebühren und finde die richtige Karte für deine Reise.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
