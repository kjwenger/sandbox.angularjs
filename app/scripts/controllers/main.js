'use strict';

/**
 * @ngdoc function
 * @name app.controller:main
 * @description
 * # main
 * Controller of the app
 */
angular.module('app')
  .controller('main', ['$scope', '$http', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
