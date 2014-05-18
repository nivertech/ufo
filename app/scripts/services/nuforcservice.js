'use strict';

angular.module('ufoApp')
  .factory('NUFORCService', function NUFORCService($http) {

    // NUFORC API Endpoint
    //var NUFORC_ENDPOINT = 'http://nuforc-api.jfproject.me/api/v1/';
    var NUFORC_ENDPOINT = 'http://localhost:3000/api/v1/';

    // make API request
    function makeRequest(params){
      var url = NUFORC_ENDPOINT;

      params.forEach(function(element){
        url += element + '/';
      });

      return $http.get(url);
    }

    return {
      getSightings: function(params){
        return makeRequest(params);
      }
    };

  });
