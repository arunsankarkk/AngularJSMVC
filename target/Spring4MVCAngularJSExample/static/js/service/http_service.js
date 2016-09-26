/**
 * 
 */

'use strict';
App.factory('httpService', ['$http','$q', function($http,$q) {
	
		    
	var http_service = {
		post:post,
		get: get
	};
	return http_service;
	
	function post(url, paramObj){
		var deferred = $q.defer();
        $http.post(url, paramObj)
            .then(
            function (response) {
                deferred.resolve(paramObj);
            },
            function(errResponse){
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
	}
	
	function get() {
		
	}
	
	
}]);