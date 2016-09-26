'use strict';

var App = angular.module('myApp',['ui.router']);

App.config(['$stateProvider', function($stateProvider) {

$stateProvider
.state('login', {
    url: "/login",
    views: {
        "main": {
            templateUrl: "login",
            controller: "LoginCtrl"
        }
    }
})
.state('user', {
    url: "/user",
    views: {
          "main": {
              templateUrl: "UserManagement",
              controller: "UserController"
          }
    }
	}).state('dashboard', {
		url: "/dashboard",
		views:{
			"main":{
				templateUrl:"dashboard",
				controller:"dashboardCtrl"
			}
		}
	});
	// $urlRouterProvider.otherwise({redirectTo: '/login'});

/*$routeProvider.when('/', {templateUrl: 'login.jsp', controller: "LoginCtrl as lgctrl"});
$routeProvider.when('/User', {templateUrl: 'userManagemet.jsp', controller: "UserController"});


$routeProvider.otherwise({ redirectTo: "/"});*/


}]);


