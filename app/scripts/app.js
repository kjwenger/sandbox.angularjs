'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main',
        controllerAs: 'main'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settings',
        controllerAs: 'settings'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'help',
        controllerAs: 'help'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
