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
  keyword: 'Kreditkarte Philippinen ohne Gebühren',
  intro: 'Beste Kreditkarte für die Philippinen 2026: Auf den Philippinen ist Bargeld außerhalb der Städte oft unverzichtbar. Viele Banken verlangen hohe ATM-Gebühren. Mit der richtigen Kreditkarte hebst du günstig ab und sparst bei Zahlungen in Pesos die Fremdwährungsgebühr.',
  topRecommendation: {
    ...seoCreditCards['dkb-visa'],
    pros: seoCreditCards['dkb-visa'].pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
  },
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
  return <>
    <SEOPageTemplate {...pageData} />
    <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
      <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>¹</span> DKB Visa: 0 % Fremdwährungsgebühr und kostenlose Abhebungen nur als Aktivkunde (mind. 700 € Geldeingang/Monat). Ohne Aktivstatus 1,75 % Fremdwährungsgebühr und ggf. Gebühren für Abhebungen.
    </div>
  </>;
}
