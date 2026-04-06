import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { seoPages } from '../../data/seoPages';

const pageData = {
  ...seoPages['kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich'],
  keyword: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich',
  intro: 'Normale Karten kosten 1,75-3% bei Zahlungen im Ausland. Bei 200€ sind das 3,50-6€. Karten ohne Fremdwährungsgebühr sparen bei jeder Transaktion und machen Reisen deutlich günstiger.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühr', 'Visa-Akzeptanz weltweit', 'Gute Kombination aus Bezahlen und Abheben'],
    cons: ['1,75% Fremdwährungsgebühr ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'American Express Gold',
      pros: ['0% Fremdwährungsgebühren', 'Reiseversicherung inklusive', 'Bonusprogramm bei Auslandsausgaben'],
      cons: ['144€ Jahresgebühr', 'Nicht überall akzeptiert', 'Bonitätsprüfung erforderlich'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
    },
    {
      name: 'TF Bank Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Gute Backup-Karte für den Notfall'],
      cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine echte 0%-Lösung'],
      affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    },
  ],
  faq: [
    {
      question: 'Was ist eine Fremdwährungsgebühr?',
      answer: 'Das ist ein Aufschlag von 1,75-3% auf den Betrag bei Zahlungen in einer anderen Währung. Bei 200€ sind das 3,50-6€ extra, die du mit den richtigen Karten vermeiden kannst.',
    },
    {
      question: 'Welche Kreditkarte hat wirklich 0% Fremdwährungsgebühr?',
      answer: 'American Express Gold hat 0% Fremdwährungsgebühren, aber nur wenn sie akzeptiert wird. DKB Visa ist die praktischere Wahl für Aktivkunden mit hoher Auslandsausgaben.',
    },
    {
      question: 'Lohnt sich eine Kreditkarte ohne Fremdwährungsgebühr?',
      answer: 'Ja, wenn du regelmäßig im Ausland zahlst. Bei 1.000€ Ausgaben sparst du 17-30€ gegenüber normalen Karten.',
    },
    {
      question: 'Gibt es komplett kostenlose Kreditkarten ohne Gebühren?',
      answer: 'DKB Visa kommt dem am nächsten für Aktivkunden. Komplett ohne Gebühren ist selten, aber 0€ Jahresgebühr plus 0% Fremdwährungsgebühr ist das beste Ziel.',
    },
    {
      question: 'Welche Karte ist die beste für Reisen?',
      answer: 'Wenn du regelmäßig im Ausland zahlst, nimm DKB Visa als Aktivkunde. Wenn du 0% willst und Einschränkungen akzeptierst, nimm American Express Gold.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
    { title: 'Beste Kreditkarte für Reisen 2026', url: '/beste-kreditkarte-fuer-reisen-2026' },
  ],
  title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich | Beste Karten',
  description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühr. Finden Sie die richtige Karte für Auslandszahlungen und sparen Sie bei jeder Transaktion.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}