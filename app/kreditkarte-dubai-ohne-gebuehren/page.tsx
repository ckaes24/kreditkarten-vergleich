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
  keyword: 'Kreditkarte Dubai ohne Gebühren',
  intro: 'Beste Kreditkarte für Dubai 2026: In Dubai werden Karten fast überall akzeptiert, aber Surcharges, DCC und Hotelkautionen können teuer werden. Mit der richtigen Kreditkarte sparst du Gebühren und bist flexibel bei Zahlungen und Abhebungen.',
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
      pros: ['Keine Jahresgebühr', 'Gute Akzeptanz in Dubai', 'Kostenlose Bargeldabhebungen als Aktivkunde¹'],
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
      question: 'Welche Kreditkarte für Dubai ohne Fremdwährungsgebühr?',
      answer: 'Für Hotels, Mietwagen und Kautionen wird in Dubai oft eine echte Credit Card (z.B. Advanzia) verlangt. Für den Alltag reicht meist auch eine Debitkarte wie DKB Visa, aber als Backup ist eine echte Credit Card ratsam.',
    },
    {
      question: 'Was ist der größte Kostenfehler bei Kartenzahlung in Dubai?',
      answer: 'Die Abrechnung in EUR statt AED am Terminal. Wähle immer AED, sonst zahlst du durch schlechten Wechselkurs oft mehr.',
    },
    {
      question: 'Sollte ich in Euro oder Dirham zahlen?',
      answer: 'Immer in Dirham zahlen! Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Dubai Bargeld trotz Kreditkarte?',
      answer: 'Ja, für kleine Händler, Märkte und Trinkgeld. Nutze Karte wo möglich, aber halte einen kleinen Bargeldpuffer bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Dubai 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Dubai 2026: Gebührenfrei bezahlen & abheben. Fokus auf Mietwagen-Kautionen, DCC und lokale Aufschläge.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
    <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
      <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>¹</span> DKB Visa: 0 % Fremdwährungsgebühr und kostenlose Abhebungen nur als Aktivkunde (mind. 700 € Geldeingang/Monat). Ohne Aktivstatus 1,75 % Fremdwährungsgebühr und ggf. Gebühren für Abhebungen.
    </div>
  </>;
}