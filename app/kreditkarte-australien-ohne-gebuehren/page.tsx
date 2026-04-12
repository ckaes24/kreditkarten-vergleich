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
  keyword: 'Kreditkarte Australien ohne Gebühren',
  intro: 'Beste Kreditkarte für Australien 2026: So vermeidest du Gebühren. In Australien ist Kartenzahlung Standard, aber viele Händler berechnen Surcharges (1–3 %) auf Kartenzahlungen. Die größten Kostenfallen: Surcharges, viele kleine ATM-Abhebungen, EUR-Abrechnung am Terminal (DCC) und Fremdwährungsgebühren. Die DKB Visa¹ funktioniert an fast allen australischen Terminals.',
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
      pros: ['Keine Jahresgebühr', 'Gute Akzeptanz in Australien', 'Kostenlose Bargeldabhebungen als Aktivkunde¹'],
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
      question: 'Welche Kreditkarte für Australien ohne Fremdwährungsgebühr?',
      answer: 'Für Hotels, Mietwagen und Kautionen wird in Australien oft eine echte Credit Card (z.B. Advanzia) verlangt. Für den Alltag reicht meist auch eine Debitkarte wie DKB Visa, aber als Backup ist eine echte Credit Card ratsam.',
    },
    {
      question: 'Was sind Kartensurcharges in Australien?',
      answer: 'Einige Händler schlagen bei Kartenzahlung einen prozentualen Aufpreis auf. Das ist der hauptsächliche lokale Schmerzpunkt neben Fremdwährungsgebühren.',
    },
    {
      question: 'Sollte ich in Euro oder AUD zahlen?',
      answer: 'Immer in AUD zahlen! Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich in Australien Bargeld trotz Kreditkarte?',
      answer: 'Ja, für kleine Händler, Märkte und Trinkgeld. Nutze Karte wo möglich, aber halte einen kleinen Bargeldpuffer bereit.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte Dubai ohne Gebühren', url: '/kreditkarte-dubai-ohne-gebuehren' },
    { title: 'Kreditkarte Kanada ohne Gebühren', url: '/kreditkarte-kanada-ohne-gebuehren' },
  ],
  title: 'Beste Kreditkarte für Australien 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Australien 2026: Gebührenfrei bezahlen & abheben. Mit klaren Tipps zu Surcharges, ATM-Gebühren und DCC.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
      <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
        Tipp: In Australien lohnt sich der Vergleich aktueller Kreditkarten-Angebote, da sich Gebühren und Leistungen jährlich ändern können. Achte auf Fremdwährungsgebühren, ATM-Kosten und Surcharges – so sparst du auf Reisen am meisten.
      </div>
  </>;
}