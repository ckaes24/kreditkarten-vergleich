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
  keyword: 'Kreditkarte Bali ohne Gebühren',
  intro: 'Beste Kreditkarte für Bali 2026: So vermeidest du Gebühren. Auf Bali entstehen die größten Kosten durch lokale ATM-Gebühren, Fremdwährungsgebühren und schlechte EUR-Umrechnung am Terminal (DCC). Mit der passenden Karte kannst du diese Gebühren vermeiden und flexibel bezahlen.',
  topRecommendation: seoCreditCards['tf-bank-mastercard'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['tf-bank-mastercard']],
  faq: [
    {
      question: 'Welche Kreditkarte für Bali ohne Fremdwährungsgebühr?',
      answer: 'Für Bali ist eine Karte ohne Fremdwährungsgebühr zentral. Achte auf geringe Gebühren und eine hohe Akzeptanz vor Ort.',
    },
    {
      question: 'Wie hoch sind ATM-Gebühren auf Bali?',
      answer: 'Viele Automaten berechnen fixe Zusatzkosten. Deshalb lieber in weniger, aber größeren Beträgen abheben statt häufig kleine Summen.',
    },
    {
      question: 'Sollte ich auf Bali in Euro oder Rupiah zahlen?',
      answer: 'Immer in Rupiah zahlen! Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
    },
    {
      question: 'Brauche ich auf Bali Bargeld trotz Kreditkarte?',
      answer: 'Ja, vor allem für kleinere Warungs, Fahrer und lokale Dienstleistungen. Karte plus Bargeldreserve ist die praktikabelste Kombination.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Japan ohne Gebühren', url: '/kreditkarte-japan-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
  ],
  title: 'Beste Kreditkarte für Bali 2026: Gebührenfrei bezahlen & abheben',
  description: 'Beste Kreditkarte für Bali 2026: Gebührenfrei bezahlen & abheben. Praktische Hinweise zu ATM-Fixgebühren und DCC vor Ort.',
};



export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
      <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
        Tipp: Auf Bali ist Bargeld für viele Ausgaben unverzichtbar. Achte bei der Kartenwahl auf geringe Fremdwährungsgebühren und günstige Konditionen für ATM-Abhebungen, um unnötige Kosten zu vermeiden.
      </div>
  </>;
}