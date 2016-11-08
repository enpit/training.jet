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
      addAlbumDetails = function addAlbumDetails (albumId) {
        spotify.fetchAlbumDetails(albumId).then(
          function onAlbum (album) {
            if (isMostPopularAlbum(album)) {
              self.albums.push({
                id: album.id,
                name: album.name,
                items: [album.popularity]
              });
            }
          }
        );
      };

      self.artist = ko.observable().subscribeTo('selectedArtist', true);

      self.albums = ko.observableArray([]);

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

    // $("#artistChart").on("ojselectinput", function(event, ui){
    //   console.log(event);

    // });

    return ArtistViewModel;
  });
