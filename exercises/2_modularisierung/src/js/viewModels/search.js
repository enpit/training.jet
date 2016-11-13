/**
 * Search module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  /*
   * TODO 3.1: Importiere die fehlenden Module 
   * importiere das 'spotify' Modul
   * importiere das 'knockout-postbox' Modul
   */
  'ojs/ojarraytabledatasource',
  'ojs/ojselectcombobox',
  'ojs/ojlistview'
/*
 * TODO 3.2: Mache das `spotify`-Modul im Body des `search`-Moduls bekannt
 * - hierfür muss ein weiterer Parameter in die untenstehende Funktionsdeklaration
 *   eingefügt werden
 *    - beachte die richtige Reihenfolge der Parameter!
 *    - da im Code bereits Referenzen auf das `spotify`-Modul existieren,
 *      sollte der Parameter 'spotify' lauten  
 * - knockout-postbox wird automatisch an 'ko' gebunden
 */
], function (oj, ko, $) {
  /**
   * The view model for the search module
   */
  function SearchViewModel () {
    var artist;
    var self = this;

    self.query = ko.observable('');
    self.artists = ko.observableArray([]).syncWith('searchResults', true);
    self.dataSource = new oj.ArrayTableDataSource(
      self.artists, {idAttribute: "id"});
    // mock an artist s.t. the artist ViewModel does not crash
    artist = { images: [] };
    self.selectedArtist = ko.observable(artist).publishOn('selectedArtist');

    self.query.subscribe(function search () {
      self.artists.removeAll(); // clear previous search results
      spotify.search(self.query(), [['type', 'artist']]).then(
        function onFulfilled (response) {
          // filter artists
          response.artists.items.forEach(function (artist, index) {
            artist.thumbnail = artist.images.pop();
            artist.cover = artist.images[0] || artist.thumbnail;
            artist.index = index;
            self.artists.push(artist);
          });
        },
        function onRejected (error) {
          console.error(error);
        }
      );
    });

    self.selectArtist = function selectArtist (data, event) {
      var artist;
      var index;

      index = Number(event.currentTarget.id);
      artist = self.artists()[index];
      self.selectedArtist(artist);
      // TODO 3.4: Stoße in der `selectArtist`-Funktion die Navigation des Routers zur 'artist' View an
      // - referenziere hierfür zunächst die Root-Instanz des Routers
      // - rufe dann mithilfe der `go`-Funktion die Navigation zur 'artist' View auf
    };
  }
  return SearchViewModel;
});
