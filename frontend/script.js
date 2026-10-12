
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.title = "Student Management";
    $scope.label = "student name";
    $scope.item = "";
    $scope.items = [];
    $scope.message = "";

    $scope.add = function() {
        if ($scope.item.trim() !== "") {
            $scope.items.push($scope.item);
            $scope.item = "";
            $scope.message = "Record added successfully!";
        } else {
            $scope.message = "Please enter a value";
        }
    };

    $scope.show = function() {
        $scope.message = "Total records: " + $scope.items.length;
    };

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
        $scope.message = "Record deleted";
    };

    $scope.clear = function() {
        $scope.items = [];
        $scope.message = "All records cleared";
    };

});
