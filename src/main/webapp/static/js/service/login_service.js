'use strict';

angular.module('myApp').factory('LoginService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_LOGIN_URI = 'http://localhost:8080/SpringMVCAngular/login';
    
    var factory = {
            login:login
        };
    
    return factory;
    
    function login(login) {
    	var deferred = $q.defer();
        $http.post(REST_SERVICE_LOGIN_URI, login)
            .then(
            function (response) {
                deferred.resolve(login);
            },
            function(errResponse){
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);