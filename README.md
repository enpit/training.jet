# enpit.training.jet (im Aufbau)
Materialien für den DOAG 2016 Schulungstag "Durchstarten mit Oracle JET"

## Systemvoraussetzung
- Notebook mit MacOS, Windows oder Linux
- WLAN
- 8GB Arbeitsspeicher oder höher
- Ausreichend freien Festplattenplatz

## Vorbereitung vor dem Workshop
1. [Git](https://git-scm.com/) installieren bzw. [Git Bash](https://git-for-windows.github.io/) für Windows-User
2. [node.js](https://nodejs.org/en/) Version 4 installieren
3. Grunt CLI und Bower per Kommandozeile installieren: `npm i -g grunt-cli bower`
4. [Chrome Browser]((https://www.google.de/chrome/browser/desktop)) (aktuelle Version) installieren 
5. Als IDE empfehlen wir [NetBeans](https://netbeans.org/index.html) (HTML5/JavaScript Edition, Version 8.2) oder [Visual Studio Code](http://code.visualstudio.com/) 1.6.
6. Dieses Repository herunterladen (ZIP-Datei per Webinterface herunterladen oder `git clone https://github.com/enpit/training.jet` ausführen)
7. Per Kommandozeile im Root-Verzeichnis dieses Projektes die benötigten Module installieren: `npm install`

## Installation überprüfen
Folgende Befehle müssen funktionieren:
```
$ git --version
git version 2.8.4 (oder höher)
$ node -v 
v4.4.5 (oder höher)
$ npm -v
2.15.5 (oder höher)
```

## Die Anwendung starten
In der Kommandozeile in das Root-Verzeichnis dieses Projektes navigieren
1. `grunt build` ausführen
2. `grunt serve` ausführen - ein Browserfenster öffnet sich und lädt die Anwendung, bei Änderungen aktualisiert die Seite sich automatisch
