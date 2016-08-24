'use strict';

angular.module('myApp').controller('IndexController', ['$state', '$scope','$rootScope', function( $state, $scope, $rootScope) {
	
	var login = this;
     
	$rootScope.navigateToLogin = false;
	$scope.signIn = signIn;
     
     function signIn() {
    	$rootScope.navigateToLogin = true;
    	$state.go('login');
    }
	
}]);