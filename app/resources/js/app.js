var inspirationApp = angular.module('inspirationApp', ['ngMaterial']);
var theme = 'grey'

inspirationApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .backgroundPalette(theme);
});

inspirationApp.controller('InspirationController',
function InspirationController($scope, $http, $mdDialog) {
  $scope.loadResources = function() {
    $http.get('/resources/content/inspiration.json').then(function(response) {
       $scope.ideas = response.data;
    }, function(response) {
      console.log(response);
    });
  }

  $scope.clickIdea = function(ev, selectedIdea) {
    $mdDialog.show({
       controller: IdeaController,
       locals: {currentIdea: selectedIdea},
       templateUrl: 'resources/templates/idea_template.html',
       parent: angular.element(document.body),
       targetEvent: ev,
       clickOutsideToClose:true,
       fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
     })
     function IdeaController($scope, currentIdea) {
       $scope.currentIdea = currentIdea;
     };
 };

  $scope.loadResources();
});
