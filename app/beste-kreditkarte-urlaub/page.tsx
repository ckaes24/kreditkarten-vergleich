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
  keyword: 'Beste Kreditkarte Urlaub',
  intro: 'Für den Urlaub brauchst du eine Karte, die keine Fremdwährungsgebühr verlangt und in vielen Ländern akzeptiert wird. DKB Visa ist die pragmatische Wahl.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber zusätzliche Ortskosten können bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Urlaub ist DKB Visa die beste Wahl, wenn du regelmäßig im Ausland zahlst. Amex Gold ist nur sinnvoll, wenn du sicher bist, dass sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber rechne mit lokalen Automatenkosten.',
    },
    {
      question: 'Sollte ich in Euro oder Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung ist meist deutlich teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
    { title: 'Kreditkarte ohne Auslandeinsatzgebühr', url: '/kreditkarte-ohne-auslandseinsatzgebuehr' },
    { title: 'Kreditkarte im Ausland kostenlos bezahlen', url: '/kreditkarte-im-ausland-kostenlos-bezahlen' },
  ],
  title: 'Beste Kreditkarte Urlaub | Beste Karten für Reisende',
  description: 'Vergleich der besten Kreditkarten für Urlaub. Finde die richtige Karte und spare bei Fremdwährungsgebühren im Ausland.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
