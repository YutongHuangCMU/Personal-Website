var app = angular.module("personalWebsite");
app.controller("homeController", function($scope, $http, $location) {

    $scope.initialize = function (showForm, showMessage) {
        $scope.showForm = showForm;
        $scope.showMessage = showMessage;
    };
    $scope.initialize(true, false);

    $scope.submit = function() {
        $http.post("/contact/sendMessage", {
            name: $scope.name,
            email: $scope.email,
            message: $scope.message
        })
            .success( function(data) {
                $scope.initialize(true, true);
            });
    };
});

