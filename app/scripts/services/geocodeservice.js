'use strict';

app.factory('GeocodeService', function GeocodeService($http) {
  var WU_API_KEY = 'b41e625badcc567f';

  function getAddress(position){
    var latitude = position.latitude;
    var longitude = position.longitude;

    var URL = 'http://api.wunderground.com/api/' + WU_API_KEY;
    URL += '/geolookup/q/' + latitude + ',' + longitude + '.json?callback=JSON_CALLBACK';

    return $http.jsonp(URL);
  }

  function setLocation(zip){
    var URL = 'http://api.wunderground.com/api/' + WU_API_KEY;
    URL +=  '/geolookup/q/' + zip + '.json?callback=JSON_CALLBACK';

    return $http.jsonp(URL);
  }

  return {
    getAddress: function(position){
      return getAddress(position);
    },
    setLocation: function(zip){
      return setLocation(zip);
    }
  };
});
