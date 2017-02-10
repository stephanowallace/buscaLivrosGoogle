'use strict';

/**
 * @ngdoc service
 * @name projetosApp.localstorageservice
 * @description Servico para armazenar localmente lista de livros favoritos, por ser Singleton, o servico nao perde os dados como em uma controller
 * # localstorageservice
 * Service in the projetosApp.
 */
angular.module('projetosApp')
  .service('LocalStorageService', function ($rootScope) {
    var favoriteList = {
      books: [],
      saveBook: function(bookID) {
        favoriteList.books.push(bookID);
        localStorage.setItem('bookList', JSON.stringify(favoriteList.books));
      },
      removeBook: function(bookID) {
        var index = favoriteList.books.indexOf(bookID);
        favoriteList.books.splice(index, 1);
        localStorage.setItem('bookList', JSON.stringify(favoriteList.books));
      },
      retrieveAll: function () {
        favoriteList.books = localStorage.getItem('bookList') ? JSON.parse(localStorage.getItem('bookList')) : [];
      }
    };

    // quando a rota e alterada, recupera dados
    $rootScope.$on('restorestate', favoriteList.retrieveAll());

    return favoriteList;
  });
