import CookieSettings from './CookieSettings'

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        <div>
          <h3 className="text-sm font-bold text-gray-800 mb-3">Kreditkarten nach Reiseziel</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <a href="/kreditkarte-usa-ohne-gebuehren" className="hover:text-gray-900 hover:underline">USA</a>
            <a href="/kreditkarte-thailand-abheben-kostenlos" className="hover:text-gray-900 hover:underline">Thailand</a>
            <a href="/kreditkarte-bali-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Bali</a>
            <a href="/kreditkarte-mexiko-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Mexiko</a>
            <a href="/kreditkarte-dubai-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Dubai</a>
            <a href="/kreditkarte-vietnam-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Vietnam</a>
            <a href="/kreditkarte-japan-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Japan</a>
            <a href="/kreditkarte-island-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Island</a>
            <a href="/kreditkarte-marokko-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Marokko</a>
            <a href="/kreditkarte-norwegen-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Norwegen</a>
            <a href="/kreditkarte-suedafrika-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Südafrika</a>
            <a href="/kreditkarte-kanada-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Kanada</a>
            <a href="/kreditkarte-australien-ohne-gebuehren" className="hover:text-gray-900 hover:underline">Australien</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        {/* Affiliate-Hinweis (links) */}
        <p className="text-xs text-gray-500 sm:text-left text-center max-w-prose">
          * Mit Sternchen gekennzeichnete Links sind Affiliate-Links. Wenn du über einen solchen Link einen Vertrag abschließst, erhalten wir ggf. eine Provision. Für dich entstehen keine zusätzlichen Kosten.
        </p>

        {/* Rechtliche Links (rechts) */}
        <nav className="flex flex-wrap gap-4 justify-center sm:justify-end items-center">
          <a href="/impressum" className="hover:text-gray-900 hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-gray-900 hover:underline">
            Datenschutz
          </a>
          <CookieSettings />
        </nav>

        </div>
      </div>

      {/* Subtiles Branding: kleine Ecke rechts unten */}
      <div className="absolute bottom-3 right-4 flex items-center text-xs text-gray-500 opacity-80 pointer-events-none space-x-2">
        <span className="text-[11px]">Unabhängiger Vergleich - powered by</span>
        <img
          src="/partner-logo.png"
          alt="Partnerlogo"
          className="h-5 ml-1 w-auto filter saturate-90 opacity-95"
        />
      </div>

    </footer>
  );
}