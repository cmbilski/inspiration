describe('InspirationController', function() {
  beforeEach(angular.mock.module('inspirationApp'));
  var controller, $scope;

  beforeEach(angular.mock.inject(function($controller){
    $scope = {};
    controller = $controller('InspirationController', { $scope: $scope });
  }));

  describe('loadResources', function() {
    var $httpBackend, resourceRequest;

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      resourceRequest = $httpBackend.expect('GET', '/resources/content/inspiration.json').
        respond(200, [{"image_path": "image_1.jpg"}]);
    }));

    it ('runs on controller creation', function() {
      $httpBackend.flush();
    });

    it ('populates $scope.ideas', function() {
      $httpBackend.flush();
      expect($scope.ideas).toEqual([{"image_path": "image_1.jpg"}]);
    });

    it ('populates $scope.ideas', function() {
      resourceRequest.respond(200, [{"image_path": "image_1.jpg"},
        {"image_path": "image_2.jpg"}]);
      $httpBackend.flush();
      expect($scope.ideas).toEqual([{"image_path": "image_1.jpg"},
        {"image_path": "image_2.jpg"}]);
    });

    afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
  });
});
