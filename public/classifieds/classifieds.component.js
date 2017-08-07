(function () {
    'use strict';
    console.log("in controller");

  angular.module("app")
    .component('classifieds', {
      controller: Controller,
      templateUrl: "./classifieds/classifieds.template.html"
  });


  function Controller(){
    const vm = this;
    vm.classifieds = [];

    vm.$onInit = onInit;

    function onInit(){
    };


  };
})(); //end of file
