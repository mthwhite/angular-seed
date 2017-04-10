'use strict';

// Declare app level module which depends on views, and components
angular.module('bgFramework', [
  'ui.router',
  'bgFramework.alienExplorers',
  'bgFramework.pokemon',
]).
config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('splash', {
            templateUrl: '/splash/splash.html',
            title: 'Available Board Games',
            url: '/home'
        })
        .state('alienExplorers', {
            controller: 'alienExplorersController as $ctrl',
            templateUrl: '/alienExplorers/alienExplorers.html',
            title: 'Alien Explorers',
            url: '/alienExplorers'
        })
        .state('pokemon', {
            controller: 'pokemonController as $ctrl',
            templateUrl: '/pokemon/pokemon.html',
            title: 'Pokemon the cooperative card game',
            url: '/pokemon'
        });
}]);
