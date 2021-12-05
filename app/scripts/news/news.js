'use strict';

/**
 * @ngdoc function
 * @name gpAdminApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the gpAdminApp
 */
angular.module('gpAdminApp')
  .controller('NewsCtrl', function ($rootScope,$scope,$state,$stateParams,news,Upload,$log) {
    /* set the url of the server remote static files */
    $scope.serverImgUrl = news.imgUrl;

    /* get all the news for 'news' state */
    if ($state.is('news')) {
      news.listNews()
        .success(function (data) {
          $scope.newsList = data;
        })
        .error(function (err) {
          $scope.error = 'unable to list news ! ' + err.message;
        });
    }

    /* get one news for 'edit' state */
    if($state.is('news.edit')) {
      $rootScope.status = '';

      news.getNews($stateParams.id)
        .success(function (data) {
          $scope.news = data;
        })
        .error(function (err) {
          $scope.error = 'unable to get the news ! ' + err.message;
        });
    }

    /* create a blank news for create state */
    if($state.is('news.create')){
      $rootScope.status = '';
      $scope.news = {};
    }

    /* update function to edit the news */
    $scope.updateNews = function () {
      //update the news
      news.editNews($scope.news)
        .success(function(msg) {
          $rootScope.status = msg.status;
          $state.go('news', {}, {reload: true});
        })
        .error(function(err) {
          $scope.error = 'unable to update the news ! ' + err.message;
        });
    };

    /* create function to add a news a news */
    $scope.createNews = function() {
      news.insertNews($scope.news)
        .success(function(msg) {
          $rootScope.status = msg.status;
          $state.go('news', {}, {reload: true});
        })
        .error(function(err) {
          $scope.error = 'unable to create the news ! ' + err.message;
        });
    };

    /* delete function */
    $scope.deleteNews = function(id) {
      news.destroyNews(id)
        .success(function(msg) {
          $rootScope.status = msg.status;
          $state.go('news', {}, {reload: true});
        })
        .error(function(err) {
          $scope.error = 'unable to delete the news ! ' + err.message;
        });

    };

    /* upload function */
    $scope.$watch('file', function () {
      $scope.upload($scope.file);
    });

    $scope.upload = function(file) {

      if(file && file.length){

        Upload.upload({
          url: 'https://localhost:8080/upload',
          file: file
        }).success(function (data) {
          $scope.status = 'file ' + data.originalName + ' uploaded. Response: ' + data.status;
          $scope.news.catchImage = data.newName;
        });
      }
    };

  });
