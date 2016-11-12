/*
 * TODO 4.2 (Bonus): Definiere ein neues requirejs-Modul, das das ViewModel für die `artist`-View bereitstellt
 * - definiere ein neues requirejs-Modul
 *    - die Abhängigkeiten sind das JET core Modul, Knockout, und Knockout-Postbox
 * - Implementiere die Erstellung eines neuen ViewModels, das von diesem requirejs-Modul
 *    zurückgegeben wird.
 *    - Das ViewModel benötigt ein 'artist' Observable. Melde das Observable bei
 *      knockout-postbox an sodass der initiale Wert des ausgewählten Interpreten
 *      sowie Änderungen daran in diesem Observable zur Verfügung stehen
 *      - 2. Parameter nicht vergessen damit auch der initiale Wert gelesen wird!
 *      - die knockout-postbox Dokumentation auf Github kann hier weiterhelfen (s. Referenzen in der Readme-Datei)
 */
// FINAL_START
/**
 * Artist module
 */
define(['ojs/ojcore', 'knockout', 'knockout-postbox'],
  function (oj, ko) {
    /**
     * The view model for the Artist module
     */
    function ArtistViewModel () {
      var self = this;

      self.artist = ko.observable().subscribeTo('selectedArtist', true);
    }

    return ArtistViewModel;
  });
// FINAL_END
