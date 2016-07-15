angular
  .module('app')
  .component('playList', {
    templateUrl: 'app/class-room/play-list.html',
    bindings: {
      playListData: '<'
    }
  });

angular
  .module('app')
  .component('playListItem', {
    templateUrl: 'app/class-room/play-list-item.html',
    bindings: {
      video: '<'
    }
  });
