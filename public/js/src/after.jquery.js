//
// preload
(function () {
  var preloadLists = [
    { href: "/js/dist/index.js", as: "script" },
    { href: "/css/dist/stylesheet.css", as: "style" },
    { href: "/css/dist/featherlight.css", as: "style" },
    { href: "/css/dist/featherlight.gallery.css", as: "style" },
    // { href: '/js/dist/set.class.atech.js', as: 'script' },
    { href: "/js/dist/after.jquery.js", as: "script" },
    // { href: '/js/dist/beusable.js', as: 'script' },
  ];
  var headTitle = document.querySelector("head");
  preloadLists.forEach(function (preloadList) {
    var setLinkProp = document.createElement("link");
    setLinkProp.setAttribute("rel", "preload");
    setLinkProp.setAttribute("href", preloadList.href);
    setLinkProp.setAttribute("as", preloadList.as);

    if (preloadList.as == "font") {
      setLinkProp.setAttribute("type", "font/woff2");
      setLinkProp.setAttribute("crossorigin", "");
    }
    headTitle.appendChild(setLinkProp);
  });
})();

//
// preload spinner.svg
// (function(){
//     var getHead = document.querySelector('head');
//     var setLink = document.createElement('link');
//     setLink.setAttribute('rel','prefetch');
//     setLink.setAttribute('href','/img/spinner.gif');
//     getHead.appendChild(setLink);
// })();

//
// meta Tags **meta [property, content]**
(function () {
  var thisUrl = window.location.href;
  var thisOGImg = document
    .querySelector("meta[property='og:image']")
    .getAttribute("content");
  var thisKeys = document
    .querySelector("meta[name='keywords']")
    .getAttribute("content");
  var propLists = [
    { property: "og:img:alt", content: thisOGImg },
    { property: "og:img:url", content: thisOGImg },
    { property: "og:img:secure_url", content: thisOGImg },
    { property: "article:section", content: "Design" },
    { property: "article:tag", content: thisKeys },
    { property: "al:web:url", content: thisUrl },
  ];
  var headTitle = document.querySelector("head");
  propLists.forEach(function (propList) {
    var setMetaProp = document.createElement("meta");
    setMetaProp.setAttribute("property", propList.property);
    setMetaProp.setAttribute("content", propList.content);
    headTitle.appendChild(setMetaProp);
  });
})();

//
// meta Tags **meta [name, content]**
(function () {
  var thisUrl = window.location.href;
  var thisTitle = document.title;
  var thisDesc = document
    .querySelector("meta[name='description']")
    .getAttribute("content");
  var thisKeys = document
    .querySelector("meta[name='keywords']")
    .getAttribute("content");
  var thisOGImg = document
    .querySelector("meta[property='og:image']")
    .getAttribute("content");
  var metaLists = [
    { name: "theme-color", content: "#ffffff" },
    { name: "subject", content: "Design" },
    { name: "copyright", content: "Hyouk Seo(Spemer)" },
    { name: "designer", content: "Hyouk Seo(Spemer)" },
    { name: "publisher", content: "Hyouk Seo(Spemer)" },
    { name: "creator", content: "Hyouk Seo(Spemer)" },
    { name: "web_author", content: "Hyouk Seo(Spemer)" },
    { name: "owner", content: "Hyouk Seo(Spemer)" },
    { name: "reply-to", content: "ghsspower@gmail.com" },
    { name: "category", content: "website" },
    { name: "topic", content: "Design" },
    { name: "target", content: "all" },
    { name: "url", content: thisUrl },
    { name: "identifier-URL", content: thisUrl },
    { name: "pagename", content: thisTitle },
    { name: "rating", content: "general" },
    { name: "language", content: "english" },
    { name: "distribution", content: "global" },
    { name: "Resource-Type", content: "Document" },
    { name: "classification", content: "Design" },
    { name: "HandheldFriendly", content: "true" },
    { name: "referrer", content: "origin-when-cross-origin" },
    { name: "google", content: "notranslate" },
    { name: "fb:admins", content: "100001935259349" },
    { name: "fb:app_id", content: "116484055630441" },
    { name: "twitter:url", content: thisUrl },
    { name: "twitter:domain", content: thisUrl },
    { name: "twitter:title", content: thisTitle },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@OfficialSpemer" },
    { name: "twitter:creator", content: "@OfficialSpemer" },
    { name: "twitter:description", content: thisDesc },
    { name: "twitter:image", content: thisOGImg },
    { name: "twitter:image:src", content: thisOGImg },
    { name: "twitter:image:alt", content: "Hyouk Seo(Spemer)" },
    { name: "application-name", content: thisTitle },
    { name: "msapplication-TileColor", content: "#656c7a" },
    { name: "msapplication-tooltip", content: thisTitle },
    { name: "msapplication-starturl", content: thisUrl },
    {
      name: "msapplication-TileImage",
      content: "/img/favicons/mstile-144x144.png",
    },
    { name: "DC.subject", content: "Design" },
    { name: "DC.publisher", content: "Hyouk Seo(Spemer)" },
    { name: "DC.creator", content: "Hyouk Seo(Spemer)" },
    { name: "DC.contributor", content: "Hyouk Seo(Spemer)" },
    { name: "DC.source", content: thisUrl },
    { name: "DC.relation", content: "/" },
    { name: "DC.title", content: thisTitle },
    { name: "DC.language", content: "en" },
    { name: "DC.coverage", content: "World" },
    { name: "DC.description", content: thisDesc },
    { name: "DC.keywords", content: thisKeys },
    { name: "news_keywords", content: thisKeys },
  ];
  var headTitle = document.querySelector("head");
  metaLists.forEach(function (metaList) {
    var setMeta = document.createElement("meta");
    setMeta.setAttribute("name", metaList.name);
    setMeta.setAttribute("content", metaList.content);
    headTitle.appendChild(setMeta);
  });
  var setMeta = document.createElement("meta");
  setMeta.setAttribute("property", "og:img:alt");
  setMeta.setAttribute("content", thisTitle);
  headTitle.appendChild(setMeta);
})();

//
// favicon & shortcut icons
(function () {
  var headTitle = document.querySelector("head");
  // basic icons
  var etcIcons = [
    { rel: "home", href: "" },
    { rel: "pingback", href: "" },
    { rel: "standout", href: "" },
    { rel: "alternate", href: "" },
    { rel: "author", href: "about-spemer.html" },
    { rel: "manifest", href: "img/favicons/manifest.json" },
    { rel: "shortcut icon", href: "img/favicons/favicon.ico" },
  ];
  etcIcons.forEach(function (etcIcon) {
    var setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel", etcIcon.rel);
    setFavicon.setAttribute("href", "/" + etcIcon.href);
    headTitle.appendChild(setFavicon);
  });

  // apple icons
  var faviconLists = [
    { sizes: "180x180", href: "apple-touch-icon.png" },
    { sizes: "152x152", href: "touch-icon-ipad.png" },
    { sizes: "180x180", href: "touch-icon-iphone-retina.png" },
    { sizes: "167x167", href: "touch-icon-ipad-retina.png" },
    { sizes: "57x57", href: "apple-touch-icon-57x57.png" },
    { sizes: "60x60", href: "apple-touch-icon-60x60.png" },
    { sizes: "72x72", href: "apple-touch-icon-72x72.png" },
    { sizes: "76x76", href: "apple-touch-icon-76x76.png" },
    { sizes: "114x114", href: "apple-touch-icon-114x114.png" },
    { sizes: "120x120", href: "apple-touch-icon-120x120.png" },
    { sizes: "144x144", href: "apple-touch-icon-144x144.png" },
    { sizes: "152x152", href: "apple-touch-icon-152x152.png" },
    { sizes: "180x180", href: "apple-touch-icon-180x180.png" },
  ];
  faviconLists.forEach(function (faviconList) {
    var setFvIcon = document.createElement("link");
    setFvIcon.setAttribute("rel", "apple-touch-icon");
    setFvIcon.setAttribute("sizes", faviconList.sizes);
    setFvIcon.setAttribute("href", "/img/favicons/" + faviconList.href);
    headTitle.appendChild(setFvIcon);
  });

  // web shorcut icons
  var iconLists = [
    { sizes: "32x32", href: "favicon-32x32.png" },
    { sizes: "194x194", href: "favicon-194x194.png" },
    { sizes: "192x192", href: "android-chrome-192x192.png" },
    { sizes: "16x16", href: "favicon-16x16.png" },
  ];
  iconLists.forEach(function (iconList) {
    var setScIcon = document.createElement("link");
    setScIcon.setAttribute("rel", "icon");
    setScIcon.setAttribute("type", "image/png");
    setScIcon.setAttribute("href", "/img/favicons/" + iconList.href);
    setScIcon.setAttribute("sizes", iconList.sizes);
    headTitle.appendChild(setScIcon);
  });
})();

//
// lazyloader
// (function(){
//     var getEveryImg = document.querySelectorAll('img');
//     if (getEveryImg.length > 0)
//     {
//         $(function(){
//             $('.lazy').lazy({
//             });
//         });
//     }
// })();

//
// feather
(function () {
  var getFeatherClass = document.querySelectorAll(".feather");
  if (getFeatherClass.length > 0) {
    $("a.feather").featherlightGallery({
      closeIcon: null,
      openSpeed: 250,
      closeSpeed: 250,
      closeOnClick: "anywhere",
      galleryFadeIn: 250,
      galleryFadeOut: 250,
      nextIcon: false,
      previousIcon: false,
    });
  }
})();

//
// clipboard
(function () {
  var getClipboard = document.querySelectorAll("a #foo");
  if (getClipboard.length > 0) {
    var clipboard = new Clipboard(".btn");
  }
})();

//
// hamburger
$(".siteMapBtn").click(function () {
  $(".siteMapNav").toggle("display");
}),
  (function () {
    function d(a) {
      a.addEventListener("click", function (a) {
        a.preventDefault(),
          this.classList.contains("is-active") === !0
            ? this.classList.remove("is-active")
            : this.classList.add("is-active");
      });
    }
    for (
      var a = document.querySelectorAll(".c-hamburger"), b = a.length - 1;
      b >= 0;
      b--
    ) {
      var c = a[b];
      d(c);
    }
  })();

// beusable.js
// (function(){
//     var getBody = document.querySelector('body');
//     var setScript = document.createElement('script');
//     setScript.setAttribute('defer', '');
//     setScript.setAttribute('src', '/js/dist/beusable.js');
//     getBody.appendChild(setScript);
// })();

//
// other funcs
function topUp() {
  $(".fa-angle-up").addClass("topUp");
  $(".fa-angle-up").removeClass("topUp2");
}
function topDn() {
  $(".fa-angle-up").addClass("topUp2");
  $(".fa-angle-up").removeClass("topUp");
}
function nextRight() {
  $(".fa-angle-double-right").addClass("nextRight");
  $(".fa-angle-double-right").removeClass("nextRight2");
}
function nextRightDel() {
  $(".fa-angle-double-right").addClass("nextRight2");
  $(".fa-angle-double-right").removeClass("nextRight");
}
function nextLeft() {
  $(".fa-angle-double-left").addClass("nextLeft");
  $(".fa-angle-double-left").removeClass("nextLeft2");
}
function nextLeftDel() {
  $(".fa-angle-double-left").addClass("nextLeft2");
  $(".fa-angle-double-left").removeClass("nextLeft");
}
function addTooltip() {
  $(".copied").removeClass("tooltip");
}
function removeTooltip() {
  $(".copied").addClass("tooltip");
}

//
// to top
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
