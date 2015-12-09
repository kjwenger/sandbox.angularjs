'use strict';

/**
 * @ngdoc function
 * @name app.controller:about
 * @description
 * # about
 * Controller of the app
 */
angular.module('app')
  .controller('about', ['$scope', '$http', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
