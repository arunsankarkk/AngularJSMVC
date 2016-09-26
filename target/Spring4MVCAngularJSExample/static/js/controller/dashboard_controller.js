'use strict';

App.controller('dashboardCtrl', ['$scope', '$state', function($scope, $state) {
	
	$scope.title = "Dashboard View"
	$scope.loadPlayers = loadPlayers;
	$scope.createPlayer = createPlayer;
	$scope.loadTeamList = loadTeamList;
	
	$scope.dashboard={"teamList": []};
	
	function loadPlayers() {
		
	}
	
	function createPlayer() {
		$state.go('user');
	}
	
	function loadTeamList() {
		dashboard.teamList = dashboardService.loadTeamList();
		
	}
	
}]);