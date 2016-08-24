<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>  
    <title>User Registration screen</title>  
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
     <link href="<c:url value='/static/css/app.css' />" rel="stylesheet"></link>
     <link href="<c:url value='/static/css/userscreen.css' />" rel="stylesheet"></link>
  </head>
  
   <body ng-app="myApp">
   <div ng-controller="IndexController as indexCtrl" class="nav navbar-nav" ng-if="!navigateToLogin">
   <form  ng-submit="signIn()" name="myForm1" class="form-horizontal">
	   	<div><p>TEST APPLICATION</p>
	   		<div>
	   			 <input type="submit"  class="btn btn-warning btn-sm" />
	   		</div>
	   	</div>
   	 </form>
   	   	 
   	 </div>
       <div class="contentpanel" id="contentpanel">
			<div ui-view="main"></div>
		</div>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
      <script src="static/lib/angular-ui-router.min.js"></script>
      <script src="static/js/app.js"></script>
      <script src="static/js/service/user_service.js"></script>
      <script src="static/js/controller/user_controller.js"></script>
      <script src="static/js/controller/login_controller.js"></script>
      <script src="static/js/service/login_service.js"></script>
	  <script src="static/js/controller/indexController.js"></script>
      
    </body>
</div>