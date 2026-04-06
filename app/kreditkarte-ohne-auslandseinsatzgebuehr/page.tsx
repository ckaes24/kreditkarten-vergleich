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
  keyword: 'Kreditkarte ohne Auslandeinsatzgebühr',
  intro: 'Auslandseinsatzgebühren von 1,75-3% machen Karten teuer. Mit einer Karte ohne Fremdwährungsgebühr und ohne Jahresgebühr sparst du bei jedem Bezahlvorgang.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Auslandeinsatzgebühr, aber lokale Zusatzkosten bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Auslandeinsatz ist DKB Visa als Aktivkunde die beste Allround-Karte. Amex Gold ist nur sinnvoll bei sicherer Akzeptanz.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, ATM-Gebühren können bestehen. Spare die Fremdwährungsgebühr, aber rechne mit lokalen Automatenkosten.',
    },
    {
      question: 'Sollte ich in Euro oder der Landeswährung zahlen?',
      answer: 'Immer in der Landeswährung zahlen. Euro-Abrechnung nutzt schlechte Wechselkurse und ist teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte im Ausland kostenlos bezahlen', url: '/kreditkarte-im-ausland-kostenlos-bezahlen' },
    { title: 'Kreditkarte Reisen Vergleich', url: '/kreditkarte-reisen-vergleich' },
    { title: 'Beste Kreditkarte Urlaub', url: '/beste-kreditkarte-urlaub' },
  ],
  title: 'Kreditkarte ohne Auslandeinsatzgebühr | Beste Karten',
  description: 'Vergleich der besten Kreditkarten ohne Auslandeinsatzgebühr. Spare bei Auslandszahlungen mit der richtigen Karte.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
