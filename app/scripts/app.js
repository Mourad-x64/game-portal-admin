'use strict';

/**
 * @ngdoc overview
 * @name gpAdminApp
 * @description
 * # gpAdminApp
 *
 * Main module of the application.
 */
angular
  .module('gpAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.router',
    'resources',
    'ngFileUpload'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    /**
     * index states
     */
      .state('index', {
        url: '/',
        templateUrl: 'views/index/index.html',
        controller: 'IndexCtrl'
      })
    /**
     * news states
     */
      .state('news', {
        url: '/news',
        templateUrl: 'views/news/list.html',
        controller: 'NewsCtrl'
      })
      .state('news.edit', {
        url: '/edit/:id',
        templateUrl: 'views/news/edit.html',
        controller: 'NewsCtrl'
      })
      .state('news.create', {
        url: '/create',
        templateUrl: 'views/news/create.html',
        controller: 'NewsCtrl'
      });

  });
