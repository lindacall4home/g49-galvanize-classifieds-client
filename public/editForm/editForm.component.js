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
      // editFormService.getSingleAd(1)
      // .then(function(ad){
      //   vm.classified = ad;
      // });
    }

    vm.createAd = function(){
      editFormService.postAd(vm.classified)
      .then(newAd => vm.classified = newAd)
      $state.go('classifieds')

    }
    // vm.editForm = function(){
    //
    //   $http.patch('/api/classifieds/' + vm.id, vm.classified).then(function (response) {
    //     delete vm.classified;
    //     $state.go('classifieds');
    //
    //   });
    // };
  }

}());//end of file
