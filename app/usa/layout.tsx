import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreditkarte für USA-Reisen 2026 – Credit Card für Mietwagen & Hotels",
  description: "Die beste Kreditkarte für USA-Reisen: echte Credit Card für Mietwagen, Hotels & Kautionen. Visa & Mastercard ohne Fremdwährungsgebühr. Vergleich 2026.",
  keywords: ["Kreditkarte USA", "USA Reise Kreditkarte", "Credit Card USA", "Mietwagen USA Kreditkarte", "Hotel Kaution USA", "Visa USA", "Mastercard USA"],
  alternates: {
    canonical: '/usa',
  },
  openGraph: {
    title: "Kreditkarte für USA-Reisen – Credit Card für Mietwagen & Hotels",
    description: "Die beste Kreditkarte für USA-Reisen: echte Credit Card für Mietwagen, Hotels & Kautionen. Vergleich 2026.",
    url: '/usa',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function USALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
