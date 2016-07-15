angular
  .module('app')
  .component('searchBoxBg', {
    templateUrl: 'app/components/search-box-bg/search-box-bg.html',
    bindings: {
      data: '<',
      callback: '<'
    }
  });
