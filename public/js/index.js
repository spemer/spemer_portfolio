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
//
function addTooltip() {
    "use strict";
    $('.copied').removeClass('tooltip');
}
function removeTooltip() {
    "use strict";
    $('.copied').addClass('tooltip');
}
//

//siteMap
var siteMapNavList = [
    'AWeather',
    'IGTracker',
    'Insharior',
    'Neighbors',
    'UnivCam',
    'Memoree',
    'Sprinter',
    'Suhyup',
    'Flat Icons',
    'CSS Variables',
    'Jekyll',
    'Material',
    'Bodymovin',
    'Firebase',
    'Musics'
];
var siteMapNavHref = [
    'https://spemer.com/portfolio/weather-push-notification-alarm-application.html',
    'https://spemer.com/portfolio/instagram-tracker-application-igtracker-design.html',
    'https://spemer.com/portfolio/insharior-ux-case-study-user-experience-design.html',
    'https://spemer.com/portfolio/dream-drim-korea-apartment-application.html',
    'https://spemer.com/portfolio/album-image-sort-application-univcam.html',
    'https://spemer.com/portfolio/memory-record-application-ui-design.html',
    'https://spemer.com/portfolio/todo-task-list-manage-application-sprinter.html',
    'https://spemer.com/portfolio/suhyup-mobile-banking-ui-ux-renewal.html',
    'https://spemer.com/portfolio/flaticon-vector-graphic-illustration-design.html',
    'https://spemer.com/article/css-custom-properties-variables-usage.html',
    'https://spemer.com/article/free-github-blog-and-hosting-with-jekyll.html',
    'https://spemer.com/article/creative-pros-cons-google-material-design.html',
    'https://spemer.com/article/bodymovin-airbnb-lottie-after-effects.html',
    'https://spemer.com/article/connecting-domain-with-google-firebase.html',
    'https://spemer.com/article/spemer-music.html'
];
var siteMapNavTitle = [
    'AWeather - UX Case study: Weather notification application',
    'IGTracker - UX Case study: Instagram Tracking Application UI Design',
    'Insharior - UX Case study: Interior item sharing mobile application design',
    'Neighbors - SNS application for neighborhood UI Design',
    'UnivCam - UX Case study: Album sorting application UI/UX design',
    'Memoree - Minimal UI/UX design for iOS',
    'Sprinter - ToDo list & task management application UI/UX design',
    'Suhyup - Mobile Banking Application UI/UX Renewal',
    'Minimal vector flat icon design',
    'Using variables(custom properties) in CSS3',
    'Free GitHub blog and Hosting with Jekyll',
    'Cons and Pros of Material design by Google',
    'How to use Bodymovin for After Effects by Airbnb',
    'Using Firebase to host website for free!',
    'Musics by Spemer'
];
var i, navEach = "";
var siteMapNav = document.querySelector('.siteMapNav');
for (i = 0; i < siteMapNavList.length; i++)
{
    var listNode = document.createElement("li");
    var linkNode = document.createElement("a");
    linkNode.title = siteMapNavTitle[i];
    linkNode.href = siteMapNavHref[i];
    var textNode = document.createTextNode(siteMapNavList[i]);
    siteMapNav.appendChild(listNode);
    listNode.appendChild(linkNode);
    linkNode.appendChild(textNode);
    //navEach += '<li><a>' + siteMapNavList[i] + '</a></li>';
}
//siteMapNav.innerHTML = (navEach);


//snsIcon
var snsIconLink = [
    'https://twitter.com/OfficialSpemer',
    'https://github.com/spemer',
    'https://facebook.com/ghsspower',
    'https://instagram.com/spemer/',
    'https://www.linkedin.com/in/hyouk-seo-0b6801122/',
    'https://dribbble.com/spemer',
    'https://medium.com/@spemer',
    'https://behance.net/spemer'
];
var snsIconTitle = [
    'Twitter',
    'GitHub',
    'FaceBook',
    'Instagram',
    'LinkedIn',
    'Dribbble',
    'Medium',
    'Behance'
];
var iconID = [
    'twIcon',
    'ghIcon',
    'fbIcon',
    'inIcon',
    'liIcon',
    'drIcon',
    'medIcon',
    'beIcon'
];
var iconClass = [
    'fa-twitter',
    'fa-github',
    'fa-facebook',
    'fa-instagram',
    'fa-linkedin',
    'fa-dribbble',
    'fa-medium',
    'fa-behance'
];
var j, snsEach = '';
var snsIcon = document.querySelector('#snsIcon');
for (j = 0; j < snsIconLink.length; j++)
{
    var snsNode = document.createElement("a");
    snsNode.title = snsIconTitle[j];
    snsNode.href = snsIconLink[j];
    snsNode.target = "_blank";
    var iconNode = document.createElement("i");
    iconNode.id = iconID[j];
    iconNode.className = "fa " + iconClass[j];
    snsIcon.appendChild(snsNode);
    snsNode.appendChild(iconNode);
}
