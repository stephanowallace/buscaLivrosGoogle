'use strict';

/**
 * @ngdoc service
 * @name projetosApp.BookService
 * @description
 * # BookService
 * Service in the projetosApp.
 */
angular.module('projetosApp')
  .service('BookService', function ($http) {
    var URL = 'https://www.googleapis.com/books/v1/volumes/';
    var commonParameters = {
      maxResults: 10,
      printType: 'books'
    };

    // Busca por livros dado o texto de entrada do usuario
    this.search = function(parameters) {
      parameters.maxResults = commonParameters.maxResults;
      parameters.printType = commonParameters.printType;
      return $http({
        url: URL,
        type: 'GET',
        params: parameters
      });
    };

    // Visualiza dados de um livro especifico dada sua ID
    this.visualize = function(parameters) {
      return $http({
        url: URL + parameters.bookId,
        type: 'GET'
      });
    };
  });
