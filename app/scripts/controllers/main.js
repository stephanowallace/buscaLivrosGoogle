'use strict';

/**
 * @ngdoc function
 * @name projetosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetosApp
 */
angular.module('projetosApp')
  .controller('MainCtrl', function ($scope, $location) {
    var _searchTerm = $location.search().q;

    // parametro a ser buscado
    $scope.searchParam = {
      q: function(newParam) {
       return arguments.length ? (_searchTerm = newParam) : _searchTerm;
      }
    };

    // redireciona para pagina de resultado passando entrada do usuario como parametro
    $scope.searchForBooks = function() {
      $location.path('/result').search({ 'q': _searchTerm });
    };

    // limpa texto do input
    $scope.clearText = function() {
      _searchTerm = '';
      document.getElementById('search-input').focus();
    };

  });
