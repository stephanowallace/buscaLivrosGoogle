'use strict';

/**
 * @ngdoc function
 * @name projetosApp.controller:FavoritelistCtrl
 * @description controller que lista todos os favoritos
 * # FavoritelistCtrl
 * Controller of the projetosApp
 */
angular.module('projetosApp')
  .controller('FavoriteListCtrl', function ($scope, $location, BookService, LocalStorageService) {
    $scope.parameters = $location.search();
    $scope.booksList = [];
    $scope.errorOcurred = false;

    // lista de livros favoritos
    $scope.favoriteList = LocalStorageService.books;

    // recupera livros favoritados
    $scope.retrieveFavoriteBooksData = function() {
      $scope.loadingData = $scope.favoriteList.length > 0;
      $scope.favoriteList.forEach(function(bookID) {
        $scope.parameters.bookId = bookID;
        BookService.visualize($scope.parameters)
          .then(function successCallback(response) {
            $scope.loadingData = false;
            $scope.booksList.push(response.data);
          }, function errorCallback() {
            $scope.loadingData = false;
            $scope.errorOcurred = true;
          });
      });
    };

    // redireciona para pagina de visualizacao de dados do livro adicionando id do
    // livro como parametro
    $scope.visualizeBook = function(bookID) {
      $scope.parameters.bookId = bookID;
      $location.path('/visualize').search($scope.parameters);
    };

    // remove livro da lista de favoritos
    $scope.removeFromFavorite = function(bookID, index) {
      LocalStorageService.removeBook(bookID);
      $scope.booksList.splice(index, 1);
    };

    // chama servico
    $scope.retrieveFavoriteBooksData();
  });
