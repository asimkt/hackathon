angular
  .module('app')
  .component('videoPlayer', {
    templateUrl: 'app/class-room/video-player.html',
    bindings: {
      video: '<',
      onVideoEnded: '&'
    }
  });