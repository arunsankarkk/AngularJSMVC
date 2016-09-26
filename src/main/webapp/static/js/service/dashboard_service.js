/**
 * 
 */

App.service('dashboardService', ['urlConstants','$q', function(urlConstants, $q) {
	
	this.loadTeamList = function() {
		var deferred = $q.defer(); 
    	httpService.get(urlConstants.GET_TEAM_LIST)
    	.then(
            function (response) {
                deferred.resolve(response);
            },
            function(errResponse){
                deferred.reject(errResponse);
            });
    	 return deferred.promise;
    	
	}
	
	
}]);