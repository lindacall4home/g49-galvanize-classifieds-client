(function () {
    'use strict';

  angular.module("app")
    .component('editForm', {
      controller: Controller,
      templateUrl: "./editForm/editForm.template.html"
  });

  Controller.$inject = ['$http', 'editFormService', '$state', '$stateParams'];

  function Controller($http,  editFormService, $state, $stateParams){
    const vm = this;
    vm.classified = {};

    vm.$onInit = onInit;

    function onInit(){
      vm.id = $stateParams.id;
      console.log(vm.id);
      if(vm.id !== undefined){
        editFormService.getSingleAd(vm.id)
        .then(function(ad){
          vm.classified = ad;
        });
      }
    }

    vm.updateAd = function(){
      if(vm.id === undefined){
        vm.createAd();
      }
      else{
        vm.editAd();
      }
    }

    vm.createAd = function(){
      console.log("in createAd");
      editFormService.postAd(vm.classified)
      .then(newAd => {
        vm.classified = newAd;
        $state.go('classifieds')
      });
    };

    vm.editAd = function(){
      console.log("in editAd");
      editFormService.patchAd(vm.classified)
      .then(editedAd => {
        vm.classified = editedAd;
        $state.go('classifieds');
      });
    };
  }

}());//end of file
