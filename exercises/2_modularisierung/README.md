# Hands-On Session 2

In dieser zweiten Hands-On Session wird am Beispiel der [Spotify-Explorer](https://github.com/enpit/jet-spotify-explorer/) App eine teilweise bestehende Anwendung modularisiert.
Die Aufgaben behandeln die Themen Modularisierung (Module einbinden und erstellen, Kommunikation zwischen ViewModels) und Routing (Konfiguration, Navigation).

## Vorbereitung

Um diese Übung durchführen zu können müssen (am besten bereits vor der Schulung) einmalig im heruntergeladenen Repository folgende Kommandos ausgeführt werden:

``` cmd
$ cd exercises/2_modularisierung
$ npm install
```

## Lernziel

Die Schulungsteilnehmer sollen nach Abschluss dieser Session in der Lage sein, die wesentlichen Modularisierungskonzepte in einer Oracle JET Anwendung zu benutzen.

## Aufgaben

> Es ist zu empfehlen, als erstes die Anwendung zu starten (`Run` Kommando in NetBeans / `grunt serve` im Terminal) und das Browserfenster während der Entwicklung offen zu lassen.
> So kann während der Entwicklung stetig der eigene Fortschritt überprüft werden.
> Hinweis: Die Dateien `header.js` und `header.html` müssen nicht angepasst werden.

### Teil 1: Router Konfiguration (`main.js`)

Wenn die Anwendung gestartet wird, erscheint zunächst lediglich eine leere weiße Box; der bereits imlementierte Header kann nicht geladen werden da die Instanziierung des ViewModels in `main.js` noch fehlschlägt.
Zunächst muss also in `src/js/main.js` das ViewModel korrekt erstellt werden und außerdem die bereits existierende statische `ojRouter` Instanz für unsere Zwecke konfiguriert werden.
Als Vorbereitung sollte das [Simple-Router-Beispiel](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=router&demo=simple) aus dem Cookbook angeschaut werden.
Die auszuführenden Schritte sind dann wie folgt:

  1. Importiere das fehlende `ojs/ojrouter` Modul
  2. Konfiguriere den `ojRouter` für diese Anwendung
  3. Erstelle ein ViewModel das den Router referenziert
  4. Synchronisiere den `ko.applyBindings` Aufruf mit der Initialisierung des Routers

Zwischenergebnis: Die Instanziierung des ViewModels ist erfolgreich, sodass der Header korrekt geladen werden kann (das enpit-Logo und der Schriftzug "JET Spotify Explorer" erscheinen).

### Teil 2: Anzeigen der aktuellen View-Komponente

Es wird weiterhin lediglich eine leere weiße Box angezeigt, da in `src/index.html` der aktuelle Status des Routers für die Anzeige der entsprechenden View benötigt wird.

  1. Konfiguriere in `index.html` ein Data-Binding zur aktuellen ID des Routers

Zwischenergebnis: Das div-Element in der `index.html` zeigt die View an, die im Router gerade aktiv ist.
In unserem Fall ist das die Suchansicht.

### Teil 3: Implementierung der Suche

Die Suche funktioniert allerdings noch nicht.
Hierfür müssen in `src/js/viewModels/search.js` und `src/js/view/search.html` einige Anpassungen vorgenommen werden:

  1. Importiere die fehlenden Module (`search.js`)
  2. Mache das `spotify`-Modul im Body des `search`-Moduls bekannt (`search.js`)
  3. Erweitere den Click-Handler, sodass die `selectArtist`-Funktion des ViewModels aufgerufen wird (`search.html`)
  4. Stoße in der `selectArtist`-Funktion die Navigation des Routers zur `artist` View an (`search.js`)

Zwischenergebnis: Die Suche funktioniert, es kann nach Interpreten gesucht werden, deren Namen dann in einer Liste angezeigt und als Buttons gerendert werden.
Ein Klick auf einen der Buttons navigiert den Benutzer zur `artist` View, die allerdings noch leer ist.

### Teil 4 (Bonus): Erstellung des `artist` Moduls

> Dies ist eine Bonus-Aufgabe für Teilnehmer, die vor Ablauf der Zeit bereits mit den vorigen Aufgaben fertig geworden sind oder nach der Schulung ihre Kenntnisse noch vertiefen wollen.

Für die Anzeige des bei der Suche ausgewählten Interpteten muss ein komplettes neues Modul aufgezogen werden:

  1. Zeige den Namen des Interpreten an (`artist.html`)
  2. Definiere ein neues requirejs-Modul, das das ViewModel für die `artist`-View bereitstellt (`artist.js`)
    - hier sind viele der vorigen Schritte noch einmal wiederzufinden, z.B. Importieren von Modulen, Erstellung von ViewModels, Erstellung von Observables
  3. Das `artist` Observable muss mithilfe von knockout-postbox mit dem im search-Modul gewählten Wert synchronisiert werden (`artist.js`)
  4. Du kannst zusätzlich das Bild des interepreten anzeigen (`artist.html`)

Zwischenergebnis: Der Name und das Bild des zuvor ausgewählten Interpreten werden in der `artist`-View angezeigt.

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [ojRouter](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=router&demo=simple)
- [requirejs](http://requirejs.org/)
- [knockout](http://knockoutjs.com/documentation/introduction.html)
- [knockout-postbox](https://github.com/rniemeyer/knockout-postbox)
- [Spotify Web API](https://developer.spotify.com/web-api/console/)

## Lösung

Die Lösung wird gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` sowie als [Live-Demo auf Github](https://enpit.github.io/jet-spotify-explorer/web/) zu finden.
