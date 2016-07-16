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
  // vm.courses = [
  //   { "name": "Python", "description": "This is a programming course", 
  //     "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png", 
  //     "id" : "4" },
  //   { "name": "Angular Islands", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular Samoa", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular and Barbuda", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" },
  //   { "name": "Angular", "description": "This is a programming course", "id" : "4" }
  // ];

  vm.courses = [
    { "name": "Python", "description": "Python Begineer", "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png" },
    { "name": "Python 3", "description": "Python 3 Begineer", "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png" },
    { "name": "Python Django", "description": "Python Django", "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png" },
    { "name": "Python Network Programming", "description": "Python Network", "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png" },
    { "name": "Python Datascience", "description": "Python Datascience", "logo": "http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png" },
    { "name": "AngularJS", "description": "Angular web framework" },
    { "name": "ReactJS", "description": "Facebook's supercool framework" },
    { "name": "Backbone", "description": "JS framework" },
    { "name": "Gulp", "description": "Gulp build tool" },
    { "name": "NodeJS", "description": "NodeJS" }
  ];

  $timeout(function(){
    vm.apiWait = false;
  },1000)

}
