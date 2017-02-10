'use strict';

describe('Controller: FavoritelistCtrl', function () {

  // load the controller's module
  beforeEach(module('projetosApp'));

  var FavoritelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoritelistCtrl = $controller('FavoritelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoritelistCtrl.awesomeThings.length).toBe(3);
  });
});
