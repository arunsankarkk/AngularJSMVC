package com.websystique.springmvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.websystique.springmvc.dao.DashboardDao;
import com.websystique.springmvc.model.Team;

public class DashboardServiceImpl implements DashboardService {

	
	@Autowired
	private DashboardDao dashboardDao;
	
	@Override
	public List<Team> getTeamList() {
		return dashboardDao.getTeamList();
	}

}
