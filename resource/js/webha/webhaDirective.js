/*
 * 2016 Webha
 * 
 * */
(function(window, angular){	
	'use strict';
	
	var app = angular.module('webhaDirective',['common']);
	
	app.directive('webhaHeader',[function(){
		var headerHtml = '<div id="header">'+
			'<h1>{{app.logo}}</h1>'+
			'<ul>'+
				'<li ng-repeat="i in topMenu" ng-click="topMenuClick($index)" ng-class="{on:$index == app.topMenuIdx}">{{i.name}}</li>'+
			'</ul>'+
		'</div>';
    	return {
    		//templateUrl : '/template/layout/header.html',
    		template : headerHtml,
    		replace : true,
    		link: function($scope, el, attrs){
    		}
    	}
    }]);
	
	app.directive('webhaFooter',[function(){
    	return {
    		template : '<div id="footer">copyright © 2016 Webha</div>',
    		replace : true,
    		link: function($scope, el, attrs){
    		}
    	}
    }]);
	
	app.directive('testTest',[function(){
    	return {
    		template : '<div>testTest !!!!<div test-test2></div></div>',
    		replace : true,
    		link: function($scope, el, attrs){
    			console.log(attrs.testTest);
    			console.log(attrs.attrTest);
    			console.log($scope,el)
    		}
    	}
    }]);
	
	app.directive('testTest2',[function(){
    	return {
    		template : '<div>testTest2 !!!!</div>',
    		replace : true,
    		link: function($scope, el, attrs){
    		}
    	}
    }]);
	
})(window, window.angular);