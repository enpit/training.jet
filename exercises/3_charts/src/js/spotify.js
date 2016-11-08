define(['jquery'], function ($) {
  var webserviceUrl = 'https://api.spotify.com/v1/';

  /**
   * Search the spotify database for the given query.
   * @param {string} query the query string that you want to search for
   * @param {object} options a map (i.e. an array of arrays) containig search options (see https://developer.spotify.com/web-api/console/get-search-item/)
   * @return {Promise} a promise that resolves with the artists in JSON format
   * or rejects with an error description
   */
  var search = function search (query, options) {
    if (!Array.isArray(options)) {
      console.error('Invalid options parameter ' + options);
      return;
    }

    var q = [query].concat(
      options.map(function (o) {
        return o[0] + '=' + o[1];
      })
    ).join('&');
    /*
     * Do a HTTP-GET call to the spotify API with the given options
     * The webservice returns results as a JSON string
     */
    return $.ajax(
      webserviceUrl + 'search?q=' + q, {
        dataType: 'json',
        method: 'GET'
      }
    );
  };

  /**
   * Load all albums of the specified artist.
   * @param  {string} artistId the artist's id (get one via search)
   * @return {Promise} a promise that resolves with the albums in JSON format
   * or rejects with an error description
   */
  var fetchAlbumsByArtist = function fetchAlbumsByArtist (artistId) {
    return $.ajax(
      webserviceUrl + 'artists/' + artistId + '/albums', {
        dataType: 'json',
        method: 'GET'
      }
    );
  };

  /**
   * Load the details of the specified album.
   * @param  {string} albumId the album's id (get one via search)
   * @return {Promise} a promise that resolves with the albums in JSON format
   * or rejects with an error description
   */
  var fetchAlbumDetails = function fetchAlbumDetails (albumId) {
    return $.ajax(
      webserviceUrl + 'albums/' + albumId, {
        dataType: 'json',
        method: 'GET'
      }
    );
  };

  return {
    fetchAlbumDetails: fetchAlbumDetails,
    fetchAlbumsByArtist: fetchAlbumsByArtist,
    search: search
  };
});
