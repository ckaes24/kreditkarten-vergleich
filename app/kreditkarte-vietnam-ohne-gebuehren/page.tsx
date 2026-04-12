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
  keyword: 'Kreditkarte Vietnam ohne Gebühren',
  intro: 'Beste Kreditkarte für Vietnam 2026: In Vietnam ist Bargeld für viele Ausgaben nötig, aber Kartenzahlung wird immer beliebter. Achte auf eine Karte ohne Fremdwährungsgebühr und mit günstigen Konditionen für Abhebungen. So sparst du bei jeder Zahlung und bist flexibel unterwegs.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich in Vietnam kostenlos bezahlen?',
      answer: 'Mit der DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr. Beachte aber, dass viele ATMs lokale Gebühren verlangen (30.000–60.000 Dong pro Abhebung).',
    },
    {
      question: 'Welche Kreditkarte ist in Vietnam am besten?',
      answer: 'Die DKB Visa ist als Aktivkunde weltweit OHNE Fremdwährungsgebühr und wird in Vietnam breit akzeptiert.',
    },
    {
      question: 'Sollte ich in Euro oder Dong zahlen?',
      answer: 'Immer in Dong zahlen! Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Vietnam Bargeld trotz Kreditkarte?',
      answer: 'Ja, für kleine Händler, Märkte und Taxis. Nutze Karte wo möglich, aber halte einen kleinen Bargeldpuffer bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Bali ohne Gebühren', url: '/kreditkarte-bali-ohne-gebuehren' },
    { title: 'Kreditkarte Philippinen ohne Gebühren', url: '/kreditkarte-philippinen-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Beste Kreditkarte für Vietnam 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Vietnam 2026: Gebührenfrei bezahlen & abheben. Mit klaren Tipps zu ATM-Gebühren und Landeswährung.',
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
