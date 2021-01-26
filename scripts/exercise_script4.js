/*Script #4 for Exercise - HTML Tutorial*/
    var formanswers = [];
    formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');formanswers.push('');
    var originalassignmentcode;
    function initAssignment() {
    var x, y, txt, i, newtxt, c, cc, n, numberofchar, j, inputs, templates, l, inputcount = -1;
    document.getElementById("assignmenttext").style.display = "block";
    x = document.getElementById("assignmentcode");
    x.style.display = "none";
    txt = x.innerHTML;
    originalassignmentcode = txt;
    newtxt = "";
    for (i = 0; i < txt.length; i++) {
    c = txt[i]
    numberofchar = 0;
    if (c == "@") {
    inputcount++
    if (txt[i + 1] == "(") {
    startpos = i + 2;
    endpos = txt.indexOf(")", startpos);
    n = txt.substring(startpos, endpos)
    if (!isNaN(n)) {numberofchar = n;}
}
    if (numberofchar > 0) {
    i = endpos;
    c = "<pre class='meassureInputWidth'>"
    for (j = 0; j < numberofchar; j++) {
    c += " ";
}
    c += "</pre>"
    c += "<input spellcheck='false' class='editablesection' onkeypress='checkKey(event)' oninput='writinginput(this, " + inputcount + ")' maxlength='" + numberofchar + "'>"
}
}
    newtxt += c;
}
    document.getElementById("assignmentcontainer").innerHTML = newtxt;
    inputs = document.getElementsByClassName("editablesection");
    templates = document.getElementsByClassName("meassureInputWidth");
    for (i = 0; i < inputs.length; i++) {
    inputs[i].style.width = ((templates[i].offsetWidth) + 1) + "px";
    templates[i].style.display = 'none';
    templates[i].innerHTML = "w3exercise_input_no_" + i;
    cc = formanswers[i];
    cc = cc.replace(/&apos;/g, "'");
    cc = cc.replace(/&quot;/g, '"');
    inputs[i].value = cc;
}
    //window.setTimeout(function () {inputs[0].focus()}, 800);
}

    function checkKey(event) {
    if (event.keyCode == 13) {
    checkassignmentcode();
    snhb.startAuction(['try_it_leaderboard']);
}
}

    function checkassignmentcode() {
    var check, correct, correct2, inputs, i, moreCorrect = true, cc, result = "";
    check = document.getElementById("assignmentcontainer").textContent;
    inputs = document.getElementsByClassName("editablesection");
    for (i = 0; i < inputs.length; i++) {
    check = check.replace("w3exercise_input_no_" + i, inputs[i].value);
}
    i = 1;
    while (moreCorrect) {
    cc = (i == 1) ? "" : i;
    if (document.getElementById("correctcode" + cc)) {
    correct = document.getElementById("correctcode" + cc).textContent;
    if (exsection == "BS3") {
    correct = document.getElementById("correctcode" + cc).innerHTML;
    correct = correct.replace(/&lt;/g, "<");
    correct = correct.replace(/&gt;/g, ">");
}
    if (exsection == "SQL") {
    check = check.toLowerCase();
    correct = correct.toLowerCase();
}
    if (exsection == "HTML_2") {
    check = check.toLowerCase();
    correct = correct.toLowerCase();
}
//console.log(check);
//console.log(correct);
    if (w3_trim(check) == w3_trim(correct)) {
    result = "correct";
    break;
}
}
    i++;
    moreCorrect = (document.getElementById("correctcode" + cc));
}
    if (result == "correct") {
    answers[exActiveNo].splice((exNo-1), 1, 1);
    localStorage.setItem("w3exerciseanswers_" + storageBlip + exnames[exActiveNo], answers[exActiveNo].toString());
    checkCompletedExercises();
    document.getElementById("assignmentCorrect").style.display = "block";
    if (exNo >= 4 && 1 == 21) {
    document.getElementById("answerbutton").style.display = "none";
    document.getElementById("correctnextbtn").style.display = "none";
    document.getElementById("assignmentCorrect").onclick = "";
} else {
    document.getElementById("answerbutton").innerHTML = "Наступна вправа &#10095;";
    document.getElementById("answerbutton").addEventListener("click", nextexercise);
    document.getElementById("answerbutton").focus();
}
} else {
    document.getElementById("assignmentNotCorrect").style.display = "block";
    document.getElementById("answerbutton").innerHTML = "Спробуйте ще раз";
    document.getElementById("answerbutton").addEventListener("click", closeNotCorrect);
    document.getElementById("answerbutton").focus();
}
}

    function writinginput(obj, n) {
    var x;
    document.getElementById("assignmentCorrect").style.display = "none";
    document.getElementById("assignmentNotCorrect").style.display = "none";
//  if (obj.value.length == obj.maxLength) {
//    x = document.getElementsByClassName("editablesection");
//    if ((n + 1) > (x.length - 1)) {
//      document.getElementById("answerbutton").focus();
//    } else {
//      x[n + 1].focus();
//    }
//  }
}

    function showanswer() {
    var txt, correcttxt, cc, from, to, endpos, i, numberofchar, correctpositions = [], correctanswers = [], x, y, z, inputs;
    correcttxt = document.getElementById("correctcode").innerHTML;
    txt = originalassignmentcode;
    if (exsection == "HTML_2") {
    correcttxt = correcttxt.replace(/&lt;/g, "<");
    correcttxt = correcttxt.replace(/&gt;/g, ">");
    txt = txt.replace(/&lt;/g, "<");
    txt = txt.replace(/&gt;/g, ">");
}
    from = 0;
    to = 0;
    cc = 0;
    for (i = 0; i < txt.length; i++) {
    c = txt[i]
    numberofchar = 0;
    if (c == "@") {
    if (txt[i + 1] == "(") {
    startpos = i + 2;
    endpos = txt.indexOf(")", startpos);
    n = txt.substring(startpos, endpos)
    if (!isNaN(n)) {numberofchar = n;}
    if (numberofchar > 0) {
    from = i + cc;
    to = Number(numberofchar);
    cc += Number(numberofchar) - 3 - (numberofchar.length);
    correctpositions.push([from,to]);
}
}
}
}
    cc = 0;
    for (i = 0; i < correctpositions.length; i++) {
    x = correctpositions[i][0];
    y = correctpositions[i][1];
    z = correcttxt.substr(x + cc, y);
//console.log(correcttxt)
//console.log(z)
    if (z == "&") {
    if (correcttxt.substr(x + cc, 4) == "&lt;") { z = "<"; cc = cc + 3; }
    if (correcttxt.substr(x + cc, 4) == "&gt;") { z = ">"; cc = cc + 3; }
}
    if (z == "&l") {
    if (correcttxt.substr(x + cc, 8) == "&lt;&gt;") { z = "<>"; cc = cc + 6; }
}
    if (z == "&lt;?") {
    if (correcttxt.substr(x + cc, 8) == "&lt;?php") { z = "<?php"; cc = cc + 3; }
}
    if (z == "?&") {
    if (correcttxt.substr(x + cc, 5) == "?&gt;") { z = "?>"; cc = cc + 3; }
}
    if (z == "=&") {
    if (correcttxt.substr(x + cc, 5) == "=&gt;") { z = "=>"; cc = cc + 3; }
}
    correctanswers.push(z);
}
    document.getElementById("showcorrectanswercontainer").innerHTML = document.getElementById("assignmentcontainer").cloneNode(true).innerHTML;
    inputs = document.getElementById("showcorrectanswercontainer").getElementsByClassName("editablesection");
    for (i = 0; i < inputs.length; i++) {
    inputs[i].value = correctanswers[i];
    inputs[i].readOnly = true;
}
    document.getElementById("assignmentcontainer").style.display = "none";
    document.getElementById("showcorrectanswercontainer").style.display = "block";
    x = document.getElementsByClassName("showanswerbutton");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
    x = document.getElementsByClassName("hideanswerbutton");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline";
}
    document.getElementById("answerbutton").style.visibility = "hidden";
}

    function hideanswer() {
    var x, i;
    document.getElementById("assignmentcontainer").style.display = "block";
    document.getElementById("showcorrectanswercontainer").style.display = "none";
    x = document.getElementsByClassName("showanswerbutton");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline";
}
    x = document.getElementsByClassName("hideanswerbutton");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
    document.getElementById("answerbutton").style.visibility = "visible";
}

    function nextexercise() {
    if (exNo >= 4) {
    location = "exercise4ec8.html?filename=exercise_" + exnames[exActiveNo + 1] + "1";
} else {
    location = "exercise4ec8.html?filename=exercise_" + exnames[exActiveNo] + (exNo + 1)
}
}

    function closeNotCorrect() {
    document.getElementById("answerbutton").removeEventListener("click", closeNotCorrect);
    document.getElementById("answerbutton").innerHTML = "Надіслати відповідь &#10095;";
    document.getElementById("assignmentNotCorrect").style.display = "none";
    document.getElementsByClassName("editablesection")[0].focus();
}
    initAssignment();
    function giveFocus() {
    document.getElementsByClassName("editablesection")[0].focus();
}
    if (window.addEventListener) {
    window.addEventListener("load", giveFocus);
} else if (window.attachEvent) {
    window.attachEvent("onload", giveFocus);
}