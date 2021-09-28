function topUp() {
  $(".fa-angle-up").addClass("topUp"), $(".fa-angle-up").removeClass("topUp2");
}
function topDn() {
  $(".fa-angle-up").addClass("topUp2"), $(".fa-angle-up").removeClass("topUp");
}
function nextRight() {
  $(".fa-angle-double-right").addClass("nextRight"),
    $(".fa-angle-double-right").removeClass("nextRight2");
}
function nextRightDel() {
  $(".fa-angle-double-right").addClass("nextRight2"),
    $(".fa-angle-double-right").removeClass("nextRight");
}
function nextLeft() {
  $(".fa-angle-double-left").addClass("nextLeft"),
    $(".fa-angle-double-left").removeClass("nextLeft2");
}
function nextLeftDel() {
  $(".fa-angle-double-left").addClass("nextLeft2"),
    $(".fa-angle-double-left").removeClass("nextLeft");
}
function addTooltip() {
  $(".copied").removeClass("tooltip");
}
function removeTooltip() {
  $(".copied").addClass("tooltip");
}
!(function () {
  var n = document.querySelector("head");
  [
    { href: "/js/dist/index.js", as: "script" },
    { href: "/css/dist/stylesheet.css", as: "style" },
    { href: "/css/dist/featherlight.css", as: "style" },
    { href: "/css/dist/featherlight.gallery.css", as: "style" },
    { href: "/js/dist/after.jquery.js", as: "script" },
  ].forEach(function (e) {
    var t = document.createElement("link");
    t.setAttribute("rel", "preload"),
      t.setAttribute("href", e.href),
      t.setAttribute("as", e.as),
      "font" == e.as &&
        (t.setAttribute("type", "font/woff2"),
        t.setAttribute("crossorigin", "")),
      n.appendChild(t);
  });
})(),
  (function () {
    var e = window.location.href,
      t = document
        .querySelector("meta[property='og:image']")
        .getAttribute("content"),
      n = [
        { property: "og:img:alt", content: t },
        { property: "og:img:url", content: t },
        { property: "og:img:secure_url", content: t },
        { property: "article:section", content: "Design" },
        {
          property: "article:tag",
          content: document
            .querySelector("meta[name='keywords']")
            .getAttribute("content"),
        },
        { property: "al:web:url", content: e },
      ],
      o = document.querySelector("head");
    n.forEach(function (e) {
      var t = document.createElement("meta");
      t.setAttribute("property", e.property),
        t.setAttribute("content", e.content),
        o.appendChild(t);
    });
  })(),
  (function () {
    var e = window.location.href,
      t = document.title,
      n = document
        .querySelector("meta[name='description']")
        .getAttribute("content"),
      o = document
        .querySelector("meta[name='keywords']")
        .getAttribute("content"),
      a = document
        .querySelector("meta[property='og:image']")
        .getAttribute("content"),
      r = [
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
        { name: "url", content: e },
        { name: "identifier-URL", content: e },
        { name: "pagename", content: t },
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
        { name: "twitter:url", content: e },
        { name: "twitter:domain", content: e },
        { name: "twitter:title", content: t },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@OfficialSpemer" },
        { name: "twitter:creator", content: "@OfficialSpemer" },
        { name: "twitter:description", content: n },
        { name: "twitter:image", content: a },
        { name: "twitter:image:src", content: a },
        { name: "twitter:image:alt", content: "Hyouk Seo(Spemer)" },
        { name: "application-name", content: t },
        { name: "msapplication-TileColor", content: "#656c7a" },
        { name: "msapplication-tooltip", content: t },
        { name: "msapplication-starturl", content: e },
        {
          name: "msapplication-TileImage",
          content: "/img/favicons/mstile-144x144.png",
        },
        { name: "DC.subject", content: "Design" },
        { name: "DC.publisher", content: "Hyouk Seo(Spemer)" },
        { name: "DC.creator", content: "Hyouk Seo(Spemer)" },
        { name: "DC.contributor", content: "Hyouk Seo(Spemer)" },
        { name: "DC.source", content: e },
        { name: "DC.relation", content: "/" },
        { name: "DC.title", content: t },
        { name: "DC.language", content: "en" },
        { name: "DC.coverage", content: "World" },
        { name: "DC.description", content: n },
        { name: "DC.keywords", content: o },
        { name: "news_keywords", content: o },
      ],
      i = document.querySelector("head");
    r.forEach(function (e) {
      var t = document.createElement("meta");
      t.setAttribute("name", e.name),
        t.setAttribute("content", e.content),
        i.appendChild(t);
    });
    var c = document.createElement("meta");
    c.setAttribute("property", "og:img:alt"),
      c.setAttribute("content", t),
      i.appendChild(c);
  })(),
  (function () {
    var n = document.querySelector("head");
    [
      { rel: "home", href: "" },
      { rel: "pingback", href: "" },
      { rel: "standout", href: "" },
      { rel: "alternate", href: "" },
      { rel: "author", href: "about-spemer.html" },
      { rel: "manifest", href: "img/favicons/manifest.json" },
      { rel: "shortcut icon", href: "img/favicons/favicon.ico" },
    ].forEach(function (e) {
      var t = document.createElement("link");
      t.setAttribute("rel", e.rel),
        t.setAttribute("href", "/" + e.href),
        n.appendChild(t);
    });
    [
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
    ].forEach(function (e) {
      var t = document.createElement("link");
      t.setAttribute("rel", "apple-touch-icon"),
        t.setAttribute("sizes", e.sizes),
        t.setAttribute("href", "/img/favicons/" + e.href),
        n.appendChild(t);
    });
    [
      { sizes: "32x32", href: "favicon-32x32.png" },
      { sizes: "194x194", href: "favicon-194x194.png" },
      { sizes: "192x192", href: "android-chrome-192x192.png" },
      { sizes: "16x16", href: "favicon-16x16.png" },
    ].forEach(function (e) {
      var t = document.createElement("link");
      t.setAttribute("rel", "icon"),
        t.setAttribute("type", "image/png"),
        t.setAttribute("href", "/img/favicons/" + e.href),
        t.setAttribute("sizes", e.sizes),
        n.appendChild(t);
    });
  })(),
  0 < document.querySelectorAll(".feather").length &&
    $("a.feather").featherlightGallery({
      closeIcon: null,
      openSpeed: 250,
      closeSpeed: 250,
      closeOnClick: "anywhere",
      galleryFadeIn: 250,
      galleryFadeOut: 250,
      nextIcon: !1,
      previousIcon: !1,
    }),
  (function () {
    if (0 < document.querySelectorAll("a #foo").length) new Clipboard(".btn");
  })(),
  $(".siteMapBtn").click(function () {
    $(".siteMapNav").toggle("display");
  }),
  (function () {
    for (
      var e = document.querySelectorAll(".c-hamburger"), t = e.length - 1;
      0 <= t;
      t--
    ) {
      var n = e[t];
      n.addEventListener("click", function (e) {
        e.preventDefault(),
          !0 === this.classList.contains("is-active")
            ? this.classList.remove("is-active")
            : this.classList.add("is-active");
      });
    }
  })(),
  $("a[href='#top']").click(function () {
    return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
  });
