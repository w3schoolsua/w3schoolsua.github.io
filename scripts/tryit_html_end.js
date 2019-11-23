/*Скрипт для страниц tryit в html - блок body в конце*/
submitTryit()
    function submitTryit(n) {
      if (window.editor) {
        window.editor.save();
      }
      var text = document.getElementById("textareaCode").value;
      var ifr = document.createElement("iframe");
      ifr.setAttribute("frameborder", "0");
      ifr.setAttribute("id", "iframeResult");
      ifr.setAttribute("name", "iframeResult");
      document.getElementById("iframewrapper").innerHTML = "";
      document.getElementById("iframewrapper").appendChild(ifr);
      if (loadSave == true) {
        ifr.setAttribute("src", "../code/opentext.html");
      } else if (fileID != "" && loadSave == false) {
        var t = text;
        t = t.replace(/=/gi, "w3equalsign");
        t = t.replace(/\+/gi, "w3plussign");
        var pos = t.search(/script/i)
        while (pos > 0) {
          t = t.substring(0, pos) + "w3" + t.substr(pos, 3) + "w3" + t.substr(pos + 3, 3) + "tag" + t.substr(pos + 6);
          pos = t.search(/script/i);
        }
        document.getElementById("code").value = t;
        document.getElementById("codeForm").action = "https://tryit.w3schools.com/tryit_view.php?x=" + Math.random();
        document.getElementById('codeForm').method = "post";
        document.getElementById('codeForm').acceptCharset = "utf-8";
        document.getElementById('codeForm').target = "iframeResult";
        document.getElementById("codeForm").submit();
      } else {
        var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
        ifrw.document.open();
        ifrw.document.write(text);
        ifrw.document.close();
        //23.02.2016: contentEditable установлен в true, чтобы исправить выделение текста (ошибку) в Firefox.
        //(и вернуться к false, чтобы предотвратить редактирование содержимого)
        //(Чтобы воспроизвести ошибку: Выберите текст в окне результатов с и без приведенных ниже операторов contentEditable.)
        if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
          ifrw.document.body.contentEditable = true;
          ifrw.document.body.contentEditable = false;
        }
      }
    }
    var currentStack = true;
    if ((window.screen.availWidth <= 768 && window.innerHeight > window.innerWidth) || "" == " horizontal") {
      restack(true);
    }
    function restack(horizontal) {
      var tc, ic, t, i, c, f, sv, sh, d, height, flt, width;
      tc = document.getElementById("textareacontainer");
      ic = document.getElementById("iframecontainer");
      t = document.getElementById("textarea");
      i = document.getElementById("iframe");
      c = document.getElementById("container");
      sv = document.getElementById("stackV");
      sh = document.getElementById("stackH");
      tc.className = tc.className.replace("horizontal", "");
      ic.className = ic.className.replace("horizontal", "");
      t.className = t.className.replace("horizontal", "");
      i.className = i.className.replace("horizontal", "");
      c.className = c.className.replace("horizontal", "");
      if (sv) {
        sv.className = sv.className.replace("horizontal", "")
      };
      if (sv) {
        sh.className = sh.className.replace("horizontal", "")
      };
      stack = "";
      if (horizontal) {
        tc.className = tc.className + " horizontal";
        ic.className = ic.className + " horizontal";
        t.className = t.className + " horizontal";
        i.className = i.className + " horizontal";
        c.className = c.className + " horizontal";
        if (sv) {
          sv.className = sv.className + " horizontal"
        };
        if (sv) {
          sh.className = sh.className + " horizontal"
        };
        stack = " horizontal";
        document.getElementById("textareacontainer").style.height = "50%";
        document.getElementById("iframecontainer").style.height = "50%";
        document.getElementById("textareacontainer").style.width = "100%";
        document.getElementById("iframecontainer").style.width = "100%";
        currentStack = false;
      } else {
        document.getElementById("textareacontainer").style.height = "100%";
        document.getElementById("iframecontainer").style.height = "100%";
        document.getElementById("textareacontainer").style.width = "50%";
        document.getElementById("iframecontainer").style.width = "50%";
        currentStack = true;
      }
      fixDragBtn();
      showFrameSize();
    }
    function showFrameSize() {
      var t;
      var width, height;
      width = Number(w3_getStyleValue(document.getElementById("iframeResult"), "width").replace("px", "")).toFixed();
      height = Number(w3_getStyleValue(document.getElementById("iframeResult"), "height").replace("px", "")).toFixed();
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
          textareawidth = window.getComputedStyle(document.getElementById("textareawrapper"), null).getPropertyValue("height");
          textareaheight = window.getComputedStyle(document.getElementById("textareawrapper"), null).getPropertyValue("width");
          leftpadding = window.getComputedStyle(document.getElementById("textarea"), null).getPropertyValue("padding-top");
          buttonwidth = window.getComputedStyle(document.getElementById("dragbar"), null).getPropertyValue("height");
        } else {
          dragleft = document.getElementById("textareawrapper").currentStyle["width"];
        }
        textareawidth = Number(textareawidth.replace("px", ""));
        leftpadding = Number(leftpadding.replace("px", ""));
        buttonwidth = Number(buttonwidth.replace("px", ""));
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
      if (dragging) {
        document.getElementById("shield").style.display = "block";
        if (stack != " horizontal") {
          var percentage = (e.pageX / window.innerWidth) * 100;
          if (percentage > 5 && percentage < 98) {
            var mainPercentage = 100 - percentage;
            document.getElementById("textareacontainer").style.width = percentage + "%";
            document.getElementById("iframecontainer").style.width = mainPercentage + "%";
            fixDragBtn();
          }
        } else {
          var containertop = Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
          var percentage = ((e.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
          if (percentage > 5 && percentage < 98) {
            var mainPercentage = 100 - percentage;
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
      if (window.editor) {
        window.editor.refresh();
      }
    }
    if (window.addEventListener) {
      document.getElementById("dragbar").addEventListener("mousedown", function(e) {
        dragstart(e);
      });
      document.getElementById("dragbar").addEventListener("touchstart", function(e) {
        dragstart(e);
      });
      window.addEventListener("mousemove", function(e) {
        dragmove(e);
      });
      window.addEventListener("touchmove", function(e) {
        dragmove(e);
      });
      window.addEventListener("mouseup", dragend);
      window.addEventListener("touchend", dragend);
      window.addEventListener("load", fixDragBtn);
      window.addEventListener("load", showFrameSize);
    }
    function click_savebtn() {
      if (window.editor) {
        window.editor.save();
      }
      document.getElementById('saveModal').style.display = 'block';
    }
    function click_google_savebtn() {
      if (window.editor) {
        window.editor.save();
      }
      document.getElementById('driveSaveModal').style.display = 'block'
    }
    function click_google_loadbtn() {
      document.getElementById('driveLoadModal').style.display = 'block'
    }
    function colorcoding() {
      var ua = navigator.userAgent;
      //Opera Mini обновляет страницу при попытке редактировать текстовую область.
      if (ua && ua.toUpperCase().indexOf("OPERA MINI") > -1) {
        return false;
      }
      window.editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
        mode: "text/html",
        htmlMode: true,
        lineWrapping: true,
        smartIndent: false,
        addModeClass: true
      });
      //  window.editor.on("change", function () {window.editor.save();});
    }
    colorcoding();
    function w3_getStyleValue(elmnt, style) {
      if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt, null).getPropertyValue(style);
      } else {
        return elmnt.currentStyle[style];
      }
    }
    //СОХРАНИТЬ И ОТКРЫТЬ СКРИПТ
    var oauthToken;
    var userAction;
    var pickerApiLoaded;
    var developerKey = 'AIzaSyAMZDPXiGcCNWs1UCWG9LS6kkW5YiABfJ0';
    var CLIENT_ID = '451843133508-ckbr5r6ch1ofqbmh87oll4u6ltinqv2t.apps.googleusercontent.com';
    var SCOPES = ['https://www.googleapis.com/auth/drive.file'];

    //Проверьте, авторизовал ли данный пользователь это приложение
    function checkAuth() {
      gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
    }

    //Обработка ответа от сервера авторизации
    function handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        loadApi();
      }
    }

    //Инициировать поток аутентификации в ответ на нажатие пользователем кнопки авторизации
    function handleAuthClick(event, userClick) {
      userAction = userClick;
      gapi.auth.authorize({
          client_id: CLIENT_ID,
          scope: SCOPES,
          immediate: false
        },
        handleAuthResult);
      return false;
    }

    // Загрузить библиотеку API
    function loadApi() {
      gapi.client.load('drive', 'v3');
      gapi.load('picker', {
        'callback': onPickerApiLoad
      });
    }
    function onPickerApiLoad() {
      pickerApiLoaded = true;
      if (userAction == "save") {
        userAction = "";
        document.getElementById('driveText').style.display = 'none';
        document.getElementById('driveSavedPanel').style.display = 'block';
        createFileWithHTMLContent(document.getElementById('googleFileName').value, document.getElementById('textareaCode').value)
      }
      if (userAction == "open") {
        userAction = "";
        createPicker();
      }
    }

    // Создание и рендеринг объекта Picker для выбора файла HTML
    function createPicker() {
      if (pickerApiLoaded) {
        var view = new google.picker.View(google.picker.ViewId.DOCS);
        view.setMimeTypes("text/html");
        var picker = new google.picker.PickerBuilder().
        addView(view).
        setOAuthToken(oauthToken).
        setDeveloperKey(developerKey).
        setCallback(pickerCallback).
        build();
        picker.setVisible(true);
      }
    }
    // Поместите содержимое файла в редактор tryit
    function pickerCallback(data) {
      var docID = '';
      if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
        var doc = data[google.picker.Response.DOCUMENTS][0];
        docID = doc[google.picker.Document.ID];
        getContentOfFile(docID);
      }
    }

    //Получить содержимое
    function getContentOfFile(theID) {
      gapi.client.request({
        'path': '/drive/v2/files/' + theID,
        'method': 'GET',
        callback: function(theResponseJS, theResponseTXT) {
          var myToken = gapi.auth.getToken();
          var myXHR = new XMLHttpRequest();
          myXHR.open('GET.html', theResponseJS.downloadUrl, true);
          myXHR.setRequestHeader('Authorization', 'Bearer ' + myToken.access_token);
          myXHR.onreadystatechange = function(theProgressEvent) {
            if (myXHR.readyState == 4) {
              if (myXHR.status == 200) {
                var code = myXHR.response;
                document.getElementById("textareaCode").value = code;
                window.editor.getDoc().setValue(code);
                submitTryit(1);
                resetDriveLoadModal();
              }
            }
          }
          myXHR.send();
        }
      });
    }
    var createFileWithHTMLContent = function(name, data, callback) {
      const boundary = '-------314159265358979323846';
      const delimiter = "\r\n--" + boundary + "\r\n";
      const close_delim = "\r\n--" + boundary + "--";
      const contentType = 'text/html';
      var metadata = {
        'name': name,
        'mimeType': contentType
      };
      var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n\r\n' +
        data +
        close_delim;
      var request = gapi.client.request({
        'path': '/upload/drive/v3/files',
        'method': 'POST',
        'params': {
          'uploadType': 'multipart'
        },
        'headers': {
          'Content-Type': 'multipart/related; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody
      });
      if (!callback) {
        callback = function(file) {
          console.log(file);
          document.getElementById("driveSavedText").innerHTML = file.name + " saved in Google Drive";
          document.getElementById("driveSavedPanel").className = "w3-panel w3-large";
        };
      }
      request.execute(callback);
    }
    if (navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("Edge") > 0) {
      document.getElementById("saveGDriveBtn").style.display = "none";
      document.getElementById("loadGDriveBtn").style.display = "none";
    }
    function resetDriveSaveModal() {
      document.getElementById('driveSavedText').innerHTML = '';
      document.getElementById('driveSaveModal').style.display = 'none'
      document.getElementById('driveSavedPanel').style.display = 'none'
      document.getElementById('driveText').style.display = 'block'
      document.getElementById("driveSavedPanel").className = "w3-panel w3-large loader";
    }
    function resetDriveLoadModal() {
      document.getElementById('driveLoadModal').style.display = 'none'
    }
    function saveFile(code) {
      document.getElementById('preSave').style.display = 'none';
      if (code.length > 20000) {
        document.getElementById('errorSave').style.display = 'block';
        return;
      }
      document.getElementById('postSave').style.display = 'block';
      var paramObj = {};
      paramObj.code = code;
      var paramB = JSON.stringify(paramObj);
      var httpB = new XMLHttpRequest();
      httpB.open("POST.html", globalURL, true);

      httpB.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      httpB.onreadystatechange = function() {
        if (httpB.readyState == 4 && httpB.status == 200) {
          if (httpB.responseText.substr(0, 2) == "OK") {
            var getId = httpB.responseText.substr(2);
            document.getElementById("shareLink").href = "../code/tryit1b9e.html?filename=" + getId;
            document.getElementById("shareLinkText").innerHTML = "../code/tryit1b9e.html?filename=" + getId;
            document.getElementById('saveLoader').style.display = "none";
            document.getElementById("saveModalSaved").style.display = "block";
          }
        }
      }
      httpB.send(paramB);
    }
    function hideAndResetModal() {
      document.getElementById("saveModal").style.display = "none";
      document.getElementById('preSave').style.display = "block";
      document.getElementById('errorSave').style.display = "none";
      document.getElementById('postSave').style.display = "none";
      document.getElementById("saveModalSaved").style.display = "none";
      document.getElementById('saveDisclaimer').style.display = "none";
      document.getElementById('saveLoader').style.display = "block";
    }
    var addr = document.location.href;
    function displayError() {
      document.getElementById("err_url").value = addr;
      document.getElementById("err_form").style.display = "block";
      document.getElementById("err_email").focus();
      hideSent();
    }
    function hideError() {
      document.getElementById("err_form").style.display = "none";
    }
    function hideSent() {
      document.getElementById("err_sent").style.display = "none";
    }
    function sendErr() {
      var xmlhttp;
      var err_url = document.getElementById("err_url").value;
      var err_email = document.getElementById("err_email").value;
      var err_desc = document.getElementById("err_desc").value;
      if (window.XMLHttpRequest) { // код для IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
      } else { // код для IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST.html", "../err_sup.html", true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.send("err_url=" + err_url + "&err_email=" + err_email + "&err_desc=" + escape(err_desc));
      document.getElementById("err_desc").value = "";
      hideError();
      document.getElementById("err_sent").style.display = "block";
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
    // Когда пользователь нажимает в любом месте за пределами модального, закройте его
    window.onclick = function(event) {
      if (event.target == document.getElementById("saveModal")) {
        hideAndResetModal();
      }
      if (event.target == document.getElementById("driveSaveModal")) {
        resetDriveSaveModal();
      }
      if (event.target == document.getElementById("driveLoadModal")) {
        resetDriveLoadModal();
      }
      if (event.target == document.getElementById("menuOverlay")) {
        openMenu();
      }
    }
