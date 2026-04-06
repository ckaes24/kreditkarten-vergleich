export interface SEOCreditCard {
  name: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
  imageUrl?: string;
}

export const seoCreditCards: Record<string, SEOCreditCard> = {
  'amex-platinum': {
    name: 'American Express Platinum',
    pros: ['Keine Fremdwährungsgebühren weltweit', 'Umfangreiche Reiseversicherungen (Reiserücktritt, Gepäck, Auslandskrankenversicherung)', 'Priority Pass Lounge Zugang (weltweit über 1.300 Lounges)', 'Höhere Kreditlimits möglich (bis 10.000€)', 'Statusvorteile bei vielen Partnern'],
    cons: ['Hohe Jahresgebühr von 720€', 'Bonitätsprüfung erforderlich', 'Keine Partnerkarte möglich'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013832B',
    imageUrl: 'https://www.kreditkarten-finder.de/images/cards/amex-platinum.png',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['Keine Fremdwährungsgebühren', 'Reiseversicherungen (Reiserücktritt, Gepäck)', 'Bonuspunkte bei jedem Einkauf (1 Punkt pro 1€)', 'Kostenlose Partnerkarte', 'Höheres Limit als Standardkarten'],
    cons: ['Jahresgebühr von 144€', 'Bonitätsprüfung', 'Weniger Lounge-Zugang als Platinum'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
    imageUrl: 'https://www.kreditkarten-finder.de/images/cards/amex-gold.png',
  },
  'dkb-visa': {
    name: 'DKB Visa',
    pros: ['Keine Jahresgebühr', 'Als Aktivkunde (mind. 700 EUR Geldeingang/Monat) weltweit 0% Fremdwährungsgebühr', 'Kostenlose Bargeldabhebungen im Ausland (Visa-Akzeptanzstellen)', 'Reiseversicherungen über DKB-Konto', 'Sofortige Kontoeröffnung möglich'],
    cons: ['Ohne Aktivstatus 1,75% Fremdwährungsgebühr', 'Kein Lounge-Zugang', 'Limit an Bargeldabhebungen (400 EUR/Tag)'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    imageUrl: 'https://www.kreditkarten-finder.de/images/cards/dkb-visa.png',
  },
  'tf-bank-mastercard': {
    name: 'TF Bank Mastercard',
    pros: ['Keine Jahresgebühr', 'Kostenlose Bargeldabhebungen weltweit', 'Reiseversicherungen (Reiserücktritt, Gepäck)', 'Schnelle Beantragung', 'Keine Bonitätsprüfung'],
    cons: ['Fremdwährungsgebühren von 1,99%', 'Niedrigeres Limit (1.500€)', 'Keine Lounge-Vorteile'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
    imageUrl: 'https://www.kreditkarten-finder.de/images/cards/tf-bank-mastercard.png',
  },
};