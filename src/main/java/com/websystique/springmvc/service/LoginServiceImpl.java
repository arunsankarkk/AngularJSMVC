package com.websystique.springmvc.service;

import org.springframework.stereotype.Service;

import com.websystique.springmvc.model.Login;

@Service("loginService")
public class LoginServiceImpl implements LoginService {

	@Override
	public String login(Login login) {
		String result = "success";
		if(login != null) {
			if(!login.getUsername().isEmpty() && !login.getPassword().isEmpty()) {
				if(login.getUsername().equalsIgnoreCase("welcome") && 
						login.getPassword().equalsIgnoreCase("welcome")) {
					result = "success";
				}
			}
		}
		return result;
	}

}
