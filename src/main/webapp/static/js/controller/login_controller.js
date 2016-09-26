'use strict';

angular.module('myApp').controller('LoginCtrl', ['$scope', 'LoginService', '$state',
                                function($scope, LoginService, $state) {
	
	var loginObj = this;
	$scope.username='';
	$scope.password='';
    
	$scope.signIn = signIn;
    
     function signIn() {
    	 var parms = {'username': this.username, 'password':this.password}
    	LoginService.login(parms)
    	.then( function(response) {
        	$state.go('dashboard');
    	}).then( function(reject) {
    		console.log("Error in Logging in");
    	});
    	
    }
	
}]);