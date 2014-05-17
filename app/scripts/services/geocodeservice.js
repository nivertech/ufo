'use strict';

app.factory('GeocodeService', function GeocodeService($http) {
  var GOOGLE_API_KEY = 'AIzaSyCfTC87U-WVemY6oOpRXtORC2QgvQnm6gI';
  var GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

  function makeRequest(position){
    var latitude = position.latitude;
    var longitude = position.longitude;
    GEOCODE_ENDPOINT += latitude + ',' + longitude;
    GEOCODE_ENDPOINT += '&sensor=false&key=' + GOOGLE_API_KEY;

    return $http.get(GEOCODE_ENDPOINT);
  }

  return {
    getAddress: function(position){
      return makeRequest(position);
    }
  };
});
