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
  keyword: 'Kreditkarte Japan ohne Gebühren',
  intro: 'Beste Kreditkarte für Japan 2026: In Japan ist Bargeld vielerorts noch König, aber Kreditkarten werden in Städten und Hotels immer wichtiger. Achte auf eine Karte ohne Fremdwährungsgebühr und mit guter Akzeptanz. Für Mietwagen und Hotels ist oft eine echte Kreditkarte nötig. Mit der richtigen Karte bist du in Japan flexibel und sparst Gebühren.',
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
      pros: ['Keine Jahresgebühr', 'Gute Akzeptanz in Japan', 'Kostenlose Bargeldabhebungen als Aktivkunde¹'],
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
      question: 'Welche Kreditkarte für Japan ohne Fremdwährungsgebühr?',
      answer: 'Für Hotels, Mietwagen und Kautionen wird in Japan oft eine echte Credit Card (z.B. Advanzia) verlangt. Für den Alltag reicht meist auch eine Debitkarte wie DKB Visa, aber als Backup ist eine echte Credit Card ratsam.',
    },
    {
      question: 'Brauche ich in Japan trotzdem Bargeld trotz Kreditkarte?',
      answer: 'Ja, für kleinere Geschäfte und ländliche Regionen ist Bargeld weiterhin wichtig. Karte plus Bargeldreserve ist in Japan die sicherste Praxis.',
    },
    {
      question: 'Sollte ich in Euro oder Yen zahlen?',
      answer: 'Immer in Yen zahlen! Die EUR-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Japan eine zweite Kreditkarte?',
      answer: 'Eine zweite Karte als Backup ist sinnvoll, falls Akzeptanzprobleme, Limits oder Sicherheitssperren auftreten.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Bali ohne Gebühren', url: '/kreditkarte-bali-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Japan 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Japan 2026: Gebührenfrei bezahlen & abheben. Optimiert für kontaktloses Zahlen und Bargeld-Backup.',
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