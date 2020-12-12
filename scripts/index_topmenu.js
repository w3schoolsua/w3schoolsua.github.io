/*Скрипт для главной страницы сайта default/index для работы верхнего меню - ставится в конце страницы*/
function w3_open() {
  var x = document.getElementById("myAccordion");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
function w3_close() {
  document.getElementById("myAccordion").style.display = "none";
}
function open_xs_menu(x) {
  if (document.getElementById("sectionxs_" + x).innerHTML == "") {
    document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
  } else {
    document.getElementById("sectionxs_" + x).innerHTML = "";
  }
}
function w3_open_nav(x) {
  if (document.getElementById("nav_" + x).style.display == "block") {
    w3_close_nav(x);
  } else {
    w3_close_nav("tutorials");
    w3_close_nav("references");
    w3_close_nav("examples");
    w3_close_nav("exercises");
    document.getElementById("nav_" + x).style.display = "block";
    if (document.getElementById("navbtn_" + x)) {
      document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
      document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";
    }
    if (x == "search") {
      if (document.getElementById("gsc-i-id1")) {document.getElementById("gsc-i-id1").focus(); }
    }
  }
}
function w3_close_all_nav() {
  w3_close_nav("tutorials");
  w3_close_nav("references");
  w3_close_nav("examples");
  w3_close_nav("exercises");
  w3_close();
}
function w3_close_nav(x) {
  document.getElementById("nav_" + x).style.display = "none";
  if (document.getElementById("navbtn_" + x)) {
    document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
    document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "none";
  }
}
