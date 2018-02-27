/*
 * 2016 Webha
 * 
 * */
(function(window, angular){
	'use strict';
	
	var app = angular.module('WebhaApp',['common']);
	app.service('topMenu',[function(){		
		this.list = [
			{name : 'ex1'},
			{name : 'ex2'},
			{name : 'ex3'},
			{name : 'ex4'},
			{name : 'ex5'}
		];
	}]);	
	app.controller('WebhaController',['$scope','topMenu',function($scope,topMenu){
		$scope.topMenu = topMenu.list;
		$scope.app = {
			logo : 'Webha AngularJS',
			topMenuIdx : 0
		}
		$scope.topMenuClick = function(i){
			$scope.app.topMenuIdx = i;
		}
	}]);
})(window,window.angular);