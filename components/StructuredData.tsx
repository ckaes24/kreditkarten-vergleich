export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kreditkarten Vergleich",
    "description": "Vergleichen Sie die besten Kreditkarten für Reisen: ohne Jahresgebühr, ohne Auslandseinsatzgebühr, mit Versicherung & Loungezugang.",
    "url": "https://kreditkarten-vergleich.de",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kreditkarten-vergleich.de/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kreditkarten Vergleich"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Kreditkarte ist die beste für Reisen 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die beste Reisekreditkarte hängt von Ihren individuellen Bedürfnissen ab. Wichtige Kriterien sind: keine Fremdwährungsgebühren, weltweite Akzeptanz (Visa oder Mastercard), optionale Reiseversicherungen, kostenlose Bargeldabhebungen im Ausland und ggf. Loungezugang."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Credit Card und Debit Card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Credit Cards bieten einen Kreditrahmen und werden monatlich abgerechnet, während Debit Cards direkt vom Girokonto abbuchen. Für Mietwagen und Hotels im Ausland sind Credit Cards oft erforderlich."
        }
      },
      {
        "@type": "Question",
        "name": "Sind kostenlose Kreditkarten wirklich komplett gebührenfrei?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Karten ohne Jahresgebühr sind im Grundpreis kostenlos. Zusätzliche Kosten können aber für Bargeldabhebungen, Fremdwährungstransaktionen oder Zusatzleistungen anfallen."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
