'use strict';

app.controller('LocationCtrl', function ($scope, LocationService, GeocodeService, NUFORCService) {
  $scope.position = null;

  LocationService().then(function(position){
    $scope.position = position.coords;

    GeocodeService.getAddress(position.coords)
      .success(function(data){
        console.log(data);
        var location = data.results[0].address_components;
        $scope.state = location[5].long_name;
        $scope.abbr = location[5].short_name;
        $scope.city = location[2].long_name;
        var params = ['location', $scope.abbr, $scope.city];

        NUFORCService.getSightings(params)
          .success(function(data){
            $scope.sightings = data;
          })
          .error(function(data, status){
            $scope.sightings = data || 'Error retrieving reported UFO sightings.';
            $scope.status = status;
          });
      })
      .error(function(data, status){
        $scope.location = data || 'Could not retrieve location information';
        $scope.status = status;
      });
  });

});
