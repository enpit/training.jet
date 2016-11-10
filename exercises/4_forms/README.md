# Hands-On Session 4

In dieser vierten und letzten Hands-On Session wird die [Spotify-Explorer](https://github.com/enpit/jet-spotify-explorer/) App fertig gestellt.
Die Teilnehmer erstellen ein Formular, das dem Nutzer erlaubt einen neuen Interpreten hinzuzufügen.

## Vorbereitung

Um diese Übung durchführen zu können müssen (am besten bereits vor der Schulung) einmalig im heruntergeladenen Repository folgende Kommandos ausgeführt werden:

``` cmd
$ cd exercises/4_forms
$ npm install
```

## Lernziel

Dem Teilnehmer sollen die Konzepte für das Erstellen und Validieren von Formularen beigebracht werden.

## Aufgaben

  1. Erstelle die Formular-Controls (`add-artist.html`):
    - erstelle das 'name' input-Element, welches die Eingabe eines beliebigen
    Strings erlaubt und diesen im 'name' Observable speichert
    - erstelle das 'genre' select-Element; hier kann das Genre ausgewählt werden, der Wert wird im 'genre' Observable abspeichert
    - das dritte zu erstellende Element ist ein input-Element für das Gründungsjahr des Interpreten; hier sind als Eingaben nur Zahlen erlaubt, der Wert wird mit dem 'year' Observable synchronisiert
    - außerdem wird ein Button zum Speichern der Daten benötigt, erstelle diesen Button und rufe beim Klick die 'save' Funktion aus dem ViewModel auf
    - für alle Controls sollten außerdem Label erstellt werden
  2. Implementiere die nötigen Observables und die 'save' Funktion im ViewModel (`add-artist.js`):
  3. Implementiere die Valdierung, hierbei sollen folgende Regeln umgesetzt werden (`add-artist.html`):
    - Name und Genre sind Pflichtfelder
    - das Gründungsjahr des Interpreten darf nicht in der Zukunft liegen und nicht vor 1000 sein
    - der Nutzer darf nicht in der Lage sein das Formular abzusenden solange nicht alle Eingaben korrekt sind
  4. Für die Validierung ist außerdem ein `InvalidComponentTracker` notwending, der den Status der Validierung für alle Controls verwaltet. Erstelle ein einfaches Observable hierfür (`add-artist.js`)
  5. (Bonus) Wenn noch Zeit ist, kann eine Custom-Validierung für die Genreauswahl implementiert werden (`add-artist.html` & `add-artist.js`) und / oder ein Converter geschrieben werden der das Gründungsjahr auf ganze Zahlen rundet (`add-artist.html`)
  6. Starte die Anwendung
    - in NetBeans: Klick auf den grünen "Run" Button
    - per Terminal: `grunt serve`

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [knockout-postbox](https://github.com/rniemeyer/knockout-postbox)

## Lösung

Die Lösung wir gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` zu finden.
