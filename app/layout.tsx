import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kreditkarten Vergleich – die besten Karten für Reisen & Alltag",
  description:
    "Vergleiche die besten Kreditkarten für Reisen, Auslandseinsatzgebühren, Versicherungen und Loungezugang.",
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