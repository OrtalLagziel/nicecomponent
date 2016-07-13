var app = angular.module('App', [
  'niceaddmodule'
]);

app.controller('BaseCtrl', function($scope) {
  'use strict';

  $scope.myName = 'Scott';
});
