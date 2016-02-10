'use strict';
var App;
(function (App) {
    angular.module('app', ['ngRoute', 'ngResource'])
        .config(function ($routeProvider, $locationProvider, $httpProvider) {
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
})(App || (App = {}));
