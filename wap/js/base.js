(function (f, j) {
  var i = document, d = window;
  var b = i.documentElement;
  var c;
  var h = i.querySelector('meta[name="viewport"]');
  var e = "width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no";
  if (h) {
    h.setAttribute("content", e)
  } else {
    h = i.createElement("meta");
    h.setAttribute("name", "viewport");
    h.setAttribute("content", e);
    if (b.firstElementChild) {
      b.firstElementChild.appendChild(h)
    } else {
      var a = i.createElement("div");
      a.appendChild(h);
      i.write(a.innerHTML)
    }
  }
  function g() {
    var k = b.getBoundingClientRect().width;
    if (!j) {
      j = 540
    }
    if (k > j) {
      k = j
    }
    var l = k * 100 / f;
    b.style.fontSize = l + "px"
  }

  g();
  d.addEventListener("resize", function () {
    clearTimeout(c);
    c = setTimeout(g, 300)
  }, false);
  d.addEventListener("pageshow", function (k) {
    if (k.persisted) {
      clearTimeout(c);
      c = setTimeout(g, 300)
    }
  }, false);
  if (i.readyState === "complete") {
    i.body.style.fontSize = "16px"
  } else {
    i.addEventListener("DOMContentLoaded", function (k) {
      i.body.style.fontSize = "16px"
    }, false)
  }
})(750, 750);