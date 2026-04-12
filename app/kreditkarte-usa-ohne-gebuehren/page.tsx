import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import AutorenBox from '../../components/AutorenBox';
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
  keyword: 'Kreditkarte USA ohne Gebühren',
  intro: 'Beste Kreditkarte für die USA 2026: So vermeidest du Gebühren. In den USA lauern viele Kostenfallen: Fremdwährungsgebühren (1,75–3 %), ATM-Gebühren (3–8 $ pro Abhebung), ungünstige Wechselkurse und DCC (immer in USD zahlen!). Mit der richtigen Karte kannst du diese Gebühren vermeiden und flexibel bezahlen.',
  topRecommendation: {
    name: 'Advanzia Gebührenfrei Mastercard',
    pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Weltweit akzeptiert'],
    cons: ['Kein Girokonto, reine Kreditkarte', 'Zins bei Teilzahlung'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
    imageUrl: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
  },
  alternatives: [
    seoCreditCards['amex-gold'],
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
      question: 'Welche Kreditkarte für die USA ist wirklich geeignet?',
      answer: 'Für Hotels, Mietwagen und Kautionen wird in den USA fast immer eine echte Kreditkarte verlangt. Für den Alltag reicht meist auch eine Debitkarte, aber als Backup ist eine echte Kreditkarte ratsam.',
    },
    {
      question: 'Warum kosten Abhebungen in den USA so viel?',
      answer: 'US-Banken erheben 3–8 $ pro Abhebung, plus oft 1–2 % Fremdwährungsgebühr. Mit der richtigen Karte sparst du diese Gebühren.',
    },
    {
      question: 'Sollte ich in Euro oder USD zahlen?',
      answer: 'Immer in USD zahlen! Die EUR-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in den USA Bargeld trotz Kreditkarte?',
      answer: 'Ja, für kleine Händler, Märkte und Trinkgeld. Nutze Karte wo möglich, aber halte einen kleinen Bargeldpuffer bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
    { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
    { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
    { title: 'Beste Kreditkarte USA Reisen Deutsche', url: '/beste-kreditkarte-usa-reisen-deutsche' },
  ],
  title: 'Beste Kreditkarte für USA 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für USA 2026: Gebührenfrei bezahlen & abheben. Klare Tipps zu Mietwagen-Kaution, DCC und ATM-Kosten.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
      <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
        Tipp: In den USA können ATM- und Fremdwährungsgebühren je nach Anbieter stark variieren. Ein aktueller Kreditkartenvergleich hilft, unnötige Kosten zu vermeiden und die beste Karte für deine Reise zu finden.
      </div>
  </>;
}