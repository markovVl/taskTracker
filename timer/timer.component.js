'use strict';

angular.
module('timer').
component('timer', {
    templateUrl: 'timer/timer.html',

    controller: timer

  })

  timer.$inject = ['$scope', '$interval', ];
/* @ngInject */
function timer($scope, $interval) {
  //...
  $scope.timeInMs = 0;

     var countUp = function() {
         $scope.timeInMs+= 1;
     }

     var t = $interval(countUp, 1000);

     $scope.stop = function(){

       if (t !== null) {
         $interval.cancel(t);
         t = null;
       } else {
         t = $interval(countUp, 1000);
       }


        }

}
