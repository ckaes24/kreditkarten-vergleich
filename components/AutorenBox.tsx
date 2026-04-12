import React from "react";


const AutorenBox: React.FC = () => (
  <section className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-2xl p-8 mb-12 mt-8">
    <div className="flex flex-col items-center gap-6">
      <p className="text-blue-900 leading-relaxed text-base md:text-lg">
        <strong>Unabhängige Redaktion</strong><br />
        Alle Empfehlungen und Vergleiche basieren auf echten Erfahrungen und sorgfältiger Recherche. Unser Ziel: Die beste Kreditkarte für deine Reise – transparent, unabhängig und aktuell. Mehr auf <a href="https://www.abenteuer-atlas.de" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">www.abenteuer-atlas.de</a>.
      </p>
    </div>
  </section>
);

export default AutorenBox;
