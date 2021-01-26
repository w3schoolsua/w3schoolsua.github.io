/*Script #5 for Exercise - HTML Tutorial*/
    function openmenuitems(n, cc) {
    var x = document.getElementsByClassName("exmenulinks")[n];
    var y = x.cloneNode(true)
    y.setAttribute("style", "height:auto;visibility:hidden");
    x.parentNode.appendChild(y);
    var height = w3_getStyleValue(y, "height");
    x.setAttribute("style", "height:" + height);
    x.parentNode.removeChild(y);
    if (!cc && w3_getStyleValue(x, "height") == height) {
    x.style.height = "0";
} else {
    closemenuitems();
    x.style.height = height;
}
}
    function closemenuitems() {
    var i, x = document.getElementsByClassName("exmenulinks"), l = x.length;
    for (i = 0; i < l; i++) {
    x[i].style.height = "0";
}
}

    openmenuitems(exActiveNo, true);

    function showtooltip(n) {
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
} else {
    document.getElementsByClassName("tooltip")[n].style.display = "block";
}
}
    function hidetooltip(n) {
    document.getElementsByClassName("tooltip")[n].style.display = "none";
}
    function close_menu() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById("topTD").style.paddingLeft = "20px";
    if (document.getElementById("codeTD")) {
    document.getElementById("codeTD").style.paddingLeft = "20px";
    document.getElementById("codeTD2").style.paddingLeft = "20px";
}
    if (w > 900) {
    document.getElementById("tryitLeaderboard").style.paddingLeft = "30px";
    document.getElementById("exercisemenu").style.display = "none";
} else {
    document.getElementById("exercisemenu").style.display = "none";
}
}
    function open_menu() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w > 900) {
    document.getElementById("topTD").style.paddingLeft = "280px";
    if (document.getElementById("codeTD")) {
    document.getElementById("codeTD").style.paddingLeft = "280px";
    document.getElementById("codeTD2").style.paddingLeft = "280px";
}
    document.getElementById("tryitLeaderboard").style.paddingLeft = "0";
}
    document.getElementById("exercisemenu").style.display = "block";
}
    function colorcoding() {
    window.editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
        mode: "text/html",
        htmlMode: true,
        lineWrapping: true,
        smartIndent: false,
        addModeClass: true
    });
    window.editor2 = CodeMirror.fromTextArea(document.getElementById("textareaCode2"), {
    mode: "text/html",
    htmlMode: true,
    lineWrapping: true,
    smartIndent: false,
    readOnly: true,
    addModeClass: true
});
//  window.editor.on("change", function () {window.editor.save();});
}