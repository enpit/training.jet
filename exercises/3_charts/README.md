# Hands-On Session 3

In dieser dritten Hands-On Session wird erneut die [Spotify-Explorer](https://github.com/enpit/jet-spotify-explorer/) App weiterentwickelt (bzw. zuvor bereits genutzte Features müssen nun von den Schulungsteilnehmern implementiert werden).
Bei dieser Session dreht sich alles um die Visualisierung von Daten, insbesondere mit Listen und Diagrammen.

## Vorbereitung

Um diese Übung durchführen zu können müssen (am besten bereits vor der Schulung) einmalig im heruntergeladenen Repository folgende Kommandos ausgeführt werden:

``` cmd
$ cd exercises/3_charts
$ npm install
```

## Lernziel

Die Teilnehmer sollen in dieser Übung mit den Visualisierungsmöglichkeiten von Oracle JET vertraut gemacht werden.
Exemplarisch wird die Visualisierung der Suchergebnisse per [List View](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=listView&demo=staticListView), sowie die Visualisierung der Alben eines Interpreten per Balkendiagramm geübt.
In einer Bonusaufgabe können außerdem weitere Visualisierungsmöglichkeiten ausprobiert werden.

## Aufgaben

> Es ist zu empfehlen, als erstes die Anwendung zu starten (`Run` Kommando in NetBeans / `grunt serve` im Terminal) und das Browserfenster während der Entwicklung offen zu lassen.

Für diese Übung wurden einige Zeilen Code, die mit der Darstellung der Liste der Suchergebnisse zusammenhängen, aus dem Such-Modul entfernt.
Als Resultat erscheint beim Starten der Anwendung zwar wieder das Suchfeld, hat aber noch keine weitere Funktionalität.

### Teil 1: Darstellung der Suchergebnisse

Stelle die Suchergebnisse in einer ListView dar.

  1. Importiere die nötigen Module (`search.js`)
  2. Erstelle die benötigte Datenquelle als [ArrayTableDataSource](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=listView&demo=observableArrayListView) (`search.js`)    
  3. Erstelle eine ojListView Komponente (`search.html`)
    - Insbesondere hier ist es zu empfehlen, das `ul`-Element aus dem [Cookbook-Beispiel](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=listView&demo=arrayListView) heraus zu kopieren und dann für unsere Zwecke anzupassen
  4. Erstelle das Template für die Listenelemente (`search.html`)
    - Referenz: [Button-Beispiel im Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=pushButtons&demo=pushButton)

Zwischenergebnis: Die Suche ist wieder funktional; ein Klick auf den Button eines Interpreten löst die Navigation zur *artist* View aus.
Die `artist`-View ansich ist noch leer.

### Teil 2: Visualisierung der Alben des Interpreten

Die Alben des Interpreten sollen in einem Balkendiagramm visualisiert werden.
Das zu implementierende Diagramm ist eine modifizierte und vereinfachte Version des entsprechenden [Cookbook-Beispiels](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=barChart&demo=default).

  1. Erstelle die benötigte Datenquelle als Observable-Array (`artist.js`)
  2. Füge die von der Spotify Web API zurückgegebenen Album-Details zur Datenquelle hinzu (`artist.js`)
  3. Erstelle das [Balkendiagramm](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=barChart&demo=default) (`artist.html`)
  4. Um die Klicks des Users auf die Balken im Diagramm zu tracken, erstelle ein weiteres Observable-Array (`artist.js`)
    - s. Dokumentation von [Knockout](http://knockoutjs.com/documentation/observables.html) und [knockout-postbox Dokumentation](https://github.com/rniemeyer/knockout-postbox)

Zwischenergebnis: Ein Balkendiagramm zeigt die Alben des gewählten Interpreten sowie deren relative Popularität an.
Bei Klick auf einen der Balken wird die Navigation zur 'album'-View ausgelöst (welche Bild und Name des Albums anzeigt).

### Teil 3 (Bonus): Visualisierung der Tracks eines Albums

Wähle eine weitere Visualisierungsmöglichkeit und setze diese in der 'album'-View um.

Hierfür kannst du zunächst im [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html) nach möglichen Diagrammen suchen, anschließend kann das Diagramm im markierten Abschnitt in `album.html` umgesetzt werden.
Außerdem kann die [Spotify Web API](https://developer.spotify.com/web-api/console/get-album/#complete) nach weiteren Attributen eines Albums durchsucht werden (Klick auf 'Fill sample data', dann 'Try it').

Das ViewModel existiert bereits.
Falls ein anderes Attribut als die Track-Dauer visualisiert werden soll, muss allerdings der in `album.js` markierte Abschnitt angepasst werden.

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [Spotify Web API](https://developer.spotify.com/web-api/console/)
- [knockout-postbox](https://github.com/rniemeyer/knockout-postbox)

## Lösung

Die Lösung wird gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` sowie als [Live-Demo auf Github](https://enpit.github.io/jet-spotify-explorer/web/) zu finden.
