/*Script #2 for Exercise - HTML Tutorial*/
    var exsection = "HTML_2";
    var blueprint = "";
    if (exsection == "JS") {
    storageBlip = "js_";
} else if (exsection == "SQL") {
    storageBlip = "sql_";
} else if (exsection == "PYTHON") {
    storageBlip = "python_";
} else if (exsection == "HTML_2") {
    storageBlip = "html_2_";
} else if (exsection == "JSREF") {
    storageBlip = "jsref_";
} else if (exsection == "JAVA") {
    storageBlip = "java_";
} else if (exsection == "CPP") {
    storageBlip = "cpp_";
} else if (exsection == "BS3") {
    storageBlip = "bs3_";
} else if (exsection == "JQ") {
    storageBlip = "jq_";
} else if (exsection == "PHP") {
    storageBlip = "php_";
} else if (exsection == "CSS") {
    storageBlip = "css_";
} else {
    storageBlip = "";
}
    var checkReq = function () {
    checkCode(required);
    document.getElementById("codeCheckWarning").contentEditable = true;
    document.getElementById("codeCheckWarning").focus();
    document.getElementById("codeCheckWarning").contentEditable = false;
}
    function submitTryit(n, cc) {
    if (window.editor) {
    window.editor.save();
}
    var text = document.getElementById("textareaCode" + n).value;
    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult" + n);
    document.getElementById("iframewrapper" + n).innerHTML = "";
    document.getElementById("iframewrapper" + n).appendChild(ifr);
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    if (cc == 1) {
    document.getElementById("iframeResult").addEventListener("load", checkReq);
}
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();
}
    function showCorrectAnswer() {
    document.getElementById("editSection").style.display = "none";
    document.getElementById("correctSection").style.display = "table-row";
    document.getElementById("showCorrectBtn").style.display = "none";
    document.getElementById("hideCorrectBtn").style.display = "inline";
    submitTryit("2", 0);
    if (window.editor2) {
    window.editor2.refresh();
}

}
    function hideCorrectAnswer() {
    document.getElementById("editSection").style.display = "table-row";
    document.getElementById("correctSection").style.display = "none";
    document.getElementById("hideCorrectBtn").style.display = "none";
    document.getElementById("showCorrectBtn").style.display = "inline";
}
    function checkCode(jsonObj) {
    var func, cc, i, l, errs = [], bptxt = "", feilmargin = 0;
    document.getElementById("codeCheckWarningText").innerHTML = "";
    document.getElementById("codeCheckWarning").style.display = "none";
    document.getElementById("codeCheckCorrect").style.display = "none";
    if (typeof jsonObj == 'object') {
    checkTag(jsonObj.tags, document.getElementById("iframeResult").contentWindow.document, "tagname");
    checkTag(jsonObj.tagswithclass, document.getElementById("iframeResult").contentWindow.document, "classname");
    checkTag(jsonObj.tagsbyqueryselector, document.getElementById("iframeResult").contentWindow.document, "queryselector");
    checkStyle(jsonObj.styles, document.getElementById("iframeResult").contentWindow.document);
    func = jsonObj.functions;
    l = (func ? func.length : 0);
    for (i = 0; i < l; i++) {
    if (func[i].name) {
    cc = window[func[i].name](document.getElementById("textareaCode").value);
    if (!cc) {
    errs.push(func[i].errname);
}
}
}
}
    for (i = 0; i < errs.length; i++) {
    document.getElementById("codeCheckWarning").style.display = "block";
    document.getElementById("codeCheckWarningText").innerHTML += errs[i] + "<br>";
}
    if (errs.length == 0) {
    if (jsonObj.alsorequired) {
    checkCode(jsonObj.alsorequired);
} else {
    answers[exActiveNo].splice((exNo-1), 1, 1);
    localStorage.setItem("w3exerciseanswers_" + storageBlip + exnames[exActiveNo], answers[exActiveNo].toString());
    checkCompletedExercises();
    document.getElementById("codeCheckCorrect").style.display = "block";
}
}
    function checkTag(elmnt, parent, collectiontype) {
    var tag, tagname, method, container, a, b, func, tag, attr, tagsinresult, cc, i, ii, iii, l, ll, lll, regexp, errortxt, errorintxt;
    tag = elmnt;
    container = parent;
    l = (tag ? tag.length : 0);
    for (i = 0; i < l; i++) {
    if (tag[i].name) {
    tagname = tag[i].name;
    if (tagname.substr(0,1) == "*") {
    method = "ALL";
    tagname = tagname.substr(1);
}
    tagsinresult = getElements(tagname, container, collectiontype);
    ll = (tagsinresult ? tagsinresult.length : 0);
    if (ll == 0) {
    errs.push(tag[i].errname);
    continue;
}
    if (tag[i].count) {
    if (ll < tag[i].count) {
    errs.push(tag[i].errname);
    continue;
}
}
    errortxt = (tag[i].errvalue ? tag[i].errvalue : "");
    errorintxt = (tag[i].errinvalue ? tag[i].errinvalue : "");
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = (tag[i].errvalue ? tag[i].errvalue : "");
    errorintxt = (tag[i].errinvalue ? tag[i].errinvalue : "");
}
    if (tag[i].value) {
    if (compare("TAG", tagsinresult[ii], tagname, tag[i].value, tagsinresult[ii].innerHTML)) {
    errortxt = "";
}
}
    if (tag[i].invalue) {
    if (compare("TAG", tagsinresult[ii], tagname, tag[i].invalue, tagsinresult[ii].innerHTML, "IN")) {
    errorintxt = "";
}
}
    checkTag(tag[i].tags, tagsinresult[ii]);
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
    if (errorintxt != "") {
    errs.push(errorintxt);
    errorintxt = "";
}
} else {
    if (errortxt == "" && errorintxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
    if (errorintxt != "") {errs.push(errorintxt); }
    attr = tag[i].attr;
    lll = (attr ? attr.length : 0);
    for (iii = 0; iii < lll; iii++) {
    errortxt = attr[iii].errname;
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = attr[iii].errname;
}
    if (tagsinresult[ii].hasAttribute(attr[iii].name)) {
    errortxt = "";
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt);}
    if (attr[iii].value) {
    errortxt = attr[iii].errvalue;
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = attr[iii].errvalue;
}
    if (tagsinresult[ii].hasAttribute(attr[iii].name)) {
    if (compare("TAG", tagsinresult[ii], attr[iii].name, attr[iii].value, tagsinresult[ii].getAttribute(attr[iii].name))) {
    errortxt = "";
}
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
}
    if (attr[iii].invalue) {
    errortxt = attr[iii].errinvalue;
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = attr[iii].errinvalue;
}
    if (tagsinresult[ii].hasAttribute(attr[iii].name)) {
    if (compare("TAG", tagsinresult[ii], attr[iii].name, attr[iii].invalue, tagsinresult[ii].getAttribute(attr[iii].name), "IN")) {
    errortxt = "";
}
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
}
}
    css = tag[i].css;
    lll = (css ? css.length : 0);
    for (iii = 0; iii < lll; iii++) {
    for (ii = 0; ii < ll; ii++) {
    errortxt = "No " + css[iii].style + " property present for the " + tagsinresult[ii].tagName + " element";
    // if (css[iii].style == "margin" && css[iii].value == "auto") {
    //     if (w3_getStyleValue(tagsinresult[ii], "margin-left").replace("px", "") > 0 && (w3_getStyleValue(tagsinresult[ii], "margin-left") == w3_getStyleValue(tagsinresult[ii], "margin-right"))) {
    //         errortxt = "";
    //     }
    // }
    style = w3_getStyleValue(tagsinresult[ii], css[iii].style);
    if (style) {
    errortxt = ""
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
    if (css[iii].value) {
    errortxt = (css[iii].errvalue ? css[iii].errvalue : "");
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = (css[iii].errvalue ? css[iii].errvalue : "");
}
    style = w3_getStyleValue(tagsinresult[ii], css[iii].style);
    if (compare("STYLE", tagsinresult[ii], css[iii].style, css[iii].value, style)) {
    errortxt = "";
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
}

    if (css[iii].invalue) {
    errortxt = (css[iii].errinvalue ? css[iii].errinvalue : "");
    for (ii = 0; ii < ll; ii++) {
    if (method == "ALL") {
    errortxt = (css[iii].errinvalue ? css[iii].errinvalue : "");
}
    style = w3_getStyleValue(tagsinresult[ii], css[iii].style);
    if (compare("STYLE", tagsinresult[ii], css[iii].style, css[iii].invalue, style, "IN")) {
    errortxt = "";
}
    if (method == "ALL") {
    if (errortxt != "") {
    errs.push(errortxt);
    errortxt = "";
}
} else {
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
}
}
}
    if (tag[i].order) {
    if (checkOrder(tag[i].order, container) == -1) {
    errs.push(tag[i].errorder);
}
}
}
}
    function checkStyle(elmnt, parent) {
    var tag, a, b, container, stylesheets, ruls, rules = [], i, ii, iii, iiii, l, ll, lll, llll, j, jj, errortxt, errstyletxt, errvaluetxt, cc, ccArr = [], ccArr2 = [], nn;
    tag = elmnt;
    container = parent;
    l = (tag ? tag.length : 0);
    for (i = 0; i < l; i++) {
    stylesheets = container.styleSheets;
    ll = stylesheets.length;
    if (tag[i].selector) {
    errortxt = (tag[i].errselector ? tag[i].errselector : "");
    errstyletxt = "";
    errvaluetxt = "";
    errinvaluetxt = "";
    for (ii = 0; ii < ll; ii++) {
    ruls = stylesheets[ii].cssRules;
    for (iii = 0; iii < ruls.length; iii++) {
    rules.push(ruls[iii])
}
    for (iii = 0; iii < rules.length; iii++) {
    if ((rules[iii].type == 1 && rules[iii].selectorText.indexOf(tag[i].selector.toLowerCase()) > -1)
    || (rules[iii].type == 5 && tag[i].selector.toLowerCase() == "@font-face")
    || (rules[iii].type == 7 && tag[i].selector.toLowerCase() == "@keyframes")
    || (rules[iii].type == 8 && tag[i].selector.toLowerCase() == rules[iii].keyText)) {
    errortxt = "";
    if (rules[iii].type == 7) {
    for (iiii = 0; iiii < rules[iii].cssRules.length; iiii++) {
    rules.push(rules[iii].cssRules[iiii]);
}
    continue;
}
    styles = rules[iii].style;
    llll = styles.length;
    errstyletxt = (tag[i].errstyle ? tag[i].errstyle : "");
    for (iiii = 0; iiii < llll; iiii++) {
    ss = styles[iiii];
    //console.log(tag[i].style + " ### " + ss);
    if (ss == "text-decoration-color" || ss == "text-decoration-line" || ss == "moz-text-decoration-color" || ss == "moz-text-decoration-line" || ss == "moz-text-blink") {
    continue;
}
    if (ss == "text-decoration-style" || ss == "moz-text-decoration-style") {ss = "text-decoration"; }
    if (compare("", "", "", tag[i].style, ss)) {
    errstyletxt = "";
    errvaluetxt = (tag[i].errvalue ? tag[i].errvalue : "");
    errinvaluetxt = (tag[i].errinvalue ? tag[i].errinvalue : "");
    /*
    cc = styles.cssText
    console.log(tag[i].style + " " + cc)
    cc = cc.substr(cc.indexOf(ss),cc.indexOf(";", cc.indexOf(ss)));
    cc = cc.replace(ss + ": ","");
    cc = cc.replace(ss + ":","");
    if (cc.indexOf(";") == (cc.length - 1)) {cc = cc.substr(0,(cc.length - 1)); }
    */
    ccArr = styles.cssText.split(";");
    for (j = 0; j < ccArr.length; j++) {
    a = w3_trim(ccArr[j].substr(0, ccArr[j].indexOf(":")))
    b = w3_trim(ccArr[j].substr(ccArr[j].indexOf(":") + 1))
    //console.log(a + " ### " + b);
    if (tag[i].style == a) {
    cc = b;
    break;
}
    if (tag[i].style.substr(0, 11) == "background-" && a == "background") {
    ccArr = b.split(" ");
    cc = ccArr[0];
    break;
}
    //ccArr2 = ccArr[j].split(":");
    //for (jj = 0; jj < ccArr2.length; jj++) {
    //    if (tag[i].style == w3_trim(ccArr2[0])
    //     || (tag[i].style.substr(0, 11) == "background-" && w3_trim(ccArr2[0]) == "background")) {
    //        cc = w3_trim(ccArr2[1]);
    //    }
    //}
}
    if (tag[i].value) {
    if (compare("", "", styles[iiii], tag[i].value, cc)) {
    errvaluetxt = "";
    break
}
}
    if (tag[i].invalue) {
    if (compare("", "", styles[iiii], tag[i].invalue, cc, "IN")) {
    errinvaluetxt = "";
    break
}
}
}
}
    if (errstyletxt != "") {errortxt = errstyletxt; }
    if (errvaluetxt != "") {errortxt = errvaluetxt; }
    if (errinvaluetxt != "") {errortxt = errinvaluetxt; }
}
}
    if (errortxt == "") {break;}
}
}
    if (errortxt != "") {errs.push(errortxt); }
}
}
    function getElements(elements, obj, collectiontype) {
    var tagNames, resultArray = [], i, tags, j;
    if (!obj) var obj = document;
    tagNames = elements.split('|');
    for (i = 0; i < tagNames.length; i++) {
    if (collectiontype == "classname") {
    tags = obj.getElementsByClassName(tagNames[i]);
} else if (collectiontype == "queryselector") {
    tags = obj.querySelectorAll(tagNames[i]);
} else {
    tags = obj.getElementsByTagName(tagNames[i]);
}
    for (j = 0; j < tags.length; j++) {
    resultArray.push(tags[j]);
}
}
    return resultArray;
}
    function checkOrder(elements, obj) {
    var stat = "OK", tagNames, tags, j, i, x;
    if (!obj) var obj = document;
    tagNames = elements.split(',');
    for (i = 0; i < tagNames.length - 1; i++) {
    try {
    x = obj.getElementsByTagName(tagNames[i])[0].compareDocumentPosition(obj.getElementsByTagName(tagNames[i+1])[0]);
} catch (er) {
    stat = -1;
    break;
}
    if (x != 4) {
    stat = -1;
    break;
}
}
    return stat;
}
    function compare(a, tag, prop, xx, y, typ) {
    var comp, oper, valueARR = [], i, x, hit, margin = 0;
    valueARR = xx.split("|");
    hit = false;
    for (i = 0; i < valueARR.length; i++) {
    x = valueARR[i];
    comp = "LIKE";
    if (x.substr(0,1) == "!") {
    comp = "NOT LIKE";
    x = x.substr(1);
}
    oper = "=";
    if (x.substr(0,2) == "<=") {
    oper = "<=";
    x = x.substr(2);
}
    if (x.substr(0,1) == "<") {
    oper = "<";
    x = x.substr(1);
}
    if (x.substr(0,2) == ">=") {
    oper = ">=";
    x = x.substr(2);
}
    if (x.substr(0,1) == ">") {
    oper = ">";
    x = x.substr(1);
}
    if (prop.indexOf("color") > -1 ) {
    x = convert_cssColor(x);
    y = convert_cssColor(y);
}
    if (prop.indexOf("font-size") > -1 ) {
    x = convert_cssFontSize(x);
    y = convert_cssFontSize(y);
}
    if (prop.indexOf("background") > -1 && x.indexOf("linear-gradient") > -1 ) {
    x = convert_cssGradient(tag, x);
    y = convert_cssGradient(tag, y);
}
    if (prop.indexOf("background") > -1 && x.indexOf("radial-gradient") > -1 ) {
    x = convert_cssGradient(tag, x);
    y = convert_cssGradient(tag, y);
}
    if (prop == "transform") {
    x = convert_cssTransform(tag, x);
    y = convert_cssTransform(tag, y);
}
    if (prop.indexOf("transition-timing-function") > -1) {
    x = convert_cssTransitionTiming(tag, x);
    y = convert_cssTransitionTiming(tag, y);
}
    if (prop.indexOf("animation-timing-function") > -1) {
    x = convert_cssAnimationTiming(tag, x);
    y = convert_cssAnimationTiming(tag, y);
}
    if (prop.indexOf("text-shadow") > -1) {
    x = convert_cssTextShadow(tag, x);
    y = convert_cssTextShadow(tag, y);
}
    if (prop.indexOf("box-shadow") > -1) {
    x = convert_cssBoxShadow(tag, x);
    y = convert_cssBoxShadow(tag, y);
}
    if (prop.indexOf("opacity") > -1 ) {
    x = Number(x).toFixed(2);
    y = Number(y).toFixed(2);
}
    if (a == "STYLE" && prop == "font-weight") {
    x = convert_cssFontWeight(tag, x);
    y = convert_cssFontWeight(tag, y);
}
    if (a == "STYLE" && prop == "width" && tag.tagName != "IMG") {
    feilmargin = 0;
    x = convert_cssSize(tag, x, prop);
    y = convert_cssSize(tag, y, prop);
    margin = 2 + feilmargin;
}
    if ((prop == "border-top-width"
    || prop == "border-right-width"
    || prop == "border-bottom-width"
    || prop == "border-left-width"
    || prop == "outline-width"
    || prop == "width"
    || prop == "height") && y.substr(y.length - 2, 2) == "px") {
    y = y.replace("px", "");
    if (Number(y)) {
    y = Math.ceil(y);
}
    y = y + "px";
}
    if (blueprint == "OK") {
    bptxt += "<p>" + a + ": " + tag + "<br>Test for " + prop + "<br>Your code: " + y + "<br>Correct code: " + x + "</p>";
    document.getElementById("blueprint").innerHTML = bptxt;
}
    if (typ == "IN") {
    if (y.toLowerCase().indexOf(x.toLowerCase()) > -1) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
} else {
    if (margin != 0) {
    if (Number(y.replace("px","")) < (Number(x.replace("px","")) + margin) && Number(y.replace("px","")) > ((Number(x.replace("px","")) - margin))) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
} else {
    if (oper == "=") {
    if (y.toLowerCase() == x.toLowerCase()) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
}
    if (oper == "<") {
    if (y < x) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
}
    if (oper == "<=") {
    if (y <= x) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
}
    if (oper == ">") {
    if (y > x) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
}
    if (oper == ">=") {
    if (y >= x) {
    if (comp == "NOT LIKE") {
    return false;
} else {
    return true;
}
} else {
    if (comp == "NOT LIKE") {
    hit = true;
} else {
    hit = false;
}
}
}
}
}
}
    return hit;
}
    function convert_cssColor(color) {
    var doc = document.createElement('div');
    doc.style.backgroundColor = color;
    document.body.appendChild(doc);
    return w3_getStyleValue(doc, "background-color");
}
    function convert_cssFontSize(size) {
    var doc = document.createElement('div');
    doc.style.fontSize = size;
    document.getElementById("iframeResult").contentWindow.document.body.appendChild(doc);
    return w3_getStyleValue(doc, "font-size");
}
    /*function convert_cssSize(tag, size, p) {
        var rv, doc = document.createElement(tag.tagName);
        if (p == "width") {doc.style.width = size; }
        if (p == "height") {doc.style.height = size; }
        tag.parentNode.insertBefore(doc, tag);
        rv = w3_getStyleValue(doc, p);
        tag.parentNode.removeChild(doc);
        return rv
    }*/
    function convert_cssSize(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    //doc = tag.cloneNode(true);
    if (p == "width") {
    feilmargin += calc_feilmargin(tag, "border-left-width");
    feilmargin += calc_feilmargin(tag, "border-right-width");
    feilmargin += calc_feilmargin(tag, "padding-left");
    feilmargin += calc_feilmargin(tag, "padding-right");
    doc.style.width = size;
}
    if (p == "height") {
    feilmargin += calc_feilmargin(tag, "border-top-width");
    feilmargin += calc_feilmargin(tag, "border-bottom-width");
    feilmargin += calc_feilmargin(tag, "padding-top");
    feilmargin += calc_feilmargin(tag, "padding-bottom");
    doc.style.height = size;
}
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, p);
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssGradient(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.backgroundImage = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "background-image");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssTransform(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.transform = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "transform");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssTransitionTiming(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.transitionTimingFunction = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "transition-timing-function");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssAnimationTiming(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.animationTimingFunction = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "animation-timing-function");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssTextShadow(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.textShadow = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "text-shadow");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssBoxShadow(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.boxShadow = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "box-shadow");
    tag.parentNode.removeChild(doc);
    return rv
}
    function convert_cssFontWeight(tag, size, p) {
    var rv, doc = document.createElement(tag.tagName);
    doc.style.fontWeight = size;
    tag.parentNode.insertBefore(doc, tag);
    rv = w3_getStyleValue(doc, "font-weight");
    tag.parentNode.removeChild(doc);
    return rv
}
    function calc_feilmargin(tag, cssprop) {
    var cssvalue = w3_getStyleValue(tag, cssprop);
    cssvalue = cssvalue.replace("px", "");
    return (Number(cssvalue) || 0);
}
}
    function w3_getStyleValue(elmnt,style) {
    if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt,null).getPropertyValue(style);
} else {
    return elmnt.currentStyle[style];
}
}
    function w3_trim(x) {
    return x.replace(/^\s+|\s+$/gm,'')
}
    var validHTML = function (html) {
    var doc = document.createElement('html');
    if (html.toLowerCase().indexOf("<head>") == -1) {
    html = "<head></head>" + html;
}
    html = html.replace("<!DOCTYPE html>","");
    html = html.replace("<html>","");
    html = html.replace("</html>","");
    html = html.trim();
    doc.innerHTML = html;
    return ( doc.innerHTML.toLowerCase() === html.toLowerCase() );
}
    function codeCheckWarningClose() {
    document.getElementById("codeCheckWarning").style.display = "none";
}
    function codeCheckCorrectClose() {
    document.getElementById("codeCheckCorrect").style.display = "none";
}