(function () {
    'use strict';

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

    // vm.createAd = function(){
    //   classifiedsService.getSingleAd()
    //   .then(function (ad) {
    //     var newAd = ad.data;
    //     newAd.createdAt = Date.now();
    //     vm.classifieds.push(newAd);
    //   });
    //
    //   delete vm.classified;
    // };
  };
})(); //end of file
