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

### I. Darstellung der Suchergebnisse

Stelle die Suchergebnisse in einer [ListView](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=listView&demo=observableArrayListView) dar.

 1. importiere die nötigen Module (`search.js`)
 2. erstelle die benötigte Datenquelle als Observable-Array im ViewModel (`search.js`)    
 3. erstelle eine ojListView Komponente (`search.html`)
 4. erstelle das Template für die Listenelemente (dies sollte zumindest einen Button mit dem Namen des Interpreten rendern) (`search.html`)
 5. per Klick auf den Button soll zur 'artist' View navigiert werden (`search.html`)

Ergebnis: Der Anwender kann die Suchergebnisse ansehen, ein Klick auf den Button eines Interpreten löst die Navigation zur *artist* View an; die *artist* View ansich ist noch leer.

  2. Visualisiere die Alben des gewählten Interpreten:
    - erstelle die benötigte Datenquelle als Observable-Array im ViewModel (`artist.js`)
    - füge die von der Spotify Web API zurückgegebenen Album-Details zur Datenquelle hinzu (`artist.js`) (Datenstruktur TODO)
    - erstelle das [Balkendiagramm](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=barChart&demo=default) (`artist.html`), das die zuvor erstellten Daten zu visualisiert
    - um die Klicks des Users auf die Balken im Diagramm zu tracken, erstelle ein weiteres Observable-Array (`artist.js`)
      - dieses Array sollte zusätzlich per knockout-postbox synchronisiert werden um später in der 'album' View auf das ausgewählte Album zugreifen zu können
      - es gibt keinen Klick-Handler im klassischen Sinn für Diagramme (da auch Multi-Selektion möglich ist); die gewünschte Funktionalität kann und sollte per knockout-postbox realisiert werden        
  3. **Bonus**: Wähle eine weitere Visualisierungsmöglichkeit und setze diese in der 'album' View um (`album.html`, ggf. `album.js`)
    - hierfür kannst du zunächst im Cookbook nach möglichen Diagrammen suchen
  4. Starte die Anwendung
    - in NetBeans: Klick auf den grünen "Run" Button
    - per Terminal: `grunt serve`

Tipp: Es bietet sich oft an, die Aufgaben in kleinere Zwischenschritte aufzuteilen und die Ergebnisse zu debuggen oder zumindest mittels `alert` oder `console.log` auszugeben - so lässt sich das Verhalten der Anwendung besser nachvollziehen.

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [Spotify Web API](https://developer.spotify.com/web-api/console/)
- [knockout-postbox](https://github.com/rniemeyer/knockout-postbox)

## Lösung

Die Lösung wird gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` sowie als [Live-Demo auf Github](https://enpit.github.io/jet-spotify-explorer/web/) zu finden.
