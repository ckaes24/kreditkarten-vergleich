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
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in den meisten touristischen Gebieten akzeptiert', 'Gute Kombination aus Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
    cons: ['144€ Jahresgebühr', 'Nicht überall auf den Philippinen akzeptiert', 'Bonitätsprüfung erforderlich'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
  },
  'tf-bank-mastercard': {
    name: 'TF Bank Mastercard',
    pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup bei Automatenproblemen'],
    cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine echte 0%-Lösung'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
};

const pageData: SEOPageData = {
  keyword: 'Kreditkarte Philippinen ohne Gebühren',
  intro: 'Auf den Philippinen brauchst du oft Bargeld und musst Gebühren im Auge behalten. Eine Karte ohne Fremdwährungsgebühr reduziert die Kosten bei Zahlungen in Pesos.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht die lokalen ATM-Gebühren.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für die Philippinen ist DKB Visa als Aktivkunde die beste Wahl. Amex Gold ist nur sinnvoll, wenn du sicher bist, dass sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber plane 150-250 PHP pro Abhebung ein.',
    },
    {
      question: 'Sollte ich in Euro oder Pesos zahlen?',
      answer: 'Immer in Pesos zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft teurer.',
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
  return <SEOPageTemplate {...pageData} />;
}
