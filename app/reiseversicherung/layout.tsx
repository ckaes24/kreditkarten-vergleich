import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreditkarte mit Reiseversicherung 2026 – Auslandskranken & Rücktritt",
  description: "Kreditkarten mit Reiseversicherung im Vergleich: Auslandskrankenversicherung, Reiserücktritt, Gepäckversicherung inklusive. Premium-Karten mit Versicherungsschutz.",
  keywords: ["Kreditkarte mit Reiseversicherung", "Auslandskrankenversicherung Kreditkarte", "Reiserücktrittsversicherung", "Gepäckversicherung", "Versicherung Kreditkarte"],
  alternates: {
    canonical: '/reiseversicherung',
  },
  openGraph: {
    title: "Kreditkarte mit Reiseversicherung – Auslandskranken & Rücktritt",
    description: "Kreditkarten mit Reiseversicherung: Auslandskrankenversicherung, Reiserücktritt, Gepäckversicherung inklusive.",
    url: '/reiseversicherung',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function ReiseversicherungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
