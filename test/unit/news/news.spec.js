'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('gpAdminApp'));

  var NewsCtrl,
    scope,
    $httpBackend,
    news;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _news_ , _$httpBackend_) {
    scope = $rootScope.$new();
    NewsCtrl = $controller('NewsCtrl', {
      $scope: scope
    });
    $httpBackend = _$httpBackend_;
    news = _news_;
  }));

  it('should get a list of news', function () {
    $httpBackend.expectGET('https://localhost:8080/news').respond(200);
    news.listNews().success(function (data) {
      scope.newsList = data;
    });
    $httpBackend.flush();
    expect(scope.newsList.length).toBeGreaterThan(0);
  });

});
