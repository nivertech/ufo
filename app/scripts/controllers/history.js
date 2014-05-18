'use strict';

app.controller('HistoryCtrl', function ($scope, NUFORCService) {

  $scope.setDate = function(){
    console.log('yo');
    var params = ['date', $scope.date.year, $scope.date.month, $scope.date.day];

    NUFORCService.getSightings(params)
      .success(function(data){
        $scope.sightings = data;
      })
      .error(function(data, status){
        $scope.sightings = data || 'Error retrieving reported UFO sightings.';
        $scope.status = status;
      });
  };

});
