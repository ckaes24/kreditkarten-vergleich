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
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Singapur breit akzeptiert', 'Starke Wahl für Kartenzahlung'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
    cons: ['144€ Jahresgebühr', 'Nicht überall in Singapur akzeptiert', 'Bonitätsprüfung erforderlich'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
  },
  'tf-bank-mastercard': {
    name: 'TF Bank Mastercard',
    pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup bei unerwartetem Kartenproblem'],
    cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine echte 0%-Lösung'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
};

const pageData: SEOPageData = {
  keyword: 'Kreditkarte Singapur ohne Gebühren',
  intro: 'In Singapur wird fast alles mit Karte gezahlt. Eine Kreditkarte ohne Fremdwährungsgebühr senkt die Kosten bei Singapur-Dollar-Zahlungen.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa als Aktivkunde sparst du die Fremdwährungsgebühr, aber die Karte muss zuerst akzeptiert werden.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Singapur ist DKB Visa als Aktivkunde die beste Wahl. Amex Gold ist nur sinnvoll, wenn du die Akzeptanz prüfen kannst.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, lokale ATMs können Gebühren verlangen. Spare die Fremdwährungsgebühr, aber rechne mit 3-5 SGD pro Abhebung.',
    },
    {
      question: 'Sollte ich in Euro oder SGD zahlen?',
      answer: 'Immer in SGD zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft merklich teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Singapur ohne Gebühren | Beste Karten für SGD',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Singapur. Spare bei Zahlungen in Singapur-Dollar.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
