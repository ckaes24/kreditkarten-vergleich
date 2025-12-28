export type CreditCard = {
  cashWithdrawal: string
  id: string
  name: string
  issuer: string
  annualFee: number
  foreignFee: number
  travelInsurance: boolean
  loungeAccess: boolean
  creditCheck: boolean
  /** Gibt an, ob für die Karte ein neues Girokonto beim Aussteller nötig ist */
  requiresNewGiro: boolean
  acceptance?: string
  cardType: 'Debit' | 'Credit'
  network: 'Visa' | 'Mastercard' | 'American Express'
  applyUrl: string
  logo?: string
}

export const cards: CreditCard[] = [
  {
    id: 'amex-platinum',
    name: 'American Express Platinum',
    issuer: 'American Express',
    annualFee: 720,
    foreignFee: 0,
    travelInsurance: true,
    loungeAccess: true,
    creditCheck: true,
    requiresNewGiro: false,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'American Express',
    applyUrl: 'https://www.financeads.net/tc.php?t=70334C14013832B',
    logo: 'https://banner.bluesummit.de/American%20Express/DE/platin/300x190.png',
  },
  {
    id: 'amex-gold',
    name: 'American Express Gold',
    issuer: 'American Express',
    annualFee: 240,
    foreignFee: 2,
    travelInsurance: true,
    loungeAccess: false,
    creditCheck: true,
    requiresNewGiro: false,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'American Express',
    applyUrl: 'https://www.financeads.net/tc.php?t=70334C14013149B',
    logo: 'https://banner.bluesummit.de/American%20Express/DE/gold/gold_yellow/300x190.png',
  },
  {
    id: 'advanzia',
    name: 'Advanzia Gebührenfrei Mastercard',
    issuer: 'Advanzia',
    annualFee: 0,
    foreignFee: 0,
    travelInsurance: false,
    loungeAccess: false,
    creditCheck: false,
    requiresNewGiro: false,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'Mastercard',
    applyUrl: 'https://www.financeads.net/tc.php?t=70334C13814286T',
    logo: 'https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp',
  },
  {
    id: 'dkb',
    name: 'DKB Visa Debit',
    issuer: 'DKB',
    annualFee: 0,
    foreignFee: 0,
    travelInsurance: false,
    loungeAccess: false,
    creditCheck: true,
    requiresNewGiro: true,
    cardType: 'Debit',
    cashWithdrawal: 'Möglich',
    network: 'Visa',
    applyUrl:
      'https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369&linkid=3183493',
    logo: 'https://a.neqty.net/DKB/Karten/DKB_Visa_Debitkarte_landscape_500x315.png',
  },
  {
    id: 'tfbank',
    name: 'TF Bank Mastercard Gold',
    issuer: 'TF Bank',
    annualFee: 0,
    foreignFee: 0,
    travelInsurance: true,
    loungeAccess: false,
    creditCheck: true,
    requiresNewGiro: false,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'Mastercard',
    applyUrl: 'https://www.financeads.net/tc.php?t=70334C213342396T',
    logo: 'http://www.fndsda.net/b/tfbank/TFBank_MastercardGold_NeuesKartendesign_01.png',
  },
  {
    id: 'santander',
    name: 'Santander BestCard',
    issuer: 'Santander',
    annualFee: 0,
    foreignFee: 0,
    travelInsurance: false,
    loungeAccess: false,
    creditCheck: true,
    requiresNewGiro: false,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'Mastercard',
    applyUrl: 'https://www.financeads.net/tc.php?t=70334C19318404B',
    logo: 'https://www.santander.de/static/img/bestcard_basic_170x135.gif',
  },
  {
    id: 'c24-mastercard',
    name: 'C24 Mastercard',
    issuer: 'C24 Bank',
    annualFee: 0,
    foreignFee: 0,
    travelInsurance: false,
    loungeAccess: false,
    creditCheck: true,
    requiresNewGiro: true,
    cardType: 'Credit',
    cashWithdrawal: 'Möglich',
    network: 'Mastercard',
    applyUrl: 'https://a.check24.net/misc/click.php?pid=725718&aid=18&deep=c24bank&cat=14',
    logo: 'https://www.c24.de/assets/images/webp/mastercard/mastercard-header.webp',
  },
]