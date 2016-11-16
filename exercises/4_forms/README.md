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

Der Rumpf des Formular-Moduls existiert bereits, ebenso die Navigation dorthin (Plus-Button im Header oben rechts).
Das Erstellen der Controls sowie deren Validierung und Speichern soll in diesem Aufgabenblock implementiert werden.

### I. Erstellung der Formular-Controls

Zunächst müssen in `src/js/views/add-artist.html` die Controls für die Dateneingabe erstellt werden.
Im Cookbook sind einige passende Beispiele in der "Forms" Kategorie zu finden, z.B. für [Nummerneingabe](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=inputNumber&demo=inputNumber).

  1. Erstelle das 'name' [input-Element (Text)](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=textInput&demo=text) und ein zugehöriges Label
  2. Erstelle das 'genre' [select-Element](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=select&demo=single) und ein zugehöriges Label
  3. Erstelle das 'year' [input-Element (nur Zahlen)](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=inputNumber&demo=inputNumber) und ein zugehöriges Label
  4. Erstelle einen [Button](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=pushButtons&demo=pushButton) zum Speichern der Daten

Zwischenergebnis: Das Formular rendert alle Labels, die definierten Controls aber nur teilweise.
Da die benötigten Observables noch nicht vorhanden sind, tritt ein `ReferenceError` auf.

### II. Implementierung der Observables

Implementiere jetzt die nötigen Observables (`add-artist.js`).

Zwischenergebnis: Alle Controls werden fehlerfrei angezeigt.
Der Anwender kann bereits Eingaben machen.
Es gibt weiterhin noch keine Validierung und bei Klick auf Save geschieht nichts.

### III. Vorbereitung Validierung 

Für die Validierung ist außerdem ein `InvalidComponentTracker` notwending, der bei Bedarf den Status der Validierung für alle Controls verwaltet.

1. Erstelle ein einfaches Observable für den `InvalidComponentTracker` (`add-artist.js`).

Zwischenergebnis: Keine sichtbare Änderung zum vorigen Stand.

### IV. Umsetzung Validierung

Für die Validierung werden wir folgende Regeln umsetzen:

- Name und Genre sind Pflichtfelder
- das Gründungsjahr des Interpreten darf nicht in der Zukunft liegen und nicht vor 1000 sein
- der Nutzer darf nicht in der Lage sein das Formular abzusenden solange nicht alle Eingaben korrekt sind

Teilschritte (alle in `src/js/views/add-artist.html`):

  1. Implementiere die Validierung für das 'name' input-Element
  2. Implementiere die Validierung für das 'genre' select-Element
  3. Implementiere die Validierung für das 'year' input-Element
  4. Implementiere die autom. Deaktivierung des Buttons bei ungültiger Eingabe
    - die benötigte Logik ist im ViewModel bereits implementiert, kann aber bei Interesse im [Dynamic Form Example im Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=appLevelValidation&demo=dynamicFormValidation) nachgelesen werden

Zwischenergebnis: Leerwerte beim Name werden abgefangen, ebenso ungültige Zahlen beim Gründungsjahr und eine ungültige Auswahl beim Genre.
Leereingaben beim Gründungsjahr sind erlaubt.

### V. Implementierung der `save` Funktion 

Abschließend muss in `add-artist.js` noch die Logik der `save` Funktion umgesetzt werden.
Normalerweise würde an dieser Stelle eine Funktion aufgerufen werden, die bspw. die gemachten Eingaben per REST-Call an einen Webservice sendet.  
Für unsere Zwecke reicht es aus, die gemachten Eingaben per `alert` oder `console.log` auszugeben.

Anschließend soll zurück zur vorigen View navigiert werden (was nicht zwangsweise die `search`-View ist).
Das globale [`window.history` Objekt](https://developer.mozilla.org/en-US/docs/Web/API/History_API) bietet diese Funktionalität an. 

### VI. (Bonus) Automatische Konvertierung des Inputs  
  
Wenn noch Zeit ist, kann ein [Converter](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=inputNumber&demo=inputNumberConverter) geschrieben werden der das Gründungsjahr auf ganze Zahlen rundet (`add-artist.html`).

## Referenzen:

- [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [MDN: Web API](https://developer.mozilla.org/en-US/docs/Web/API)

## Lösung

Die Lösung wird gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` sowie als [Live-Demo auf Github](https://enpit.github.io/jet-spotify-explorer/web/) zu finden.
