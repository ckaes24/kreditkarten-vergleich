import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';

interface SEOCreditCard {
  name: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
}

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

const seoCreditCards: Record<string, SEOCreditCard> = {
  'dkb-visa': {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa-Akzeptanz weltweit', 'Gute Kombination aus Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonuspunkte bei Auslandsausgaben'],
    cons: ['144€ Jahresgebühr', 'Nicht überall akzeptiert', 'Bonitätsprüfung erforderlich'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
  },
  'tf-bank-mastercard': {
    name: 'TF Bank Mastercard',
    pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Notfälle'],
    cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine echte 0%-Lösung'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
};

const pageData: SEOPageData = {
  keyword: 'Kreditkarte im Ausland kostenlos bezahlen',
  intro: 'Im Ausland kosten normale Karten oft 1,75-3% extra. Mit einer Kreditkarte ohne Fremdwährungsgebühr sparst du bei jeder Zahlung und hältst Reisekosten niedriger.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht alle lokalen Zusatzkosten.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Wenn du im Ausland hauptsächlich zahlen willst, nimm DKB Visa als Aktivkunde. Wenn du 0% willst und Einschränkungen akzeptierst, nimm Amex Gold.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, ATM-Gebühren können bleiben. Spare die Fremdwährungsgebühr, aber plane lokale Automatenkosten ein.',
    },
    {
      question: 'Sollte ich in Euro oder der Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte ohne Auslandeinsatzgebühr', url: '/kreditkarte-ohne-auslandseinsatzgebuehr' },
    { title: 'Beste Kreditkarte Urlaub', url: '/beste-kreditkarte-urlaub' },
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
  ],
  title: 'Kreditkarte im Ausland kostenlos bezahlen | Beste Karten',
  description: 'Vergleich der besten Kreditkarten für kostenloses Bezahlen im Ausland. Spare bei Auslandszahlungen mit der richtigen Karte.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
