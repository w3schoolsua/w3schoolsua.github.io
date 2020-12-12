// Пример скрипта из урока по JavaScript - страница default.html
document.getElementById("bluebtn").addEventListener("click", addbtn);
function addbtn() {
  var el, x;
  el = document.createElement("div");
  el.innerText = "Натисни мене";
  el.setAttribute("class", "redbtn");
  el.addEventListener("click", displaytime);
  x = document.getElementById("bluebtn");
  x.parentNode.appendChild(el);
  x.innerHTML = "&nbsp;";
  x.style.cursor = "auto";
  x.removeEventListener("click", addbtn);
  document.getElementById("exampletext").innerHTML = "Натисніть червону кнопку:";
}
function formatnumber(n) {
  if (n <= 9) n = "0" + n;
  return n;
}
function displaytime() {
  var ct, h, m, s, d = new Date();
  h = d.getHours();
  m = formatnumber(d.getMinutes());
  s = formatnumber(d.getSeconds());
  ct =  h + ":" + m + ":" + s;
  document.getElementById("clickgame").innerHTML = "<div class='timediv'>" + ct + "</div>";
  document.getElementById("exampletext").innerHTML = "Поточний час:";
  window.setTimeout(displaytime, 1000);
}
