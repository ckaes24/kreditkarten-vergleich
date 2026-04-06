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
  intro: 'Auf den Philippinen brauchst du ausserhalb grosser Staedte haeufig Bargeld. Die typischen Kostenfallen sind lokale ATM-Gebuehren und teure EUR-Abrechnung am Terminal. Mit DKB Visa sparst du als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit die Fremdwaehrungsgebuehr.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte fuer die Philippinen ohne Fremdwaehrungsgebuehr?',
      answer: 'Fuer die Philippinen ist eine Karte ohne Fremdwaehrungsgebuehr besonders wichtig. DKB Visa ist als Aktivkunde weltweit ohne Fremdwaehrungsgebuehr nutzbar.',
    },
    {
      question: 'Wie hoch sind ATM-Gebuehren auf den Philippinen?',
      answer: 'Viele Automaten berechnen fixe Zusatzkosten pro Abhebung. Hebe deshalb lieber weniger oft, dafuer in sinnvoll gebuendelten Betraegen ab.',
    },
    {
      question: 'Soll ich auf den Philippinen in Euro oder Pesos zahlen?',
      answer: 'Immer in Pesos zahlen. Die EUR-Abrechnung ist fast immer schlechter und erhoeht die Gesamtkosten.',
    },
    {
      question: 'Reicht eine einzige Kreditkarte fuer die Philippinen?',
      answer: 'Eine zweite Karte als Backup ist sinnvoll, falls Akzeptanzprobleme, Limits oder Sicherheitssperren auftreten.',
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
