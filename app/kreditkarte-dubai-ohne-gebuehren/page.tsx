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
  keyword: 'Kreditkarte Dubai ohne Gebühren',
  intro: 'In Dubai funktionieren Karten sehr gut, aber Hotelkautionen und Dynamic Currency Conversion koennen teuer werden. Mit DKB Visa entfaellt als Aktivkunde (mind. 700 EUR Geldeingang/Monat) die Fremdwaehrungsgebuehr weltweit, was besonders bei groesseren Hotel- und Shopping-Umsaetzen hilft.',
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
      question: 'Welche Kreditkarte fuer Dubai ohne Fremdwaehrungsgebuehr?',
      answer: 'Eine Karte ohne Fremdwaehrungsgebuehr ist fuer Dubai wichtig. DKB Visa ist als Aktivkunde weltweit ohne Fremdwaehrungsgebuehr einsetzbar.',
    },
    {
      question: 'Was ist der groesste Kostenfehler bei Kartenzahlung in Dubai?',
      answer: 'Die Abrechnung in EUR statt AED am Terminal. Waehle immer AED, sonst zahlst du durch schlechten Wechselkurs oft mehr.',
    },
    {
      question: 'Soll ich in Dubai in Euro oder AED bezahlen?',
      answer: 'Immer in AED zahlen. Die EUR-Abrechnung (DCC) ist fast immer nachteilig.',
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