/*CSS tryit head*/
    if (window.addEventListener) {
    window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {
    window.attachEvent("onresize", browserResize);
}
    var xbeforeResize = window.innerWidth;
    function browserResize() {
    var afterResize = window.innerWidth;
    if ((xbeforeResize < (970) && afterResize >= (970)) || (xbeforeResize >= (970) && afterResize < (970)) ||
    (xbeforeResize < (728) && afterResize >= (728)) || (xbeforeResize >= (728) && afterResize < (728)) ||
    (xbeforeResize < (468) && afterResize >= (468)) || (xbeforeResize >= (468) && afterResize < (468))) {
    xbeforeResize = afterResize;
    snhb.queue.push(function() {
    snhb.startAuction(["try_it_leaderboard"]);
});
}
    if (window.screen.availWidth <= 768) {
    restack(window.innerHeight > window.innerWidth);
}
    fixDragBtn();
    showFrameSize();
}
    var fileID = "";
    var loadSave = false;
    function getSavedFile() {
    loadSave = true;
    var htmlCode;
    var paramObj = {};
    paramObj.fileid = "";
    fileID = paramObj.fileid;
    var paramA = JSON.stringify(paramObj);
    var httpA = new XMLHttpRequest();
    httpA.open("POST.html", globalURL, true);
    httpA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpA.onreadystatechange = function() {
    if (httpA.readyState == 4 && httpA.status == 200) {
    document.getElementById("textareaCode").value = httpA.responseText;
    window.editor.getDoc().setValue(httpA.responseText);
    loadSave = false;
}
}
    httpA.send(paramA);
}
    function retheme() {
    var cc = document.body.className;
    if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
} else {
    document.body.className += " darktheme";
}
}