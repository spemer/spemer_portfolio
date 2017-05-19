/*
 * 2016 Webha
 * 
 * */
(function() {
	'use strict';
	
	var bodyParser = require('body-parser'),
		session = require('express-session'),
		cookieParser = require('cookie-parser');
	
	module.exports = function(app,dirname) {
		
		//support json encoded bodies (for POST)
		app.use(bodyParser.json()); 
		app.use(bodyParser.urlencoded({ extended: true }));
		
		//mapper url
		require('./controller')(app,dirname);
	};	
})();