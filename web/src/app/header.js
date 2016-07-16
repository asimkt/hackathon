angular
  .module('app')
  .component('fountainHeader', {
    templateUrl: 'app/header.html',
    bindings: {
      searchBox: '<'
    },
    controller: function () {
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
    }
  });
