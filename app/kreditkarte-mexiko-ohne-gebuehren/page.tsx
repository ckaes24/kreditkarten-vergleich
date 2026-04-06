import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { SEOCreditCard, seoCreditCards } from '../../data/seoCreditCards';

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
  keyword: 'Kreditkarte Mexiko ohne Gebühren',
  intro: 'In Mexiko akzeptieren Hotels und Ketten meist Karten, kleinere Anbieter und Transport oft nur Bargeld. Der groesste Kostenfehler: viele kleine ATM-Abhebungen plus EUR-Abrechnung am Terminal. Mit DKB Visa zahlst du als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit ohne Fremdwaehrungsgebuehr und senkst die laufenden Reisekosten deutlich.',
  topRecommendation: seoCreditCards['dkb-visa'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte fuer Mexiko ohne Fremdwaehrungsgebuehr?',
      answer: 'Eine Karte ohne Fremdwaehrungsgebuehr ist in Mexiko Pflicht. DKB Visa ist als Aktivkunde weltweit ohne Fremdwaehrungsgebuehr nutzbar. Ohne Aktivstatus fallen 1,75% an.',
    },
    {
      question: 'Wie vermeide ich hohe ATM-Gebuehren in Mexiko?',
      answer: 'Heb nicht dauernd kleine Betraege ab. Buendel Abhebungen und vergleiche Automatenstandorte, da lokale Gebuehren je nach Bank stark schwanken koennen.',
    },
    {
      question: 'Soll ich in Mexiko in Euro oder Pesos bezahlen?',
      answer: 'Immer in Pesos zahlen. Die EUR-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Mexiko Bargeld trotz Kreditkarte?',
      answer: 'Ja, besonders ausserhalb grosser Staedte. Nutze Karte wo moeglich und halte einen sinnvollen Bargeldpuffer fuer Maerkte, Taxis und kleine Anbieter bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Kreditkarte Mexiko ohne Gebühren | Beste Karten für Pesos',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr für Mexiko. Spare bei Zahlungen und Abhebungen in Pesos.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}
