(function () {
    'use strict';
    console.log("in controller");

  angular.module("app")
    .component('classifieds', {
      controller: Controller,
      templateUrl: "./classifieds/classifieds.template.html"
  });

  Controller.$inject = ['$http', 'classifiedsService'];

  function Controller($http, classifiedsService){
    const vm = this;
    vm.classifieds = [];
    vm.$onInit = onInit;

    function onInit(){
      classifiedsService.getAllAds()
      .then(function(ads){
        vm.classifieds = ads;
      });
    };


  };
})(); //end of file
