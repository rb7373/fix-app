'use strict';
angular.module('app').controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [{
      'title': 'AngularJS',
      'url': 'https://angularjs.org/',
      'description': 'HTML enhanced for web apps!',
      'logo': 'angular.png'
    }];
  angular.forEach($scope.awesomeThings, function (awesomeThing) {
    awesomeThing.rank = Math.random();
  });
});