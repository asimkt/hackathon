angular
  .module('app')
  .component('videoPlayer', {
    templateUrl: 'app/class-room/video-player.html',
    bindings: {
      video: '<',
      onVideoEnded: '&'
    },
    controller: videoPlayerController
  });

  /** @ngInject */
function videoPlayerController($timeout, $scope) {
  var vm = this;
  console.log('initlazd');
  $scope.$on('evaluate', function (event, args) {
	   $scope.point = args.point;
	   console.log($scope.point);
       var video = document.getElementsByTagName('video')[0];
       var sources = video.getElementsByTagName('source');
	   switch($scope.point) {
	     case 1:
	       console.log('play 1');
           sources[0].src = 'https://embedwistia-a.akamaihd.net/deliveries/adc728d580c8a52275278697d19e1e9f7526f157/file.mp4';
           video.load();
	       break;
	     case 2:
	       console.log('play 2');
	       break;
	     case 3:
	       console.log('play 3');
	       break;
	     default:
	       console.log('play 4');
	       sources[0].src = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
           video.load();
	       break;
	   }
   });
}