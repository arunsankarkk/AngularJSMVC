package com.websystique.springmvc.dao;

import java.util.List;

import com.websystique.springmvc.model.Team;

public class DashboardDaoImpl extends AbstractDao<Integer, Team> implements DashboardDao {

	@Override
	public List<Team> getTeamList() {
		return getTeamList();
	}

}
