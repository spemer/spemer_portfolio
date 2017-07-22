function topUp() {
    "use strict";
    
    $('.fa-angle-up').addClass('topUp');
    $('.fa-angle-up').removeClass('topUp2');
}
function topDn() {
    "use strict";
    
    $('.fa-angle-up').addClass('topUp2');
    $('.fa-angle-up').removeClass('topUp');
}

function nextRight() {
    "use strict";
    
    $('.fa-angle-double-right').addClass('nextRight');
    $('.fa-angle-double-right').removeClass('nextRight2');
}
function nextRightDel() {
    "use strict";
    
    $('.fa-angle-double-right').addClass('nextRight2');
    $('.fa-angle-double-right').removeClass('nextRight');
}

function nextLeft() {
    "use strict";
    
    $('.fa-angle-double-left').addClass('nextLeft');
    $('.fa-angle-double-left').removeClass('nextLeft2');
}
function nextLeftDel() {
    "use strict";
    
    $('.fa-angle-double-left').addClass('nextLeft2');
    $('.fa-angle-double-left').removeClass('nextLeft');
}

//

function lineLive2() {
    "use strict";
    
    $('.ready2').removeClass('aboutHover2');
}
function lineDel2() {
    "use strict";
    
    $('.ready2').addClass('aboutHover2');
}

function lineLive3() {
    "use strict";
    
    $('.ready3').removeClass('aboutHover3');
}
function lineDel3() {
    "use strict";
    
    $('.ready3').addClass('aboutHover3');
}



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96234376-1', 'auto');
ga('send', 'pageview');
