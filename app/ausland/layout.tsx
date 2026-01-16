import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreditkarte für Auslandsreisen 2026 – Ohne Fremdwährungsgebühr",
  description: "Die besten Kreditkarten für Auslandsreisen im Vergleich: ohne Fremdwährungsgebühr, weltweit akzeptiert, mit Reiseversicherung. Visa & Mastercard für Ihre Reise.",
  keywords: ["Kreditkarte Ausland", "Auslandskreditkarte", "ohne Fremdwährungsgebühr", "Reisekreditkarte", "Visa Ausland", "Mastercard Ausland", "weltweite Akzeptanz"],
  alternates: {
    canonical: '/ausland',
  },
  openGraph: {
    title: "Kreditkarte für Auslandsreisen – Ohne Fremdwährungsgebühr",
    description: "Die besten Kreditkarten für Auslandsreisen: ohne Fremdwährungsgebühr, weltweit akzeptiert, mit Reiseversicherung.",
    url: '/ausland',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function AuslandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
