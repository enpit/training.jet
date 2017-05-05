# enpit.training.jet

Materialien für den [DOAG 2016 Schulungstag "Durchstarten mit Oracle JET" am 18.11.2016](http://2016.doag.org/de/programm/schulungstag/#tab-9929-1).

## Beispielanwendung

Die Hands-On Sessions orientieren sich an unserer Beispielanwendung [Spotify-Explorer](https://github.com/enpit/jet-spotify-explorer/) ([hier ausprobieren](https://enpit.github.io/jet-spotify-explorer/web)).

## Systemvoraussetzung
- Notebook mit MacOS, Windows oder Linux
- WLAN
- 8GB Arbeitsspeicher oder höher
- Ausreichend freien Festplattenplatz (Schulungsunterlagen inkl. aller node.js Module etc. brauchen ca. 1,1 GB)

## Vorbereitung vor dem Workshop

1. [Git](https://git-scm.com/) installieren bzw. [Git Bash](https://git-for-windows.github.io/) für Windows-User
2. [node.js](https://nodejs.org/en/) Version 4 oder 6 installieren
3. Grunt CLI und Bower per Kommandozeile installieren: `npm install --global grunt-cli bower`
4. [Chrome Browser](https://www.google.de/chrome/browser/desktop) (aktuelle Version) installieren
5. Als IDE empfehlen wir [NetBeans](https://netbeans.org/index.html) (HTML5/JavaScript Edition) oder [Visual Studio Code](http://code.visualstudio.com/) in der jeweils aktuellen Version.
6. Dieses Repository herunterladen (ZIP-Datei per Webinterface herunterladen & entpacken, oder `git clone https://github.com/enpit/training.jet` ausführen)
7. Per Kommandozeile **im jedem Ordner in `exercises`** die benötigten Module installieren:
``` cmd
$ cd exercises/1_hello-world/ && npm install
$ cd ../2_modularisierung/ && npm install
$ cd ../3_charts/ && npm install
$ cd ../4_forms/ && npm install
```

## Installation überprüfen

Folgende Befehle müssen funktionieren:

``` cmd
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
