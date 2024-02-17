/*Скрипт для сторінок tryit в C# - блок body в кінці*/
var activetab = 0;
function submitTryit(n) {
  var actionpage = "";
  var a = [], b = [], cc, j;
  if (window.editor) {
    window.editor.save();
  }
  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("class", "iframeResult");
  ifr.setAttribute("name", "iframeResult_0");
  ifr.setAttribute("id", "iframeResult_0");
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);

  actionpage = 'https://try.w3schools.com/try_cs.php';  document.getElementById("iframeResult_" + activetab).addEventListener("load", hideSpinner);
  displaySpinner(activetab);
  var t=text;
  t=t.replace(/=/gi,"w3equalsign");
  t=t.replace(/\+/gi,"w3plussign");
  var pos=t.search(/script/i);
  while (pos > 0) {
    t = t.substring(0,pos) + "w3" + t.substr(pos,3) + "w3" + t.substr(pos+3,3) + "tag" + t.substr(pos+6);
    pos=t.search(/script/i);
  }

  document.getElementById("code").value=t;
  document.getElementById("codeForm").action = actionpage + "?x=" + Math.random();
  document.getElementById('codeForm').method = "post";
  document.getElementById('codeForm').acceptCharset = "utf-8";
  document.getElementById('codeForm').target = "iframeResult_" + activetab;
  document.getElementById("codeForm").submit();

}

function hideSpinner() {
  document.getElementById("runloadercontainer").style.display = "none";
}
function displaySpinner(n) {
  var i, c, w, h, r, top;
  i = document.getElementById("iframeResult_" + n);
  w = w3_getStyleValue(i, "width");
  h = w3_getStyleValue(i, "height");
  c = document.getElementById("runloadercontainer");
  c.style.width = w;
  c.style.height = h;
  c.style.display = "block";
  w = Number(w.replace("px", "")) / 5;
  r = document.getElementById("runloader");
  r.style.width = w + "px";
  r.style.height = w + "px";
  h = w3_getStyleValue(r, "height");
  h = Number(h.replace("px", "")) / 2;
  top = w3_getStyleValue(c, "height");
  top = Number(top.replace("px", "")) / 2;
  top = top - h
  r.style.top = top + "px";
}

var currentStack=true;
if ((window.screen.availWidth <= 768 && window.innerHeight > window.innerWidth) || "" == " horizontal") {restack(true);}
function restack(horizontal) {
  var tc, ic, t, i, c, f, sv, sh, d, b, height, flt, width;
  tc = document.getElementById("textareacontainer");
  ic = document.getElementById("iframecontainer");
  t = document.getElementById("textarea");
  i = document.getElementById("iframe");
  c = document.getElementById("container");
  sv = document.getElementById("stackV");
  sh = document.getElementById("stackH");
  b = document.getElementsByClassName("localhostoutercontainer");
  tc.className = tc.className.replace("horizontal", "");
  ic.className = ic.className.replace("horizontal", "");
  t.className = t.className.replace("horizontal", "");
  i.className = i.className.replace("horizontal", "");
  c.className = c.className.replace("horizontal", "");
  if (b[0]) {b[0].className = b[0].className.replace("horizontal", "")};
  if (sv) {sv.className = sv.className.replace("horizontal", "")};
  if (sv) {sh.className = sh.className.replace("horizontal", "")};
  stack = "";
  if (horizontal) {
    tc.className = tc.className + " horizontal";
    ic.className = ic.className + " horizontal";
    t.className = t.className + " horizontal";
    i.className = i.className + " horizontal";
    c.className = c.className + " horizontal";
    if (sv) {sv.className = sv.className + " horizontal"};
    if (sv) {sh.className = sh.className + " horizontal"};
    if (b[0]) {b[0].className = b[0].className + " horizontal"};
    stack = " horizontal";
    document.getElementById("textareacontainer").style.height = "50%";
    document.getElementById("iframecontainer").style.height = "50%";
    document.getElementById("textareacontainer").style.width = "100%";
    document.getElementById("iframecontainer").style.width = "100%";
    currentStack=false;
  } else {
    document.getElementById("textareacontainer").style.height = "100%";
    document.getElementById("iframecontainer").style.height = "100%";
    document.getElementById("textareacontainer").style.width = "50%";
    document.getElementById("iframecontainer").style.width = "50%";
    currentStack=true;
  }
  fixDragBtn();
  showFrameSize();

}
function showFrameSize() {
  var t;
  var width, height;
  width = Number(w3_getStyleValue(document.getElementsByClassName("iframeResult")[activetab], "width").replace("px", "")).toFixed();
  height = Number(w3_getStyleValue(document.getElementsByClassName("iframeResult")[activetab], "height").replace("px", "")).toFixed();
  document.getElementById("framesize").innerHTML = "Result Size: <span>" + width + " x " + height + "</span>";
}
var dragging = false;
var stack;
function fixDragBtn() {
  var textareawidth, leftpadding, dragleft, containertop, buttonwidth
  var containertop = Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
  if (stack != " horizontal") {
    document.getElementById("dragbar").style.width = "5px";
    textareasize = Number(w3_getStyleValue(document.getElementById("textareawrapper"), "width").replace("px", ""));
    leftpadding = Number(w3_getStyleValue(document.getElementById("textarea"), "padding-left").replace("px", ""));
    buttonwidth = Number(w3_getStyleValue(document.getElementById("dragbar"), "width").replace("px", ""));
    textareaheight = w3_getStyleValue(document.getElementById("textareawrapper"), "height");
    dragleft = textareasize + leftpadding + (leftpadding / 2) - (buttonwidth / 2);
    document.getElementById("dragbar").style.top = containertop + "px";
    document.getElementById("dragbar").style.left = dragleft + "px";
    document.getElementById("dragbar").style.height = textareaheight;
    document.getElementById("dragbar").style.cursor = "col-resize";

  } else {
    document.getElementById("dragbar").style.height = "5px";
    if (window.getComputedStyle) {
      textareawidth = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("height");
      textareaheight = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("width");
      leftpadding = window.getComputedStyle(document.getElementById("textarea"),null).getPropertyValue("padding-top");
      buttonwidth = window.getComputedStyle(document.getElementById("dragbar"),null).getPropertyValue("height");
    } else {
      dragleft = document.getElementById("textareawrapper").currentStyle["width"];
    }
    textareawidth = Number(textareawidth.replace("px", ""));
    leftpadding = Number(leftpadding .replace("px", ""));
    buttonwidth = Number(buttonwidth .replace("px", ""));
    dragleft = containertop + textareawidth + leftpadding + (leftpadding / 2);
    document.getElementById("dragbar").style.top = dragleft + "px";
    document.getElementById("dragbar").style.left = "5px";
    document.getElementById("dragbar").style.width = textareaheight;
    document.getElementById("dragbar").style.cursor = "row-resize";
  }
}
function dragstart(e) {
  e.preventDefault();
  dragging = true;
  var main = document.getElementById("iframecontainer");
}
function dragmove(e) {
  if (dragging)
  {
    document.getElementById("shield").style.display = "block";
    if (stack != " horizontal") {
      var percentage = (e.pageX / window.innerWidth) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100-percentage;
        document.getElementById("textareacontainer").style.width = percentage + "%";
        document.getElementById("iframecontainer").style.width = mainPercentage + "%";
        fixDragBtn();
      }
    } else {
      var containertop = Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
      var percentage = ((e.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100-percentage;
        document.getElementById("textareacontainer").style.height = percentage + "%";
        document.getElementById("iframecontainer").style.height = mainPercentage + "%";
        fixDragBtn();
      }
    }
    showFrameSize();

  }
}
function dragend() {
  document.getElementById("shield").style.display = "none";
  dragging = false;
  var vend = navigator.vendor;
  if (window.editor && vend.indexOf("Apple") == -1) {
    window.editor.refresh();
  }
}
if (window.addEventListener) {
  document.getElementById("dragbar").addEventListener("mousedown", function(e) {dragstart(e);});
  document.getElementById("dragbar").addEventListener("touchstart", function(e) {dragstart(e);});
  window.addEventListener("mousemove", function(e) {dragmove(e);});
  window.addEventListener("touchmove", function(e) {dragmove(e);});
  window.addEventListener("mouseup", dragend);
  window.addEventListener("touchend", dragend);
  window.addEventListener("load", fixDragBtn);
  window.addEventListener("load", showFrameSize);

}

function retheme() {
  var cc = document.body.className;
  if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
    if (opener) {opener.document.body.className = cc.replace("darktheme", "");}
    localStorage.setItem("preferredmode", "light");
  } else {
    document.body.className += " darktheme";
    if (opener) {opener.document.body.className += " darktheme";}
    localStorage.setItem("preferredmode", "dark");
  }
}
(
    function setThemeMode() {
      var x = localStorage.getItem("preferredmode");
      if (x == "dark") {
        document.body.className += " darktheme";
      }
    })();
function colorcoding() {
  var ua = navigator.userAgent;
  //Opera Mini refreshes the page when trying to edit the textarea.
  if (ua && ua.toUpperCase().indexOf("OPERA MINI") > -1) { return false; }
  window.editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
    mode: "text/x-csharp",
    lineWrapping: true,
    smartIndent: false,
    htmlMode: true,
    autocorrect: false,
    addModeClass: true,
  });
}
colorcoding();
function clickTab(x, n) {
  var resultdivs = [];
  activetab = n;
  document.getElementById(x).style.display = "block";
  document.getElementById(x + "tab").className += " tabselected";
}

function w3_getStyleValue(elmnt,style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt,null).getPropertyValue(style);
  } else {
    return elmnt.currentStyle[style];
  }
}
function openMenu() {
  var x = document.getElementById("navbarDropMenu");
  var y = document.getElementById("menuOverlay");
  var z = document.getElementById("menuButton");
  if (z.className.indexOf("w3-text-gray") == -1) {
    z.className += " w3-text-gray";
  } else {
    z.className = z.className.replace(" w3-text-gray", "");
  }
  if (z.className.indexOf("w3-gray") == -1) {
    z.className += " w3-gray";
  } else {
    z.className = z.className.replace(" w3-gray", "");
  }
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
  if (y.className.indexOf("w3-show") == -1) {
    y.className += " w3-show";
  } else {
    y.className = y.className.replace(" w3-show", "");
  }

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("menuOverlay")) {
    openMenu();
  }
}
function setCodewindowHeight() {
  var i;
  var txw = document.getElementById("textareawrapper");
  var txwh = w3_getStyleValue(txw,"height");
  var qwsa = document.getElementsByClassName("codewindow");
  for (i = 0; i < qwsa.length; i++) {
    qwsa[i].style.height = txwh;
    qwsa[i].style.setProperty("overflow", "auto", "important");
  }
}

uic_r_e()