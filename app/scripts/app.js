'use strict';

/**
 * @ngdoc overview
 * @name projetosApp
 * @description Aplicacao, com suas rotas configuradas
 * # projetosApp
 *
 * Main module of the application.
 */
angular
  .module('projetosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/result', {
        templateUrl: 'views/searchresult.html',
        controller: 'SearchResultCtrl',
        controllerAs: 'searchresult'
      })
      .when('/visualize', {
        templateUrl: 'views/visualize.html',
        controller: 'VisualizeCtrl',
        controllerAs: 'visualize'
      })
      .when('/notexists', {
        templateUrl: '404.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/notexists'
      });
  });
