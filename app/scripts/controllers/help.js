'use strict';

/**
 * @ngdoc function
 * @name app.controller:help
 * @description
 * # help
 * Controller of the app
 */
angular.module('app')
  .controller('help', ['$scope', '$http', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
