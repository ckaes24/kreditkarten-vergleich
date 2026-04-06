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
  keyword: 'Kreditkarte Australien ohne Gebühren',
  intro: 'In Australien ist Kartenzahlung Standard, aber manche Haendler berechnen Surcharges auf Kartenzahlungen. Dazu kommen Kosten, wenn deine Karte Fremdwaehrungsgebuehren erhebt. DKB Visa ist als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit ohne Fremdwaehrungsgebuehr nutzbar.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Australien breit akzeptiert', 'Starke Option für Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall akzeptiert in Australien', 'Bonitätsprüfung erforderlich'],
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
      question: 'Welche Kreditkarte fuer Australien ohne Fremdwaehrungsgebuehr?',
      answer: 'Fuer Australien ist eine Karte ohne Fremdwaehrungsgebuehr wichtig. DKB Visa ist dafuer als Aktivkunde besonders interessant.',
    },
    {
      question: 'Was sind Kartensurcharges in Australien?',
      answer: 'Einige Haendler schlagen bei Kartenzahlung einen prozentualen Aufpreis auf. Das ist der hauptsaechliche lokale Schmerzpunkt neben Fremdwaehrungsgebuehren.',
    },
    {
      question: 'Soll ich in Australien in Euro oder AUD bezahlen?',
      answer: 'Immer in AUD abrechnen lassen. EUR-Abrechnung ist meist teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Sollte ich in Euro oder AUD zahlen?',
      answer: 'Immer in AUD zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist oft deutlich teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte Dubai ohne Gebühren', url: '/kreditkarte-dubai-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
  ],
  title: 'Kreditkarte Australien ohne Gebühren | Beste Karten für AUD',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Australien. Spare bei Zahlungen und Abhebungen in Australischem Dollar.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}