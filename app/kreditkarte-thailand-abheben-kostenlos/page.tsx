import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
// ...existing code...

import { seoPages } from '../../data/seoPages';

const origPageData = seoPages['kreditkarte-thailand-abheben-kostenlos'];
const pageData = {
  ...origPageData,
  intro: 'Beste Kreditkarte für Thailand 2026: In Thailand ist Bargeld oft unverzichtbar – aber viele Banken verlangen hohe ATM-Gebühren. Mit der richtigen Kreditkarte hebst du kostenlos ab und sparst bei Zahlungen in Baht die Fremdwährungsgebühr. Achte auf Karten mit hoher Akzeptanz und günstigen Konditionen für Reisende.',
  topRecommendation: origPageData.topRecommendation && origPageData.topRecommendation.name === 'DKB Visa Debit'
    ? {
        ...origPageData.topRecommendation,
        pros: origPageData.topRecommendation.pros.map(p => p.includes('Aktivkunde') ? p.replace('Aktivkunde', 'Aktivkunde¹') : p),
      }
    : origPageData.topRecommendation,
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