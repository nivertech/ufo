'use strict';

app.controller('LatestCtrl', function ($scope, NUFORCService) {

  var params = ['latest'];

  NUFORCService.getSightings(params)
    .success(function(data){
      $scope.sightings = data;
    })
    .error(function(data, status){
      $scope.sightings = data || 'Error retrieving reported UFO sightings.';
      $scope.status = status;
    });

});
