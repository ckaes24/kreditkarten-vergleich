import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kreditkarten Vergleich 2026 – Die besten Kreditkarten für Reisen & Alltag",
    template: "%s | Kreditkarten Vergleich"
  },
  description:
    "Vergleichen Sie die besten Kreditkarten für Reisen: ohne Jahresgebühr, ohne Auslandseinsatzgebühr, mit Versicherung & Loungezugang. Unabhängiger Vergleich 2026.",
  keywords: [
    "Kreditkarten Vergleich",
    "beste Kreditkarte",
    "Reisekreditkarte",
    "kostenlose Kreditkarte",
    "ohne Jahresgebühr",
    "ohne Auslandseinsatzgebühr",
    "Kreditkarte mit Versicherung",
    "Visa",
    "Mastercard"
  ],
  authors: [{ name: "Kreditkarten Vergleich" }],
  creator: "Kreditkarten Vergleich",
  publisher: "Kreditkarten Vergleich",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kreditkarten-vergleich.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kreditkarten Vergleich 2026 – Die besten Kreditkarten für Reisen",
    description: "Vergleichen Sie die besten Kreditkarten für Reisen: ohne Jahresgebühr, ohne Auslandseinsatzgebühr, mit Versicherung & Loungezugang.",
    url: 'https://kreditkarten-vergleich.de',
    siteName: 'Kreditkarten Vergleich',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 flex flex-col min-h-screen`}
      >
        <StructuredData />
        <GoogleAnalytics />
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}