/*
 * 2016 Webha
 * 
 * */
(function() {
	'use strict';
	
	var express = require('express'),
		app = express();
	
	//static 
	app.use('/resource', express.static('./resource'));
	require('./server/route')(app,__dirname);
	
	app.listen(3300);
	
})();