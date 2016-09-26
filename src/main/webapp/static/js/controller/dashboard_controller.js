'use strict';

App.controller('dashboardCtrl', ['$scope', '$state', function($scope, $state) {
	
	$scope.title = "Dashboard View"
	$scope.loadPlayers = loadPlayers;
	$scope.createPlayer = createPlayer;
	$scope.loadTeamList = loadTeamList;
	
	$scope.dashboard={"teamList": []};
	
	$scope.VIEWTEAMMODE = false;
	$scope.MAIN_DASHBOARD_VIEW = true;
	
	resetViews('MAIN_DASHBOARD_VIEW');
	
	function loadPlayers() {
		
	}
	
	function createPlayer() {
		$state.go('user');
	}
	
	function loadTeamList() {
		dashboard.teamList = dashboardService.loadTeamList()
		.then( function (response) {
			resetViews('VIEWTEAMMODE');
			$scope.dashboard.teamList = dashboardService.loadTeamList();
        }).then( function(reject) {
    		console.log("Error in Logging in");
    	});
        
	 return deferred.promise;
		
	}
	
	var resetViews = function (flag) {
		if(flag === 'MAIN_DASHBOARD_VIEW') {
			$scope.MAIN_DASHBOARD_VIEW = true;
			$scope.VIEWTEAMMODE = false;
		} else if (flag === 'VIEW_TEAM_MODE') {
			$scope.MAIN_DASHBOARD_VIEW = false;
			$scope.VIEWTEAMMODE = true;
		}
	}
	
}]);