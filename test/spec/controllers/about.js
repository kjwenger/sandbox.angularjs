'use strict';

describe('Controller: about', function () {

  // load the controller's module
  beforeEach(module('app'));

  var about,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    about = $controller('about', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(about.awesomeThings.length).toBe(3);
  });
});
