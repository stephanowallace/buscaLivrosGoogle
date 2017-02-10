'use strict';

/**
 * @ngdoc function
 * @name projetosApp.controller:VisualizeCtrl
 * @description Controller para visualizacao do livro selecionado pelo usuario
 * # VisualizeCtrl
 * Controller of the projetosApp
 */
angular.module('projetosApp')
  .controller('VisualizeCtrl', function ($scope, $location, BookService) {
    $scope.bookData = {};
    $scope.errorOcurred = false;

    // Recupera dados do livro
    $scope.retrieveBookData = function() {
      $scope.loadingData = true;
      BookService.visualize($location.search())
        .then(function successCallback(response) {
          $scope.loadingData = false;
          $scope.bookData = response.data;
          console.log(response.data);
        }, function errorCallback() {
          $scope.loadingData = false;
          $scope.errorOcurred = true;
        });
    };

    // chama servico
    $scope.retrieveBookData();
  });
