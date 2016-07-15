angular
  .module('app')
  .component('playList', {
    templateUrl: 'app/class-room/play-list.html',
    bindings: {
      playListData: '<'
    }
  });
