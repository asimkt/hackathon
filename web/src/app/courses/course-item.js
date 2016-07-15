angular
  .module('app')
  .component('courseItem', {
    templateUrl: 'app/courses/course-item.html',
    bindings: {
      course: '<'
    }
  });
