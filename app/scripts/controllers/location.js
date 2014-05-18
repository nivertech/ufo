'use strict';

app.controller('LocationCtrl', function ($scope, LocationService, GeocodeService, NUFORCService) {
  $scope.latitude = null;
  $scope.longitude = null;

  LocationService().then(function(position){
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;

    GeocodeService.getAddress(position.coords)
      .success(function(data){
        var location = data.location;

        $scope.state = location.state;
        $scope.city = location.city;

        var params = ['location', $scope.state, $scope.city];

        NUFORCService.getSightings(params)
          .success(function(data){
            $scope.sightings = data;
          })
          .error(function(data, status){
            $scope.sightings = data || 'Error retrieving reported UFO sightings.';
            console.log(status);
          });
      })
      .error(function(data, status){
        $scope.location = data || 'Could not retrieve location information';
        console.log(status);
      });
  });

  document.getElementById('zip').addEventListener('keyup', function(e){
    if (e.keyCode == 13){

      console.log('looking up location');

      GeocodeService.setLocation($scope.zip)
        .success(function(data){
          $scope.latitude = data.location.lat;
          $scope.longitude = data.location.lon;
          $scope.state = data.location.state;
          $scope.city = data.location.city;

          var params = ['location', $scope.state, $scope.city];

          NUFORCService.getSightings(params)
            .success(function(data){
              $scope.sightings = data;
            })
            .error(function(data, status){
              $scope.sightings = data || 'Error retrieving reported UFO sightings.';
              console.log(status);
            });
        })
        .error(function(data, status){
          $scope.location = data || 'Could not retrieve location information';
          console.log(status);
        });
    }
  });

});
