angular
  .module('app')
  .component('classRoom', {
    templateUrl: 'app/class-room/class-room.html',
    controller: CourseController
  });

/** @ngInject */
function CourseController(ngDialog, $scope) {
  var vm = this;

  vm.startTest = function(){
    ngDialog.open({
        template: 'app/class-room/user-evaluation-dialog.html',
        scope: $scope
    });
    // ngDialog.open({ template: 'userEvaluationDialog', className: 'ngdialog-theme-default' });
  }
  vm.class_room = {
    video_data: {
      link1: 'http://vjs.zencdn.net/v/oceans.mp4',
      link2: 'http://vjs.zencdn.net/v/oceans.webm'
    }
  };
  // vm.startTest();
  $scope.evaluate = function(data){
    console.log('evaluating', data);
    var point = 0;
    if(data.ans1 === 'yes') 
      point++;
    if(data.ans2 === 'no') 
      point++;
    if(data.ans3 === 'yes') 
      point++;

    $scope.$broadcast('evaluate', { point: point });
    ngDialog.closeAll();
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
