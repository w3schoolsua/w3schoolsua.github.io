/*SQL tryit end*/
    function colorcoding() {
    var ua = navigator.userAgent;
    //Opera Mini refreshes the page when trying to edit the textarea.
    if (ua && ua.toUpperCase().indexOf("OPERA MINI") > -1) { return false; }
    window.editor = CodeMirror.fromTextArea(document.getElementById("textareaCodeSQL"), {
    mode: "text/x-sql",
    htmlMode: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true
});
//  window.editor.on("change", function () {window.editor.save();});
}
    colorcoding();

    var w3schoolsWebSQLOK = !!window.openDatabase;
    var statementSupport = document.getElementById("sSupport").value;
    if (w3schoolsWebSQLOK === true && statementSupport === "") {
    w3schoolsWebSQL1 = new w3WebSQLInit();
} else {
    var ifr = document.getElementById("iframeResultSQL");
    var idoc = (ifr.contentWindow || ifr.contentDocument);
    if (idoc.document) idoc=idoc.document;
    idoc.write("<div style='margin:10px;font-family:verdana;font-size:12px;'>Нажмите <b>'Выполнить SQL'</b> для выполнения SQL-инструкции выше.</div>");
}

    function showDescription() {
    document.getElementById("descriptionDIV").style.display = "block";
}

    function hideDescription() {
    document.getElementById("descriptionDIV").style.display = "none";
}

    function w3schoolsSQLSubmit() {
    var txt;
    if (window.editor) {
    window.editor.save();
}
    if (w3schoolsWebSQLOK === true && statementSupport === "") {
    w3schoolsWebSQL1.runSQL();
} else {
    var t=document.getElementById("textareaCodeSQL").value;
    t=t.replace(/=/gi,"w3equalsign");
    w3schoolsNoWebSQLSubmit();
}
}

    function w3schoolsWriteDBInfo() {
    var txt;
    if (w3schoolsWebSQLOK === true && statementSupport === "") {
    document.getElementById("iframeResultSQL").style.display="none";
    document.getElementById("divResultSQL").style.display="block";
    document.getElementById("restoreDBBtn").style.display="inline";
    document.getElementById("nobrowsersupport").style.display="none";
    document.getElementById("nostatementsupport").style.display="none";
    document.getElementById("yesbrowsersupport").style.display="block";
    w3schoolsWebSQL1.myDatabase();
} else {
    if (w3schoolsWebSQLOK === true && statementSupport === "-1") {
    document.getElementById("nostatementsupport").style.display="block";
    document.getElementById("nobrowsersupport").style.display="none";
    document.getElementById("yesbrowsersupport").style.display="none";
    document.getElementById("yesbrowsersupport2").style.display="none";
    document.getElementById("websqlexplain").style.display="none";
    document.getElementById("descriptionDIV").style.display = "block";
} else {
    document.getElementById("nobrowsersupport").style.display="block";
    document.getElementById("nostatementsupport").style.display="none";
    document.getElementById("yesbrowsersupport").style.display="none";
    document.getElementById("yesbrowsersupport2").style.display="none";
}
    document.getElementById("divResultSQL").style.display="none";
    document.getElementById("iframeResultSQL").style.display="inline";
    txt = '';
    txt = txt + '<table width="100%" class="notranslate">';
    txt = txt + '<tr><th style="text-align:left;">Названия таблиц</th><th style="text-align:right;">Записи</th></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Customers\')">Customers</td>';
    txt = txt + '<td style="text-align:right;">91</td>';
    txt = txt + '</tr><tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Categories\')">Categories</td>';
    txt = txt + '<td style="text-align:right;">8</td>';
    txt = txt + '</tr><tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Employees\')">Employees</td>';
    txt = txt + '<td style="text-align:right;">10</td></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'OrderDetails\')">OrderDetails</td>';
    txt = txt + '<td style="text-align:right;">518</td></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Orders\')">Orders</td>';
    txt = txt + '<td style="text-align:right;">196</td></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Products\')">Products</td>';
    txt = txt + '<td style="text-align:right;">77</td></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Shippers\')">Shippers</td>';
    txt = txt + '<td style="text-align:right;">3</td></tr>';
    txt = txt + '<tr><td style="text-align:left;cursor:pointer;text-decoration:underline;" onclick="w3schoolsNoWebSQLSelectStar(\'Suppliers\')">Suppliers</td>';
    txt = txt + '<td style="text-align:right;">29</td></tr>';
    txt = txt + '</table>';
    document.getElementById("yourDB").innerHTML = txt;
}
}

    function w3schoolsNoWebSQLSelectStar(x) {
    var sql = "SELECT * FROM " + x + ";";
    document.getElementById("textareaCodeSQL").value = sql;
    window.editor.getDoc().setValue(sql);
    w3schoolsNoWebSQLSubmit();
}

    function w3schoolsNoWebSQLSubmit() {
    var t = document.getElementById("textareaCodeSQL").value;
    document.getElementById("code").value = t;

    t=escape(t);document.getElementById("bt").value="1";

    document.getElementById("tryitform").action="https://tryit.w3schools.com/trysql_view.asp?x=" + Math.random();

    validateForm();
    document.getElementById("tryitform").submit();
}

    function validateForm() {
    var code=document.getElementById("code").value;
    if (code.length>5000) {
    document.getElementById("code").value="<h1>Error</h1>";
}
}
    w3schoolsWriteDBInfo();