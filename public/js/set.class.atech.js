(function(){
	let getEveryImg = document.querySelectorAll('img');
	getEveryImg.forEach(function(thisImg)
	{
		thisImg.className += ' ' + 'atechImg'
	});
})();