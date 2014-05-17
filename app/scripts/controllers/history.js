'use strict';

app.controller('HistoryCtrl', function ($scope, NUFORCService) {
  var params = ['2014', '03'];

  NUFORCService.getSightings(params)
    .success(function(data){
      $scope.sightings = data;
    })
    .error(function(data, status){
      $scope.sightings = data || 'Error retrieving reported UFO sightings.';
      $scope.status = status;
    });
});
