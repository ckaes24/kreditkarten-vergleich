import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreditkarte ohne Fremdwährungsgebühr 2026 – 0% Auslandseinsatzgebühr",
  description: "Kreditkarten ohne Fremdwährungsgebühr im Vergleich: 0% Auslandseinsatzgebühr beim Bezahlen im Ausland & Online-Shopping. Kostenlos im Ausland zahlen.",
  keywords: ["Kreditkarte ohne Fremdwährungsgebühr", "ohne Auslandseinsatzgebühr", "0 Prozent Auslandsgebühr", "kostenlos im Ausland zahlen", "Fremdwährung kostenlos"],
  alternates: {
    canonical: '/ohne-fremdwaehrungsgebuehr',
  },
  openGraph: {
    title: "Kreditkarte ohne Fremdwährungsgebühr – 0% Auslandseinsatzgebühr",
    description: "Kreditkarten ohne Fremdwährungsgebühr: 0% beim Bezahlen im Ausland & Online-Shopping. Vergleich 2026.",
    url: '/ohne-fremdwaehrungsgebuehr',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function OhneFremdwaehrungsgebuehrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
