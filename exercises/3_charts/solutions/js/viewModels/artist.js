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
       * - erstelle ein leeres Observable-Array, das an das `albums`-Attribut
       *   dieses ViewModels gebunden ist
       */
      self.albums = ko.observableArray([]);

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
               * - erstelle ein neues Objekt, das die `id` und `name` Attribute
               *   des `album` enthält
               * - damit die Daten in einem Diagramm angezeigt werden können, wird
               *   außerdem ein `items` Attribut benötigt
               *   - `items` muss ein Array sein, das einen oder mehrere zu
               *     visualisierende Werte erwartet
               *   - in unserem Fall wird nur ein Datum benötigt, nämlich 
               *     die `popularity` des `album` Objekts
               * - füge das erstellte Objekt zum `albums` Array hinzu (z.B. per `push`)
               */
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

      spotify.fetchAlbumsByArtist(self.artist().id).then(
        function onAlbums (response) {
          response.items.forEach(function (albumSummary) {
            addAlbumDetails(albumSummary.id);
          });
        }
      );

      /*
       * - erstelle das `selectedAlbums` Observable-Array
       * - veröffentliche die Daten dieses Arrays per knockout-postbox unter dem Key 'selectedAlbums'
       * - wenn der User ein Element im Diagramm anklickt, soll ein Click-Handler
       *   aufgerufen werden der die Navigation zur 'album' View ausführt
       *   - Hinweis: Es gibt keinen Klick-Handler im klassischen Sinn für Diagramme (da auch Multi-Selektion möglich ist)        
       *   - die gewünschte Funktionalität ist mithilfe von Knockouts `subscribe` Funktion lösbar
       */
      self.selectedAlbums = ko.observableArray([]).publishOn('selectedAlbums');
      self.selectedAlbums.subscribe(function () {
        oj.Router.rootInstance.go('album');
      });
    }

    return ArtistViewModel;
  });
