# Vor der Veröffentlichung von Alltagshilfe mit Bennet

Diese Website ist technisch fertig, enthält aber bewusst noch einige Platzhalter,
die vor dem Livegang durch echte Daten ersetzt werden müssen.

## 1. Impressum (`impressum.html`) und Datenschutz (`datenschutz.html`)
Erledigt: Bennet Wadehn, Breisgauer Str. 27, 14129 Berlin,
Telefon +49 151 29738724, E-Mail Bennet.wadehn@gmail.com (vorläufig – später
idealerweise auf eine Adresse mit eigener Domain wie kontakt@bennethilft.de umstellen),
Kleinunternehmer-Hinweis (§ 19 UStG), Hosting-Anbieter Vercel Inc. (Datenschutz,
Abschnitt 3).

## 2. WhatsApp
Erledigt – Header (alle Seiten + mobiles Menü) und die WhatsApp-Karte auf der
Kontaktseite verlinken bereits auf +49 151 29738724 mit vorausgefüllter Nachricht.

## 3. Foto auf „Über mich" und Startseite
Erledigt – `assets/bennet.jpg` ist eingebunden (Hero auf der Startseite und
„Über mich"). Bei Bedarf später gegen ein höher aufgelöstes Foto austauschen.

## 4. Formularversand (`kontakt.html`, `js/main.js`)
Erledigt – der Versand läuft automatisch über **FormSubmit**
(https://formsubmit.co, kostenlos, kein eigenes Server-Backend, **kein
API-Key nötig**). Die Ziel-Adresse steht direkt im Formular
(`data-formsubmit-email="Bennet.wadehn@gmail.com"` in `kontakt.html`).
Besucherinnen und Besucher müssen nach dem Absenden nichts weiter tun, die
E-Mail geht automatisch bei mir ein.

**Einmaliger Schritt beim allerersten echten Versand:** FormSubmit schickt bei
der ersten Anfrage an eine neue E-Mail-Adresse eine Bestätigungs-E-Mail an
Bennet.wadehn@gmail.com. Diese einmal bestätigen (Link anklicken) – danach
läuft jede weitere Anfrage vollautomatisch durch, ohne dass Besucher oder ich
noch etwas tun müssen. (Ein Testversand wurde bereits erfolgreich durchgeführt,
die Bestätigungs-E-Mail sollte also schon im Postfach liegen oder in Kürze
eintreffen.)

Falls die Zustellung später einmal umgestellt werden soll (z. B. eigenes
Server-Backend), einfach den fetch-Aufruf in `js/main.js` sowie
Abschnitt 4 der Datenschutzerklärung entsprechend anpassen.

## 5. Domain & Meta-Angaben
Alle `<link rel="canonical">`- und `og:`-Tags sowie `sitemap.xml`/`robots.txt`
verwenden bereits die Domain `bennethilft.de`. Beim Einrichten auf Vercel:
- Custom Domain `bennethilft.de` in den Vercel-Projekteinstellungen hinterlegen
  und die DNS-Einträge beim Domain-Anbieter entsprechend setzen
- Prüfen, ob `www.` oder ohne `www.` als Hauptversion genutzt wird, und die
  jeweils andere Variante in Vercel als Redirect einrichten
- Da diese Website aus reinen HTML/CSS/JS-Dateien ohne Build-Schritt besteht,
  reicht auf Vercel ein "Other"/statisches Projekt ohne Framework-Voreinstellung

## 6. Cookie-Hinweis
Die Website setzt aktuell keine Analyse- oder Marketing-Cookies ein. Der
Cookie-Hinweis unten auf jeder Seite informiert darüber und merkt sich per
Local Storage, dass er gesehen wurde (kein Tracking, keine Drittanbieter-Cookies).
Sollten später Analyse-Tools o. Ä. hinzukommen, muss dieser Hinweis zu einem
echten Consent-Banner (mit Ablehnen-Option) ausgebaut und Abschnitt 5 der
Datenschutzerklärung entsprechend erweitert werden.

## 7. Inhalte, die bewusst NICHT enthalten sind
- Keine erfundenen Kundenbewertungen, Zertifikate oder Referenzen
- Keine Behauptung professioneller Kinderbetreuung, Pflege oder medizinischer Leistungen

Diese Punkte sollten erst ergänzt werden, wenn echte, geprüfte Informationen vorliegen.
