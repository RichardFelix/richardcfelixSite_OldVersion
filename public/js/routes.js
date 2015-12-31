(function(){

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function ($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/',{
                template: '<a href="/menu"> <h1 id="menuButton" class="box boxhover col-6 middle animated zoomInDown">Enter</h1>'
            })
            .when('/menu',{
                templateUrl: '/partials/menu.html'
            })
            .when('/about',{
                templateUrl: '/partials/about.html'
            })
            .when('/resume',{
                templateUrl: '/partials/resume.html'
            })
            .when('/projects',{
                templateUrl: '/partials/projects.html'
            })
            .otherwise({ redirectTo: '/' });
        
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    });
    
}());