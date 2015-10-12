(function(){

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'index.jade'
            })
            .when('/about',{
                templateUrl: 'about.jade'
            })
            .when('/resume',{
                templateUrl: 'resume.jade'
            })
            .when('/projects',{
                templateUrl: 'projects.jade'
            })
            .when('/contact',{
                templateUrl: 'contact.jade'
            })
            .otherwise({ redirectTo: '/' });
    });
    
}());