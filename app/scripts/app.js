'use strict';

var app = angular.module('ufoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.calendar',
    'angular-loading-bar'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/history', {
      templateUrl: 'views/history.html',
      controller: 'HistoryCtrl'
    })
    .when('/location', {
      templateUrl: 'views/location.html',
      controller: 'LocationCtrl'
    })
    .when('/latest', {
      templateUrl: 'views/latest.html',
      controller: 'LatestCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
