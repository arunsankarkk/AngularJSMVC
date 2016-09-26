'use strict';

App.factory('LoginService', ['urlConstants','httpService','$rootScope','$q', function(urlConstants, httpService, $rootScope, $q){

    var loginfactory = {
            login:login
        };
    
    return loginfactory;
    
    function login(login) {
    	var deferred = $q.defer(); 
    	httpService.post(urlConstants.REST_SERVICE_LOGIN_URI, login)
    	.then(
            function (response) {
                deferred.resolve(login);
            },
            function(errResponse){
                deferred.reject(errResponse);
            });
    	 return deferred.promise;
    }

}]);