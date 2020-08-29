!(function () {
  var e, t, i, a;
  (e = document.querySelector("#headerLogo")),
    ((t = document.createElement("a")).href = "/"),
    (i = document.createElement("h1")),
    (a = document.createTextNode("Hyouk Seo")),
    e.appendChild(t),
    t.appendChild(i),
    i.appendChild(a);
})(),
  (function () {
    var o,
      l,
      c,
      m,
      s,
      d,
      r = [
        {
          name: "Insharior",
          href: "portfolio/insharior-ux-case-study-user-experience-design",
          title:
            "Insharior - UX Case study: Interior item sharing mobile application design",
          img: "insharior/thumb.png",
        },
        {
          name: "IGTracker",
          href: "portfolio/instagram-tracker-application-igtracker-design",
          title:
            "IGTracker - UX Case study: Instagram Tracking Application UI Design",
          img: "igtracker/thumb.png",
        },
        {
          name: "AWeather",
          href: "portfolio/weather-push-notification-alarm-application",
          title: "AWeather - UX Case study: Weather notification application",
          img: "weather/thumb.png",
        },
        {
          name: "UnivCam",
          href: "portfolio/album-image-sort-application-univcam",
          title:
            "UnivCam - UX Case study: Album sorting application UX/UI design",
          img: "univcam/thumb.png",
        },
        {
          name: "Neighbors",
          href: "portfolio/dream-drim-korea-apartment-application",
          title: "Neighbors - SNS application for neighborhood UI Design",
          img: "dream/cover.png",
        },
        {
          name: "Memoree",
          href: "portfolio/memory-record-application-ui-design",
          title: "Memoree - Minimal UX/UI design for iOS",
          img: "memoree/thumb.png",
        },
        {
          name: "Sprinter",
          href: "portfolio/todo-task-list-manage-application-sprinter",
          title:
            "Sprinter - ToDo list & task management application UX/UI design",
          img: "sprinter/thumb.png",
        },
        {
          name: "Suhyup",
          href: "portfolio/suhyup-mobile-banking-ui-ux-renewal",
          title: "Suhyup - Mobile Banking Application UX/UI Renewal",
          img: "suhyup/thumb.png",
        },
        {
          name: "Flat Icons",
          href: "portfolio/flaticon-vector-graphic-illustration-design",
          title: "Minimal vector flat icon design",
          img: "flaticon/house.jpg",
        },
      ],
      u = [
        {
          name: "Sitemap",
          href: "articles/generate-sitemap-for-next-js",
          title: "Creating a sitemap generator for Next.js",
          img: "sitemap/thumb.png",
        },
        {
          name: "Vue",
          href: "articles/using-axios-with-vue-js",
          title: "Using Axios with Vue.js",
          img: "vue/thumb.png",
        },
        {
          name: "Sass",
          href: "articles/beginners-guide-to-sass-css",
          title: "Beginner’s guide to Sass",
          img: "sass/thumb.png",
        },
        {
          name: "Gulp",
          href: "articles/auto-css-vendor-browser-prefix-javascript-gulp",
          title: "Auto CSS prefix with Gulp",
          img: "gulp/thumb.png",
        },
        {
          name: "Favicon",
          href: "articles/set-favicon-with-javascript",
          title: "Set favicons with JavaScript",
          img: "favicon/favicon.png",
        },
        {
          name: "Scrollbar",
          href: "articles/customize-website-scrollbar-with-css-web-browser",
          title: "Customize website’s scrollbar with CSS",
          img: "scroll/cover.png",
        },
        {
          name: "CSS Variables",
          href: "articles/css-custom-properties-variables-usage",
          title: "Using variables(custom properties) in CSS3",
          img: "css/thumb.png",
        },
        {
          name: "Bodymovin",
          href: "articles/bodymovin-airbnb-lottie-after-effects",
          title: "How to use Bodymovin for After Effects by Airbnb",
          img: "bodymovin/cover.png",
        },
        {
          name: "Jekyll",
          href: "articles/free-github-blog-and-hosting-with-jekyll",
          title: "Free GitHub blog and Hosting with Jekyll",
          img: "jekyll/thumb.png",
        },
        {
          name: "Material",
          href: "articles/creative-pros-cons-google-material-design",
          title: "Cons and Pros of Material design by Google",
          img: "material/material.png",
        },
        {
          name: "Firebase",
          href: "articles/connecting-domain-with-google-firebase",
          title: "Using Firebase to host website for free!",
          img: "firebase/firebase_logo.jpg",
        },
        {
          name: "Musics",
          href: "articles/spemer-music",
          title: "Musics by Spemer",
          img: "music/cover.jpg",
        },
      ],
      e = document.querySelector(".portfolio"),
      t = document.querySelector(".articles");
    function i(e, t, i) {
      -1 != s.indexOf(e[i].href) &&
        ((r = document.createElement("link")).setAttribute("rel", "next"),
        r.setAttribute("href", "/" + u[0].href + ".html"),
        d.appendChild(r));
      for (var a = 0; a < e.length; a++) {
        var n = e[a].href;
        if (-1 != s.indexOf(e[i].href))
          ((o = document.createElement("a")).className =
            "prevNext prevNextText"),
            (o.href = "/"),
            (o.title = "Home"),
            (l = document.createElement("b")),
            (c = document.createTextNode("Home")),
            (m = document.createElement("i"));
        else if (-1 != s.indexOf(n)) {
          var r;
          ((o = document.createElement("a")).className =
            "prevNext prevNextText"),
            (o.href = "/" + e[a + 1].href + ".html"),
            (o.title = e[a + 1].title),
            (l = document.createElement("b")),
            (c = document.createTextNode(e[a + 1].name)),
            ((m = document.createElement("i")).className =
              "fa fa-angle-double-right"),
            (r = document.createElement("link")).setAttribute("rel", "next"),
            r.setAttribute("href", "/" + e[a + 1].href + ".html"),
            d.appendChild(r),
            o.setAttribute("onmouseover", "nextRight()"),
            o.setAttribute("onmouseleave", "nextRightDel()");
        }
      }
      t.appendChild(o), o.appendChild(l), l.appendChild(c), l.appendChild(m);
    }
    function a(e, t) {
      -1 != s.indexOf(e[0].href) &&
        ((n = document.createElement("link")).setAttribute("rel", "prev"),
        n.setAttribute("href", "/" + r[r.length - 1].href + ".html"),
        d.appendChild(n));
      for (var i = 0; i < e.length; i++) {
        var a = e[i].href;
        if (-1 != s.indexOf(e[0].href))
          ((o = document.createElement("a")).className =
            "prevNext prevNextText"),
            (o.href = "/"),
            (o.title = "Home"),
            (l = document.createElement("b")),
            (c = document.createTextNode("Home")),
            (m = document.createElement("i"));
        else if (-1 != s.indexOf(a)) {
          var n;
          ((o = document.createElement("a")).className =
            "prevNext prevNextText"),
            (o.href = "/" + e[i - 1].href + ".html"),
            (o.title = e[i - 1].title),
            (l = document.createElement("b")),
            (c = document.createTextNode(e[i - 1].name)),
            ((m = document.createElement("i")).className =
              "fa fa-angle-double-left"),
            (n = document.createElement("link")).setAttribute("rel", "prev"),
            n.setAttribute("href", "/" + e[i - 1].href + ".html"),
            d.appendChild(n),
            o.setAttribute("onmouseover", "nextLeft()"),
            o.setAttribute("onmouseleave", "nextLeftDel()");
        }
      }
      t.appendChild(o), o.appendChild(l), l.appendChild(m), l.appendChild(c);
    }
    (s = window.location.href), (d = document.querySelector("head"));
    var n = Number(r.length - 1),
      p = Number(u.length - 1);
    e ? (i(r, e, n), a(r, e)) : t && (i(u, t, p), a(u, t));
    var h = document.querySelector(".siteMapNav");
    function f(e) {
      e.forEach(function (e) {
        var t, i, a, n, r;
        (t = document.createElement("li")),
          ((i = document.createElement("a")).href = "/" + e.href + ".html"),
          (i.title = e.title),
          (a = document.createTextNode(e.name)),
          h.appendChild(t),
          t.appendChild(i),
          i.appendChild(a),
          (n = window.location.href),
          (r = e.href),
          -1 != n.indexOf(r) &&
            ((i.className = "underline"),
            i.setAttribute("style", "font-weight: bold"));
      });
    }
    f(r), f(u);
    var g = document.querySelector("#indexList"),
      b = document.querySelector("#articleList");
    function v(e, t) {
      var i = document.createElement("div");
      (i.className = "artImgBoxEach grow"), e.appendChild(i);
      for (var a = 0; a < t.length; a++) {
        var n, r, o, l, c, m;
        (n = document.createElement("a")),
          (r = document.createElement("figure")),
          (o = document.createElement("img")),
          (l = document.createElement("figcaption")),
          (c = document.createElement("h3")),
          (m = document.createTextNode(t[a].name)),
          (n.href = "/" + t[a].href + ".html"),
          (o.src = "/img/works/" + t[a].img),
          (o.alt = t[a].title),
          (o.title = t[a].title),
          i.appendChild(n),
          n.appendChild(r),
          r.appendChild(o),
          r.appendChild(l),
          l.appendChild(c),
          c.appendChild(m);
      }
    }
    g ? v(g, r) : b && v(b, u);
  })(),
  (function () {
    var l = document.querySelector("#headerNav > nav > ul");
    [
      { title: "Portfolio", href: "/", hName: "/portfolio/", target: "_self" },
      {
        title: "Articles",
        href: "/articles.html",
        hName: "/articles",
        target: "_self",
      },
      {
        title: "About",
        href: "/about-spemer.html",
        hName: "about-spemer.html",
        target: "_self",
      },
      {
        title: "CV",
        href:
          "https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing",
        hName:
          "https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing",
        target: "_blank",
      },
    ].forEach(function (e) {
      var t = document.createElement("li");
      t.className = "headerNavList";
      var i = document.createElement("a");
      (t.title = e.title),
        (i.href = e.href),
        i.setAttribute("target", e.target),
        (i.className = "headerNav");
      var a = document.createElement("b"),
        n = document.createTextNode(e.title);
      l.appendChild(t), t.appendChild(i), i.appendChild(a), a.appendChild(n);
      var r = window.location.href,
        o = e.hName;
      -1 != r.indexOf(o) && (t.className = "headerNavList aboutHover");
    });
  })(),
  document.querySelector(".indexMain") &&
    (document.querySelector("#headerNav > nav > ul > li").className =
      "headerNavList aboutHover"),
  (document.querySelector("body").id = "body"),
  (function () {
    var e,
      t,
      i,
      a,
      n = document.querySelector("#prevNext");
    n &&
      (((e = document.createElement("a")).href = "#top"),
      (e.title = "Back to Top"),
      (e.className = "prevNextTop"),
      e.setAttribute("onmouseover", "topUp()"),
      e.setAttribute("onmouseleave", "topDn()"),
      (t = document.createElement("b")),
      ((i = document.createElement("i")).className = "fa fa-angle-up"),
      (a = document.createTextNode("Top")),
      n.appendChild(e),
      e.appendChild(t),
      t.appendChild(i),
      t.appendChild(a));
  })(),
  (function () {
    var e = {
        Twitter: {
          href: "twitter.com/OfficialSpemer",
          iconID: "twIcon",
          iconClass: "twitter",
        },
        GitHub: {
          href: "github.com/spemer",
          iconID: "ghIcon",
          iconClass: "github",
        },
        FaceBook: {
          href: "facebook.com/ghsspower",
          iconID: "fbIcon",
          iconClass: "facebook",
        },
        Instagram: {
          href: "instagram.com/spemer/",
          iconID: "inIcon",
          iconClass: "instagram",
        },
        LinkedIn: {
          href: "www.linkedin.com/in/hyouk-seo-0b6801122/",
          iconID: "liIcon",
          iconClass: "linkedin",
        },
        Dribbble: {
          href: "dribbble.com/spemer",
          iconID: "drIcon",
          iconClass: "dribbble",
        },
        Medium: {
          href: "medium.com/@spemer",
          iconID: "medIcon",
          iconClass: "medium",
        },
        Behance: {
          href: "behance.net/spemer",
          iconID: "beIcon",
          iconClass: "behance",
        },
      },
      t = document.querySelector("#snsIcon");
    for (var i in e) {
      var a = document.createElement("a");
      (a.href = "https://" + e[i].href),
        (a.target = "_blank"),
        (a.title = i + "(new tab)");
      var n = document.createElement("i");
      (n.id = e[i].iconID),
        (n.className = "fa fa-" + e[i].iconClass),
        t.appendChild(a),
        a.appendChild(n);
    }
  })(),
  (function () {
    var e, t, i, a, n;
    (e = document.querySelector("#codeBySpemer")),
      ((t = document.createElement("i")).className = "fa fa-code"),
      (i = document.createTextNode(" with ")),
      ((a = document.createElement("i")).className = "fa fa-heart"),
      (n = document.createTextNode(" by Hyouk Seo(Spemer)")),
      e.appendChild(t),
      e.appendChild(i),
      e.appendChild(a),
      e.appendChild(n);
  })(),
  (function () {
    var e, t, i, a;
    (e = document.querySelector("body")),
      ((t = document.createElement("div")).id = "topBtnFixed"),
      e.appendChild(t),
      ((i = document.createElement("a")).href = "#top"),
      (i.className = "prevNextTop2"),
      ((a = document.createElement("i")).className =
        "fa fa-chevron-circle-up topBtn"),
      (a.title = "Back to Top"),
      t.appendChild(i),
      i.appendChild(a),
      (window.onscroll = function () {
        var e;
        (e = 320),
          document.body.scrollTop > e || document.documentElement.scrollTop > e
            ? ((t.style.opacity = 1),
              a.setAttribute("style", "visibility:visible"))
            : ((t.style.opacity = 0),
              a.setAttribute("style", "visibility:hidden"));
      });
  })(),
  (function () {
    var t;
    document.querySelectorAll(".externalLink").forEach(function (e) {
      e.setAttribute("target", "_blank"),
        ((t = document.createElement("i")).className = "fa fa-external-link"),
        e.appendChild(t);
    });
  })(),
  (function () {
    var e, t, i, a, n;
    for (
      i = document.getElementsByClassName("hrline"), e = 0;
      e < i.length;
      e++
    )
      for (
        a = document.createElement("center"), i[e].appendChild(a), t = 0;
        t < 3;
        t++
      )
        (n = document.createElement("span")), a.appendChild(n);
  })(),
  document.querySelectorAll("i.fa").forEach(function (e) {
    e.getAttribute("aria-hidden") || e.setAttribute("aria-hidden", "true");
  });
