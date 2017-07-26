smoothScroll.init({
	speed: 1000,
	easing: 'easeOutQuad',
	offset: 0,
	updateURL: false,
});

$(".siteMapBtn").click(function(){$(".siteMapNav").toggle("display")}),function(){"use strict";function d(a){a.addEventListener("click",function(a){a.preventDefault(),this.classList.contains("is-active")===!0?this.classList.remove("is-active"):this.classList.add("is-active")})}for(var a=document.querySelectorAll(".c-hamburger"),b=a.length-1;b>=0;b--){var c=a[b];d(c)}}();