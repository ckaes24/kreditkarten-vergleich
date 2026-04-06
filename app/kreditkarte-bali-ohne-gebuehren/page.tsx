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

const pageData: SEOPageData = {
  keyword: 'Kreditkarte Bali ohne Gebühren',
  intro: 'Auf Bali brauchst du oft Bargeld und zahlst ATM-Gebühren. Eine Karte ohne Fremdwährungsgebühren reduziert die Kosten bei jeder Zahlung in Rupiah.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa-Akzeptanz an vielen touristischen Orten', 'Gute Kombination aus Bezahlen und Notfall-Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall auf Bali akzeptiert', 'Bonitätsprüfung erforderlich'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
    },
    {
      name: 'TF Bank Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Notfälle'],
      cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine echte 0%-Lösung'],
      affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    },
  ],
  faq: [
    {
      question: 'Kann ich dort kostenlos bezahlen?',
      answer: 'Nicht komplett. Mit DKB Visa kannst du als Aktivkunde die Fremdwährungsgebühren sparen, aber lokale ATM-Gebühren bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'DKB Visa ist die beste Wahl für Bali, wenn du Aktivkunde bist. Amex Gold ist nur sinnvoll, wenn du sie sicher verwenden kannst.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele BALi-ATMs verlangen 220.000 Rupiah oder mehr Gebühren. Spare die Fremdwährungsgebühr, aber rechne mit ATM-Kosten.',
    },
    {
      question: 'Sollte ich in Euro oder Rupiah zahlen?',
      answer: 'Immer in Rupiah zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft 5-10% teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
  ],
  title: 'Kreditkarte Bali ohne Gebühren | Beste Karten für Rupiah',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Bali. Spare bei Zahlungen und Abhebungen in Indonesien.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}