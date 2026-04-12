import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import AutorenBox from '../../components/AutorenBox';
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
  keyword: 'Marokko',
  intro: 'Beste Kreditkarte für Marokko 2026: In Marokko brauchst du oft Bargeld, aber in Städten ist Kartenzahlung weit verbreitet. Achte auf eine Karte ohne Fremdwährungsgebühr und mit günstigen Konditionen für Abhebungen. So bist du flexibel und sparst bei jeder Zahlung und Abhebung.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
  faq: [
    {
      question: 'Wie hoch sind ATM-Gebühren in Marokko?',
      answer: 'Je nach Bank fallen häufig feste Gebühren an. Hebe seltener und in größeren Beträgen ab.',
    },
    {
      question: 'Soll ich in EUR oder MAD zahlen?',
      answer: 'Immer in MAD (Marokkanischer Dirham) zahlen, nie in EUR umrechnen lassen.',
    },
    {
      question: 'Welche Karte ist am sichersten?',
      answer: 'Eine Visa oder Mastercard mit 0% Fremdwährungsgebühr plus Backup-Karte ist für Marokko sinnvoll.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Dubai ohne Gebühren', url: '/kreditkarte-dubai-ohne-gebuehren' },
    { title: 'Kreditkarte Südafrika ohne Gebühren', url: '/kreditkarte-suedafrika-ohne-gebuehren' },
    { title: 'Kreditkarte Mexiko ohne Gebühren', url: '/kreditkarte-mexiko-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Marokko 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Marokko 2026: Gebührenfrei bezahlen & abheben. Mit praktischen Tipps zu ATM-Kosten, DCC und Akzeptanz.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return (
    <>
      <SEOPageTemplate {...pageData} />
      <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
        <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>¹</span> DKB Visa: 0 % Fremdwährungsgebühr und kostenlose Abhebungen nur als Aktivkunde (mind. 700 € Geldeingang/Monat). Ohne Aktivstatus 1,75 % Fremdwährungsgebühr und ggf. Gebühren für Abhebungen.
      </div>
    </>
  );
}
