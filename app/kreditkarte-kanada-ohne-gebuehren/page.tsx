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
  keyword: 'Kreditkarte Kanada ohne Gebühren',
  intro: 'In Kanada ist Kartenzahlung sehr einfach, aber Fremdwaehrungsgebuehren und ATM-Kosten koennen sich bei laengeren Reisen deutlich summieren. DKB Visa ist als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit ohne Fremdwaehrungsgebuehr nutzbar und damit eine starke Alltagsloesung.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Kanada breit akzeptiert', 'Starke Option für Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall in Kanada akzeptiert', 'Bonitätsprüfung erforderlich'],
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
      question: 'Welche Kreditkarte fuer Kanada ohne Fremdwaehrungsgebuehr?',
      answer: 'Wichtig ist eine Karte ohne Fremdwaehrungsgebuehr. DKB Visa bietet das weltweit mit Aktivstatus (mind. 700 EUR monatlicher Geldeingang).',
    },
    {
      question: 'Wie hoch sind ATM-Gebuehren in Kanada?',
      answer: 'Je nach Betreiber fallen fixe Gebuehren pro Abhebung an. Deshalb lieber weniger oft und in groesseren Betraegen abheben.',
    },
    {
      question: 'Soll ich in Kanada in Euro oder CAD zahlen?',
      answer: 'Immer in CAD zahlen. Die EUR-Abrechnung am Terminal ist in der Regel teurer.',
    },
    {
      question: 'Sollte ich in Euro oder CAD zahlen?',
      answer: 'Immer in CAD zahlen. Euro-Abrechnung nutzt schlechte Wechselkurse und ist oft 5-10% teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Dubai ohne Gebühren', url: '/kreditkarte-dubai-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Kanada ohne Gebühren | Beste Karten für CAD',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Kanada. Spare bei Zahlungen und Abhebungen in Kanadischem Dollar.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}