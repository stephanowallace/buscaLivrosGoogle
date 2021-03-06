'use strict';

describe('Directive: checkImage', function () {

  // load the directive's module
  beforeEach(module('projetosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<check-image></check-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkImage directive');
  }));
});
