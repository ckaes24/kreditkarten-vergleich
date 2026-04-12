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
  keyword: 'Norwegen',
  intro: 'Beste Kreditkarte für Norwegen 2026: Norwegen ist nahezu komplett bargeldlos – selbst Kleinstbeträge werden mit Karte bezahlt. Achte auf eine Kreditkarte ohne Fremdwährungsgebühr und mit hoher Akzeptanz. So bist du überall flexibel und sparst bei jeder Zahlung Gebühren.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Brauche ich in Norwegen Bargeld?',
      answer: 'In der Regel nicht. Selbst Kleinstbeträge werden fast überall mit Karte oder Wallet bezahlt.',
    },
    {
      question: 'Welche Karte für Norwegen?',
      answer: 'Wichtig sind 0% Fremdwährungsgebühr und hohe Akzeptanz. Visa/Mastercard sind in Norwegen sehr zuverlässig.',
    },
    {
      question: 'In EUR oder NOK abrechnen?',
      answer: 'Immer in NOK abrechnen lassen. Die EUR-Umrechnung am Terminal ist fast immer teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Island ohne Gebühren', url: '/kreditkarte-island-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Norwegen 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Norwegen 2026: Gebührenfrei bezahlen & abheben. Optimiert für den fast komplett bargeldlosen Alltag.',
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
