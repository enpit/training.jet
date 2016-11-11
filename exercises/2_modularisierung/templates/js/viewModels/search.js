/**
 * Search module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  // WORKSHOP_START
  // TODO: Importiere hier die Module spotify und knockout-postbox ...
  // WORKSHOP_END
  // FINAL_START
  'spotify',
  'knockout-postbox',
  // FINAL_END
  'ojs/ojarraytabledatasource',
  'ojs/ojselectcombobox',
  'ojs/ojlistview'
// WORKSHOP_START
// ... und mache das spotify Modul in der Funktion bekannt (knockout-postbox wird autom. an 'ko' gebunden)
], function (oj, ko, $) {
// WORKSHOP_END
// FINAL_START
], function (oj, ko, $, spotify) {
// FINAL_END
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
      // WORKSHOP_START
      // TODO:
      // WORKSHOP_END
      // Rufe hier die Navigation zur 'artist' view auf
      // FINAL_START
      oj.Router.rootInstance.go('artist');
      // FINAL_END
    };
  }
  return SearchViewModel;
});
