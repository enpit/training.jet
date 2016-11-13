/**
 * Search module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  'spotify',
  'knockout-postbox',
  'ojs/ojselectcombobox',
  // TODO 1.1: Importiere die nötigen Module
  //  - ArrayTableDataSource
  //  - ListView
], function (oj, ko, $, spotify) {
  /**
   * The view model for the search module
   */
  function SearchViewModel () {
    var self = this;

    self.query = ko.observable('');
    self.artists = ko.observableArray([]).syncWith('searchResults', true);
    /*
     * TODO 1.2: Erstelle die benötigte Datenquelle als ArrayTableDataSource
     *  - Instanziiere eine ArrayTableDataSource und binde sie an `self.dataSource`
     *  - Der aufzurufende ArrayTableDataSource Konstruktor erwartet als Argument die
     *    Datenquelle (das `artists` Observable-Array) und ein Options-Objekt, welches
     *    in diesem Fall angeben muss welches Attribut als ID der einzelnen Elemente
     *    verwendet werden soll (s. Cookbook Beispiel)
     */

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
