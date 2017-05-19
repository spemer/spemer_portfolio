/*
 * 2016 Webha
 * 
 * */
(function(window, angular){
	'use strict';
	
	var moduleArray = ['webhaDirective'];
	
	var app = angular.module('common',moduleArray);
	
	app.config(['$httpProvider','$locationProvider',function($httpProvider,$locationProvider){
		$httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';        
		$locationProvider.html5Mode({ 
           enabled : false,
           requireBase : false,
           rewriteLinks : false
        });
    }]);	
	
})(window,window.angular);