import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreditkarte für Kreuzfahrten 2026 – Bordkonto, Kaution & Fremdwährung",
  description: "Die besten Kreditkarten für Kreuzfahrten: für Bordkonto & Kaution, ohne Fremdwährungsgebühr, Visa & Mastercard weltweit akzeptiert. Vergleich 2026.",
  keywords: ["Kreditkarte Kreuzfahrt", "Bordkonto Kreditkarte", "Kreuzfahrt Zahlung", "Schiffsreise Kreditkarte", "Visa Kreuzfahrt", "Mastercard Kreuzfahrt"],
  alternates: {
    canonical: '/kreuzfahrten',
  },
  openGraph: {
    title: "Kreditkarte für Kreuzfahrten – Bordkonto & Kaution",
    description: "Die besten Kreditkarten für Kreuzfahrten: für Bordkonto & Kaution, ohne Fremdwährungsgebühr, weltweit akzeptiert.",
    url: '/kreuzfahrten',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function KreuzfahrtenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
