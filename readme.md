# Sicherheit in Single-Page-Web-Applications

Dieses Repository enthält die Präsentation zu meinem Vortrag *Sicherheit in Single-Page-Web-Applications*. Ein PDF-Export ist unter [etc/export](https://github.com/pburgmer/angularjs-presentation-security/tree/master/etc/export) zu finden.

## Zusammenfassung

Sicherheit von Web-Anwendungen ist ein heißes Thema. Obwohl seit Jahren aktuell, werden die Meldungen über erneute Lücken gefühlt eher schlimmer als besser. Der Trend zu Single-Page-Anwendungen bringt für uns Entwickler eine ganze Reihe neuer Herausforderungen in punkto Sicherheit mit sich, da immer mehr Funktionalität in den Browser verlagert wird und dadurch mehr Code in nicht vertrauenswürdiger Umgebung läuft.

In diesem Talk wir anhand von AngularJS gezeigt auf was man bei SPAs achten muss. Anhand von Code-Beispielen wird natürlich auch gezeigt wie man sich z.B. vor Cross-Site-Scripting, Cross-Site-Request-Forgery und Code-Injection schützt und welche Gefahren sonst noch so lauern.


## Kurz-Bio

Philipp Burgmer studierte an der Hochschule Karlsruhe Informatik und arbeitet als Entwickler, Berater und [Trainer](http://thecodecampus.de) für die [w11k GmbH](http://w11k.de). Er ist Experte für Webtechnologien und beschäftigt sich mit der Gestaltung und Optimierung von Benutzeroberflächen. Privat interessiert er sich für Klettern und DJing.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```