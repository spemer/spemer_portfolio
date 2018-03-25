//
// lazyloader
(function(){
    var getEveryImg = document.querySelectorAll('img');
    if (getEveryImg.length > 0)
    {
        $(function(){
            $('.lazy').lazy({
            });
        });
    }
})();

//
// feather
(function(){
    var getFeatherClass = document.querySelectorAll('.feather');
    if (getFeatherClass.length > 0)
    {
        $("a.feather").featherlightGallery({
            closeIcon: null,
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "anywhere",
            galleryFadeIn: 250,
            galleryFadeOut: 250,
            nextIcon: false,
            previousIcon: false
        });
    }
})();

//
// clipboard
(function(){
    var getClipboard = document.querySelectorAll('a #foo');
    if (getClipboard.length > 0)
    {
        var clipboard = new Clipboard('.btn');
    }
})();

//
// smooth anchor scroll
(function(){
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
    });
})();

//
// hamburger
$(".siteMapBtn").click(function() {
    $(".siteMapNav").toggle("display")
}),
function() {
    function d(a) {
        a.addEventListener("click", function(a) {
            a.preventDefault(), this.classList.contains("is-active") === !0 ? this.classList.remove("is-active") : this.classList.add("is-active")
        })
    }
    for (var a = document.querySelectorAll(".c-hamburger"), b = a.length - 1; b >= 0; b--) {
        var c = a[b];
        d(c)
    }
}();

// beusable.js
(function(){
    var getBody = document.querySelector('body');
    var setScript = document.createElement('script');
    setScript.setAttribute('defer', '');
    setScript.setAttribute('src', 'https://spemer.com/js/dist/beusable.js');
    getBody.appendChild(setScript);
})();

//
// other funcs
function topUp() {
    $('.fa-angle-up').addClass('topUp');
    $('.fa-angle-up').removeClass('topUp2');
}
function topDn() {
    $('.fa-angle-up').addClass('topUp2');
    $('.fa-angle-up').removeClass('topUp');
}
function nextRight() {
    $('.fa-angle-double-right').addClass('nextRight');
    $('.fa-angle-double-right').removeClass('nextRight2');
}
function nextRightDel() {
    $('.fa-angle-double-right').addClass('nextRight2');
    $('.fa-angle-double-right').removeClass('nextRight');
}
function nextLeft() {
    $('.fa-angle-double-left').addClass('nextLeft');
    $('.fa-angle-double-left').removeClass('nextLeft2');
}
function nextLeftDel() {
    $('.fa-angle-double-left').addClass('nextLeft2');
    $('.fa-angle-double-left').removeClass('nextLeft');
}
function addTooltip() {
    $('.copied').removeClass('tooltip');
}
function removeTooltip() {
    $('.copied').addClass('tooltip');
}

console.log(
"\n",
"███████╗██████╗ ███████╗███╗   ███╗███████╗██████╗\n",
"██╔════╝██╔══██╗██╔════╝████╗ ████║██╔════╝██╔══██╗\n",
"███████╗██████╔╝█████╗  ██╔████╔██║█████╗  ██████╔╝\n",
"╚════██║██╔═══╝ ██╔══╝  ██║╚██╔╝██║██╔══╝  ██╔══██╗\n",
"███████║██║     ███████╗██║ ╚═╝ ██║███████╗██║  ██║\n",
"╚══════╝╚═╝     ╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝\n",
""
);