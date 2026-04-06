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

const pageData: SEOPageData = {
  keyword: 'Kreditkarte Dubai ohne Gebühren',
  intro: 'Dubai nutzt viele Karten, aber Gebühren können schnell hoch sein. Eine Karte ohne Fremdwährungsgebühr senkt die Kosten bei Dirham-Zahlungen.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Dubai weit akzeptiert', 'Starke Wahl für Bezahlen und Notfall-Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall in Dubai akzeptiert', 'Bonitätsprüfung erforderlich'],
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
      answer: 'Nicht komplett. Mit DKB Visa kannst du als Aktivkunde die Fremdwährungsgebühr sparen, aber lokale Kartenakzeptanz und ATM-Gebühren bleiben.',
    },
    {
      question: 'Welche Karte ist die beste?',
      answer: 'Für Dubai ist DKB Visa die beste Allround-Wahl. Amex Gold ist nur zu empfehlen, wenn du sicher bist, dass sie akzeptiert wird.',
    },
    {
      question: 'Gibt es Gebühren beim Abheben?',
      answer: 'Ja, viele ATMs verlangen lokale Gebühren. Spare die Fremdwährungsgebühr, aber rechne mit 3-5 AED pro Abhebung.',
    },
    {
      question: 'Sollte ich in Euro oder Dirham zahlen?',
      answer: 'Immer in Dirham zahlen. Euro-Abrechnung bringt schlechte Kurse und kann auf Dauer 5-10% teurer sein.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
  ],
  title: 'Kreditkarte Dubai ohne Gebühren | Beste Karten für Dirham',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Dubai. Spare bei Dirham-Zahlungen und finde die beste Reise-Karte.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}

Geänderte Datei: app/kreditkarte-dubai-ohne-gebuehren/page.tsx