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
    { "name": "Python", "code": "Python Begineer" },
    { "name": "Python 3", "code": "Python 3 Begineer" },
    { "name": "Python Django", "code": "Python Django" },
    { "name": "Python Network Programming", "code": "Python Network" },
    { "name": "Python Datascience", "code": "Python Datascience" },
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