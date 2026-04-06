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
  intro: 'In Suedafrika ist Kartenzahlung weit verbreitet, aber ATM-Aufschlaege und unguenstige Umrechnung koennen dein Budget schnell belasten. DKB Visa ist besonders attraktiv, weil als Aktivkunde mit mindestens 700 EUR Geldeingang pro Monat weltweit keine Fremdwaehrungsgebuehr anfaellt.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte fuer Suedafrika ohne Fremdwaehrungsgebuehr?',
      answer: 'Fuer Suedafrika ist eine Karte ohne Fremdwaehrungsgebuehr entscheidend. DKB Visa bietet das weltweit fuer Aktivkunden (mind. 700 EUR Geldeingang/Monat).',
    },
    {
      question: 'Wie hoch sind ATM-Gebuehren in Suedafrika?',
      answer: 'Je nach Bank koennen fixe Gebuehren pro Abhebung anfallen. Darum lieber seltener und in groesseren Betraegen abheben.',
    },
    {
      question: 'Soll ich in Suedafrika in Euro oder Rand zahlen?',
      answer: 'Immer in Rand zahlen. Die Euro-Abrechnung ist fast immer teurer und bringt schlechtere Wechselkurse.',
    },
    {
      question: 'Ist eine zweite Kreditkarte fuer Suedafrika sinnvoll?',
      answer: 'Ja, eine Backup-Karte ist auf Fernreisen sinnvoll, falls ein Terminal deine Hauptkarte ablehnt oder ein Sicherheitslimit greift.',
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
