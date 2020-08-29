(function () {
  var getEveryImg = document.querySelectorAll("img");
  getEveryImg.forEach(function (thisImg) {
    thisImg.className += " " + "atechImg";
  });
})();
