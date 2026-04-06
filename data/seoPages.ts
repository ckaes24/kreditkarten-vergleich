import { SEOCreditCard, seoCreditCards } from './seoCreditCards';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedPage {
  title: string;
  url: string;
}

export interface SEOPageData {
  keyword: string;
  intro: string;
  topRecommendation: SEOCreditCard;
  alternatives: SEOCreditCard[];
  faq: FAQItem[];
  relatedPages: RelatedPage[];
  title: string;
  description: string;
}

export const seoPages: Record<string, SEOPageData> = {
  'kreditkarte-usa-ohne-gebuehren': {
    keyword: 'USA ohne Gebühren',
    intro: 'Reisen in die USA sind für Deutsche oft mit hohen Kosten verbunden. Fremdwährungsgebühren von bis zu 3% pro Transaktion, teure ATM-Abhebungen mit 5-10€ pro Vorgang und ungünstige Wechselkurse können Ihre Reisekosten schnell um mehrere hundert Euro erhöhen. Stellen Sie sich vor: Sie bezahlen 100€ für ein Hotelzimmer, aber durch Gebühren zahlen Sie effektiv 103€. Bei mehreren Zahlungen und Abhebungen summiert sich das schnell. Hinzu kommen die Unsicherheiten bei der Bargeldversorgung – viele ATMs in den USA verlangen hohe Gebühren, und nicht alle Karten funktionieren an jedem Automaten. Deutsche Bankkarten sind oft nicht kompatibel oder haben hohe Auslandseinsatzgebühren. Die Lösung? Spezielle Kreditkarten ohne Fremdwährungsgebühren, die speziell für US-Reisen optimiert sind. Diese Karten ermöglichen kostenloses Bezahlen und Abheben in Dollar, sparen Ihnen Geld und geben Sicherheit. Erfahren Sie mehr über [kostenlose Kreditkarten für Thailand](/kreditkarte-thailand-abheben-kostenlos) oder [Kreditkarten ohne Jahresgebühr](/kreditkarte-ohne-jahresgebuehr-reisen) für weitere Reiseziele. Entdecken Sie die besten Optionen für gebührenfreie Zahlungen in den USA.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Welche Kreditkarte ist wirklich kostenlos in den USA?',
        answer: 'Die American Express Platinum und Gold Karten haben keine Fremdwährungsgebühren. Die DKB Visa bietet kostenlose Abhebungen an DKB-Automaten, hat aber 1,75% Gebühren bei Zahlungen.',
      },
      {
        question: 'Kann ich mit deutscher Kreditkarte kostenlos Geld abheben in den USA?',
        answer: 'Mit speziellen Karten wie DKB Visa oder TF Bank Mastercard können Sie kostenlos an bestimmten ATMs abheben. American Express Karten haben keine Gebühren, aber weniger ATM-Netzwerk.',
      },
      {
        question: 'Was kostet Bezahlen mit Kreditkarte in den USA?',
        answer: 'Bei Karten ohne Fremdwährungsgebühren zahlen Sie nur den Originalpreis. Normale deutsche Karten haben 1-3% Gebühren plus mögliche ATM-Kosten von 3-5€.',
      },
      {
        question: 'Gibt es Limits für kostenlose Abhebungen?',
        answer: 'Ja, DKB Visa erlaubt 400€ pro Tag kostenlos. American Express hat höhere Limits bis 1.000€ pro Tag, abhängig von Ihrem Kreditrahmen.',
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
  },
  'kreditkarte-thailand-abheben-kostenlos': {
    keyword: 'Thailand abheben kostenlos',
    intro: 'In Thailand Geld abheben kann teuer sein. Finden Sie Kreditkarten, die kostenlose Abhebungen ermöglichen und Ihnen Geld sparen.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Wie hoch sind Abhebegebühren in Thailand?',
        answer: 'Ohne kostenlose Abhebungen können Gebühren bis zu 5€ pro Abhebung betragen.',
      },
      {
        question: 'Welche Karten erlauben kostenlose Abhebungen?',
        answer: 'Karten wie DKB Visa und TF Bank Mastercard bieten kostenlose Abhebungen.',
      },
      {
        question: 'Gibt es Alternativen zu Kreditkarten?',
        answer: 'ATM-Karten oder lokale Banken, aber Kreditkarten sind oft praktischer.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
      { title: 'Kreditkarte Kreuzfahrten', url: '/kreuzfahrten' },
    ],
    title: 'Beste Kreditkarte für Thailand abheben kostenlos | Geld sparen',
    description: 'Kostenlose Abhebungen in Thailand mit den besten Kreditkarten. Vermeiden Sie hohe Gebühren und sparen Sie bei jeder Transaktion.',
  },
  'kreditkarte-studenten-ausland-kostenlos': {
    keyword: 'Studenten Ausland kostenlos',
    intro: 'Als Student im Ausland müssen Sie auf Kosten achten. Entdecken Sie kostenlose Kreditkarten speziell für Studenten im Ausland.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Warum brauchen Studenten Kreditkarten?',
        answer: 'Für Reservierungen, Notfälle und bargeldlose Zahlungen im Ausland.',
      },
      {
        question: 'Gibt es kostenlose Karten für Studenten?',
        answer: 'Ja, viele Banken bieten gebührenfreie Karten für Studenten an.',
      },
      {
        question: 'Was ist bei Auslandszahlungen wichtig?',
        answer: 'Keine Fremdwährungsgebühren und Reiseversicherungen.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
      { title: 'Kreditkarte Ausland', url: '/ausland' },
    ],
    title: 'Beste Kreditkarte für Studenten im Ausland kostenlos | Sparen im Studium',
    description: 'Kostenlose Kreditkarten für Studenten im Ausland. Keine Gebühren, Reiseversicherungen und praktisch fürs Studium.',
  },
  'kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich': {
    keyword: 'ohne Fremdwährungsgebühr Vergleich',
    intro: 'Fremdwährungsgebühren können Ihre Reisekosten erheblich erhöhen. Vergleichen Sie die besten Kreditkarten ohne diese Gebühren für günstige Zahlungen im Ausland.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Was sind Fremdwährungsgebühren?',
        answer: 'Gebühren, die Banken für Zahlungen in Fremdwährungen erheben, meist 1-3% des Betrags.',
      },
      {
        question: 'Welche Karten haben keine Fremdwährungsgebühren?',
        answer: 'American Express Karten und einige Visa/Mastercard von bestimmten Banken.',
      },
      {
        question: 'Warum sind diese Karten besser?',
        answer: 'Sie sparen Geld bei jeder Auslandszahlung und Abhebung.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
    ],
    title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich | Beste Angebote',
    description: 'Vergleich der besten Kreditkarten ohne Fremdwährungsgebühren. Sparen Sie bei Auslandszahlungen und Reisen.',
  },
  'beste-kreditkarte-fuer-reisen-2026': {
    keyword: 'Reisen 2026',
    intro: 'Für Reisen im Jahr 2026 sind Kreditkarten mit Gebührenfreiheit, Reiseversicherungen und Bonusprogrammen ideal. Entdecken Sie die Top-Empfehlungen.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Was macht eine gute Reisekreditkarte aus?',
        answer: 'Keine Gebühren, Reiseversicherungen, Lounge-Zugang und Bonuspunkte.',
      },
      {
        question: 'Welche Karten sind für 2026 empfehlenswert?',
        answer: 'American Express Platinum und Gold, sowie gebührenfreie Visa-Karten.',
      },
      {
        question: 'Brauche ich eine Kreditkarte für Reisen?',
        answer: 'Ja, für Reservierungen, Notfälle und bequeme Zahlungen.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Kreuzfahrten', url: '/kreuzfahrten' },
      { title: 'Kreditkarte Reiseversicherung', url: '/reiseversicherung' },
    ],
    title: 'Beste Kreditkarte für Reisen 2026 | Top-Empfehlungen',
    description: 'Die besten Kreditkarten für Reisen im Jahr 2026. Gebührenfrei, versichert und komfortabel.',
  },
  'kreditkarte-weltweit-kostenlos-bezahlen': {
    keyword: 'weltweit kostenlos bezahlen',
    intro: 'Weltweit kostenlos bezahlen mit Kreditkarten ohne Fremdwährungsgebühren. Ideal für internationale Reisen und Zahlungen.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Wie funktioniert kostenloses Bezahlen weltweit?',
        answer: 'Karten ohne Fremdwährungsgebühren berechnen den Originalbetrag ohne Aufschlag.',
      },
      {
        question: 'Wo kann ich weltweit bezahlen?',
        answer: 'Überall, wo Visa, Mastercard oder American Express akzeptiert werden.',
      },
      {
        question: 'Gibt es Einschränkungen?',
        answer: 'Manche Karten haben Jahresgebühren oder Bonitätsprüfungen.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Ausland', url: '/ausland' },
      { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
    ],
    title: 'Kreditkarte weltweit kostenlos bezahlen | Ohne Gebühren',
    description: 'Kreditkarten für kostenloses Bezahlen weltweit. Keine Fremdwährungsgebühren für internationale Zahlungen.',
  },
  'prepaid-kreditkarte-ausland-kostenlos': {
    keyword: 'Prepaid Ausland kostenlos',
    intro: 'Prepaid-Kreditkarten für kostenlose Zahlungen im Ausland. Laden Sie auf und zahlen Sie ohne Überraschungen.',
    topRecommendation: seoCreditCards['tf-bank-mastercard'],
    alternatives: [seoCreditCards['dkb-visa'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Was ist eine Prepaid-Kreditkarte?',
        answer: 'Eine Karte, die Sie mit eigenem Geld aufladen, bevor Sie ausgeben.',
      },
      {
        question: 'Warum kostenlos im Ausland?',
        answer: 'Keine Fremdwährungsgebühren und oft keine Jahresgebühren.',
      },
      {
        question: 'Wo bekomme ich eine Prepaid-Karte?',
        answer: 'Bei Banken wie TF Bank oder DKB.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
      { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
      { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
    ],
    title: 'Prepaid Kreditkarte Ausland kostenlos | Sichere Zahlungen',
    description: 'Prepaid-Kreditkarten für kostenlose und sichere Zahlungen im Ausland. Keine Schulden, nur aufladen.',
  },
  'kreditkarte-ohne-schufa-reisen': {
    keyword: 'ohne SCHUFA Reisen',
    intro: 'Kreditkarten ohne SCHUFA-Prüfung für Reisen. Ideal, wenn Sie keine Bonitätsprüfung wünschen.',
    topRecommendation: seoCreditCards['tf-bank-mastercard'],
    alternatives: [seoCreditCards['dkb-visa'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Was ist SCHUFA?',
        answer: 'Eine Auskunftei, die Bonitätsdaten sammelt.',
      },
      {
        question: 'Warum ohne SCHUFA?',
        answer: 'Für Personen mit schlechter Bonität oder Datenschutzgründen.',
      },
      {
        question: 'Sind diese Karten sicher?',
        answer: 'Ja, aber oft mit Auflade-Limits.',
      },
    ],
    relatedPages: [
      { title: 'Prepaid Kreditkarte Ausland kostenlos', url: '/prepaid-kreditkarte-ausland-kostenlos' },
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
      { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
    ],
    title: 'Kreditkarte ohne SCHUFA Reisen | Ohne Bonitätsprüfung',
    description: 'Kreditkarten ohne SCHUFA-Prüfung für Reisen. Beantragen ohne Bonitätscheck.',
  },
  'kreditkarte-mit-cashback-ausland': {
    keyword: 'mit Cashback Ausland',
    intro: 'Kreditkarten mit Cashback für Auslandszahlungen. Verdienen Sie Geld zurück bei Ihren Reiseausgaben.',
    topRecommendation: seoCreditCards['amex-gold'],
    alternatives: [seoCreditCards['amex-platinum'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Was ist Cashback?',
        answer: 'Rückerstattung eines Prozentsatzes Ihrer Ausgaben.',
      },
      {
        question: 'Wie hoch ist das Cashback?',
        answer: 'Meist 1-5% je nach Karte und Kategorie.',
      },
      {
        question: 'Funktioniert Cashback im Ausland?',
        answer: 'Ja, bei Zahlungen in Fremdwährungen.',
      },
    ],
    relatedPages: [
      { title: 'Beste Kreditkarte für Reisen 2026', url: '/beste-kreditkarte-fuer-reisen-2026' },
      { title: 'Kreditkarte weltweit kostenlos bezahlen', url: '/kreditkarte-weltweit-kostenlos-bezahlen' },
      { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
    ],
    title: 'Kreditkarte mit Cashback Ausland | Geld zurück verdienen',
    description: 'Kreditkarten mit Cashback für Auslandszahlungen. Sparen und verdienen Sie bei Reisen.',
  },
  'beste-kreditkarte-usa-reisen-deutsche': {
    keyword: 'USA Reisen Deutsche',
    intro: 'Die besten Kreditkarten für Deutsche, die in die USA reisen. Gebührenfrei und praktisch.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Warum speziell für Deutsche?',
        answer: 'Deutsche Banken bieten oft bessere Konditionen für US-Reisen.',
      },
      {
        question: 'Welche Gebühren gibt es?',
        answer: 'Keine Fremdwährungsgebühren bei empfohlenen Karten.',
      },
      {
        question: 'Brauche ich eine US-Adresse?',
        answer: 'Nein, Karten sind international nutzbar.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte weltweit kostenlos bezahlen', url: '/kreditkarte-weltweit-kostenlos-bezahlen' },
      { title: 'Beste Kreditkarte für Reisen 2026', url: '/beste-kreditkarte-fuer-reisen-2026' },
    ],
    title: 'Beste Kreditkarte USA Reisen Deutsche | Gebührenfrei',
    description: 'Top Kreditkarten für Deutsche bei USA-Reisen. Keine Gebühren, Reiseversicherungen.',
  },
  'kreditkarte-fuer-backpacking': {
    keyword: 'für Backpacking',
    intro: 'Kreditkarten für Backpacking-Reisen. Kostengünstig, sicher und praktisch für unterwegs.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Was brauchen Backpacker?',
        answer: 'Kostenlose Abhebungen, keine Gebühren, Reiseversicherungen.',
      },
      {
        question: 'Sind Kreditkarten sicher beim Backpacking?',
        answer: 'Ja, mit PIN und Online-Blocking.',
      },
      {
        question: 'Wo kann ich abheben?',
        answer: 'An ATMs weltweit, oft kostenlos.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
      { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
      { title: 'Kreditkarte ohne Jahresgebühr Reisen', url: '/kreditkarte-ohne-jahresgebuehr-reisen' },
    ],
    title: 'Kreditkarte für Backpacking | Kostengünstig reisen',
    description: 'Beste Kreditkarten für Backpacking. Kostenlos abheben und bezahlen weltweit.',
  },
  'kreditkarte-ohne-jahresgebuehr-reisen': {
    keyword: 'ohne Jahresgebühr Reisen',
    intro: 'Kreditkarten ohne Jahresgebühr für Reisen. Sparen Sie die Grundgebühr und zahlen nur bei Nutzung.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Warum ohne Jahresgebühr?',
        answer: 'Sie zahlen nichts, wenn Sie die Karte nicht nutzen.',
      },
      {
        question: 'Gibt es versteckte Kosten?',
        answer: 'Manchmal Fremdwährungsgebühren oder Abhebegebühren.',
      },
      {
        question: 'Sind diese Karten gut für Reisen?',
        answer: 'Ja, wenn sie keine Fremdwährungsgebühren haben.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte ohne Fremdwährungsgebühr Vergleich', url: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich' },
      { title: 'Prepaid Kreditkarte Ausland kostenlos', url: '/prepaid-kreditkarte-ausland-kostenlos' },
      { title: 'Kreditkarte für Backpacking', url: '/kreditkarte-fuer-backpacking' },
    ],
    title: 'Kreditkarte ohne Jahresgebühr Reisen | Kosten sparen',
    description: 'Kreditkarten ohne Jahresgebühr für Reisen. Gebührenfrei und praktisch.',
  },
  'welche-kreditkarte-fuer-thailand-reisen': {
    keyword: 'für Thailand Reisen',
    intro: 'Welche Kreditkarte eignet sich für Reisen nach Thailand? Entdecken Sie kostenlose Optionen für Zahlungen und Abhebungen.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Sind Kreditkarten in Thailand akzeptiert?',
        answer: 'Ja, in Städten und Touristenorten weit verbreitet.',
      },
      {
        question: 'Wie hoch sind Abhebegebühren?',
        answer: 'Ohne kostenlose Karte bis zu 5€ pro Abhebung.',
      },
      {
        question: 'Brauche ich Bargeld in Thailand?',
        answer: 'Ja, für Märkte und kleinere Orte.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte Thailand abheben kostenlos', url: '/kreditkarte-thailand-abheben-kostenlos' },
      { title: 'Kreditkarte für Backpacking', url: '/kreditkarte-fuer-backpacking' },
      { title: 'Kreditkarte weltweit kostenlos bezahlen', url: '/kreditkarte-weltweit-kostenlos-bezahlen' },
    ],
    title: 'Welche Kreditkarte für Thailand Reisen | Beste Wahl',
    description: 'Die richtige Kreditkarte für Thailand-Reisen. Kostenlos abheben und bezahlen.',
  },
};