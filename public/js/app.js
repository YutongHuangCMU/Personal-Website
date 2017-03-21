var app = angular.module("personalWebsite", ["ngRoute", "ngResource"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        });
});