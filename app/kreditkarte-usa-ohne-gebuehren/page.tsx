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
  keyword: 'USA ohne Gebühren',
  intro: 'Reisen in die USA kosten Deutsche oft ein Vermögen durch versteckte Gebühren. Fremdwährungsgebühren von 1,75-3% pro Transaktion, ATM-Gebühren von 3-8€ pro Abhebung und ungünstige Wechselkurse können Ihre Reisekosten um 200-500€ erhöhen. Beispiel: Ein 200€ Hotelzimmer kostet durch 2% Gebühr effektiv 204€. Bei 10 Zahlungen sind das schon 20€ extra. ATM-Abhebungen sind noch teurer – 50€ abheben kostet oft 8€ Gebühr plus 2% Fremdwährung, macht 10,50€ Gesamtkosten. Deutsche EC-Karten funktionieren oft nicht in US-ATMs oder haben 5€ Auslandseinsatzgebühr. Viele Reisende machen den Fehler, ihre normale Bankkarte mitzunehmen und wundern sich über hohe Kosten. Andere vergessen, dass nicht alle ATMs kostenlos sind – nur bestimmte Netzwerke. Manche Karten haben tägliche Limits von 200-500€, was bei längeren Reisen problematisch wird. Die Lösung sind spezielle Reise-Kreditkarten ohne Fremdwährungsgebühren, optimiert für US-Reisen. Diese sparen bei jeder Zahlung und Abhebung, bieten Sicherheit durch Reiseversicherungen und funktionieren überall in den USA. Erfahren Sie mehr über [kostenlose Kreditkarten für Thailand](/kreditkarte-thailand-abheben-kostenlos) oder [Kreditkarten ohne Jahresgebühr](/kreditkarte-ohne-jahresgebuehr-reisen). Vermeiden Sie diese Fehler und reisen Sie günstiger in die USA.',
  topRecommendation: seoCreditCards['amex-platinum'],
  alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
  faq: [
    {
      question: 'Warum kosten Abhebungen in den USA so viel?',
      answer: 'US-Banken erheben 3-5€ pro Abhebung, plus oft 1-2% Fremdwährungsgebühr. Bei 100€ Abhebung zahlen Sie effektiv 105-107€.',
    },
    {
      question: 'Funktioniert meine deutsche EC-Karte in US-ATMs?',
      answer: 'Viele EC-Karten haben Auslandseinsatzgebühren von 5€ pro Abhebung. Maestro-Karten funktionieren nicht überall, Visa/EC oft besser.',
    },
    {
      question: 'Wie hoch sind die Limits für kostenlose Abhebungen?',
      answer: 'DKB Visa: 400€/Tag kostenlos. American Express: 500-1000€/Tag je nach Kreditrahmen. TF Bank: unbegrenzt, aber mit Gebühren.',
    },
    {
      question: 'Was passiert bei ungünstigen Wechselkursen?',
      answer: 'Banken verwenden oft schlechtere Kurse als der offizielle EUR/USD-Kurs. Bei 1,10 EUR/USD könnte Ihre Bank 1,08 verwenden.',
    },
    {
      question: 'Kann ich Bargeld in Supermärkten abheben?',
      answer: 'Ja, viele US-Supermärkte bieten Cashback beim Einkaufen (kostenlos oder 3-5€). Ideal für kleinere Beträge ohne ATM-Gebühren.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
    { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
    { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
    { title: 'Beste Kreditkarte USA Reisen Deutsche', url: '/beste-kreditkarte-usa-reisen-deutsche' },
  ],
  title: 'Beste Kreditkarte für USA ohne Gebühren | Kostenlose Zahlungen',
  description: 'Entdecken Sie die besten Kreditkarten ohne Fremdwährungsgebühren für Reisen in die USA. Sparen Sie bei Zahlungen und Abhebungen – keine versteckten Kosten.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}