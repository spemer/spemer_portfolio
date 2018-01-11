//"use strict";

//
// pace.js
(function(){
    let headTitle = document.querySelector('head');
    let setScript = document.createElement('script');
    setScript.setAttribute('async','');
    setScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js');
    headTitle.appendChild(setScript);
})();


//
// set html prefix + manifest
(function(){
    let getHtml = document.querySelector('html');
    getHtml.setAttribute('prefix', 'og: http://ogp.me/ns#');
    getHtml.setAttribute('lang', 'en');
})();


//
// preload
(function(){
    let preloadLists = [
        { href: 'https://spemer.com/js/index.js', as: 'script' },
        { href: 'https://spemer.com/css/stylesheet.css', as: 'style' },
        { href: 'https://spemer.com/css/featherlight.css', as: 'style' },
        { href: 'https://spemer.com/css/featherlight.gallery.css', as: 'style' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/themes/blue/pace-theme-minimal.css', as: 'style' },
        { href: 'https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37Zo4P5ICox8Kq3LLUNMylGO4.woff2', as: 'font' },
        { href: 'https://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nk4GofcKVZz6wtzX_QUIqsI.woff2', as: 'font' },
        { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0', as: 'font' },
        { href: 'https://spemer.com/js/jquery.slim.min.js', as: 'script' },
        { href: 'https://spemer.com/js/smooth.scroll.js', as: 'script' },
        { href: 'https://spemer.com/js/featherlight.js', as: 'script' },
        { href: 'https://spemer.com/js/featherlight.gallery.js', as: 'script' }
    ];
    let headTitle = document.querySelector('head');
    preloadLists.forEach(function(preloadList){
        let setLinkProp = document.createElement('link');
        setLinkProp.setAttribute('rel', 'preload');
        setLinkProp.setAttribute('href', preloadList.href);
        setLinkProp.setAttribute('as', preloadList.as);

        if(preloadList.as == 'font')
        {
            setLinkProp.setAttribute('type', 'font/woff2');
            setLinkProp.setAttribute('crossorigin','');
        }
        headTitle.appendChild(setLinkProp);
    });
})();


//
// meta Tage **meta [property, content]**
(function(){
    let thisUrl = window.location.href;
    let thisOGImg = document.querySelector("meta[property='og:image']").getAttribute("content");
    let thisKeys = document.querySelector("meta[name='keywords']").getAttribute("content");
    let propLists = [
        { property: 'og:img:alt', content: thisOGImg },
        { property: 'og:img:url', content: thisOGImg },
        { property: 'og:img:secure_url', content: thisOGImg },
        { property: 'article:section', content: 'Design' },
        { property: 'article:tag', content: thisKeys },
        { property: 'al:web:url', content: thisUrl }
    ];
    let headTitle = document.querySelector('head');
    propLists.forEach(function(propList){
        let setMetaProp = document.createElement('meta');
        setMetaProp.setAttribute('property', propList.property);
        setMetaProp.setAttribute('content', propList.content);
        headTitle.appendChild(setMetaProp);
    });
})();


//
// metaTags **meta [name, content]**
(function(){
    let thisUrl = window.location.href;
    let thisTitle = document.title;
    let thisDesc = document.querySelector("meta[name='description']").getAttribute("content");
    let thisKeys = document.querySelector("meta[name='keywords']").getAttribute("content");
    let thisOGImg = document.querySelector("meta[property='og:image']").getAttribute("content");
    let metaLists = [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'subject', content: 'Design' },
        { name: 'copyright', content: 'Hyouk Seo(Spemer)' },
        { name: 'designer', content: 'Hyouk Seo(Spemer)' },
        { name: 'publisher', content: 'Hyouk Seo(Spemer)' },
        { name: 'creator', content: 'Hyouk Seo(Spemer)' },
        { name: 'web_author', content: 'Hyouk Seo(Spemer)' },
        { name: 'owner', content: 'Hyouk Seo(Spemer)' },
        { name: 'reply-to', content: 'ghsspower@gmail.com' },
        { name: 'category', content: 'website' },
        { name: 'topic', content: 'Design' },
        { name: 'target', content: 'all' },
        { name: 'url', content: thisUrl },
        { name: 'identifier-URL', content: thisUrl },
        { name: 'pagename', content: thisTitle },
        { name: 'rating', content: 'general' },
        { name: 'language', content: 'english' },
        { name: 'distribution', content: 'global' },
        { name: 'Resource-Type', content: 'Document' },
        { name: 'classification', content: 'Design' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'google', content: 'notranslate' },
        { name: 'fb:admins', content: '100001935259349' },
        { name: 'fb:app_id', content: '116484055630441' },
        { name: 'twitter:url', content: thisUrl },
        { name: 'twitter:domain', content: thisUrl },
        { name: 'twitter:title', content: thisTitle },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@OfficialSpemer' },
        { name: 'twitter:creator', content: '@OfficialSpemer' },
        { name: 'twitter:description', content: thisDesc },
        { name: 'twitter:image', content: thisOGImg },
        { name: 'twitter:image:src', content: thisOGImg },
        { name: 'twitter:image:alt', content: 'Hyouk Seo(Spemer)' },
        { name: 'application-name', content: thisTitle },
        { name: 'msapplication-TileColor', content: '#656c7a' },
        { name: 'msapplication-tooltip', content: thisTitle },
        { name: 'msapplication-starturl', content: thisUrl },
        { name: 'msapplication-TileImage', content: 'https://spemer.com/img/favicons/mstile-144x144.png' },
        { name: 'DC.subject', content: 'Design' },
        { name: 'DC.publisher', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.creator', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.contributor', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.source', content: thisUrl },
        { name: 'DC.relation', content: 'https://spemer.com/' },
        { name: 'DC.title', content: thisTitle },
        { name: 'DC.language', content: 'en' },
        { name: 'DC.coverage', content: 'World' },
        { name: 'DC.description', content: thisDesc },
        { name: 'DC.keywords', content: thisKeys },
        { name: 'news_keywords', content: thisKeys }
    ];
    let headTitle = document.querySelector('head');
    metaLists.forEach(function(metaList)
    {
        let setMeta = document.createElement('meta');
        setMeta.setAttribute('name', metaList.name);
        setMeta.setAttribute('content', metaList.content);
        headTitle.appendChild(setMeta);
    });
    let setMeta = document.createElement('meta');
    setMeta.setAttribute('property', 'og:img:alt');
    setMeta.setAttribute('content', thisTitle);
    headTitle.appendChild(setMeta);
})();


//
// favicon & shortcut icons
(function(){
    let headTitle = document.querySelector('head');
    // basic icons
    let etcIcons = [
        { rel: 'home', href: '' },
        { rel: 'pingback', href: '' },
        { rel: 'standout', href: '' },
        { rel: 'alternate', href: '' },
        { rel: 'author', href: 'about-spemer.html' },
        { rel: 'manifest', href: 'img/favicons/manifest.json' },
        { rel: 'shortcut icon', href: 'img/favicons/favicon.ico' }
    ];
    etcIcons.forEach(function(etcIcon)
    {
        let setFavicon = document.createElement('link');
        setFavicon.setAttribute('rel', etcIcon.rel);
        setFavicon.setAttribute('href', 'https://spemer.com/' + etcIcon.href);
        headTitle.appendChild(setFavicon);
    });

    // apple icons
    let faviconLists = [
        { sizes: '180x180', href: 'apple-touch-icon.png' },
        { sizes: '152x152', href: 'touch-icon-ipad.png' },
        { sizes: '180x180', href: 'touch-icon-iphone-retina.png' },
        { sizes: '167x167', href: 'touch-icon-ipad-retina.png' },
        { sizes: '57x57', href: 'apple-touch-icon-57x57.png' },
        { sizes: '60x60', href: 'apple-touch-icon-60x60.png' },
        { sizes: '72x72', href: 'apple-touch-icon-72x72.png' },
        { sizes: '76x76', href: 'apple-touch-icon-76x76.png' },
        { sizes: '114x114', href: 'apple-touch-icon-114x114.png' },
        { sizes: '120x120', href: 'apple-touch-icon-120x120.png' },
        { sizes: '144x144', href: 'apple-touch-icon-144x144.png' },
        { sizes: '152x152', href: 'apple-touch-icon-152x152.png' },
        { sizes: '180x180', href: 'apple-touch-icon-180x180.png' }
    ];
    faviconLists.forEach(function(faviconList)
    {
        let setFvIcon = document.createElement('link');
        setFvIcon.setAttribute('rel', 'apple-touch-icon');
        setFvIcon.setAttribute('sizes', faviconList.sizes);
        setFvIcon.setAttribute('href', 'https://spemer.com/img/favicons/' + faviconList.href);
        headTitle.appendChild(setFvIcon);
    });

    // web shorcut icons
    let iconLists = [
        { sizes: '32x32', href: 'favicon-32x32.png' },
        { sizes: '194x194', href: 'favicon-194x194.png' },
        { sizes: '192x192', href: 'android-chrome-192x192.png' },
        { sizes: '16x16', href: 'favicon-16x16.png' }
    ];
    iconLists.forEach(function(iconList)
    {
        let setScIcon = document.createElement('link');
        setScIcon.setAttribute('rel', 'icon');
        setScIcon.setAttribute('type', 'image/png');
        setScIcon.setAttribute('href', 'https://spemer.com/img/favicons/' + iconList.href);
        setScIcon.setAttribute('sizes', iconList.sizes);
        headTitle.appendChild(setScIcon);
    });
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
            name:  'Insharior',
            href:  'portfolio/insharior-ux-case-study-user-experience-design',
            title: 'Insharior - UX Case study: Interior item sharing mobile application design',
            img: 'insharior/thumb.png'
        },
        {
            name:  'IGTracker',
            href:  'portfolio/instagram-tracker-application-igtracker-design',
            title: 'IGTracker - UX Case study: Instagram Tracking Application UI Design',
            img: 'igtracker/thumb.png'
        },
        {
            name:  'AWeather',
            href:  'portfolio/weather-push-notification-alarm-application',
            title: 'AWeather - UX Case study: Weather notification application',
            img: 'weather/thumb.png'
        },
        {
            name:  'UnivCam',
            href:  'portfolio/album-image-sort-application-univcam',
            title: 'UnivCam - UX Case study: Album sorting application UI/UX design',
            img: 'univcam/thumb.png'
        },
        {
            name:  'Neighbors',
            href:  'portfolio/dream-drim-korea-apartment-application',
            title: 'Neighbors - SNS application for neighborhood UI Design',
            img: 'dream/cover.png'
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
    ];
    let siteMapListArticle = [
        {
            name:  'Favicon',
            href:  'articles/set-favicon-with-javascript',
            title: 'Set favicons with JavaScript',
            img: 'favicon/favicon.png'
        },
        {
            name:  'Scrollbar',
            href:  'articles/customize-website-scrollbar-with-css-web-browser',
            title: 'Customize website’s scrollbar with CSS',
            img: 'scroll/cover.png'
        },
        {
            name:  'CSS Variables',
            href:  'articles/css-custom-properties-variables-usage',
            title: 'Using variables(custom properties) in CSS3',
            img: 'css/thumb.png'
        },
        {
            name:  'Bodymovin',
            href:  'articles/bodymovin-airbnb-lottie-after-effects',
            title: 'How to use Bodymovin for After Effects by Airbnb',
            img: 'bodymovin/cover.png'
        },
        {
            name:  'Jekyll',
            href:  'articles/free-github-blog-and-hosting-with-jekyll',
            title: 'Free GitHub blog and Hosting with Jekyll',
            img: 'jekyll/thumb.png'
        },
        {
            name:  'Material',
            href:  'articles/creative-pros-cons-google-material-design',
            title: 'Cons and Pros of Material design by Google',
            img: 'material/material.png'
        },
        {
            name:  'Firebase',
            href:  'articles/connecting-domain-with-google-firebase',
            title: 'Using Firebase to host website for free!',
            img: 'firebase/firebase_logo.jpg'
        },
        {
            name:  'Musics',
            href:  'articles/spemer-music',
            title: 'Musics by Spemer',
            img: 'music/cover.jpg'
        }
    ];

    //
    // home next prev(bottom)
    const portfolioLinks = document.querySelector('.portfolio');
    const articleLinks = document.querySelector('.articles');

    // home next prev(bottom) -> NEXT
    function setNextBtn(arrayName, divClassName, listLength)
    {
        let nextLink;
        let nextBold;
        let nextText;
        let nextIcon;
        for (let i = 0; i < arrayName.length; i++)
        {
            let headForMeta = document.querySelector('head');

            let thisUrl = window.location.href;
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[listLength].href) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                nextBold = document.createElement('b');
                nextText = document.createTextNode(' Home ');
                nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i + 1].href + ".html";
                nextLink.title = arrayName[i + 1].name;

                nextBold = document.createElement('b');
                nextText = document.createTextNode(' Next ');
                nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-right';

                // meta next
                let metaNextAttr = document.createElement('link');
                metaNextAttr.setAttribute('rel', 'next');
                metaNextAttr.setAttribute('href', "https://spemer.com/" + arrayName[i + 1].href + ".html");
                headForMeta.appendChild(metaNextAttr);

                setAttrByHeight(nextLink, 'onmouseover', 'nextRight()');
                setAttrByHeight(nextLink, 'onmouseleave', 'nextRightDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextText);
        nextBold.appendChild(nextIcon);
        nextIcon.setAttribute('aria-hidden', 'true');
    }

    //
    // home next prev(bottom) -> PREV
    function setPrevBtn(arrayName, divClassName)
    {
        let nextLink;
        let nextBold;
        let nextText;
        let nextIcon;
        for (let i = 0; i < arrayName.length; i++)
        {
            let headForMeta = document.querySelector('head');

            let thisUrl = window.location.href;
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[0].href) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                nextBold = document.createElement('b');
                nextText = document.createTextNode(' Home ');
                nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i - 1].href + ".html";
                nextLink.title = arrayName[i - 1].name;

                nextBold = document.createElement('b');
                nextText = document.createTextNode(' Prev ');
                nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-left';

                // meta prev
                let metaNextAttr = document.createElement('link');
                metaNextAttr.setAttribute('rel', 'prev');
                metaNextAttr.setAttribute('href', "https://spemer.com/" + arrayName[i - 1].href + ".html");
                headForMeta.appendChild(metaNextAttr);

                setAttrByHeight(nextLink, 'onmouseover', 'nextLeft()');
                setAttrByHeight(nextLink, 'onmouseleave', 'nextLeftDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextIcon);
        nextIcon.setAttribute('aria-hidden', 'true');
        nextBold.appendChild(nextText);
    };

    // excute portfolio or article
    let siteMapListLength = Number(siteMapList.length - 1);
    let siteMapListArticleLength = Number(siteMapListArticle.length - 1);
    if (portfolioLinks)
    {
        setNextBtn(siteMapList, portfolioLinks, siteMapListLength);
        setPrevBtn(siteMapList, portfolioLinks);
    }
    else if (articleLinks)
    {
        setNextBtn(siteMapListArticle, articleLinks, siteMapListArticleLength);
        setPrevBtn(siteMapListArticle, articleLinks);
    }
    
    
    //
    // bottom siteMap navigation
    const siteMapNav = document.querySelector('.siteMapNav');
    function bottomSiteNav(arrayName)
    {
        arrayName.forEach(function(arrLen)
        {
            let listNode = document.createElement("li");
            let hrefNode = document.createElement("a");
            hrefNode.href = "https://spemer.com/" + arrLen.href + ".html";
            hrefNode.title = arrLen.title;
            let textNode = document.createTextNode(arrLen.name);

            siteMapNav.appendChild(listNode);
            listNode.appendChild(hrefNode);
            hrefNode.appendChild(textNode);

            let thisUrl = window.location.href;
            let substring = arrLen.href;
            if (thisUrl.indexOf(substring) != -1)
            {
                hrefNode.className = 'underline';
                hrefNode.setAttribute('style', 'font-weight: bold');
            }
        });
    }
    bottomSiteNav(siteMapList);
    bottomSiteNav(siteMapListArticle);


    //
    // index, article.html -> lists
    const indexLists = document.querySelector('#indexList');
    const articleLists = document.querySelector('#articleList');
    if (indexLists)
    {
        let indexDiv = document.createElement('div');
        indexDiv.className = "artImgBoxEach grow";
        indexLists.appendChild(indexDiv);

        for (let i = 0; i < siteMapList.length; i++)
        {
            let indexLink = document.createElement('a');
            let indexFigure = document.createElement('figure');
            let figImg = document.createElement('img');
            let figCap = document.createElement('figcaption');
            let figStr = document.createElement('h3');
            let figTxt = document.createTextNode(siteMapList[i].name);

            indexLink.href = "https://spemer.com/" + siteMapList[i].href + ".html";
            figImg.src = "https://spemer.com/img/works/" + siteMapList[i].img;
            figImg.alt = siteMapList[i].title;
            figImg.title = siteMapList[i].title;

            indexDiv.appendChild(indexLink);
            indexLink.appendChild(indexFigure);
            indexFigure.appendChild(figImg);
            indexFigure.appendChild(figCap);
            figCap.appendChild(figStr);
            figStr.appendChild(figTxt);
        }
    }
    // article.html -> lists
    else if (articleLists)
    {
        let articleDiv = document.createElement('div');
        articleDiv.className = "artImgBoxEach grow";
        articleLists.appendChild(articleDiv);

        for (let i = 0; i < siteMapListArticle.length; i++)
        {
            let articleLink = document.createElement('a');
            let articleFigure = document.createElement('figure');
            let figImg = document.createElement('img');
            let figCap = document.createElement('figcaption');
            let figStr = document.createElement('h3');
            let figTxt = document.createTextNode(siteMapListArticle[i].name);

            articleLink.href = "https://spemer.com/" + siteMapListArticle[i].href + ".html";
            figImg.src = "https://spemer.com/img/works/" + siteMapListArticle[i].img;
            figImg.alt = siteMapListArticle[i].title;
            figImg.title = siteMapListArticle[i].title;
            
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
// headerNav 3 ul > li
(function(){
    let topNavLists = [
        {
            title: 'Portfolio',
            href: 'https://spemer.com/',
            hName: '/portfolio/'
        },
        {
            title: 'Articles',
            href: 'https://spemer.com/articles.html',
            hName: '/articles'
        },
        {
            title: 'About',
            href: 'https://spemer.com/about-spemer.html',
            hName: 'about-spemer.html'
        }
    ];

    let headerNavLists = document.querySelector('#headerNav > nav > ul');

    topNavLists.forEach(function(topNavList)
    {
        let setHeaderLists = document.createElement('li');
        setHeaderLists.className = 'headerNavList';

        let setHeaderAnchor = document.createElement('a');
        setHeaderAnchor.title = topNavList.title;
        setHeaderAnchor.href = topNavList.href;
        setHeaderAnchor.className = 'headerNav';

        let headerTextBold = document.createElement('b');
        let setHeaderNavText = document.createTextNode(topNavList.title);

        headerNavLists.appendChild(setHeaderLists);
        setHeaderLists.appendChild(setHeaderAnchor);
        setHeaderAnchor.appendChild(headerTextBold);
        headerTextBold.appendChild(setHeaderNavText);

        let thisUrl = window.location.href;
        let substring = topNavList.hName;
        if (thisUrl.indexOf(substring) != -1)
        {
            setHeaderLists.className = 'headerNavList aboutHover';
        }
    });
})();
//
// index.html only
(function(){
    let getindexMain = document.querySelector('.indexMain');
    if (getindexMain)
    {
        let IndexHeaderLi = document.querySelector('#headerNav > nav > ul > li');
        IndexHeaderLi.className = 'headerNavList aboutHover';
    }
})();


//
// TopBtn
(function(){
    const prevNextHome = document.querySelector('#prevNext');
    if(prevNextHome)
    {
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
            iconID : 'inIcon',
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
    };
    let snsIcon = document.querySelector('#snsIcon');
    for (let key in snsIconList)
    {
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
    if (fixedTopBtn)
    {
        let width = window.innerWidth;

        if (width <= 768)
        {
            fixedTopBtn.style = 'display: none;'
        }
        else
        {
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
    for (let i = 0; i < externalLinks.length; i++)
    {
        let setExternalLinksIcon = document.createElement('i');
        setExternalLinksIcon.className = "fa fa-external-link";
        setExternalLinksIcon.setAttribute('aria-hidden','true');
        externalLinks[i].appendChild(setExternalLinksIcon);
    }
})();


//
// head style -> strong font
(function(){
    let getHeadClassStrng = document.querySelector('.strongFont');
    let getHeadClassAtech = document.querySelector('.atechImgSt');
    if(getHeadClassStrng)
    {
        let setHeadStyle = document.createElement('style');
        setHeadStyle.setAttribute('type', 'text/css');
        let setStyleProp = document.createTextNode('h3{font-weight:400;font-size:16px;margin:-10px 0}');
        getHeadClassStrng.appendChild(setHeadStyle);
        setHeadStyle.appendChild(setStyleProp);
    }
    else if(getHeadClassAtech)
    {
        let setHeadStyle = document.createElement('style');
        setHeadStyle.setAttribute('type', 'text/css');
        let setStyleProp = document.createTextNode('.atechImg{width:100%;height:100%;margin:0px;padding:0px}');
        getHeadClassAtech.appendChild(setHeadStyle);
        setHeadStyle.appendChild(setStyleProp);
    }
})();


//
// hrline -> medium style 3 dots
(function(){
    let gethrline = document.getElementsByClassName('hrline');
    for (let i = 0; i < gethrline.length; i++)
    {
        let setCenter = document.createElement('center');
        gethrline[i].appendChild(setCenter);
        for (let j = 0; j < 3; j++)
        {
            let setSpan = document.createElement('span');
            setCenter.appendChild(setSpan);
        }
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
function addTooltip() {
    $('.copied').removeClass('tooltip');
}
function removeTooltip() {
    $('.copied').addClass('tooltip');
}