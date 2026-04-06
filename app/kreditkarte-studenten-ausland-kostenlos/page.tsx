import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { seoPages } from '../../data/seoPages';

const pageData = {
  ...seoPages['kreditkarte-studenten-ausland-kostenlos'],
  keyword: 'Kreditkarte Studenten Ausland kostenlos',
  intro: 'Als Student im Ausland hast du wenig Geld und keine Lust auf Jahresgebühren. Eine kostenlose Kreditkarte mit niedrigen Auslandskosten spart dir bei Zahlungen und Abhebungen echtes Geld.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden 0% Fremdwährungsgebühren', 'Reiseversicherung über DKB-Konto', 'Ideal für Studenten mit regelmäßigem Auslandszahlen'],
    cons: ['1,75% Fremdwährungsgebühren ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  alternatives: [
    {
      name: 'N26 Standard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung online', 'Gute Konto-App für Studenten'],
      cons: ['1,7% Fremdwährungsgebühren', 'Kein kostenloses Abheben weltweit'],
      affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    },
    {
      name: 'TF Bank Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Abhebungen'],
      cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)'],
      affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    },
  ],
  faq: [
    {
      question: 'Bekomme ich als Student überhaupt eine Kreditkarte?',
      answer: 'Ja, viele Banken geben Studenten Karten ohne Jahresgebühr. Für DKB brauchst du ein Girokonto und regelmäßig genutzte Zahlungen.',
    },
    {
      question: 'Welche Kreditkarte ist für Studenten im Ausland wirklich kostenlos?',
      answer: 'DKB Visa ist für Studenten die realistischste kostenlose Wahl, wenn du Aktivkunde wirst. Keine Jahresgebühr und keine Fremdwährungsgebühr für Aktivkunden.',
    },
    {
      question: 'Brauche ich ein Einkommen für eine Kreditkarte?',
      answer: 'Nicht unbedingt. Studenten bekommen oft Karten mit niedrigeren Limits. Bei DKB reicht ein Girokonto und regelmäßige Ausgaben.',
    },
    {
      question: 'Kann ich im Ausland kostenlos bezahlen und Geld abheben?',
      answer: 'Mit DKB Visa zahlst du oft kostenlos als Aktivkunde. Abheben kann noch Automatengebühren kosten, deshalb ist TF Bank als Backup sinnvoll.',
    },
    {
      question: 'Welche Karte ist am einfachsten zu bekommen?',
      answer: 'N26 Standard ist sehr einfach zu beantragen und hat keine Jahresgebühr. DKB Visa ist besser für echtes Sparen, wenn du Aktivkunde wirst.',
    },
  ],
  relatedPages: [
    { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
    { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
    { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
    { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
  ],
  title: 'Beste Kreditkarte für Studenten im Ausland kostenlos | Geringe Gebühren',
  description: 'Kostenlose Kreditkarten für Studenten im Ausland ohne Jahresgebühr. Tipps für geringe Fremdwährungsgebühren und einfache Beantragung.',
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}