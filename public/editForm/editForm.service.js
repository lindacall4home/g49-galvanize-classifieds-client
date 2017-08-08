(function() {
  'use strict';

  angular
    .module('app')
    .service('editFormService', service);

  service.$inject = ['$http'];

  function service($http) {
    const vm = this;

    this.getSingleAd = function(id) {
      console.log("in getSingleAd");
      return $http.get('http://localhost:8000/api/classifieds/' + id)
      .then(response => {
        console.log(response);
        return response.data;
      });
    };

    this.postAd = function(ad){
      console.log("in postAd");
      return  $http.post('http://localhost:8000/api/classifieds/', ad)
      .then(newAd => newAd)
    };
  }

})();
