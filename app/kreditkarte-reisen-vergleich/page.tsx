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
  keyword: 'Kreditkarte Reisen Vergleich',
  intro: 'Reisen kosten extra, wenn du 1,75-3% bei Karten zahlst. Ein Vergleich zeigt dir, welche Kreditkarte im Urlaub wirklich am meisten spart.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber lokale Gebühren können bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Reisen ist DKB Visa die beste Wahl bei hoher Auslandsnutzung. Amex Gold ist sinnvoll, wenn du 0% willst und Akzeptanz geprüft hast.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, sie variieren je Land. Konzentriere dich auf die Karte mit der besten Kombination aus Fremdwährungsgebühr und Abhebelimit.',
    },
    {
      question: 'Sollte ich in Euro oder Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung verwendet schlechte Wechselkurse.',
    },
  ],
  relatedPages: [
    { title: 'Beste Kreditkarte Urlaub', url: '/beste-kreditkarte-urlaub' },
    { title: 'Kreditkarte im Ausland kostenlos bezahlen', url: '/kreditkarte-im-ausland-kostenlos-bezahlen' },
    { title: 'Kreditkarte ohne Auslandeinsatzgebühr', url: '/kreditkarte-ohne-auslandseinsatzgebuehr' },
  ],
  title: 'Kreditkarte Reisen Vergleich | Beste Karten für Urlaub',
  description: 'Vergleich der besten Kreditkarten für Reisen. Finde die richtige Karte für Auslandsausgaben und spare bei Fremdwährungsgebühren.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
