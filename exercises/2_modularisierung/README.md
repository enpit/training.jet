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

  1. Konfiguriere in `index.html` an der markierten Stelle ein Data-Binding, sodass das div-Element immer die View anzeigt die im Router gerade aktiv ist
  2. In `main.js`:
    - importiere die fehlenden Module
    - konfiguriere den `ojRouter` für diese Anwendung
    - erstelle ein ViewModel das den Router referenziert
    - synchronisiere den `ko.applyBindings` Aufruf mit der Initialisierung des Routers
  3. In `search.js` und `search.html`:
    - importiere auch hier die fehlenden Module und mache das 'spotify'-Modul im Body des Moduls bekannt
    - stoße in der `selectArtist`-Funktion die Navigation des Routers zur 'artist' View an
  4. In `artist.js` und `artist.html` - hier muss ein komplettes neues Modul aufgezogen werden:
    - zeige in der View den Namen des Interpreten an
    - definiere ein neues requirejs-Modul - hier sind viele der vorigen Schritte noch einmal wiederzufinden, z.B. Importieren von Modulen, Erstellung von ViewModels, Erstellung von Observables
      - das 'artist' Observable muss außerdem mithilfe von knockout-postbox mit dem im search-Modul gewählten Wert synchronisiert werden
    - Bonus: Zeige in der View außerdem das Bild und/oder die Albend des interepreten an
  5. Starte die Anwendung
    - in NetBeans: Klick auf den grünen "Run" Button
    - per Terminal: `grunt serve`

Hinweis: Die Dateien `header.js` und `header.html` müssen nicht angepasst werden.

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [ojRouter](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=router&demo=simple)
- [requirejs](http://requirejs.org/)
- [knockout](http://knockoutjs.com/documentation/introduction.html)
- [knockout-postbox](https://github.com/rniemeyer/knockout-postbox)

## Lösung

Die Lösung wir gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` zu finden.
