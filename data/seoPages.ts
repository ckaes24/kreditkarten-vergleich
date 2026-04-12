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
    intro: 'In den USA zahlst du schnell drauf, wenn deine Karte Fremdwaehrungsgebuehren berechnet oder ATM-Aufschlaege nicht abfedert. Ein typischer Praxisfall: Bezahlen klappt, aber beim Mietwagen wird die Karte fuer die Kaution abgelehnt, weil nur echte Credit-Karten akzeptiert werden. Genau deshalb lohnt eine Kombi aus alltagstauglicher Reisekarte plus echter Credit-Backupkarte. Wichtig zur DKB Visa: Als Aktivkunde mit mindestens 700 EUR Geldeingang pro Monat entfaellt die Fremdwaehrungsgebuehr weltweit, ohne Aktivstatus faellt sie an.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [
      {
        name: 'Advanzia Gebührenfrei Mastercard',
        pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Weltweit akzeptiert'],
        cons: ['Kein Girokonto, reine Kreditkarte', 'Zins bei Teilzahlung'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
        imageUrl: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
      },
      seoCreditCards['amex-gold'],
    ],
    faq: [
      {
        question: 'Welche Kreditkarte fuer USA-Reise ohne Fremdwaehrungsgebuehr?',
        answer: 'Fuer USA-Reisen sind Karten ohne Fremdwaehrungsgebuehr entscheidend. DKB Visa ist als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit ohne Fremdwaehrungsgebuehr nutzbar. Zusaetzlich ist eine echte Credit-Karte als Mietwagen-Backup sinnvoll.',
      },
      {
        question: 'Welche Kreditkarte fuer Mietwagen in den USA?',
        answer: 'Viele US-Mietwagenfirmen verlangen fuer die Kaution eine echte Credit-Karte und lehnen Debitkarten ab. Als kostenlose echte Credit-Karten sind TF Bank oder Advanzia eine starke Backup-Loesung.',
      },
      {
        question: 'Kann ich in den USA mit Debitkarte zahlen?',
        answer: 'Im Alltag oft ja, bei Hotels und Mietwagen aber nicht immer. Gerade bei Kautionen kann eine Debitkarte scheitern. Deshalb fuer USA-Reisen immer mindestens eine echte Credit-Karte mitnehmen.',
      },
      {
        question: 'Wie vermeide ich Kreditkartengebuehren in den USA?',
        answer: 'Nutze eine Karte ohne Fremdwaehrungsgebuehr, waehle immer USD statt EUR am Terminal und vermeide unnötige Kleinabhebungen am ATM. Mit DKB Visa sparst du als Aktivkunde die Fremdwaehrungsgebuehr weltweit.',
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
    intro: 'Thailand ist ein Klassiker fuer versteckte Kosten: Viele Automaten berechnen feste ATM-Gebuehren pro Abhebung, zusaetzlich drohen schlechte Wechselkurse durch EUR-Abrechnung am Terminal. Darum ist eine gebuehrenarme Karte plus kluge Abhebestrategie entscheidend. Wichtig zur DKB Visa: Als Aktivkunde mit mindestens 700 EUR Geldeingang monatlich faellt weltweit keine Fremdwaehrungsgebuehr an.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [
      seoCreditCards['tf-bank-mastercard'],
      {
        name: 'bunq Kreditkarte (Free & Paid)',
        pros: ['0€ Jahresgebühr (Free möglich)', 'Mastercard, sehr gute Akzeptanz', 'Keine Fremdwährungsgebühr', 'Sehr gute App, auch für längere Aufenthalte'],
        cons: ['Kein Kreditrahmen, reine Debitkarte', 'Premium-Features kostenpflichtig'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C3156123233T',
        imageUrl: 'https://framerusercontent.com/images/JRNpintM7rUmKKgvo3VAzyB0rg.png?width=1152&height=1152',
      },
    ],
    faq: [
      {
        question: 'Welche Kreditkarte fuer Thailand ohne ATM-Gebuehren?',
        answer: 'Lokale ATM-Gebuehren in Thailand lassen sich meist nicht komplett vermeiden, aber mit der richtigen Karte reduzierst du Zusatzkosten stark. DKB Visa spart als Aktivkunde die Fremdwaehrungsgebuehr; zusaetzlich hilft seltenes Abheben in groesseren Betraegen.',
      },
      {
        question: 'Wie hoch ist die ATM-Gebuehr in Thailand pro Abhebung?',
        answer: 'Je nach Bank fallen oft fixe Gebuehren pro Abhebung an. Genau deshalb solltest du nicht viele kleine Betraege abheben, sondern sinnvoll buendeln.',
      },
      {
        question: 'Soll ich in Thailand in Baht oder Euro abrechnen?',
        answer: 'Immer in Baht abrechnen. Die Euro-Abrechnung (DCC) ist fast immer teurer und verschlechtert den Wechselkurs.',
      },
    ],
    relatedPages: [
      { title: 'Kreditkarte USA ohne Gebühren', url: '/kreditkarte-usa-ohne-gebuehren' },
      { title: 'Kreditkarte Studenten Ausland kostenlos', url: '/kreditkarte-studenten-ausland-kostenlos' },
      { title: 'Kreditkarte Kreuzfahrten', url: '/kreuzfahrten' },
    ],
    title: 'Beste Kreditkarte für Thailand 2026: Gebührenfrei bezahlen & abheben',
    description: 'Beste Kreditkarte für Thailand 2026: Gebührenfrei bezahlen & abheben. Mit klarem Fokus auf ATM-Fixgebühren und DCC-Vermeidung.',
  },
  'kreditkarte-studenten-ausland-kostenlos': {
    keyword: 'Studenten Ausland kostenlos',
    intro: 'Als Student im Ausland zaehlt jeder Euro. Die wichtigsten Hebel sind keine Jahresgebuehr, moeglichst geringe Auslandskosten und eine Karte, die in echten Reisesituationen funktioniert. Bei der DKB Visa gilt: Als Aktivkunde (mind. 700 EUR Geldeingang/Monat) entfaellt weltweit die Fremdwaehrungsgebuehr.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Welche Kreditkarte ist fuer Studenten im Ausland kostenlos?',
        answer: 'Achte auf 0 EUR Jahresgebuehr und geringe Auslandskosten. Fuer viele ist DKB Visa interessant, besonders mit Aktivstatus wegen 0% Fremdwaehrungsgebuehr weltweit.',
      },
      {
        question: 'Brauche ich als Student im Ausland eine echte Kreditkarte?',
        answer: 'Ja, vor allem fuer Kautionen bei Hotels oder Mietwagen kann eine echte Credit-Karte wichtig sein. Eine zweite Karte als Backup ist sinnvoll.',
      },
      {
        question: 'Wie vermeide ich Gebuehren bei Kartenzahlung im Ausland?',
        answer: 'Immer in Landeswaehrung zahlen, DCC vermeiden und eine Karte ohne oder mit niedriger Fremdwaehrungsgebuehr nutzen.',
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
    intro: 'Fremdwaehrungsgebuehren von 1-3% wirken klein, kosten auf laengeren Reisen aber schnell dreistellige Betraege. Dieser Vergleich zeigt Karten, mit denen du im Ausland real guenstiger zahlst. Wichtig bei DKB Visa: 0% Fremdwaehrungsgebuehr weltweit gilt fuer Aktivkunden mit mindestens 700 EUR Geldeingang pro Monat.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Welche Kreditkarte ohne Fremdwaehrungsgebuehr ist 2026 am besten?',
        answer: 'Die beste Karte haengt von deinem Reisemuster ab. Entscheidend sind 0% Fremdwaehrungsgebuehr, solide Akzeptanz und verlaessliche Bedingungen ohne versteckte Kosten.',
      },
      {
        question: 'DKB Visa: Wann entfaellt die Fremdwaehrungsgebuehr?',
        answer: 'Bei DKB Visa entfaellt die Fremdwaehrungsgebuehr weltweit mit Aktivstatus, also bei mindestens 700 EUR monatlichem Geldeingang.',
      },
      {
        question: 'Soll ich im Ausland in Euro oder Landeswaehrung zahlen?',
        answer: 'Immer in Landeswaehrung zahlen. Die EUR-Abrechnung (DCC) ist in den meisten Faellen teurer.',
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
    intro: '2026 sind die besten Reisekarten die, die im Alltag wirklich funktionieren: geringe Auslandskosten, stabile Akzeptanz und verstaendliche Konditionen. Bei DKB Visa gilt weiterhin: Als Aktivkunde mit 700 EUR Geldeingang pro Monat entfaellt die Fremdwaehrungsgebuehr weltweit.',
    topRecommendation: seoCreditCards['amex-platinum'],
    alternatives: [seoCreditCards['amex-gold'], seoCreditCards['dkb-visa']],
    faq: [
      {
        question: 'Welche Kreditkarte ist 2026 die beste fuer Reisen?',
        answer: 'Die beste Reisekreditkarte kombiniert niedrige Auslandskosten, hohe Akzeptanz und einen guten Sicherheits- und Servicelevel.',
      },
      {
        question: 'Welche Kreditkarte fuer Weltreise 2026 ohne hohe Gebuehren?',
        answer: 'Achte auf 0% oder sehr niedrige Fremdwaehrungsgebuehr, geringe Nebenkosten beim Abheben und eine Backup-Karte fuer Notfaelle.',
      },
      {
        question: 'Brauche ich fuer Reisen eine zweite Kreditkarte als Backup?',
        answer: 'Ja, eine zweite Karte reduziert das Risiko bei Sperrungen, Limits oder Akzeptanzproblemen vor Ort.',
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
    alternatives: [
      {
        name: 'bunq Kreditkarte (Free & Paid)',
        pros: ['0€ Jahresgebühr (Free möglich)', 'Keine SCHUFA-Prüfung', 'Debit Mastercard', 'Sehr gute App'],
        cons: ['Kein Kreditrahmen', 'Premium-Features kostenpflichtig'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C3156123233T',
        imageUrl: 'https://framerusercontent.com/images/JRNpintM7rUmKKgvo3VAzyB0rg.png?width=1152&height=1152',
      },
      {
        name: 'Bank Norwegian Visa',
        pros: ['0€ Jahresgebühr', 'Visa, weltweit akzeptiert', 'Reiseversicherung inklusive', 'Keine Fremdwährungsgebühr'],
        cons: ['Bonitätsprüfung erforderlich', 'Kein Girokonto, reine Kreditkarte'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C438298174T',
        imageUrl: 'https://res.cloudinary.com/banknorwegian/image/upload/dpr_auto/v1/prod-10/media/a3ckjxmu/bank-norwegian-card-art-de-1536x969-chip-radius-corners-horizontal.png',
      },
    ],
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
    intro: 'Für Deutsche in den USA ist eine echte Credit Card für Hotels, Mietwagen und Kautionen Pflicht. Debitkarten wie die DKB Visa funktionieren im Alltag, werden aber an vielen Countern abgelehnt. Die Advanzia Gebührenfrei Mastercard ist als echte Credit Card ohne Jahresgebühr und ohne Fremdwährungsgebühr ideal als Hauptkarte.',
    topRecommendation: {
      name: 'Advanzia Gebührenfrei Mastercard',
      pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Weltweit akzeptiert'],
      cons: ['Kein Girokonto, reine Kreditkarte', 'Zins bei Teilzahlung'],
      affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
    },
    alternatives: [
      {
        name: 'DKB Visa Debit',
        pros: ['Keine Jahresgebühr', 'Gute Akzeptanz in den USA', 'Kostenlose Bargeldabhebungen als Aktivkunde'],
        cons: ['Nur Debit, keine echte Credit Card', '1,75% Fremdwährungsgebühr ohne Aktivstatus'],
        affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
      },
      {
        name: 'TF Bank Mastercard',
        pros: ['0€ Jahresgebühr', 'Einfache Beantragung', 'Backup für Notfälle'],
        cons: ['1,99% Fremdwährungsgebühren', 'Niedrigeres Limit (1.500€)', 'Keine Lounge-Vorteile'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C213344020T',
      },
    ],
    faq: [
      {
        question: 'Welche Kreditkarte für Mietwagen in den USA als Deutscher?',
        answer: 'Für Kautionen wird fast immer eine echte Credit Card (z.B. Advanzia) verlangt. Debitkarten wie DKB Visa werden oft abgelehnt.',
      },
      {
        question: 'DKB Visa USA: Ist die Fremdwährungsgebühr wirklich 0 Prozent?',
        answer: 'Ja, aber nur mit Aktivstatus. Bei mindestens 700 EUR monatlichem Geldeingang entfällt die Fremdwährungsgebühr weltweit. Ohne Aktivstatus fallen Gebühren an.',
      },
      {
        question: 'Brauche ich für die USA eine extra Kreditkarte neben meiner Debitkarte?',
        answer: 'Für Hotels und Mietwagen lautet die sichere Antwort: ja. Eine echte Credit Card verhindert Stress bei Kautionen und erhöht die Akzeptanz deutlich.',
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
    alternatives: [
      seoCreditCards['tf-bank-mastercard'],
      {
        name: 'N26 Mastercard',
        pros: ['0€ Jahresgebühr', 'Einfache Beantragung online', 'Gute Konto-App für unterwegs', 'Keine Fremdwährungsgebühr'],
        cons: ['Kein Kreditrahmen, reine Debitkarte', 'Abhebungen im Ausland teilweise kostenpflichtig'],
        affiliateLink: 'https://n26.com/r/chrisk4848?cid=0JY&lang=de',
        imageUrl: 'https://images.ctfassets.net/q33z48p65a6w/6mRcFZaMyr1Kg8MUkGQkLo/e149ce5908cd6a8e2cdf3976b4226244/2310_Web-asset_Mastercard.png',
      },
    ],
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
    alternatives: [
      {
        name: 'bunq Kreditkarte (Free & Paid)',
        pros: ['0€ Jahresgebühr (Free möglich)', 'Keine Fremdwährungsgebühr', 'Sehr gute App', 'Debit Mastercard'],
        cons: ['Kein Kreditrahmen', 'Premium-Features kostenpflichtig'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C3156123233T',
        imageUrl: 'https://framerusercontent.com/images/JRNpintM7rUmKKgvo3VAzyB0rg.png?width=1152&height=1152',
      },
      {
        name: 'Advanzia Gebührenfrei Mastercard',
        pros: ['0€ Jahresgebühr', 'Echte Credit Mastercard', 'Keine Fremdwährungsgebühr', 'Weltweit akzeptiert'],
        cons: ['Kein Girokonto, reine Kreditkarte', 'Zins bei Teilzahlung'],
        affiliateLink: 'https://www.financeads.net/tc.php?t=70334C13814286T',
        imageUrl: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
      },
    ],
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
    intro: 'Fuer Thailand-Reisen brauchst du vor allem eine Karte, die bei Fremdwaehrung nicht mitverdient und bei Bargeldversorgung praktikabel bleibt. Die groessten Kostenfallen sind ATM-Gebuehren und EUR-Abrechnung am Terminal. Bei DKB Visa entfaellt als Aktivkunde mit 700 EUR Geldeingang/Monat die Fremdwaehrungsgebuehr weltweit.',
    topRecommendation: seoCreditCards['dkb-visa'],
    alternatives: [seoCreditCards['tf-bank-mastercard'], seoCreditCards['amex-gold']],
    faq: [
      {
        question: 'Welche Kreditkarte fuer Thailand Reisen ist am besten?',
        answer: 'Eine gute Thailand-Karte hat moeglichst keine Fremdwaehrungsgebuehr und verlaessliche Akzeptanz. DKB Visa ist mit Aktivstatus eine starke Option.',
      },
      {
        question: 'Wie hoch sind ATM-Gebuehren in Thailand?',
        answer: 'Je nach Betreiber fallen fixe Zusatzgebuehren an. Deshalb lieber weniger oft und in groesseren Betraegen abheben.',
      },
      {
        question: 'Soll ich in Thailand in Euro oder Baht abrechnen?',
        answer: 'Immer in Baht zahlen. Die Euro-Abrechnung ist fast immer teurer.',
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