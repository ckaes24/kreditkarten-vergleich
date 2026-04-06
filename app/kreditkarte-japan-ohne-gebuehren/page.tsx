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
  keyword: 'Kreditkarte Japan ohne Gebühren',
  intro: 'Japan ist kartentauglicher geworden, aber viele kleine Restaurants, Tempel und regionale Anbieter arbeiten weiterhin bargeldlastig. Der typische Fehler sind haeufige Kleinabhebungen plus Gebuehrenkarte. DKB Visa bleibt stark, weil als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit keine Fremdwaehrungsgebuehr anfaellt.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa wird in Japan weit akzeptiert', 'Kombiniert Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall akzeptiert in Japan', 'Bonitätsprüfung erforderlich'],
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
      question: 'Welche Kreditkarte fuer Japan ohne Fremdwaehrungsgebuehr?',
      answer: 'In Japan lohnt eine Karte ohne Fremdwaehrungsgebuehr besonders bei laengeren Aufenthalten. DKB Visa ist hier als Aktivkunde weltweit ohne Fremdwaehrungsgebuehr nutzbar.',
    },
    {
      question: 'Brauche ich in Japan trotzdem Bargeld trotz Kreditkarte?',
      answer: 'Ja, fuer kleinere Geschaefte und laendliche Regionen ist Bargeld weiterhin wichtig. Karte plus Bargeldreserve ist in Japan die sicherste Praxis.',
    },
    {
      question: 'Soll ich in Japan in Euro oder Yen abrechnen?',
      answer: 'Immer in Yen abrechnen. Die EUR-Umrechnung ist in der Regel schlechter und verteuert jede Zahlung.',
    },
    {
      question: 'Sollte ich in Euro oder Yen zahlen?',
      answer: 'Immer in Yen zahlen. Euro-Abrechnung hat schlechtere Wechselkurse und ist meist 5-10% teurer.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Bali ohne Gebühren', url: '/kreditkarte-bali-ohne-gebuehren' },
    { title: 'Kreditkarte Australien ohne Gebühren', url: '/kreditkarte-australien-ohne-gebuehren' },
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
  ],
  title: 'Kreditkarte Japan ohne Gebühren | Beste Karten für Yen-Zahlungen',
  description: 'Vergleich von Kreditkarten ohne Fremdwährungsgebühr für Japan. Spare bei Yen-Zahlungen und nutze die beste Karte für Reisen.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}