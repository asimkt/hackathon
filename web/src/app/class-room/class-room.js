angular
  .module('app')
  .component('classRoom', {
    templateUrl: 'app/class-room/class-room.html',
    controller: CourseController
  });

/** @ngInject */
function CourseController(ngDialog) {
  var vm = this;

  vm.startTest = function(){
    ngDialog.open({
        template: 'app/class-room/user-evaluation-dialog.html'
    });
    // ngDialog.open({ template: 'userEvaluationDialog', className: 'ngdialog-theme-default' });
  }
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
