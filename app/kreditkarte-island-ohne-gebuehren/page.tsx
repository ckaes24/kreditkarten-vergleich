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
  keyword: 'Island',
  intro: 'Beste Kreditkarte für Island 2026: Island ist nahezu komplett bargeldlos – vom Café bis zur Tankstelle läuft alles über Karte. Achte auf eine Kreditkarte ohne Fremdwährungsgebühr und mit hoher Akzeptanz für kontaktloses Bezahlen.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [
    {
      name: 'Bank Norwegian Visa',
      pros: ['0€ Jahresgebühr', 'Visa, weltweit akzeptiert', 'Reiseversicherung inklusive', 'Keine Fremdwährungsgebühr'],
      cons: ['Kein Girokonto, reine Kreditkarte', 'Bonitätsprüfung erforderlich'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C438298174T',
      imageUrl: 'https://res.cloudinary.com/banknorwegian/image/upload/dpr_auto/v1/prod-10/media/a3ckjxmu/bank-norwegian-card-art-de-1536x969-chip-radius-corners-horizontal.png',
    },
    {
      name: 'bunq Kreditkarte (Free & Paid)',
      pros: ['0€ Jahresgebühr (Free möglich)', 'Mastercard, sehr gute Akzeptanz', 'Keine Fremdwährungsgebühr', 'Sehr gute App, auch für längere Aufenthalte'],
      cons: ['Kein Kreditrahmen, reine Debitkarte', 'Premium-Features kostenpflichtig'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C3156123233T',
      imageUrl: 'https://framerusercontent.com/images/JRNpintM7rUmKKgvo3VAzyB0rg.png?width=1152&height=1152',
    },
  ],
  faq: [
    {
      question: 'Brauche ich in Island Bargeld?',
      answer: 'Fast nie. In Island wird selbst bei kleinen Beträgen fast überall kontaktlos gezahlt.',
    },
    {
      question: 'Welche Karte ist für Island am besten?',
      answer: 'Eine Karte mit 0% Fremdwährungsgebühr und stabiler Akzeptanz ist entscheidend. Visa/Mastercard sind am breitesten akzeptiert.',
    },
    {
      question: 'Soll ich in Euro oder ISK zahlen?',
      answer: 'Immer in ISK zahlen. Die EUR-Umrechnung am Terminal ist meist deutlich teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Norwegen ohne Gebühren', url: '/kreditkarte-norwegen-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Island 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Island 2026: Gebührenfrei bezahlen & abheben. Ideal für den nahezu bargeldlosen Alltag und kontaktloses Zahlen.',
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
