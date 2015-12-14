// get friendsList module created in other file
var app = angular.module('friendsList');

// will get $scope object from angular every time you create a new controller
app.controller('mainCtrl', function($scope) {
  $scope.myName = 'Tyler';
  $scope.homies = ['Dave', 'Trav', 'PJ', 'Anna', 'Mike', 'Newton', 'Anders'];
  $scope.addFriend = function(name) {
    $scope.homies.push(name);
  };
});
