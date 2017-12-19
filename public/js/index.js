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
    'portfolio/weather-push-notification-alarm-application',
    'portfolio/instagram-tracker-application-igtracker-design',
    'portfolio/insharior-ux-case-study-user-experience-design',
    'portfolio/dream-drim-korea-apartment-application',
    'portfolio/album-image-sort-application-univcam',
    'portfolio/memory-record-application-ui-design',
    'portfolio/todo-task-list-manage-application-sprinter',
    'portfolio/suhyup-mobile-banking-ui-ux-renewal',
    'portfolio/flaticon-vector-graphic-illustration-design',
    'article/css-custom-properties-variables-usage',
    'article/free-github-blog-and-hosting-with-jekyll',
    'article/creative-pros-cons-google-material-design',
    'article/bodymovin-airbnb-lottie-after-effects',
    'article/connecting-domain-with-google-firebase',
    'article/spemer-music'
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
    linkNode.href = "https://spemer.com/" + siteMapNavHref[i] + ".html";
    var textNode = document.createTextNode(siteMapNavList[i]);
    siteMapNav.appendChild(listNode);
    listNode.appendChild(linkNode);
    linkNode.appendChild(textNode);
}


var prevNextHome = document.querySelector('#prevNext');
var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var topBtnNode = document.createElement("a");
topBtnNode.setAttribute('data-scroll', '');
topBtnNode.href = "body";
topBtnNode.title = "Top";
topBtnNode.className = "prevNextTop";
if (height < 22000)
{
    topBtnNode.setAttribute('onmouseover', 'topUp()');
    topBtnNode.setAttribute('onmouseleave', 'topDn()');
}
var topBtnBold = document.createElement("b");
var topBtnIcon = document.createElement("i");
topBtnIcon.className = "fa" + " " + "fa-angle-up";
topBtnIcon.setAttribute('aria-hidden', 'true');
var topTextNode = document.createTextNode(" Top");

prevNextHome.appendChild(topBtnNode);
topBtnNode.appendChild(topBtnBold);
topBtnBold.appendChild(topBtnIcon);
topBtnBold.appendChild(topTextNode);

//snsIcon
var snsIconLink = [
    'twitter.com/OfficialSpemer',
    'github.com/spemer',
    'facebook.com/ghsspower',
    'instagram.com/spemer/',
    'www.linkedin.com/in/hyouk-seo-0b6801122/',
    'dribbble.com/spemer',
    'medium.com/@spemer',
    'behance.net/spemer'
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
    'twitter',
    'github',
    'facebook',
    'instagram',
    'linkedin',
    'dribbble',
    'medium',
    'behance'
];
var snsEach = '';
var snsIcon = document.querySelector('#snsIcon');
for (i = 0; i < snsIconLink.length; i++)
{
    var snsNode = document.createElement("a");
    snsNode.title = snsIconTitle[i];
    snsNode.href = "https://" + snsIconLink[i];
    snsNode.target = "_blank";
    var iconNode = document.createElement("i");
    iconNode.id = iconID[i];
    iconNode.className = "fa fa-" + iconClass[i];
    iconNode.setAttribute('aria-hidden', 'true');
    snsIcon.appendChild(snsNode);
    snsNode.appendChild(iconNode);
}