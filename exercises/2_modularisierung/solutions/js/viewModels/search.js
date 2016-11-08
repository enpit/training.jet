/**
 * Search module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  '../spotify',
  'knockout-postbox',
  'ojs/ojarraytabledatasource',
  'ojs/ojselectcombobox',
  'ojs/ojlistview'
], function (oj, ko, $, spotify) {
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
      // Rufe hier die Navigation zur 'artist' view auf
      oj.Router.rootInstance.go('artist');
    };
  }
  return SearchViewModel;
});
