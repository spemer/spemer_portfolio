document.querySelector(".musicHtml") &&
  (function () {
    var e,
      a,
      o,
      m = [
        {
          scLink: "303715697",
          href:
            "Spemer%20-%20Autumn.mp3?alt=media&token=ec06227a-7411-429b-89ed-6c3773b1b3b7",
          download: "Spemer - Autumn",
          itunes: "autumn-single/id1180293069",
        },
        {
          scLink: "243891238",
          href:
            "Spemer%20-%20Moonlight.mp3?alt=media&token=15e59503-0c65-40d9-90fa-c5bdfb680be8",
          download: "Spemer - Moonlight",
          itunes: "moonlight-single/id1119568599",
        },
        {
          scLink: "249514143",
          href:
            "Spemer%20-%20Voyage%202016.mp3?alt=media&token=18e03399-a91d-4449-94e2-2a3a6dfdf0ce",
          download: "Spemer - Voyage 2016",
          itunes: "voyage-2016-single/id1119571183",
        },
        {
          scLink: "242878687",
          href:
            "Spemer%20-%20Leaves.mp3?alt=media&token=a8089d8c-bd12-4b3a-b386-cd17eefb8430",
          download: "Spemer - Leaves",
          itunes: "leaves-single/id1119085900",
        },
        {
          scLink: "196121171",
          href:
            "Spemer%20-%20Night.mp3?alt=media&token=60c2d1a3-0e13-4f97-be7e-af49ae36ee97",
          download: "Spemer - Night",
          melon: "2319681",
        },
        {
          scLink: "184589593",
          href:
            "Spemer%20-%20Voyage.mp3?alt=media&token=f4f299d6-113a-491f-afe6-d471a850389b",
          download: "Spemer - Voyage",
          melon: "2319681",
        },
        {
          scLink: "115940942",
          href:
            "Spemer%20-%20Yeouinaru%20of%20June.mp3?alt=media&token=59784bf8-7093-4633-abbf-b52cf487c62a",
          download: "Spemer - Yeouinaru of June",
          melon: "2217624",
        },
        {
          scLink: "113970824",
          href:
            "Owl%20City%20%26%20Carly%20Rae%20Jepsen%20-%20Good%20Time%20(Spemer%20Remix).mp3?alt=media&token=7e644b9e-0a3b-4deb-89e3-1e42d33b6e70",
          download: "Owl City & Carly Rae Jepsen - Good Time (Spemer Remix)",
        },
        {
          scLink: "117093503",
          href:
            "Spemer%20-%20You%20are%20the%20Apple%20of%20my%20eye.mp3?alt=media&token=fa592bbc-68ac-4687-8bf2-8699f53d61b3",
          download: "Spemer - You are the Apple of my eye",
        },
      ],
      t = document.querySelector(".musicHtml"),
      n = document.createElement("center");
    t.appendChild(n);
    for (var l = 0; l < m.length; l++) {
      var d = document.createElement("div");
      (d.className = "musicEachBox"), n.appendChild(d);
      var i = document.querySelectorAll(".musicEachBox");
      (o = void 0),
        ((o = document.createElement("iframe")).width = "100%"),
        (o.height = 160),
        (o.scrolling = "no"),
        o.setAttribute("frameborder", "no"),
        (o.src =
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
          m[l].scLink +
          "&amp;color=999&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true"),
        i[l].appendChild(o),
        (e = void 0),
        (e = document.createElement("p")),
        (a = document.createTextNode(m[l].download)),
        i[l].appendChild(e),
        e.appendChild(a),
        (function () {
          var e = document.createElement("a"),
            a = document.createElement("span"),
            o = document.createTextNode("||");
          if (m[l].itunes || m[l].melon) {
            if (m[l].itunes) {
              var t = document.createElement("i");
              t.className = "fa fa-apple";
              var n = document.createTextNode("Buy on iTunes ");
              (e.href = "https://itunes.apple.com/us/album/" + m[l].itunes),
                (e.target = "_blank"),
                (e.title = "via iTunes(new tab)"),
                i[l].appendChild(e),
                e.appendChild(n),
                e.appendChild(t);
            } else if (m[l].melon) {
              var d = document.createTextNode("Buy on Melon");
              (e.href =
                "http://www.melon.com/album/detail.htm?albumId=" + m[l].melon),
                (e.target = "_blank"),
                (e.title = "via Melon(new tab)"),
                i[l].appendChild(e),
                e.appendChild(d);
            }
            i[l].appendChild(a), a.appendChild(o);
          }
        })(),
        (function () {
          var e = document.createElement("a"),
            a = document.createTextNode("Click here to download mp3(free) "),
            o = document.createElement("i");
          (o.className = "fa fa-download"),
            i.forEach(function () {
              (e.href =
                "https://firebasestorage.googleapis.com/v0/b/spemer-bad39.appspot.com/o/" +
                m[l].href),
                (e.download = m[l].download + ".mp3"),
                (e.title = "Download " + m[l].download + ".mp3"),
                i[l].appendChild(e),
                e.appendChild(a),
                e.appendChild(o);
            });
        })();
    }
  })();
