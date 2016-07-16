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
    { "name": "AngularJS", "code": "Angular web framework" },
    { "name": "ReactJS", "code": "Facebook's supercool framework" },
    { "name": "Backbone", "code": "JS framework" },
    { "name": "Gulp", "code": "Gulp build tool" },
    { "name": "NodeJS", "code": "NodeJS" }
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