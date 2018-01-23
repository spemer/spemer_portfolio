/*
 * 2016 Webha
 * 
 * */
(function() {
	'use strict';

	var bodyParser = require('body-parser');
	
	module.exports = function(app,dirname) {
		function viewResolver(req, res, dir, html){
			app.engine('.html', require('ejs').__express).set('views', dirname + '/resource/view/' + dir);
			app.set('view engine', 'html').use(bodyParser.urlencoded({extended : true})).use(bodyParser.json());
			if(req.session){
				res.render(html, {'memberName' : req.session.memberName,'loginId' : req.session.loginId});
			}else{
				res.render(html, {'memberName' : ''});
			}
		}
		//SPA
		app.get('/', function(req, res) { 
			viewResolver(req, res,'main','index'); 
			console.log('페이지 요청');
		});
	};	
})();