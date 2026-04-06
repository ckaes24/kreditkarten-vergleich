export interface SEOCreditCard {
  name: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
}

export const seoCreditCards: Record<string, SEOCreditCard> = {
  'amex-platinum': {
    name: 'American Express Platinum',
    pros: ['Keine Fremdwährungsgebühren weltweit', 'Umfangreiche Reiseversicherungen (Reiserücktritt, Gepäck, Auslandskrankenversicherung)', 'Priority Pass Lounge Zugang (weltweit über 1.300 Lounges)', 'Höhere Kreditlimits möglich (bis 10.000€)', 'Statusvorteile bei vielen Partnern'],
    cons: ['Hohe Jahresgebühr von 720€', 'Bonitätsprüfung erforderlich', 'Keine Partnerkarte möglich'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013832B',
  },
  'amex-gold': {
    name: 'American Express Gold',
    pros: ['Keine Fremdwährungsgebühren', 'Reiseversicherungen (Reiserücktritt, Gepäck)', 'Bonuspunkte bei jedem Einkauf (1 Punkt pro 1€)', 'Kostenlose Partnerkarte', 'Höheres Limit als Standardkarten'],
    cons: ['Jahresgebühr von 144€', 'Bonitätsprüfung', 'Weniger Lounge-Zugang als Platinum'],
    affiliateLink: 'https://www.financeads.net/tc.php?t=70334C14013149B',
  },
  'dkb-visa': {
    name: 'DKB Visa',
    pros: ['Keine Jahresgebühr', 'Kostenlose Bargeldabhebungen im Ausland (an DKB-Automaten)', 'Reiseversicherungen über DKB-Konto', 'Sofortige Kontoeröffnung möglich', 'Girokonto-Integration'],
    cons: ['Fremdwährungsgebühren von 1,75%', 'Kein Lounge-Zugang', 'Limit an Bargeldabhebungen (400€/Tag)'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369',
  },
  'tf-bank-mastercard': {
    name: 'TF Bank Mastercard',
    pros: ['Keine Jahresgebühr', 'Kostenlose Bargeldabhebungen weltweit', 'Reiseversicherungen (Reiserücktritt, Gepäck)', 'Schnelle Beantragung', 'Keine Bonitätsprüfung'],
    cons: ['Fremdwährungsgebühren von 1,99%', 'Niedrigeres Limit (1.500€)', 'Keine Lounge-Vorteile'],
    affiliateLink: 'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369', // placeholder
  },
};