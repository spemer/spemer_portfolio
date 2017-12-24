"use strict";
//import siteMapList from 'indexList.js';


function createTextNode(text){
    return document.createTextNode(text);
}
function select(ID_Class){
    return document.querySelector(ID_Class);
}
function create(el){
    return document.createElement(el);
}


//
// meta -> charset
(function(){
    const headTitle = select('head > title');
    const setMeta = create('meta');
    setMeta.setAttribute('charset','utf-8');
    headTitle.after(setMeta);
})();


//
// headerLogo
(function(){
    const _headerLogo = select('#headerLogo');
    const headerLink = create('a');
    headerLink.href = 'https://spemer.com/';
    const headerHeading = create('h1');
    const headerText = createTextNode('Hyouk Seo');
    _headerLogo.appendChild(headerLink);
    headerLink.appendChild(headerHeading);
    headerHeading.appendChild(headerText);
})();


//
// siteMap links
(function(){
    const siteMapList = {
        AWeather: {
            name:  'AWeather',
            href:  'weather-push-notification-alarm-application',
            title: 'AWeather - UX Case study: Weather notification application',
            img: 'weather/thumb.png'
        },
        IGTracker: {
            name:  'IGTracker',
            href:  'instagram-tracker-application-igtracker-design',
            title: 'IGTracker - UX Case study: Instagram Tracking Application UI Design',
            img: 'igtracker/thumb.png'
        },
        Insharior: {
            name:  'Insharior',
            href:  'insharior-ux-case-study-user-experience-design',
            title: 'Insharior - UX Case study: Interior item sharing mobile application design',
            img: 'insharior/thumb.png'
        },
        Neighbors: {
            name:  'Neighbors',
            href:  'dream-drim-korea-apartment-application',
            title: 'Neighbors - SNS application for neighborhood UI Design',
            img: 'dream/cover.png'
        },
        UnivCam: {
            name:  'UnivCam',
            href:  'album-image-sort-application-univcam',
            title: 'UnivCam - UX Case study: Album sorting application UI/UX design',
            img: 'univcam/thumb.png'
        },
        Memoree: {
            name:  'Memoree',
            href:  'memory-record-application-ui-design',
            title: 'Memoree - Minimal UI/UX design for iOS',
            img: 'memoree/thumb.png'
        },
        Sprinter: {
            name:  'Sprinter',
            href:  'todo-task-list-manage-application-sprinter',
            title: 'Sprinter - ToDo list & task management application UI/UX design',
            img: 'sprinter/thumb.png'
        },
        Suhyup: {
            name:  'Suhyup',
            href:  'suhyup-mobile-banking-ui-ux-renewal',
            title: 'Suhyup - Mobile Banking Application UI/UX Renewal',
            img: 'suhyup/thumb.png'
        },
        FlatIcons: {
            name:  'Flat Icons',
            href:  'flaticon-vector-graphic-illustration-design',
            title: 'Minimal vector flat icon design',
            img: 'flaticon/house.jpg'
        }
    }
    const siteMapListArticle = {
        CSSVariables: {
            name:  'CSS Variables',
            href:  'css-custom-properties-variables-usage',
            title: 'Using variables(custom properties) in CSS3',
            img: 'css/thumb.png'
        },
        Jekyll: {
            name:  'Jekyll',
            href:  'free-github-blog-and-hosting-with-jekyll',
            title: 'Free GitHub blog and Hosting with Jekyll',
            img: 'jekyll/thumb.png'
        },
        Material: {
            name:  'Material',
            href:  'creative-pros-cons-google-material-design',
            title: 'Cons and Pros of Material design by Google',
            img: 'material/material.png'
        },
        Bodymovin: {
            name:  'Bodymovin',
            href:  'bodymovin-airbnb-lottie-after-effects',
            title: 'How to use Bodymovin for After Effects by Airbnb',
            img: 'bodymovin/cover.png'
        },
        Firebase: {
            name:  'Firebase',
            href:  'connecting-domain-with-google-firebase',
            title: 'Using Firebase to host website for free!',
            img: 'firebase/firebase_logo.jpg'
        },
        Musics: {
            name:  'Musics',
            href:  'spemer-music',
            title: 'Musics by Spemer',
            img: 'music/cover.jpg'
        }
    }


    //
    // bottom siteMap navigation
    const siteMapNav = select('.siteMapNav');
    for (let key in siteMapList)
    {
        let listNode = create("li");

        let hrefNode = create("a");
        hrefNode.href = "https://spemer.com/portfolio/" + siteMapList[key].href + ".html";
        hrefNode.title = siteMapList[key].title;

        let textNode = createTextNode(siteMapList[key].name);

        siteMapNav.appendChild(listNode);
        listNode.appendChild(hrefNode);
        hrefNode.appendChild(textNode);
    }
    for (let key in siteMapListArticle)
    {
        let listNode = create("li");

        let hrefNode = create("a");
        hrefNode.href = "https://spemer.com/article/" + siteMapListArticle[key].href + ".html";
        hrefNode.title = siteMapListArticle[key].title;

        let textNode = createTextNode(siteMapListArticle[key].name);

        siteMapNav.appendChild(listNode);
        listNode.appendChild(hrefNode);
        hrefNode.appendChild(textNode);
    }


    //
    // index, article.html -> lists
    const indexLists = select('#indexList');
    const articleLists = select('#articleList');
    if (indexLists)
    {
        let indexCount = 0;
        for (let key in siteMapList)
        {
            if (indexCount === 9) {
                break;
            }

            let indexDiv = create('div');
            indexDiv.className = "artImgBoxEach grow";
            let indexLink = create('a');
            indexLink.href = "https://spemer.com/portfolio/" + siteMapList[key].href + ".html";

            let indexFigure = create('figure');

            let figImg = create('img');
            figImg.src = "https://spemer.com/img/works/" + siteMapList[key].img;
            figImg.alt = siteMapList[key].title;
            figImg.title = siteMapList[key].title;

            let figCap = create('figcaption');
            let figStr = create('strong');
            let figTxt = createTextNode(siteMapList[key].name);

            indexLists.appendChild(indexDiv);
            indexDiv.appendChild(indexLink);
            indexLink.appendChild(indexFigure);
            indexFigure.appendChild(figImg);
            indexFigure.appendChild(figCap);
            figCap.appendChild(figStr);
            figStr.appendChild(figTxt);

            ++indexCount;
        }
    }
    else if (articleLists)
    {
        let articleCount = 0;
        for (let key in siteMapListArticle) {
            let articleDiv = create('div');
            articleDiv.className = "artImgBoxEach grow";
            let articleLink = create('a');
            articleLink.href = "https://spemer.com/article/" + siteMapListArticle[key].href + ".html";

            let articleFigure = create('figure');

            let figImg = create('img');
            figImg.src = "https://spemer.com/img/works/" + siteMapListArticle[key].img;
            figImg.alt = siteMapListArticle[key].title;
            figImg.title = siteMapListArticle[key].title;

            let figCap = create('figcaption');
            let figStr = create('strong');
            let figTxt = createTextNode(siteMapListArticle[key].name);

            articleLists.appendChild(articleDiv);
            articleDiv.appendChild(articleLink);
            articleLink.appendChild(articleFigure);
            articleFigure.appendChild(figImg);
            articleFigure.appendChild(figCap);
            figCap.appendChild(figStr);
            figStr.appendChild(figTxt);
        }
    }
})();


//
// TopBtn
(function(){
    const prevNextHome = select('#prevNext');
    if(prevNextHome) {
        let body = document.body,
            html = document.documentElement;
        let height = Math.max( body.scrollHeight, body.offsetHeight,
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        let topBtnNode = create("a");
        topBtnNode.setAttribute('data-scroll', '');
        topBtnNode.href = "body";
        topBtnNode.title = "Top";
        topBtnNode.className = "prevNextTop";
        if (height < 18000)
        {
            topBtnNode.setAttribute('onmouseover', 'topUp()');
            topBtnNode.setAttribute('onmouseleave', 'topDn()');
        }
        let topBtnBold = create("b");
        let topBtnIcon = create("i");
        topBtnIcon.className = "fa" + " " + "fa-angle-up";
        topBtnIcon.setAttribute('aria-hidden', 'true');
        let topTextNode = createTextNode(" Top");
        prevNextHome.appendChild(topBtnNode);
        topBtnNode.appendChild(topBtnBold);
        topBtnBold.appendChild(topBtnIcon);
        topBtnBold.appendChild(topTextNode);
    }
})();


//
// Footer snsIcon
(function(){
    const snsIconList = {
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
    const snsIcon = select('#snsIcon');
    for (let key in snsIconList) {
        let snsNode = create("a");
        snsNode.title = snsIconList[key].title + "(new tab)";
        snsNode.href = "https://" + snsIconList[key].href;
        snsNode.target = "_blank";
        let iconNode = create("i");
        iconNode.id = snsIconList[key].iconID;
        iconNode.className = "fa fa-" + snsIconList[key].iconClass;
        iconNode.setAttribute('aria-hidden', 'true');
        snsIcon.appendChild(snsNode);
        snsNode.appendChild(iconNode);
    }    
})();


//
// Code with Love by Hyouk Seo(Spemer)
(function(){
    let codeBy = select('#codeBySpemer');
    let codeIconNode = create("i");
    codeIconNode.className = "fa fa-code";
    codeIconNode.setAttribute('aria-hidden', 'true');
    let topTextNode1 = createTextNode(" with ");
    let loveIconNode = create("i");
    loveIconNode.className = "fa fa-heart";
    loveIconNode.setAttribute('aria-hidden', 'true');
    let topTextNode2 = createTextNode(" by Hyouk Seo(Spemer)");
    codeBy.appendChild(codeIconNode);
    codeBy.appendChild(topTextNode1);
    codeBy.appendChild(loveIconNode);
    codeBy.appendChild(topTextNode2);    
})();


//
// topBtnFixed
(function(){
    const fixedTopBtn = select('#topBtnFixed');
    if (fixedTopBtn) {
        const width = window.innerWidth;
        if (width <= 768) {
            fixedTopBtn.style = 'display: none;'
        } else {
            let fixedTopBtnLink = create('a');
            fixedTopBtnLink.setAttribute('data-scroll', '');
            fixedTopBtnLink.href = 'body';
            fixedTopBtnLink.className = 'prevNextTop2';
            let fixedTopBtnIcon = create("i");
            fixedTopBtnIcon.className = 'fa fa-chevron-circle-up topBtn';
            fixedTopBtnIcon.title = 'Top';
            fixedTopBtnIcon.setAttribute('aria-hidden', 'true');
            fixedTopBtn.appendChild(fixedTopBtnLink);
            fixedTopBtnLink.appendChild(fixedTopBtnIcon);
        }
    }   
})();


// //
// // externalLink
// const externalLinks = document.querySelectorAll('.externalLink');
// const setExternalLinksIcon = document.createElement('i');
// setExternalLinksIcon.className = "fa fa-external-link";
// setExternalLinksIcon.setAttribute('aria-hidden','true');
// for (i = 0; i < externalLinks.length; i++) {
//     externalLinks[i].appendChild(setExternalLinksIcon);
//     document.write(externalLinks[i] + "<br>");
// }


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
//
function lineLive2() {
    $('.ready2').removeClass('aboutHover2');
}
function lineDel2() {
    $('.ready2').addClass('aboutHover2');
}
function lineLive3() {
    $('.ready3').removeClass('aboutHover3');
}
function lineDel3() {
    $('.ready3').addClass('aboutHover3');
}
//
function addTooltip() {
    $('.copied').removeClass('tooltip');
}
function removeTooltip() {
    $('.copied').addClass('tooltip');
}