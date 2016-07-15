angular
  .module('app')
  .component('courses', {
    templateUrl: 'app/courses/courses.html',
    controller: CourseController
  });

/** @ngInject */
function CourseController() {
  var vm = this;

  vm.courses = [
    { "name": "Python", "description": "This is a programming course" },
    { "name": "Angular Islands", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular Samoa", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular and Barbuda", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" },
    { "name": "Angular", "description": "This is a programming course" }
  ];

}
