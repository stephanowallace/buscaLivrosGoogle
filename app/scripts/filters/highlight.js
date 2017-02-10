'use strict';

/**
 * @ngdoc filter
 * @name projetosApp.filter:highlight
 * @function
 * @description
 * # highlight
 * Filter in the projetosApp.
 */
angular.module('projetosApp')
  .filter('highlight', function ($sce) {
    return function(text, phrase) {
      var words = phrase.split(' ');
      words.forEach(function(word){
        text = text.replace(new RegExp('('+word+')', 'gi'), '<span class="highlighted">$1</span>');
      });
      return $sce.trustAsHtml(text);
    };
  });
