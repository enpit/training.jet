# Hands-On Session 1

In dieser ersten Hands-On Session wird eine Hello World Anwendung geschrieben.
Hierfür muss im wesentlichen nur ein Codeabschnitt aus dem [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html) kopiert werden.

## Vorbereitung

Um diese Übung durchführen zu können müssen (am besten bereits vor der Schulung) einmalig im heruntergeladenen Repository folgende Kommandos ausgeführt werden:

``` cmd
$ cd exercises/1_hello-world
$ npm install
```

## Lernziel

Ziel ist es, dass die Schulungsteilnehmer eine erste Oracle JET Anwendung mit Two-Way Data-Binding programmieren sowie erste Erfahrungen mit der Verwendung des JET Cookbooks machen.
Etwaige Probleme mit der Arbeitsumgebung können an dieser Stelle ebenfalls erkannt und beseitigt werden.

## Aufgaben

Hinweise:

> Die zu bearbeitenden Dateien befinden sich im `src` Ordner.
> Zu erledigende Aufgaben sind mit *TODO X* Kommentaren gekennzeichnet (X = Nummer der Aufgabe in dieser Readme-Datei).

> Es ist zu empfehlen, als erstes die Anwendung zu starten (`Run` Kommando in NetBeans / `grunt serve` im Terminal) und das Browserfenster während der Entwicklung offen zu lassen.

> Der Code ist desweiteren mit sowohl englischen als auch deutschen Kommentaren versehen.
> Englische Kommentare sind offiziellen Codebeispielen oder Templates von Oracle entnommen, oder entstammen dem Spotify-Explorer Projekt.
> Deutsche Kommentare sind eigens für die Schulung erstellt worden.

### Hello World

Schreibe eine Anwendung in der der Benutzer einen String in ein Textfeld eingeben kann.
Der eingegebene Text soll in einem darunterliegenden HTML-Element angezeigt werden (Stichwort Data-Binding).
Sourcecode hierfür ist im [Cookbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=textInput&demo=text) zu finden, muss aber noch angepasst werden.

  1. Deklariere in `src/index.html` ein `input`- und ein `span`-Element, deren Werte durch ein Knockout-Binding an ein Observable gebunden sind
  2. Deklariere ein Knockout Observable im markierten Abschnitt in `src/js/main.js`
  3. Starte die Anwendung    
    - in NetBeans: Klick auf den grünen "Run" Button
    - per Terminal: `grunt serve`

## Lösung

Die Lösung wird gegen Ende der Hands-On Session kurz besprochen und ist außerdem im Ordner `solutions` zu finden.
