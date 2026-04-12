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
  intro: 'Beste Kreditkarte für den Urlaub 2026: Mit der richtigen Karte sparst du nicht nur Gebühren, sondern bist weltweit flexibel. Achte auf Karten ohne Fremdwährungsgebühr, mit kostenloser Bargeldabhebung und hoher Akzeptanz. So genießt du deinen Urlaub ohne böse Überraschungen an Kasse oder Geldautomat.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche ist die beste Kreditkarte fuer den Urlaub ohne Gebuehren?',
      answer: 'Achte auf 0 EUR Jahresgebuehr, niedrige Auslandskosten und hohe Akzeptanz. DKB Visa ist als Aktivkunde bei Fremdwaehrung besonders stark.',
    },
    {
      question: 'DKB Visa im Urlaub: Wann gilt 0 Prozent Fremdwaehrungsgebuehr?',
      answer: 'Mit Aktivstatus, also bei mindestens 700 EUR monatlichem Geldeingang. Ohne Aktivstatus faellt die Fremdwaehrungsgebuehr an.',
    },
    {
      question: 'Wie vermeide ich hohe ATM-Gebuehren im Urlaub?',
      answer: 'Hebe seltener und in groesseren Betraegen ab, meide teure Betreiberautomaten und nutze sichere Bankstandorte.',
    },
    {
      question: 'Soll ich im Urlaub in Euro oder Landeswaehrung zahlen?',
      answer: 'Immer in Landeswaehrung zahlen. Die Euro-Abrechnung am Terminal ist meist deutlich teurer.',
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
