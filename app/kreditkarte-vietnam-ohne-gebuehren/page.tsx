import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { SEOCreditCard } from '../../data/seoCreditCards';

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
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Vietnam gut akzeptiert', 'Für Zahlungen und Bargeld geeignet'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Punkte für Auslandsausgaben'],
    cons: ['144€ Jahresgebühr', 'Wird nicht überall in Vietnam akzeptiert', 'Bonitätsprüfung erforderlich'],
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
  keyword: 'Kreditkarte Vietnam ohne Gebühren',
  intro: 'In Vietnam ist viel Bargeld nötig und ATM-Gebühren kommen schnell dazu. Eine Karte ohne Fremdwährungsgebühr hält die Kosten bei Vietnamesischem Dong niedrig.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber lokale ATM-Gebühren bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Vietnam ist DKB Visa die beste Wahl für Zahlungen und Bargeld. Amex Gold ist nur sinnvoll, wenn sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen lokale Gebühren. Spare die Fremdwährungsgebühr, aber plane 30.000-60.000 Dong ein.',
    },
    {
      question: 'Sollte ich in Euro oder Dong zahlen?',
      answer: 'Immer in Dong zahlen. Euro-Abrechnung hat schlechtere Kurse und ist oft viel teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Bali ohne Gebühren', url: '/kreditkarte-bali-ohne-gebuehren' },
    { title: 'Kreditkarte Philippinen ohne Gebühren', url: '/kreditkarte-philippinen-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Vietnam ohne Gebühren | Beste Karten für Dong',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für Vietnam. Spare bei Zahlungen und Abhebungen in Dong.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
