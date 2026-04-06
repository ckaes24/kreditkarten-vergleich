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
  intro: 'Auf Bali entsteht der groesste Kostenblock oft durch lokale ATM-Gebuehren und schlechte EUR-Umrechnung am Terminal. Mit einer passenden Reisekarte kannst du diese Fallen vermeiden. Wichtig bei DKB Visa: Als Aktivkunde mit mindestens 700 EUR Geldeingang pro Monat faellt weltweit keine Fremdwaehrungsgebuehr an.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte fuer Bali ohne Fremdwaehrungsgebuehr?',
      answer: 'Fuer Bali ist eine Karte ohne Fremdwaehrungsgebuehr zentral. DKB Visa ist dafuer als Aktivkunde besonders stark; ohne Aktivstatus fallen 1,75% an.',
    },
    {
      question: 'Wie hoch sind ATM-Gebuehren auf Bali?',
      answer: 'Viele Automaten berechnen fixe Zusatzkosten. Deshalb lieber in weniger, aber groesseren Betraegen abheben statt haeufig kleine Summen.',
    },
    {
      question: 'Soll ich auf Bali in Euro oder Rupiah bezahlen?',
      answer: 'Immer in Rupiah zahlen. Die Euro-Abrechnung (DCC) ist in der Regel deutlich teurer.',
    },
    {
      question: 'Brauche ich auf Bali Bargeld trotz Kreditkarte?',
      answer: 'Ja, vor allem fuer kleinere Warungs, Fahrer und lokale Dienstleistungen. Karte plus Bargeldreserve ist die praktikabelste Kombination.',
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