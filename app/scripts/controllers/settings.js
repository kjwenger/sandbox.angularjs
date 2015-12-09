'use strict';

/**
 * @ngdoc function
 * @name app.controller:settings
 * @description
 * # settings
 * Controller of the app
 */
angular.module('app')
  .controller('settings', ['$scope', '$http', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
