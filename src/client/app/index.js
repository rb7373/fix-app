'use strict';

/* We need to tell jshint what variables are being exported */
/*
 global angular: true
 */

angular.module('app', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
