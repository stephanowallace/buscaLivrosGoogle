'use strict';

/**
 * @ngdoc directive
 * @name projetosApp.directive:checkImage
 * @description
 * # checkImage
 */
angular.module('projetosApp')
  .directive('checkImage', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        attrs.$observe('ngSrc', function(ngSrc) {
          if (!ngSrc) {
            element.attr('src', '/images/noimage.jpg');
          }
        });
      }
    };
  });
