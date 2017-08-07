(function() {
  'use strict';

  angular
    .module('app')
    .service('classifiedsService', service);

  service.$inject = ['$http'];

  function service($http) {
    const vm = this;

    this.getAllAds = function() {
      return $http.get('http://localhost:8000/api/classifieds/').then(response => {
        console.log(response.data);
        return response.data;
      });
    };
  }

})();
