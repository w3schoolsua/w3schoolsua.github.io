/*Script #3 for Exercise - HTML Tutorial*/
    var x, exNo, answers = [];
    if (window.addEventListener) {
    window.addEventListener("load", w3LoadExercise);
} else if (window.attachEvent) {
    window.attachEvent("onload", w3LoadExercise);
}
    function w3LoadExercise() {
    var hint, i, j, l, x, aa;
    hint = document.getElementById("hint");
    if (hint) {
    x = document.createElement("BUTTON");
    x.setAttribute("type", "button");
    x.setAttribute("class", "w3-btn");
    x.setAttribute("style", "position:absolute");
    x.setAttribute("title", "Click to get a hint");
    x.setAttribute("onclick", "needHint(this)");
    var t = document.createTextNode("Hint");
    x.appendChild(t);
    hint.parentNode.insertBefore(x, hint);
}
    for (i = 0; i < exnames.length; i++) {
    aa = "";
    if (localStorage.getItem("w3exerciseanswers_" + storageBlip + exnames[i])) {
} else {
    l = excounts[i];
    for (j = 0; j < l; j++) {
    if (j > 0) {aa += ","; }
    aa += "0";
}
    localStorage.setItem("w3exerciseanswers_" + storageBlip + exnames[i], aa);
}
}
    for (i = 0; i < exnames.length; i++) {
    answers[i] = localStorage.getItem("w3exerciseanswers_" + storageBlip + exnames[i]).split(",");
    if (i == exActiveNo) {
    exNo = "exercise_html_attributes2".replace("exercise_","");
    exNo = exNo.replace(exnames[i],"");
    exNo = Number(exNo);
}
}
    checkCompletedExercises(0);
    if (exNo) {
    document.getElementsByClassName("exmenulinks")[exActiveNo].getElementsByClassName("exbtn")[exNo-1].contentEditable = true;
    document.getElementsByClassName("exmenulinks")[exActiveNo].getElementsByClassName("exbtn")[exNo-1].focus();
    document.getElementsByClassName("exmenulinks")[exActiveNo].getElementsByClassName("exbtn")[exNo-1].blur();
    document.getElementsByClassName("exmenulinks")[exActiveNo].getElementsByClassName("exbtn")[exNo-1].contentEditable = false;
}
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
    document.getElementsByClassName("exercisemenuinner")[0].style.overflowY = "scroll";
}

}
    function checkCompletedExercises(n) {
    var i, j, l, cc = 0, dd = 0, rr = 0, q = 0, rightAnswers, totRightAnswers = 0;
    for (i = 0; i < exnames.length; i++) {
    dd = 1;
    rightAnswers = 0;
    l = excounts[i];
    for (var j = 0; j < l; j++) {
    q++;
    if (answers[i][j] == 1) {
    totRightAnswers++;
    rightAnswers++;
    rr++;
//                document.getElementsByClassName("exdot")[cc].style.backgroundColor = "#73ad21";
//                document.getElementsByClassName("exmenulinks")[i].getElementsByTagName("a")[j].getElementsByClassName("fa-check")[0].style.display = "none";
    document.getElementsByClassName("exmenulinks")[i].getElementsByTagName("a")[j].getElementsByClassName("fa-check")[0].style.visibility = "visible";
} else {
    dd = 0;
//                document.getElementsByClassName("exdot")[cc].style.backgroundColor = "#dadada";
//                document.getElementsByClassName("exmenulinks")[i].getElementsByTagName("a")[j].getElementsByClassName("fa-check")[0].style.display = "inline";
    document.getElementsByClassName("exmenulinks")[i].getElementsByTagName("a")[j].getElementsByClassName("fa-check")[0].style.visibility = "hidden";
}
    cc++;
}
    if (dd == 1) {
    document.getElementsByClassName("exmenuitemheader")[i].getElementsByClassName("fa-check")[0].style.visibility = "visible";
}
}
    document.getElementById("completedExercisesNo").innerHTML = "Завершено " + rr + " із " + q + " вправ:";
    if (n != 0 && totRightAnswers == q) {
    document.getElementById('id02').style.display = 'block';
}
}
    function resetScore() {
    document.getElementById('id01').style.display = 'none';
    var i, aa;
    for (i = 0; i < exnames.length; i++) {
    aa = "";
    for (j = 0; j < excounts[i]; j++) {
    if (j > 0) {aa += ","; }
    aa += "0";
}
    localStorage.setItem("w3exerciseanswers_" + storageBlip + exnames[i], aa);
    answers[i] = localStorage.getItem("w3exerciseanswers_" + storageBlip + exnames[i]).split(",");
}
    checkCompletedExercises(0);
}
    function modalReset() {
    document.getElementById('id01').style.display = 'block';
}
    function needHint(x) {
    x.style.display = "none";
    document.getElementById("hint").style.visibility = "visible";
}