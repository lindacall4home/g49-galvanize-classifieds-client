(function() {
  'use strict';
  console.log("in congig");

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state({ name: 'classifieds', url: '/', component: 'classifieds' })

  }

}());
