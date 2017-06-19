angular.module("taskList", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/home", {templateUrl: "partials/home.html", controller:'homeController'})
        .when("/about", {templateUrl: "partials/about.html", controller:'aboutController'})
        
        .otherwise({redirectTo: "/home", templateUrl: "partials/home.html"}) // fall back
});