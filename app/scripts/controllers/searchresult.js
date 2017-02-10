'use strict';

/**
 * @ngdoc function
 * @name projetosApp.controller:SearchresultctrlCtrl
 * @description Controller que contem o resultado das buscas por livros
 * # SearchresultctrlCtrl
 * Controller of the projetosApp
 */
angular.module('projetosApp')
  .controller('SearchResultCtrl', function ($scope, $location, BookService, LocalStorageService) {
    $scope.parameters = $location.search();
    $scope.parameters.startIndex = 0;
    $scope.booksList = [];
    $scope.errorOcurred = false;

    // dados paginacao
    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.itemsPerPage = 10;

    // lista de livros favoritos
    $scope.favoriteList = LocalStorageService.books;

    // busca por livros chamando servico da Google
    $scope.searchForBooks = function() {
      $scope.loadingData = true;
      BookService.search($scope.parameters)
        .then(function successCallback(response) {
          $scope.loadingData = false;
          $scope.booksList = response.data.items;
          $scope.totalItems = response.data.totalItems;
        }, function errorCallback() {
          $scope.loadingData = false;
          $scope.errorOcurred = true;
        });
    };

    // altera pagina alterando parametro de busca e chamando servico em seguida
    $scope.pageChanged = function() {
      $scope.parameters.startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
      $scope.searchForBooks();
    };

    // redireciona para pagina de visualizacao de dados do livro adicionando id do
    // livro como parametro
    $scope.visualizeBook = function(bookID) {
      $scope.parameters.bookId = bookID;
      $location.path('/visualize').search($scope.parameters);
    };

    // mostra botoes de acao ao passar mouse
    $scope.hoverIn = function(){
      this.hoverContent = true;
    };

    // esconde botoes de acao ao tirar mouse
    $scope.hoverOut = function(){
      this.hoverContent = false;
    };

    // marca um livro como favorito
    $scope.markAsFavorite = function(bookID){
      LocalStorageService.saveBook(bookID);
    };

    // remove livro da lista de favoritos
    $scope.removeFromFavorite = function(bookID) {
      LocalStorageService.removeBook(bookID);
    };

    $scope.getFavoriteBooksData = function() {
      $location.path('/favorites');
    };

    // chama servico de busca de livros
    $scope.searchForBooks();
  });
