'use strict';

App.factory('LoginService', ['urlConstants','httpService', function(urlConstants, httpService){

    var loginfactory = {
            login:login
        };
    
    return loginfactory;
    
    function login(login) {
    	httpService.post(urlConstants.REST_SERVICE_LOGIN_URI, login).then( function(response) {
    		$rootScope.loggedIn = true;
    	}).then( function(reject) {
    	});
    }

}]);