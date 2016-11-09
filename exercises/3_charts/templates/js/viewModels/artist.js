/**
 * Artist module
 */
define(['ojs/ojcore', 'knockout', 'jquery', '../spotify', 'knockout-postbox',
  'ojs/ojchart', 'ojs/ojrouter'],
  function (oj, ko, $, spotify) {
    /**
     * The view model for the Artist module
     */
    function ArtistViewModel () {
      var addAlbumDetails;
      var isMostPopularAlbum;
      var self;

      self = this;
      isMostPopularAlbum = function isMostPopularAlbum (album) {
        return self.albums().every(function isMostPopular (otherAlbum) {
          return album.name !== otherAlbum.name ||
            album.popularity > otherAlbum.items[0];
        });
      };

      /*
      // WORKSHOP_START
       * TODO:
      // WORKSHOP_END
       * Erstelle das 'albums' Observable-Array
       */
      // FINAL_START
      self.albums = ko.observableArray([]);
      // FINAL_END

      addAlbumDetails = function addAlbumDetails (albumId) {
        spotify.fetchAlbumDetails(albumId).then(
          function onAlbum (album) {
            /*
             * Der 'isMostPopularAlbum' Call stellt sicher, dass immer nur das
             * populärste Album im Array auftaucht, *falls* mehrere Alben mit
             * dem gleichen Namen existieren (d.h. beugt Duplikaten vor)
             */
            if (isMostPopularAlbum(album)) {
              /*
              // WORKSHOP_START
               * TODO:
              // WORKSHOP_END
               * Füge die (relevanten) Daten des Albums als neues Objekt zum
               * 'albums' Observable-Array hinzu.
               */
              // FINAL_START
              self.albums.push({
                id: album.id,
                name: album.name,
                items: [album.popularity]
              });
              // FINAL_END
            }
          }
        );
      };

      self.artist = ko.observable().subscribeTo('selectedArtist', true);

      spotify.fetchAlbumsByArtist(self.artist().id).then(
        function onAlbums (response) {
          response.items.forEach(function (albumSummary) {
            addAlbumDetails(albumSummary.id);
          });
        }
      );

      self.selectedAlbums = ko.observableArray([]).publishOn('selectedAlbums');
      self.selectedAlbums.subscribe(function () {
        oj.Router.rootInstance.go('album');
      });
    }

    return ArtistViewModel;
  });
