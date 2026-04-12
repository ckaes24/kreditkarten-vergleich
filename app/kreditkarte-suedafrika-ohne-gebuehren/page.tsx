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
  intro: 'Beste Kreditkarte für Südafrika 2026: In Südafrika ist Kartenzahlung Standard, aber viele Banken erheben Surcharges und ATM-Gebühren. Achte auf Karten ohne Fremdwährungsgebühr und zahle immer in Rand statt Euro (DCC vermeiden). Mit der richtigen Kreditkarte sparst du bei jeder Reise bares Geld und bist flexibel – auch bei Mietwagen und Hotels.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte für Südafrika ohne Fremdwährungsgebühr?',
      answer: 'Für Südafrika ist eine Karte ohne Fremdwährungsgebühr entscheidend. Die DKB Visa bietet das weltweit für Aktivkunden (mind. 700 € Geldeingang/Monat).',
    },
    {
      question: 'Wie hoch sind ATM-Gebühren in Südafrika?',
      answer: 'Je nach Bank können fixe Gebühren pro Abhebung anfallen. Darum lieber seltener und in größeren Beträgen abheben.',
    },
    {
      question: 'Sollte ich in Euro oder Rand zahlen?',
      answer: 'Immer in Rand zahlen! Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Südafrika eine zweite Kreditkarte?',
      answer: 'Eine zweite Karte als Backup ist auf Fernreisen sinnvoll, falls ein Terminal deine Hauptkarte ablehnt oder ein Sicherheitslimit greift.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Südafrika 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Südafrika 2026: Gebührenfrei bezahlen & abheben. Mit Hinweisen zu ATM-Kosten, Surcharges und DCC.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
    <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
      <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>¹</span> DKB Visa: 0 % Fremdwährungsgebühr und kostenlose Abhebungen nur als Aktivkunde (mind. 700 € Geldeingang/Monat). Ohne Aktivstatus 1,75 % Fremdwährungsgebühr und ggf. Gebühren für Abhebungen.
    </div>
  </>;
}
