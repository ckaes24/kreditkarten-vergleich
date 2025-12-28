export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <p className="mb-4">
          Chris Käsebier<br />
          Göckinghofstr. 50a<br />
          58332 Schwelm
        </p>

        <p className="mb-4">
          <strong>Kontakt</strong><br />
          Telefon: +49 176 95285377<br />
          E-Mail: mail@abenteuer-atlas.de
        </p>

        <p className="mb-4">
          <strong>Umsatzsteuer-ID</strong><br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE366995507
        </p>
      </div>
    </main>
  );
}