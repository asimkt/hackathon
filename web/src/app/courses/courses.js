angular
  .module('app')
  .component('courses', {
    templateUrl: 'app/courses/courses.html',
    controller: CourseController
  });

/** @ngInject */
function CourseController($http) {
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
  	console.log('here');
  }
}
