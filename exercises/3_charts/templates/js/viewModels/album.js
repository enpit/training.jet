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
            // WORKSHOP_START
            /*
             * TODO - Bonus:
             * Je nach Wunsch kann hier statt der Track-Dauer ein anderes Attribut
             * des Tracks in 'track.items' gespeichert werden.
             */
            // WORKSHOP_END
            track.items = [Number(track.duration_ms) / 1000];
            self.tracksLength.push(track);
          });
        }
      );
    }
    return AlbumViewModel;
  });
