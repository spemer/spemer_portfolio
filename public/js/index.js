//"use strict";
//
// pace.js
(function(){
    let headTitle = document.querySelector('head');
    let setScript = document.createElement('script');
    setScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js');
    headTitle.appendChild(setScript);
})();


//
// headerLogo
(function(){
    let _headerLogo = document.querySelector('#headerLogo');
    let headerLink = document.createElement('a');
    headerLink.href = 'https://spemer.com/';
    let headerHeading = document.createElement('h1');
    let headerText = document.createTextNode('Hyouk Seo');
    _headerLogo.appendChild(headerLink);
    headerLink.appendChild(headerHeading);
    headerHeading.appendChild(headerText);
})();


function setAttrByHeight(target, attrName, attrValue){
    let body = document.body,
        html = document.documentElement;
    let height = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    if (height < 16000)
    {
        target.setAttribute(attrName, attrValue);
    }
}


//
// siteMap links
(function(){
    let siteMapList = [
        {
            name:  'AWeather',
            href:  'portfolio/weather-push-notification-alarm-application',
            title: 'AWeather - UX Case study: Weather notification application',
            img: 'weather/thumb.png'
        },
        {
            name:  'IGTracker',
            href:  'portfolio/instagram-tracker-application-igtracker-design',
            title: 'IGTracker - UX Case study: Instagram Tracking Application UI Design',
            img: 'igtracker/thumb.png'
        },
        {
            name:  'Insharior',
            href:  'portfolio/insharior-ux-case-study-user-experience-design',
            title: 'Insharior - UX Case study: Interior item sharing mobile application design',
            img: 'insharior/thumb.png'
        },
        {
            name:  'Neighbors',
            href:  'portfolio/dream-drim-korea-apartment-application',
            title: 'Neighbors - SNS application for neighborhood UI Design',
            img: 'dream/cover.png'
        },
        {
            name:  'UnivCam',
            href:  'portfolio/album-image-sort-application-univcam',
            title: 'UnivCam - UX Case study: Album sorting application UI/UX design',
            img: 'univcam/thumb.png'
        },
        {
            name:  'Memoree',
            href:  'portfolio/memory-record-application-ui-design',
            title: 'Memoree - Minimal UI/UX design for iOS',
            img: 'memoree/thumb.png'
        },
        {
            name:  'Sprinter',
            href:  'portfolio/todo-task-list-manage-application-sprinter',
            title: 'Sprinter - ToDo list & task management application UI/UX design',
            img: 'sprinter/thumb.png'
        },
        {
            name:  'Suhyup',
            href:  'portfolio/suhyup-mobile-banking-ui-ux-renewal',
            title: 'Suhyup - Mobile Banking Application UI/UX Renewal',
            img: 'suhyup/thumb.png'
        },
        {
            name:  'Flat Icons',
            href:  'portfolio/flaticon-vector-graphic-illustration-design',
            title: 'Minimal vector flat icon design',
            img: 'flaticon/house.jpg'
        }
    ]
    let siteMapListArticle = [
        {
            name:  'CSS Variables',
            href:  'article/css-custom-properties-variables-usage',
            title: 'Using variables(custom properties) in CSS3',
            img: 'css/thumb.png'
        },
        {
            name:  'Jekyll',
            href:  'article/free-github-blog-and-hosting-with-jekyll',
            title: 'Free GitHub blog and Hosting with Jekyll',
            img: 'jekyll/thumb.png'
        },
        {
            name:  'Material',
            href:  'article/creative-pros-cons-google-material-design',
            title: 'Cons and Pros of Material design by Google',
            img: 'material/material.png'
        },
        {
            name:  'Bodymovin',
            href:  'article/bodymovin-airbnb-lottie-after-effects',
            title: 'How to use Bodymovin for After Effects by Airbnb',
            img: 'bodymovin/cover.png'
        },
        {
            name:  'Firebase',
            href:  'article/connecting-domain-with-google-firebase',
            title: 'Using Firebase to host website for free!',
            img: 'firebase/firebase_logo.jpg'
        },
        {
            name:  'Musics',
            href:  'article/spemer-music',
            title: 'Musics by Spemer',
            img: 'music/cover.jpg'
        }
    ]


    //
    // home next prev(bottom)
    const portfolioLinks = document.querySelector('.portfolio');
    const articleLinks = document.querySelector('.articles');

    // home next prev(bottom) -> NEXT
    function setNextBtn(arrayName, divClassName, listLength){
        for (let i = 0; i < arrayName.length; i++)
        {
            let thisUrl = window.location.href;
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[listLength].href) != -1)
            {
                var nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                var nextBold = document.createElement('b');
                var nextText = document.createTextNode(' Home ');
                var nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                var nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i + 1].href + ".html";
                nextLink.title = arrayName[i + 1].name;

                var nextBold = document.createElement('b');
                var nextText = document.createTextNode(' Next ');
                var nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-right';

                setAttrByHeight(nextLink, 'onmouseover', 'nextRight()');
                setAttrByHeight(nextLink, 'onmouseleave', 'nextRightDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextText);
        nextBold.appendChild(nextIcon);
    }

    //
    // home next prev(bottom) -> PREV
    function setPrevBtn(arrayName, divClassName){
        for (let i = 0; i < arrayName.length; i++)
        {
            let thisUrl = window.location.href;
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[0].href) != -1)
            {
                var nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                var nextBold = document.createElement('b');
                var nextText = document.createTextNode(' Home ');
                var nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                var nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i - 1].href + ".html";
                nextLink.title = arrayName[i - 1].name;

                var nextBold = document.createElement('b');
                var nextText = document.createTextNode(' Prev ');
                var nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-left';

                setAttrByHeight(nextLink, 'onmouseover', 'nextLeft()');
                setAttrByHeight(nextLink, 'onmouseleave', 'nextLeftDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextIcon);
        nextBold.appendChild(nextText);
    };

    // excute portfolio or article
    if(portfolioLinks) {
        setNextBtn(siteMapList, portfolioLinks, 8);
        setPrevBtn(siteMapList, portfolioLinks);
    }
    else if (articleLinks){
        setNextBtn(siteMapListArticle, articleLinks, 5);
        setPrevBtn(siteMapListArticle, articleLinks);
    }
    
    
    //
    // bottom siteMap navigation
    const siteMapNav = document.querySelector('.siteMapNav');
    function bottomSiteNav(arrayName){
        for (let i = 0; i < arrayName.length; i++)
        {
            let listNode = document.createElement("li");
            let hrefNode = document.createElement("a");
            hrefNode.href = "https://spemer.com/" + arrayName[i].href + ".html";
            hrefNode.title = arrayName[i].title;
            let textNode = document.createTextNode(arrayName[i].name);

            siteMapNav.appendChild(listNode);
            listNode.appendChild(hrefNode);
            hrefNode.appendChild(textNode);

            let thisUrl = window.location.href;
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(substring) != -1)
            {
                hrefNode.className = 'underline';
                hrefNode.setAttribute('style', 'font-weight: bold');
            }
        }
    }
    bottomSiteNav(siteMapList);
    bottomSiteNav(siteMapListArticle);


    //
    // index, article.html -> lists
    const indexLists = document.querySelector('#indexList');
    const articleLists = document.querySelector('#articleList');
    if (indexLists)
    {
        let indexCount = 0;
        for (let i = 0; i < siteMapList.length; i++)
        {
            if (indexCount === 9) {
                break;
            }

            let indexDiv = document.createElement('div');
            indexDiv.className = "artImgBoxEach grow";
            let indexLink = document.createElement('a');
            indexLink.href = "https://spemer.com/" + siteMapList[i].href + ".html";

            let indexFigure = document.createElement('figure');

            let figImg = document.createElement('img');
            figImg.src = "https://spemer.com/img/works/" + siteMapList[i].img;
            figImg.alt = siteMapList[i].title;
            figImg.title = siteMapList[i].title;

            let figCap = document.createElement('figcaption');
            let figStr = document.createElement('strong');
            let figTxt = document.createTextNode(siteMapList[i].name);

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
    // article.html -> lists
    else if (articleLists)
    {
        let articleCount = 0;
        for (let i = 0; i < siteMapListArticle.length; i++) {
            let articleDiv = document.createElement('div');
            articleDiv.className = "artImgBoxEach grow";
            let articleLink = document.createElement('a');
            articleLink.href = "https://spemer.com/" + siteMapListArticle[i].href + ".html";

            let articleFigure = document.createElement('figure');

            let figImg = document.createElement('img');
            figImg.src = "https://spemer.com/img/works/" + siteMapListArticle[i].img;
            figImg.alt = siteMapListArticle[i].title;
            figImg.title = siteMapListArticle[i].title;

            let figCap = document.createElement('figcaption');
            let figStr = document.createElement('strong');
            let figTxt = document.createTextNode(siteMapListArticle[i].name);

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
    const prevNextHome = document.querySelector('#prevNext');
    if(prevNextHome) {
        let topBtnNode = document.createElement("a");
        topBtnNode.setAttribute('data-scroll', '');
        topBtnNode.href = "body";
        topBtnNode.title = "Top";
        topBtnNode.className = "prevNextTop";

        setAttrByHeight(topBtnNode, 'onmouseover', 'topUp()');
        setAttrByHeight(topBtnNode, 'onmouseleave', 'topDn()');

        let topBtnBold = document.createElement("b");
        let topBtnIcon = document.createElement("i");
        topBtnIcon.className = "fa" + " " + "fa-angle-up";
        topBtnIcon.setAttribute('aria-hidden', 'true');
        let topTextNode = document.createTextNode(" Top");

        prevNextHome.appendChild(topBtnNode);
        topBtnNode.appendChild(topBtnBold);
        topBtnBold.appendChild(topBtnIcon);
        topBtnBold.appendChild(topTextNode);
    }
})();


//
// Footer snsIcon
(function(){
    let snsIconList = {
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
    let snsIcon = document.querySelector('#snsIcon');
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
})();


//
// Code with Love by Hyouk Seo(Spemer)
(function(){
    let codeBy = document.querySelector('#codeBySpemer');
    let codeIconNode = document.createElement("i");
    codeIconNode.className = "fa fa-code";
    codeIconNode.setAttribute('aria-hidden', 'true');

    let topTextNode1 = document.createTextNode(" with ");
    let loveIconNode = document.createElement("i");
    loveIconNode.className = "fa fa-heart";
    loveIconNode.setAttribute('aria-hidden', 'true');
    let topTextNode2 = document.createTextNode(" by Hyouk Seo(Spemer)");

    codeBy.appendChild(codeIconNode);
    codeBy.appendChild(topTextNode1);
    codeBy.appendChild(loveIconNode);
    codeBy.appendChild(topTextNode2);    
})();


//
// topBtnFixed
(function(){
    let fixedTopBtn = document.querySelector('#topBtnFixed');
    if (fixedTopBtn) {
        let width = window.innerWidth;
        if (width <= 768) {
            fixedTopBtn.style = 'display: none;'
        } else {
            let fixedTopBtnLink = document.createElement('a');
            fixedTopBtnLink.setAttribute('data-scroll', '');
            fixedTopBtnLink.href = 'body';
            fixedTopBtnLink.className = 'prevNextTop2';

            let fixedTopBtnIcon = document.createElement("i");
            fixedTopBtnIcon.className = 'fa fa-chevron-circle-up topBtn';
            fixedTopBtnIcon.title = 'Top';
            fixedTopBtnIcon.setAttribute('aria-hidden', 'true');

            fixedTopBtn.appendChild(fixedTopBtnLink);
            fixedTopBtnLink.appendChild(fixedTopBtnIcon);
        }
    }   
})();


//
// externalLink Icon
(function(){
    let externalLinks = document.getElementsByClassName("externalLink");
    let i;
    for (i = 0; i < externalLinks.length; i++) {
        let setExternalLinksIcon = document.createElement('i');
        setExternalLinksIcon.className = "fa fa-external-link";
        setExternalLinksIcon.setAttribute('aria-hidden','true');
        externalLinks[i].appendChild(setExternalLinksIcon);
    }
})();


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