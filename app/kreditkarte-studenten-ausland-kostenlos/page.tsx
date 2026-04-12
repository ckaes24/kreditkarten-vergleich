import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import AutorenBox from '../../components/AutorenBox';
import { seoPages } from '../../data/seoPages';

const pageData = {
  ...seoPages['kreditkarte-studenten-ausland-kostenlos'],
  keyword: 'Kreditkarte Studenten Ausland kostenlos',
  intro: 'Beste Kreditkarte für Studenten im Ausland 2026: Als Student willst du weltweit kostenlos bezahlen und abheben – ohne Jahresgebühr und mit niedrigen Auslandskosten. Hier findest du die besten Karten für Auslandssemester, Praktikum oder Work & Travel.',
  topRecommendation: {
    name: 'DKB Visa',
    pros: ['0€ Jahresgebühr', 'Für Aktivkunden¹ 0% Fremdwährungsgebühren', 'Reiseversicherung über DKB-Konto', 'Ideal für Studenten mit regelmäßigem Auslandszahlen'],
    cons: ['1,75% Fremdwährungsgebühren ohne Aktivstatus', '400€ Tageslimit für Abhebungen'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    imageUrl: 'https://a.neqty.net/DKB/Karten/DKB_Visa_Debitkarte_landscape_500x315.png',
  },
  alternatives: [
    {
      name: 'Advanzia Gebührenfrei Mastercard',
      pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Sehr einfache Beantragung, kein Girokonto nötig'],
      cons: ['Zins bei Teilzahlung', 'Kein Girokonto, reine Kreditkarte'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
      imageUrl: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
    },
    {
      name: 'N26 Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung online', 'Gute Konto-App für Studenten'],
      cons: ['1,7% Fremdwährungsgebühren', 'Kein kostenloses Abheben weltweit'],
      affiliateLink: 'https://n26.com/r/chrisk4848?cid=0JY&lang=de',
      imageUrl: 'https://images.ctfassets.net/q33z48p65a6w/6mRcFZaMyr1Kg8MUkGQkLo/e149ce5908cd6a8e2cdf3976b4226244/2310_Web-asset_Mastercard.png',
    },
    {
      name: 'TF Bank Mastercard',
      pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Abhebungen'],
      cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C213344020T',
      imageUrl: 'http://www.fndsda.net/b/tfbank/TFBank_MastercardGold_NeuesKartendesign_01.png',
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
      answer: 'Advanzia Gebührenfrei Mastercard ist besonders einfach zu beantragen (kein Girokonto, keine festen Einkommensnachweise). Auch N26 Standard ist sehr einfach, DKB Visa ist besser für echtes Sparen, wenn du Aktivkunde wirst.',
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
  return <>
    <SEOPageTemplate {...pageData} />
    {/* <AutorenBox /> */}
    <div style={{ fontSize: '0.8em', color: '#888', marginTop: 24, textAlign: 'left' }}>
      <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>¹</span> DKB Visa: 0 % Fremdwährungsgebühr und kostenlose Abhebungen nur als Aktivkunde (mind. 700 € Geldeingang/Monat). Ohne Aktivstatus 1,75 % Fremdwährungsgebühr und ggf. Gebühren für Abhebungen.
    </div>
  </>;
}