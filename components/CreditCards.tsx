"use client";

import { useState } from "react";
// using plain <img> for remote logos to avoid next/image remote config issues

type Card = {
  name: string;
  provider: string;
  fee: number;
  travel: boolean;
  lounge: boolean;
  link: string;
  logo?: string;
  why: string;
};

const cards: Card[] = [
  {
    name: "DKB Visa",
    provider: "DKB",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://www.awin1.com/awclick.php?gid=441465&mid=11329&awinaffid=1689369",
    logo: "https://a.neqty.net/DKB/Karten/DKB_Visa_Debitkarte_landscape_500x315.png",
    why: "Kostenlose Visa ohne Jahresgebühr. Sehr gut für Reisen und Alltag.",
  },
  {
    name: "American Express Gold",
    provider: "American Express",
    fee: 144,
    travel: true,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C14013149B",
    logo: "https://banner.bluesummit.de/American%20Express/DE/gold/gold_yellow/300x190.png",
    why: "Starke Reiseversicherungen, Bonuspunkte und guter Service.",
  },
  {
    name: "American Express Platinum",
    provider: "American Express",
    fee: 720,
    travel: true,
    lounge: true,
    link: "https://www.financeads.net/tc.php?t=70334C14013832B",
    logo: "https://banner.bluesummit.de/American%20Express/DE/platin/300x190.png",
    why: "Premium-Reisekarte mit Lounge-Zugang und Statusvorteilen.",
  },
  {
    name: "TF Bank Mastercard",
    provider: "TF Bank",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C213344020T",
    logo: "http://www.fndsda.net/b/tfbank/TFBank_MastercardGold_NeuesKartendesign_01.png",
    why: "Kostenlose Kreditkarte ohne Auslandseinsatzgebühren.",
  },
  {
    name: "Gebührenfrei Mastercard",
    provider: "Advanzia",
    fee: 0,
    travel: false,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C13814286T",
    logo: "https://xn--gebhrenfrei-vhb.de/assets/common/images/card-DEU-B2C.webp",
    why: "Einfache Kreditkarte ohne Jahresgebühr, ideal für Einsteiger.",
  },
  {
    name: "Santander BestCard",
    provider: "Santander",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C19318404B",
    logo: "https://www.santander.de/static/img/bestcard_basic_170x135.gif",
    why: "Solide Allround-Kreditkarte, kostenlos und weit akzeptiert.",
  },
  // --- NEU: bunq ---
  {
    name: "bunq Kreditkarte (Free & Paid)",
    provider: "bunq",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C3156123233T",
    logo: "https://framerusercontent.com/images/JRNpintM7rUmKKgvo3VAzyB0rg.png?width=1152&height=1152",
    why: "Innovative Debit Mastercard, sowohl als kostenlose als auch als Premium-Version erhältlich. Sehr gute Akzeptanz und App, keine Auslandseinsatzgebühr.",
  },
  // --- NEU: Bank Norwegian ---
  {
    name: "Bank Norwegian Visa",
    provider: "Bank Norwegian",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://www.financeads.net/tc.php?t=70334C438298174T",
    logo: "https://res.cloudinary.com/banknorwegian/image/upload/dpr_auto/v1/prod-10/media/a3ckjxmu/bank-norwegian-card-art-de-1536x969-chip-radius-corners-horizontal.png",
    why: "Kostenlose Visa-Kreditkarte mit Reiseversicherung, keine Auslandseinsatzgebühr, weltweit einsetzbar.",
  },
  // --- NEU: N26 (nur Empfehlung, kein Affiliate) ---
  {
    name: "N26 Mastercard (Empfehlung)",
    provider: "N26",
    fee: 0,
    travel: true,
    lounge: false,
    link: "https://n26.com/r/chrisk4848?cid=0JY&lang=de",
    logo: "https://images.ctfassets.net/q33z48p65a6w/6mRcFZaMyr1Kg8MUkGQkLo/e149ce5908cd6a8e2cdf3976b4226244/2310_Web-asset_Mastercard.png",
    why: "Empfehlung: Moderne App, sehr gute Akzeptanz, keine Auslandseinsatzgebühr. Hinweis: Kein echter Affiliate-Link, sondern persönliche Empfehlung.",
  },
];

export default function CreditCards() {
  const [provider, setProvider] = useState("Alle");
  const [travel, setTravel] = useState("Alle");
  const [lounge, setLounge] = useState("Alle");
  const [fee, setFee] = useState("Alle");
  const [logoLoaded, setLogoLoaded] = useState<Record<string, boolean>>({});

  const filtered = cards.filter((c) => {
    if (provider !== "Alle" && c.provider !== provider) return false;
    if (travel === "Ja" && !c.travel) return false;
    if (lounge === "Ja" && !c.lounge) return false;
    if (fee === "0 €" && c.fee !== 0) return false;
    return true;
  });

  return (
    <>
      {/* FILTER */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow grid gap-4 md:grid-cols-4 text-sm">
        <div>
          💳 Anbieter
          <select
            className="w-full mt-1 border rounded p-1"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option>Alle</option>
            <option>DKB</option>
            <option>American Express</option>
            <option>Santander</option>
            <option>TF Bank</option>
            <option>Advanzia</option>
            <option>Bank Norwegian</option>
            <option>bunq</option>
            <option>N26</option>
          </select>
        </div>

        <div>
          ✈️ Reisen geeignet
          <select
            className="w-full mt-1 border rounded p-1"
            value={travel}
            onChange={(e) => setTravel(e.target.value)}
          >
            <option>Alle</option>
            <option>Ja</option>
          </select>
        </div>

        <div>
          🛋️ Lounge-Zugang
          <select
            className="w-full mt-1 border rounded p-1"
            value={lounge}
            onChange={(e) => setLounge(e.target.value)}
          >
            <option>Alle</option>
            <option>Ja</option>
          </select>
        </div>

        <div>
          💶 Jahresgebühr
          <select
            className="w-full mt-1 border rounded p-1"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          >
            <option>Alle</option>
            <option>0 €</option>
          </select>
        </div>
      </div>

      {/* KARTEN */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((c) => (
          <div key={c.name} className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">{c.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{c.provider}</p>

            {c.logo && (
              <div className="mb-3">
                <img
                  src={c.logo}
                  alt={c.provider + " Kartenbild"}
                  className={
                    c.provider === "Santander"
                      ? "block h-24 sm:h-28 md:h-32 lg:h-36 object-contain rounded-md max-w-[380px]"
                      : "block h-20 sm:h-24 md:h-28 lg:h-32 object-contain rounded-md max-w-[320px]"
                  }
                  style={{ display: "block" }}
                  onLoad={() => setLogoLoaded((s) => ({ ...s, [c.name]: true }))}
                  onError={(e) => {
                    setLogoLoaded((s) => ({ ...s, [c.name]: false }));
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />

                {/* Hinweis nur anzeigen, wenn das Logo NICHT geladen wurde */}
                {!logoLoaded[c.name] && (
                  <div className="mt-2 text-sm">
                    <span className="text-red-600">Logo konnte nicht geladen werden</span>
                  </div>
                )}
              </div>
            )}

            <ul className="text-sm mb-3">
              <li>💶 {c.fee === 0 ? "0 € Jahresgebühr" : c.fee + " € Jahresgebühr"}</li>
              <li>🛡️ Reiseversicherung: {c.why.toLowerCase().includes('versicherung') ? "Ja" : "Nein"}</li>
              <li>🛋️ Lounge: {c.lounge ? "Ja" : "Nein"}</li>
            </ul>

            <details className="mb-3">
              <summary className="cursor-pointer font-medium">
                Warum diese Karte?
              </summary>
              <p className="mt-2 text-sm text-gray-700">{c.why}</p>
            </details>

            <a
              href={c.link}
              target="_blank"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm"
            >
              Jetzt beantragen
            </a>
          </div>
        ))}
      </div>

      {/* VERGLEICHSTABELLE */}
      <div className="overflow-x-auto mt-10">
        <table className="w-full bg-white rounded-xl shadow text-sm text-gray-900">
          <thead className="bg-slate-100 text-gray-900">
            <tr>
              <th className="p-3 text-left font-semibold">Karte</th>
              <th className="font-semibold pl-2">Gebühr</th>
              <th className="font-semibold pl-2">Versicherung</th>
              <th className="font-semibold pl-2">Lounge</th>
              <th className="font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {cards.map((c) => (
              <tr key={c.name} className="border-t border-gray-200">
                <td className="p-3 font-medium flex items-center gap-2">
                  {c.logo && (
                    <img
                      src={c.logo}
                      alt={c.provider + " Kartenbild"}
                      className="inline-block h-7 w-12 object-contain rounded mr-2 bg-white border"
                      style={{ minWidth: 48 }}
                      loading="lazy"
                    />
                  )}
                  {c.name}
                </td>
                <td className="text-gray-900">{c.fee === 0 ? "0 € p.a." : c.fee + " € p.a."}</td>
                <td className="text-gray-900">{c.why.toLowerCase().includes('versicherung') ? "Ja" : "Nein"}</td>
                <td className="text-gray-900">{c.lounge ? "Ja" : "Nein"}</td>
                <td>
                  <a
                    href={c.link}
                    target="_blank"
                    className="text-blue-700 underline font-medium"
                  >
                    Beantragen
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}