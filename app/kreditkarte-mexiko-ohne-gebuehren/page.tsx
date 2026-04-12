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
  keyword: 'Kreditkarte Mexiko ohne Gebühren',
  intro: 'Beste Kreditkarte für Mexiko 2026: So vermeidest du Gebühren. In Mexiko akzeptieren Hotels und Ketten meist Karten, aber kleine Anbieter und Transport oft nur Bargeld. Die größten Kostenfallen: viele kleine ATM-Abhebungen, EUR-Abrechnung am Terminal (DCC) und Fremdwährungsgebühren. Die DKB Visa¹ senkt die laufenden Reisekosten deutlich.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte für Mexiko ohne Fremdwährungsgebühr?',
      answer: 'Eine Karte ohne Fremdwährungsgebühr ist in Mexiko Pflicht. Die DKB Visa ist als Aktivkunde weltweit OHNE Fremdwährungsgebühr nutzbar. Ohne Aktivstatus fallen 1,75 % an.',
    },
    {
      question: 'Wie vermeide ich hohe ATM-Gebühren in Mexiko?',
      answer: 'Heb nicht dauernd kleine Beträge ab. Bündle Abhebungen und vergleiche Automatenstandorte, da lokale Gebühren je nach Bank stark schwanken können.',
    },
    {
      question: 'Soll ich in Mexiko in Euro oder Pesos bezahlen?',
      answer: 'Immer in Pesos zahlen! Die EUR-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Mexiko Bargeld trotz Kreditkarte?',
      answer: 'Ja, besonders außerhalb großer Städte. Nutze Karte wo möglich und halte einen sinnvollen Bargeldpuffer für Märkte, Taxis und kleine Anbieter bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Beste Kreditkarte für Mexiko 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Mexiko 2026: Gebührenfrei bezahlen & abheben. Mit DCC-Warnung und Tipps gegen ATM-Abzocke.',
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
