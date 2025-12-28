export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        {/* Affiliate-Hinweis (links) */}
        <p className="text-xs text-gray-500 sm:text-left text-center max-w-prose">
          * Mit Sternchen gekennzeichnete Links sind Affiliate-Links. Wenn du über einen solchen Link einen Vertrag abschließt, erhalten wir ggf. eine Provision. Für dich entstehen keine zusätzlichen Kosten.
        </p>

        {/* Rechtliche Links (rechts) */}
        <nav className="flex gap-4 justify-center sm:justify-end">
          <a href="/impressum" className="hover:text-gray-900 hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-gray-900 hover:underline">
            Datenschutz
          </a>
        </nav>

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