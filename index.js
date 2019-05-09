"use strict";
{
    angular.module('app',['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    template:'<home></home>'
                })
                .when('/about', {
                    template:'<about></about>'
                })
                .when('/skills', {
                    template:'<skills></skills>'
                })
                
                .otherwise({
                    template: '<h1>404</h1>'
                });
        });
}