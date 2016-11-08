/**
 * Album module
 */
define(
  ['ojs/ojcore', 'knockout', 'jquery', '../spotify', 'ojs/ojchart'],
  function (oj, ko, $, spotify) {
    /**
     * The view model for the Album module
     */
    function AlbumViewModel () {
      var selectedAlbum = ko.observable({}).subscribeTo(
        'selectedAlbums',
        true,
        function transform (selectedAlbums) {
          return selectedAlbums[0];
        }
      );
      var self = this;
      self.album = ko.observable({
        loading: true
      });

      self.tracksLength = ko.observableArray([]);

      spotify.fetchAlbumDetails(selectedAlbum().series).then(
        function onAlbum (response) {
          self.album({
            artist: response.artists[0].name,
            name: response.name,
            label: response.name,
            popularity: response.popularity,
            release: response.release_date,
            cover: response.images[0],
            loading: false
          });
          response.tracks.items.forEach(function onTrack (track) {
            self.tracksLength.push({
              id: track.id,
              name: track.name,
              items: [Number(track.duration_ms) / 1000]
            });
          });
        }
      );
    }
    return AlbumViewModel;
  });
