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
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Südafrika gut akzeptiert', 'Gute Kombination aus Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
    cons: ['144€ Jahresgebühr', 'Nicht überall in Südafrika akzeptiert', 'Bonitätsprüfung erforderlich'],
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
  keyword: 'Kreditkarte Südafrika ohne Gebühren',
  intro: 'Südafrika nutzt Karten häufig, aber du musst auf Gebühren achten. Eine Karte ohne Fremdwährungsgebühr reduziert Kosten bei Rand-Zahlungen.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber nicht lokale ATM-Gebühren.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Südafrika ist DKB Visa als Aktivkunde die beste Wahl. Amex Gold ist nur sinnvoll, wenn sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen Gebühren. Spare die Fremdwährungsgebühr, aber plane 20-40 ZAR pro Abhebung ein.',
    },
    {
      question: 'Sollte ich in Euro oder Rand zahlen?',
      answer: 'Immer in Rand zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
  ],
  title: 'Kreditkarte Südafrika ohne Gebühren | Beste Karten für Rand',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für Südafrika. Spare bei Zahlungen und Abhebungen in Südafrikanischem Rand.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
