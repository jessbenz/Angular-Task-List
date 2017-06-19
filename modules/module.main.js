angular.module("mainModule", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider.
        when("/home", {templateUrl: "partials/home.html", controller:MainController}).
        when("/about", {templateUrl: "partials/about.html", controller:AboutController}).
        
        otherwise({redirectTo: "/home", templateUrl: "partials/home.html"}) // fall back
});