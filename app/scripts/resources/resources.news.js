'use strict';

/**
 * @ngdoc service
 * @name resources.news
 * @description
 * # news
 * Service in the resources.
 */
angular.module('resources',[])
  .factory('news', function($http,$log) {

    var baseUrl = 'https://localhost:8080/news';
    var news = {};

    news.imgUrl = 'https://localhost:8080/uploads';

    news.listNews = function() {
      return $http.get(baseUrl);
    };

    news.getNews = function(id) {
      return $http.get(baseUrl + '/' + id);
    };

    news.editNews = function(news) {
      return $http.put(baseUrl + '/' + news.id, news);
    };

    news.insertNews = function(news) {
      return $http.post(baseUrl, news);
    };

    news.destroyNews = function(id) {
      return $http.delete(baseUrl + '/' + id);
    };

    return news;

  });
