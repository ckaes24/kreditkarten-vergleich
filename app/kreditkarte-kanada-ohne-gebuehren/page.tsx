import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import AutorenBox from '../../components/AutorenBox';
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
  intro: 'Beste Kreditkarte für Kanada 2026: So vermeidest du Gebühren. In Kanada ist Kartenzahlung sehr einfach, aber Fremdwährungsgebühren und ATM-Kosten summieren sich bei längeren Reisen schnell. Die größten Kostenfallen: viele kleine ATM-Abhebungen, EUR-Abrechnung am Terminal (DCC) und Fremdwährungsgebühren. Die DKB Visa¹ ist eine starke Alltagslösung.',
  topRecommendation: {
    name: 'Advanzia Gebührenfrei Mastercard',
    pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Weltweit akzeptiert'],
    cons: ['Kein Girokonto, reine Kreditkarte', 'Zins bei Teilzahlung'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
    imageUrl: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
  },
  alternatives: [
    {
      name: 'DKB Visa Debit',
      pros: ['Keine Jahresgebühr', 'Gute Akzeptanz in Kanada', 'Kostenlose Bargeldabhebungen als Aktivkunde¹'],
      cons: ['Nur Debit, keine echte Credit Card', '1,75% Fremdwährungsgebühr ohne Aktivstatus'],
      affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
      imageUrl: 'https://a.neqty.net/DKB/Karten/DKB_Visa_Debitkarte_landscape_500x315.png',
    },
    {
      name: 'TF Bank Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Notfälle'],
      cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine Lounge-Vorteile'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C213344020T',
      imageUrl: 'http://www.fndsda.net/b/tfbank/TFBank_MastercardGold_NeuesKartendesign_01.png',
    },
  ],
  faq: [
    {
      question: 'Welche Kreditkarte für Kanada ohne Fremdwährungsgebühr?',
      answer: 'Für Hotels, Mietwagen und Kautionen wird in Kanada oft eine echte Credit Card (z.B. Advanzia) verlangt. Für den Alltag reicht meist auch eine Debitkarte wie DKB Visa, aber als Backup ist eine echte Credit Card ratsam.',
    },
    {
      question: 'Wie hoch sind ATM-Gebühren in Kanada?',
      answer: 'Je nach Betreiber fallen fixe Gebühren pro Abhebung an. Deshalb lieber weniger oft und in größeren Beträgen abheben.',
    },
    {
      question: 'Soll ich in Kanada in Euro oder CAD zahlen?',
      answer: 'Immer in CAD zahlen! Die EUR-Abrechnung am Terminal (DCC) ist in der Regel teurer.',
    },
    {
      question: 'Brauche ich in Kanada Bargeld trotz Kreditkarte?',
      answer: 'Ja, besonders außerhalb großer Städte. Nutze Karte wo möglich und halte einen sinnvollen Bargeldpuffer für Märkte, Taxis und kleine Anbieter bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Dubai ohne Gebühren', url: '/kreditkarte-dubai-ohne-gebuehren' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
  ],
  title: 'Beste Kreditkarte für Kanada 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Kanada 2026: Gebührenfrei bezahlen & abheben. Mit Fokus auf Mietwagen, ATM-Gebühren und DCC.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
      <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
        Tipp: In Kanada unterscheiden sich die Gebühren und Akzeptanzstellen je nach Bank und Karte. Prüfe vor der Reise aktuelle Konditionen und vergleiche Karten gezielt für längere Aufenthalte oder Roadtrips.
      </div>
  </>;
}