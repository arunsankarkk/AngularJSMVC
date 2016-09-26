package com.websystique.springmvc.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.websystique.springmvc.model.Team;
import com.websystique.springmvc.service.DashboardService;

@RestController
public class DashboardRestController {
	
	private DashboardService dashboardService;
	
	@RequestMapping(path="/loadTeamList", method=RequestMethod.GET)
	public ResponseEntity<List<Team>> getTeamList() {
		List<Team> teamList = dashboardService.getTeamList();
		
		if(teamList.isEmpty()){
            return new ResponseEntity<List<Team>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
		
        return new ResponseEntity<List<Team>>(teamList,HttpStatus.OK);
	}

}
