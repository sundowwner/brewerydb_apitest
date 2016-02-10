'use strict';
namespace App {
  angular.module('app', ['ngRoute', 'ngResource'])
  .config((
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider) => {
    $routeProvider

    .when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/beertestcreate', {
      templateUrl: '/templates/BeerTestCreate.html',
      controller: app.Controllers.BeerTestCreateCtrl,
      controllerAs: 'vm'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('HTTPFactory');
  });
}
