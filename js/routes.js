(function(){

    var app = angular.module('myApp', ['ngRoute']);
    
    app.config(function ($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/',{
                template: '<a href="/menu"> <h1 id="menuButton" class="box boxhover col-6 middle animated zoomIn">Menu</h1>'
            })
            .when('/menu',{
                templateUrl: '../views/partials/menu.html'
            })
            .when('/about',{
                templateUrl: '../views/partials/about.html'
            })
            .when('/resume',{
                templateUrl: '../views/partials/resume.html'
            })
            .when('/projects',{
                templateUrl: '../views/partials/projects.html'
            })
            .when('/contact',{
                templateUrl: '../views/partials/contact.html'
            })
            .otherwise({ redirectTo: '/' });
        
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    });
    
}());