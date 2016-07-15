angular
  .module('app')
  .component('courses', {
    templateUrl: 'app/courses/courses.html',
    controller: CourseController
  });

/** @ngInject */
function CourseController($timeout) {
  var vm = this;

  vm.apiWait = true;
  vm.courses = [
    { "name": "Python", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular Islands", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular Samoa", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular and Barbuda", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" },
    { "name": "Angular", "description": "This is a programming course", "id" : "4" }
  ];

  $timeout(function(){
    vm.apiWait = false;
  },1000)

}
