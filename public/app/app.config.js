(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state({ name: 'classifieds', url: '/', component: 'classifieds' })
    .state({ name: 'editClassified', url: '/classifieds/:id/edit', component: 'editForm' })
    .state({ name: 'createClassified', url: '/', component: 'editForm' });
  }

}());
