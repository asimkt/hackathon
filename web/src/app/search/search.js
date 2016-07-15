angular
  .module('app')
  .component('learnSearch', {
    templateUrl: 'app/search/search.html',
    controller: SearchController
  });

/** @ngInject */
function SearchController($http, $state) {
  var vm = this;

  vm.countries = [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Aland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
    { "name": "American Samoa", "code": "AS" },
    { "name": "AndorrA", "code": "AD" },
    { "name": "Angola", "code": "AO" },
    { "name": "Anguilla", "code": "AI" },
    { "name": "Antarctica", "code": "AQ" },
    { "name": "Antigua and Barbuda", "code": "AG" },
    { "name": "Argentina", "code": "AR" },
    { "name": "Armenia", "code": "AM" },
    { "name": "Aruba", "code": "AW" },
    { "name": "Australia", "code": "AU" },
    { "name": "Austria", "code": "AT" },
    { "name": "Azerbaijan", "code": "AZ" },
    { "name": "Bahamas", "code": "BS" },
    { "name": "Bahrain", "code": "BH" }
  ];

  vm.inputChanged = function(){
  	$state.go('courses');
  }

  $http
    .get('app/search/search.json')
    .then(function (response) {
      vm.countries = response.data;
    });
}