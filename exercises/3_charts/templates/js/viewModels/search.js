/**
 * Search module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  '../spotify',
  'knockout-postbox',
  'ojs/ojselectcombobox',
  // WORKSHOP_START
  // TODO: Importiere die fehlenden JET Module für ListView und ArrayTableDataSource
  // WORKSHOP_END
  // FINAL_START
  'ojs/ojarraytabledatasource',
  'ojs/ojlistview'
  // FINAL_END
], function (oj, ko, $, spotify) {
  /**
   * The view model for the search module
   */
  function SearchViewModel () {
    var self = this;

    self.query = ko.observable('');
    self.artists = ko.observableArray([]).syncWith('searchResults', true);
    /*
    // WORKSHOP_START
    /* TODO:
    // WORKSHOP_END
     * Erstelle das dataSource Observable, welches sich mit dem 'artists'
     * Observable-Array synchronisiert.
     */
    // FINAL_START
    self.dataSource = new oj.ArrayTableDataSource(
      self.artists, {idAttribute: "id"});
    // FINAL_END

    self.selectedArtist = ko.observable({
      // mock an artist s.t. the artist ViewModel does not crash
      images: []
    }).publishOn('selectedArtist');

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
      oj.Router.rootInstance.go('artist');
    };
  }
  return SearchViewModel;
});
