angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })
    .state('courses', {
      url: '/courses',
      template: '<courses></courses>'
    })
    .state('classRoom', {
      url: '/class/:courseId',
      template: '<class-room></class-room>'
    });
}
