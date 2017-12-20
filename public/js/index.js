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
// siteMap
var siteMapList = {
    AWeather: {
        name:  'AWeather',
        href:  'portfolio/weather-push-notification-alarm-application',
        title: 'AWeather - UX Case study: Weather notification application'
    },
    IGTracker: {
        name:  'IGTracker',
        href:  'portfolio/instagram-tracker-application-igtracker-design',
        title: 'IGTracker - UX Case study: Instagram Tracking Application UI Design'
    },
    Insharior: {
        name:  'Insharior',
        href:  'portfolio/insharior-ux-case-study-user-experience-design',
        title: 'Insharior - UX Case study: Interior item sharing mobile application design'
    },
    Neighbors: {
        name:  'Neighbors',
        href:  'portfolio/dream-drim-korea-apartment-application',
        title: 'Neighbors - SNS application for neighborhood UI Design'
    },
    UnivCam: {
        name:  'UnivCam',
        href:  'portfolio/album-image-sort-application-univcam',
        title: 'UnivCam - UX Case study: Album sorting application UI/UX design'
    },
    Memoree: {
        name:  'Memoree',
        href:  'portfolio/memory-record-application-ui-design',
        title: 'Memoree - Minimal UI/UX design for iOS'
    },
    Sprinter: {
        name:  'Sprinter',
        href:  'portfolio/todo-task-list-manage-application-sprinter',
        title: 'Sprinter - ToDo list & task management application UI/UX design'
    },
    Suhyup: {
        name:  'Suhyup',
        href:  'portfolio/suhyup-mobile-banking-ui-ux-renewal',
        title: 'Suhyup - Mobile Banking Application UI/UX Renewal'
    },
    FlatIcons: {
        name:  'Flat Icons',
        href:  'portfolio/flaticon-vector-graphic-illustration-design',
        title: 'Minimal vector flat icon design'
    },
    CSSVariables: {
        name:  'CSS Variables',
        href:  'article/css-custom-properties-variables-usage',
        title: 'Using variables(custom properties) in CSS3'
    },
    Jekyll: {
        name:  'Jekyll',
        href:  'article/free-github-blog-and-hosting-with-jekyll',
        title: 'Free GitHub blog and Hosting with Jekyll'
    },
    Material: {
        name:  'Material',
        href:  'article/creative-pros-cons-google-material-design',
        title: 'Cons and Pros of Material design by Google'
    },
    Bodymovin: {
        name:  'Bodymovnin',
        href:  'article/bodymovin-airbnb-lottie-after-effects',
        title: 'How to use Bodymovin for After Effects by Airbnb'
    },
    Firebase: {
        name:  'Firebase',
        href:  'article/connecting-domain-with-google-firebase',
        title: 'Using Firebase to host website for free!'
    },
    Musics: {
        name:  'Musics',
        href:  'article/spemer-music',
        title: 'Musics by Spemer'
    }
}
const siteMapNav = document.querySelector('.siteMapNav');
for (let key in siteMapList) {
    let listNode = document.createElement("li");
    let hrefNode = document.createElement("a");
    hrefNode.href = "https://spemer.com/" + siteMapList[key].href + ".html";
    hrefNode.title = siteMapList[key].title;
    let textNode = document.createTextNode(siteMapList[key].name);
    siteMapNav.appendChild(listNode);
    listNode.appendChild(hrefNode);
    hrefNode.appendChild(textNode);
}


//
// TopBtn
const prevNextHome = document.querySelector('#prevNext');
const body = document.body,
    html = document.documentElement;
const height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
const topBtnNode = document.createElement("a");
topBtnNode.setAttribute('data-scroll', '');
topBtnNode.href = "body";
topBtnNode.title = "Top";
topBtnNode.className = "prevNextTop";
if (height < 20000)
{
    topBtnNode.setAttribute('onmouseover', 'topUp()');
    topBtnNode.setAttribute('onmouseleave', 'topDn()');
}
const topBtnBold = document.createElement("b");
const topBtnIcon = document.createElement("i");
topBtnIcon.className = "fa" + " " + "fa-angle-up";
topBtnIcon.setAttribute('aria-hidden', 'true');
const topTextNode = document.createTextNode(" Top");
prevNextHome.appendChild(topBtnNode);
topBtnNode.appendChild(topBtnBold);
topBtnBold.appendChild(topBtnIcon);
topBtnBold.appendChild(topTextNode);


//
// Footer snsIcon
var snsIconList = {
    Twitter: {
        href : 'twitter.com/OfficialSpemer',
        title : 'Twitter',
        iconID : 'twIcon',
        iconClass : 'twitter'
    },
    GitHub: {
        href : 'github.com/spemer',
        title : 'GitHub',
        iconID : 'ghIcon',
        iconClass : 'github'
    },
    FaceBook: {
        href : 'facebook.com/ghsspower',
        title : 'FaceBook',
        iconID : 'fbIcon',
        iconClass : 'facebook'
    },
    Instagram: {
        href : 'instagram.com/spemer/',
        title : 'Instagram',
        iconID : 'InIcon',
        iconClass : 'instagram'
    },
    LinkedIn: {
        href : 'www.linkedin.com/in/hyouk-seo-0b6801122/',
        title : 'LinkedIn',
        iconID : 'liIcon',
        iconClass : 'linkedin'
    },
    Dribbble: {
        href : 'dribbble.com/spemer',
        title : 'Dribbble',
        iconID : 'drIcon',
        iconClass : 'dribbble'
    },
    Medium: {
        href : 'medium.com/@spemer',
        title : 'Medium',
        iconID : 'medIcon',
        iconClass : 'medium'
    },
    Behance: {
        href : 'behance.net/spemer',
        title : 'Behance',
        iconID : 'beIcon',
        iconClass : 'behance'
    }
}
const snsIcon = document.querySelector('#snsIcon');
for (let key in snsIconList) {
    let snsNode = document.createElement("a");
    snsNode.title = snsIconList[key].title + "(new tab)";
    snsNode.href = "https://" + snsIconList[key].href;
    snsNode.target = "_blank";
    let iconNode = document.createElement("i");
    iconNode.id = snsIconList[key].iconID;
    iconNode.className = "fa fa-" + snsIconList[key].iconClass;
    iconNode.setAttribute('aria-hidden', 'true');
    snsIcon.appendChild(snsNode);
    snsNode.appendChild(iconNode);
}


//
// Code with Love by Hyouk Seo(Spemer)
const codeBy = document.querySelector('#codeBySpemer');
const codeIconNode = document.createElement("i");
codeIconNode.className = "fa fa-code";
codeIconNode.setAttribute('aria-hidden', 'true');
const topTextNode1 = document.createTextNode(" with ");
const loveIconNode = document.createElement("i");
loveIconNode.className = "fa fa-heart";
loveIconNode.setAttribute('aria-hidden', 'true');
const topTextNode2 = document.createTextNode(" by Hyouk Seo(Spemer)");
codeBy.appendChild(codeIconNode);
codeBy.appendChild(topTextNode1);
codeBy.appendChild(loveIconNode);
codeBy.appendChild(topTextNode2);


//
//topBtnFixed
const fixedTopBtn = document.querySelector('#topBtnFixed');
const fixedTopBtnLink = document.createElement("a");
fixedTopBtnLink.setAttribute('data-scroll', '');
fixedTopBtnLink.href = "body";
fixedTopBtnLink.className = "prevNextTop2";
if (height < 20000)
{
    fixedTopBtnLink.setAttribute('onmouseover', 'topUp()');
    fixedTopBtnLink.setAttribute('onmouseleave', 'topDn()');
}
const fixedTopBtnIcon = document.createElement("i");
fixedTopBtnIcon.className = "fa fa-chevron-circle-up topBtn";
fixedTopBtnIcon.title = "Top";
fixedTopBtnIcon.setAttribute('aria-hidden', 'true');
fixedTopBtn.appendChild(fixedTopBtnLink);
fixedTopBtnLink.appendChild(fixedTopBtnIcon);