(function () {
    'use strict';

  angular.module("app")
    .component('classified', {
      bindings: {
        classified: '='
      },
      controller: Controller,
      templateUrl: "./classified/classified.template.html"
  });


  function Controller(){
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
    }
  }

})();//end of file
