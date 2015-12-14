// get friendsList module created in other file
// var app = angular.module('friendsList');
// creates global variable called app, so to eliminate risk of name collision, you can create the controller immediately, using dot notation, below.

// will get $scope object from angular every time you create a new controller
angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.myName = 'Tyler';
  $scope.homies = [
    {name: 'Dave', age: 29},
    {name: 'Trav', age: 27},
    {name: 'PJ', age: 28},
    {name: 'Anna', age: 27},
    {name: 'Mike', age: 27},
    {name: 'Newton', age: 6}
  ];
  $scope.addFriend = function(name, age) {
    $scope.homies.push({'name': name, 'age': age} );
  };
});
