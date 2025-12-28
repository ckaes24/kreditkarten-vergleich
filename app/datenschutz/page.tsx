export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <h1 className="text-3xl font-bold">
          Datenschutzerklärung
        </h1>

        <p>
          Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen.
          Personenbezogene Daten werden auf dieser Website nur im technisch
          notwendigen Umfang sowie gemäß den gesetzlichen Vorschriften
          verarbeitet.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Verantwortlicher
        </h2>
        <p>
          Chris Käsebier<br />
          Göckinghofstr. 50a<br />
          58332 Schwelm<br />
          E-Mail: mail@abenteuer-atlas.de
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Zugriffsdaten / Server-Logfiles
        </h2>
        <p>
          Beim Besuch dieser Website erhebt und speichert der Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles. Dazu gehören
          unter anderem Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse
          (gekürzt oder anonymisiert) und Uhrzeit der Serveranfrage.
        </p>

        <p>
          Diese Daten sind nicht bestimmten Personen zuordenbar und dienen
          ausschließlich der technischen Überwachung und Verbesserung des
          Angebots.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Cookies und Tracking
        </h2>
        <p>
          Diese Website verwendet notwendige Cookies, die für den Betrieb der
          Seite erforderlich sind. Zusätzlich nutzen wir optionale Cookies für
          Analysezwecke (Google Analytics) und ggf. Marketing. Diese werden nur
          gesetzt, wenn du im Cookie-Banner ausdrücklich zugestimmt hast.
        </p>

        <h3 className="text-lg font-medium mt-4">Cookie-Übersicht</h3>
        <div className="bg-white rounded-lg shadow p-4 space-y-3">
          <div className="border-b pb-2">
            <p className="font-semibold">cookie_consent</p>
            <p className="text-sm text-gray-600">
              <strong>Zweck:</strong> Speichert deine Cookie-Einwilligung (accepted/declined/partial)<br />
              <strong>Typ:</strong> Notwendig<br />
              <strong>Laufzeit:</strong> 365 Tage<br />
              <strong>Anbieter:</strong> Diese Website (First-Party)
            </p>
          </div>
          <div className="border-b pb-2">
            <p className="font-semibold">cookie_preferences</p>
            <p className="text-sm text-gray-600">
              <strong>Zweck:</strong> Speichert deine detaillierten Cookie-Präferenzen<br />
              <strong>Typ:</strong> Notwendig<br />
              <strong>Laufzeit:</strong> 365 Tage<br />
              <strong>Anbieter:</strong> Diese Website (First-Party)
            </p>
          </div>
          <div className="border-b pb-2">
            <p className="font-semibold">_ga, _ga_*, _gid</p>
            <p className="text-sm text-gray-600">
              <strong>Zweck:</strong> Google Analytics - Erfassung anonymisierter Nutzungsstatistiken<br />
              <strong>Typ:</strong> Analyse (optional, nur mit Einwilligung)<br />
              <strong>Laufzeit:</strong> _ga: 2 Jahre, _gid: 24 Stunden<br />
              <strong>Anbieter:</strong> Google Ireland Limited
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mt-4">Google Analytics (GA4)</h3>
        <p>
          Wir verwenden Google Analytics 4 (GA4) zur Analyse der Nutzung unserer
          Website. Die Verarbeitung basiert auf deiner Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO).
        </p>
        
        <p className="mt-3">
          <strong>Erhobene Daten:</strong> Anonymisierte IP-Adressen, Browsertyp, 
          Betriebssystem, Verweisende Website, Besuchte Seiten, Verweildauer, 
          Gerätetyp (Desktop/Mobile).
        </p>

        <p className="mt-3">
          <strong>IP-Anonymisierung:</strong> Die IP-Anonymisierung ist aktiviert 
          (anonymize_ip: true). Deine IP-Adresse wird von Google innerhalb von 
          Mitgliedstaaten der EU oder in anderen Vertragsstaaten des Abkommens über 
          den Europäischen Wirtschaftsraum gekürzt, bevor sie gespeichert wird.
        </p>

        <p className="mt-3">
          <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, 
          Dublin 4, Irland.<br />
          <strong>Datenschutz:</strong>{' '}
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>

        <p className="mt-3">
          <strong>Google Consent Mode v2:</strong> Wir nutzen Googles Consent Mode v2, 
          der sicherstellt, dass Google Analytics nur Daten verarbeitet, wenn du 
          zugestimmt hast. Vor deiner Einwilligung werden keine Tracking-Cookies 
          gesetzt und keine Daten an Google übermittelt.
        </p>

        <h3 className="text-lg font-medium mt-4">Drittland-Transfer (USA)</h3>
        <p>
          Google kann deine Daten in den USA verarbeiten. Die USA sind kein sicheres 
          Drittland nach DSGVO. Google Ireland Limited hat sich jedoch zu den 
          EU-Standardvertragsklauseln verpflichtet und bietet zusätzliche Garantien 
          zum Datenschutz. Weitere Informationen findest du in Googles 
          Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-medium mt-4">Browser-Plugin zum Deaktivieren von Google Analytics</h3>
        <p>
          Du kannst die Erfassung durch Google Analytics verhindern, indem du ein 
          Browser-Add-on installierst:{' '}
          <a 
            href="https://tools.google.com/dlpage/gaoptout" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Analytics Opt-out Browser-Add-on
          </a>
        </p>

        <h3 className="text-lg font-medium mt-4">Widerruf und Cookie-Einstellungen</h3>
        <p>
          Du kannst deine Einwilligung jederzeit widerrufen:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Über die <strong>Cookie-Einstellungen im Footer</strong> dieser Website</li>
          <li>Durch Löschen der Cookies in deinen Browser-Einstellungen</li>
          <li>Per E-Mail an: mail@abenteuer-atlas.de</li>
        </ul>
        <p className="mt-3">
          Ein Widerruf wirkt für die Zukunft. Bereits verarbeitete Daten können 
          nachträglich nicht vollständig gelöscht werden. Bei Fragen hierzu 
          kontaktiere uns gerne per E-Mail.
        </p>

        <h3 className="text-lg font-medium mt-4">Browser-Cookie-Einstellungen</h3>
        <p>
          Du kannst deinen Browser so einstellen, dass du über das Setzen von 
          Cookies informiert wirst und Cookies nur im Einzelfall erlaubst, die 
          Annahme von Cookies für bestimmte Fälle oder generell ausschließt sowie 
          das automatische Löschen der Cookies beim Schließen des Browsers aktivierst.
        </p>

        <h3 className="text-lg font-medium mt-4">Rechtsgrundlage</h3>
        <p>
          <strong>Notwendige Cookies:</strong> Berechtigtes Interesse zur Bereitstellung 
          der Website (Art. 6 Abs. 1 lit. f DSGVO).<br />
          <strong>Optionale Analyse- und Marketing-Cookies:</strong> Einwilligung 
          (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Affiliate-Links und Partnerprogramme
        </h2>
        <p>
          Auf dieser Website befinden sich sogenannte Affiliate-Links zu 
          Kreditkartenanbietern und Finanzdienstleistern. Wenn du über einen 
          solchen Link ein Produkt oder eine Dienstleistung abschließt, erhalten 
          wir ggf. eine Provision vom Anbieter. Für dich entstehen dadurch keine 
          zusätzlichen Kosten.
        </p>

        <p className="mt-3">
          Die Weiterleitung erfolgt über die jeweiligen Partnerprogramme. Dabei
          können Cookies gesetzt oder Tracking-Parameter (z.B. in der URL) verwendet 
          werden, um die Herkunft der Vermittlung korrekt zuzuordnen. Diese 
          Tracking-Mechanismen unterliegen den Datenschutzbestimmungen der 
          jeweiligen Partner.
        </p>

        <p className="mt-3">
          <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an der Finanzierung 
          der Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Deine Rechte (DSGVO)
        </h2>
        <p>
          Du hast nach der Datenschutz-Grundverordnung folgende Rechte:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Du kannst 
            Auskunft über deine gespeicherten personenbezogenen Daten verlangen.
          </li>
          <li>
            <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Du kannst 
            die Berichtigung unrichtiger Daten verlangen.
          </li>
          <li>
            <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Du kannst die 
            Löschung deiner personenbezogenen Daten verlangen, sofern keine 
            gesetzlichen Aufbewahrungspflichten bestehen.
          </li>
          <li>
            <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Du kannst 
            die Einschränkung der Verarbeitung deiner Daten verlangen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du 
            kannst deine Daten in einem strukturierten, gängigen Format erhalten.
          </li>
          <li>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Du kannst der 
            Verarbeitung deiner Daten widersprechen, sofern diese auf Grundlage 
            eines berechtigten Interesses erfolgt.
          </li>
          <li>
            <strong>Beschwerderecht:</strong> Du hast das Recht, dich bei einer 
            Datenschutz-Aufsichtsbehörde zu beschweren.
          </li>
        </ul>
        <p className="mt-3">
          Zur Ausübung deiner Rechte wende dich bitte an: mail@abenteuer-atlas.de
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Widerruf deiner Einwilligung
        </h2>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen
          Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Speicherdauer
        </h2>
        <p>
          Wir speichern deine personenbezogenen Daten nur so lange, wie es für 
          die jeweiligen Zwecke erforderlich ist oder gesetzliche 
          Aufbewahrungsfristen bestehen.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Cookie-Einstellungen: 365 Tage</li>
          <li>Google Analytics-Daten: Bis zu 26 Monate (Google-Standard)</li>
          <li>Server-Logfiles: 7 Tage</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          SSL/TLS-Verschlüsselung
        </h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der 
          Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. 
          Eine verschlüsselte Verbindung erkennst du an der &quot;https://&quot; 
          im Browser und am Schloss-Symbol in der Adresszeile.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Aktualität und Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: 
          <strong> 28. Dezember 2025</strong>.
        </p>
        <p className="mt-3">
          Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
          gesetzlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung 
          erforderlich werden. Wir empfehlen dir, diese Seite regelmäßig zu 
          besuchen, um über Änderungen informiert zu bleiben.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
          <p className="text-sm">
            <strong>💡 Hinweis:</strong> Bei Fragen zum Datenschutz oder zur 
            Ausübung deiner Rechte kannst du uns jederzeit unter 
            mail@abenteuer-atlas.de kontaktieren.
          </p>
        </div>
      </div>
    </main>
  );
}