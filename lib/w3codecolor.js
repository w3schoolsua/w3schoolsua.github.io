/* w3codecolor ver 1.32 by w3schools.com */
function w3CodeColor() {
  var x, i, j, k, l, modes = ["html", "js", "java", "css", "sql", "python", "kotlin"];
  if (!document.getElementsByClassName) {return;}
  k = modes.length;
  for (j = 0; j < k; j++) {
    x = document.getElementsByClassName(modes[j] + "High");
    l = x.length;
    for (i = 0; i < l; i++) {
      x[i].innerHTML = w3CodeColorize(x[i].innerHTML, modes[j]);
    }
  }
}
function w3CodeColorize(x, lang) {
  var tagcolor = "mediumblue";
  var tagnamecolor = "brown";
  var attributecolor = "red";
  var attributevaluecolor = "mediumblue";
  var commentcolor = "green";
  var cssselectorcolor = "brown";
  var csspropertycolor = "red";
  var csspropertyvaluecolor = "mediumblue";
  var cssdelimitercolor = "black";
  var cssimportantcolor = "red";
  var jscolor = "black";
  var jskeywordcolor = "mediumblue";
  var jsstringcolor = "brown";
  var jsstringtempcolor = "#f50"; //orange
  var jsregexpcolor = "#f50"; //orange
  var jsnumbercolor = "red";
  var jspropertycolor = "black";
  var javacolor = "black";
  var javakeywordcolor = "mediumblue";
  var javastringcolor = "brown";
  var javanumbercolor = "red";
  var javapropertycolor = "black";
  var kotlincolor = "black";
  var kotlinkeywordcolor = "mediumblue";
  var kotlinstringcolor = "brown";
  var kotlinnumbercolor = "red";
  var kotlinpropertycolor = "black";
  var phptagcolor = "red";
  var phpcolor = "black";
  var phpkeywordcolor = "mediumblue";
  var phpglobalcolor = "goldenrod";
  var phpstringcolor = "brown";
  var phpnumbercolor = "red";
  var pythoncolor = "black";
  var pythonkeywordcolor = "mediumblue";
  var pythonstringcolor = "brown";
  var pythonnumbercolor = "red";
  var angularstatementcolor = "red";
  var sqlcolor = "black";
  var sqlkeywordcolor = "mediumblue";
  var sqlstringcolor = "brown";
  var sqlnumbercolor = "";
  if (!lang) {lang = "html"; }
  if (lang == "html") {return htmlMode(x);}
  if (lang == "css") {return cssMode(x);}
  if (lang == "js") {return jsMode(x);}
  if (lang == "java") {return javaMode(x);}
  if (lang == "kotlin") {return kotlinMode(x);}
  if (lang == "php") {return phpMode(x);}
  if (lang == "sql") {return sqlMode(x);}
  if (lang == "python") {return pythonMode(x);}
  return x;
  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
    php = new extract(rest, "&lt;\\?php", "?&gt;", phpMode, "W3PHPPOS");
    rest = php.rest;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    angular = new extract(rest, "{{", "}}", angularMode);
    rest = angular.rest;
    for (i = 0; i < comment.arr.length; i++) {
      rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
    }
    for (i = 0; i < php.arr.length; i++) {
      rest = rest.replace("W3PHPPOS", php.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span class='tagcolor' style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span class='tagcolor' style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span class='tagnamecolor' style=color:" + tagnamecolor + ">" + result + "</span>";
  }
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span class='attributecolor' style=color:" + attributecolor + ">" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span class='attributevaluecolor' style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }
  function angularMode(txt) {
    return "<span class='angularstatementcolor' style=color:" + angularstatementcolor + ">" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span class='commentcolor' style=color:" + commentcolor + ">" + txt + "</span>";
  }
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
      rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span class='cssselectorcolor' style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span class='csspropertycolor' style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s;
    rest = "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span class='cssdelimitercolor' style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span class='csspropertyvaluecolor' style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span class='cssimportantcolor' style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      regexppos = getRegExpPos(rest, jsRegExpMode);
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      bfnuttpos = getPos(rest, '`', '`', jsStringTempMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], regexppos[0], sfnuttpos[0], dfnuttpos[0], bfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, regexppos, sfnuttpos, dfnuttpos, bfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='jscolor' style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsRegExpMode(txt) {
    return "<span class='jsregexpcolor' style=color:" + jsregexpcolor + ">" + txt + "</span>";
  }
  function jsStringMode(txt) {
    return "<span class='jsstringcolor' style=color:" + jsstringcolor + ">" + txt + "</span>";
  }
  function jsStringTempMode(txt) {
    return "<span class='jsstringtempcolor' style=color:" + jsstringtempcolor + ">" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span class='jskeywordcolor' style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span class='jsnumbercolor' style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span class='jspropertycolor' style=color:" + jspropertycolor + ">" + txt + "</span>";
  }
  function getRegExpPos(txt, func) {
    var pos1, cc, pos2 = 0, mArr, i, len, patt, modOK = false;
    pos1 = txt.search(/\/.+?\//);
    if (pos1 > -1) {
      len = txt.match(/\/.+?\//)[0].length;
      patt = /\W/g;
      cc = txt.match(/\/.+?\//)[0];
      pos2 = cc.length;
      mArr = ["img", "igm", "mig", "mgi", "gim", "gmi", "im", "ig", "mi", "mg", "gi", "gm", "i", "m", "g"];
      for (i = 0; i < mArr.length; i++) {
        re = new RegExp(`\\b^${mArr[i]}\\b`, 'gi');
        if (txt.substr(pos1+pos2).search(re) > -1) {
          modOK = true;
          pos2 = pos2 + mArr[i].length;
        }
      }
      if ((txt.substr(pos1 + len,1)!= "/" && txt.substr(pos1 + len,1).match(patt) && txt.substr(pos1 - 1,1).match(patt)  && txt.substr(pos1 - 1,1) !="/") || modOK == true) {


      }else {
        pos1 = -1;
        pos2 = 0;
      }
    }
    return [pos1, pos1 + pos2, func];
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function javaMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", javaStringMode);
      dfnuttpos = getPos(rest, '"', '"', javaStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, javaNumberMode);
      keywordpos = getKeywordPos("java", rest, javaKeywordMode);
      dotpos = getDotPos(rest, javaPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='javacolor' style=color:" + javacolor + ">" + rest + "</span>";
  }
  function javaStringMode(txt) {
    return "<span class='javastringcolor' style=color:" + javastringcolor + ">" + txt + "</span>";
  }
  function javaKeywordMode(txt) {
    return "<span class='javakeywordcolor' style=color:" + javakeywordcolor + ">" + txt + "</span>";
  }
  function javaNumberMode(txt) {
    return "<span class='javanumbercolor' style=color:" + javanumbercolor + ">" + txt + "</span>";
  }
  function javaPropertyMode(txt) {
    return "<span class='javapropertycolor' style=color:" + javapropertycolor + ">" + txt + "</span>";
  }
  function kotlinMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", kotlinStringMode);
      dfnuttpos = getPos(rest, '"', '"', kotlinStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, kotlinNumberMode);
      keywordpos = getKeywordPos("kotlin", rest, kotlinKeywordMode);
      dotpos = getDotPos(rest, kotlinPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span class='kotlincolor' style=color:" + kotlincolor + ">" + rest + "</span>";
  }
  function kotlinStringMode(txt) {
    return "<span class='kotlinstringcolor' style=color:" + kotlinstringcolor + ">" + txt + "</span>";
  }
  function kotlinKeywordMode(txt) {
    return "<span class='kotlinkeywordcolor' style=color:" + kotlinkeywordcolor + ">" + txt + "</span>";
  }
  function kotlinNumberMode(txt) {
    return "<span class='kotlinnumbercolor' style=color:" + kotlinnumbercolor + ">" + txt + "</span>";
  }
  function kotlinPropertyMode(txt) {
    return "<span class='kotlinpropertycolor' style=color:" + kotlinpropertycolor + ">" + txt + "</span>";
  }
  function sqlMode(txt) {
    var rest = txt, y, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", sqlStringMode);
      dfnuttpos = getPos(rest, '"', '"', sqlStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /--/, "<br>", commentMode);
      numpos = getNumPos(rest, sqlNumberMode);
      keywordpos = getKeywordPos("sql", rest, sqlKeywordMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span class='sqlcolor' style=color:" + sqlcolor + ">" + rest + "</span>";
  }
  function sqlStringMode(txt) {
    return "<span class='sqlstringcolor' style=color:" + sqlstringcolor + ">" + txt + "</span>";
  }
  function sqlKeywordMode(txt) {
    return "<span class='sqlkeywordcolor' style=color:" + sqlkeywordcolor + ">" + txt + "</span>";
  }
  function sqlNumberMode(txt) {
    return "<span class='sqlnumbercolor' style=color:" + sqlnumbercolor + ">" + txt + "</span>";
  }
  function phpMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", phpStringMode);
      dfnuttpos = getPos(rest, '"', '"', phpStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, phpNumberMode);
      keywordpos = getKeywordPos("php", rest, phpKeywordMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    rest = "<span class='phptagcolor' style=color:" + phptagcolor + ">&lt;" + rest.substr(4, 4) + "</span>" + rest.substring(8);
    if (rest.substr(rest.length - 5, 5) == "?&gt;") {
      rest = rest.substring(0, rest.length - 5) + "<span class='phptagcolor' style=color:" + phptagcolor + ">?&gt;</span>";
    }
    return "<span class='phpcolor' style=color:" + phpcolor + ">" + rest + "</span>";
  }
  function phpStringMode(txt) {
    return "<span class='phpstringcolor' style=color:" + phpstringcolor + ">" + txt + "</span>";
  }
  function phpNumberMode(txt) {
    return "<span class='phpnumbercolor' style=color:" + phpnumbercolor + ">" + txt + "</span>";
  }
  function phpKeywordMode(txt) {
    var glb = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION"];
    if (glb.indexOf(txt.toUpperCase()) > -1) {
      if (glb.indexOf(txt) > -1) {
        return "<span class='phpglobalcolor' style=color:" + phpglobalcolor + ">" + txt + "</span>";
      } else {
        return txt;
      }
    } else {
      return "<span class='phpkeywordcolor' style=color:" + phpkeywordcolor + ">" + txt + "</span>";
    }
  }
  function pythonMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", pythonStringMode);
      dfnuttpos = getPos(rest, '"', '"', pythonStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, pythonNumberMode);
      keywordpos = getKeywordPos("python", rest, pythonKeywordMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span class='pythoncolor' style=color:" + pythoncolor + ">" + rest + "</span>";
  }
  function pythonStringMode(txt) {
    return "<span class='pythonstringcolor' style=color:" + pythonstringcolor + ">" + txt + "</span>";
  }
  function pythonNumberMode(txt) {
    return "<span class='pythonnumbercolor' style=color:" + pythonnumbercolor + ">" + txt + "</span>";
  }
  function pythonKeywordMode(txt) {
    return "<span class='pythonkeywordcolor' style=color:" + pythonkeywordcolor + ">" + txt + "</span>";
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","async","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
        "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
        "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
        "super","switch","synchronized","then","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    } else if (typ == "java") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
        "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
        "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
        "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield",
        "String"];
    } else if (typ == "kotlin") {
      words = ['package','as','typealias','class','interface','this','super','val','operator','var','fun','for','is','in','This','throw','return',
        'annotation','break','continue','object','if','else','while','do','try','when','!in','!is','as?','file','import','where','by','get','set',
        'abstract','enum','open','inner','override','private','public','internal','protected','catch','finally','out','final','vararg','reified',
        'dynamic','companion','constructor','init','sealed','field','property','receiver','param','sparam','lateinit','data','inline','noinline',
        'tailrec','external','annotation','crossinline','const','operator','infix','suspend','actual','expect','setparam','Boolean','Byte','Character',
        'CharSequence','Class','ClassLoader','Cloneable','Comparable','Compiler','Double','Exception','Float','Integer','Long','Math','Number','Object',
        'Package','Pair','Process','Runtime','Runnable','SecurityManager','Short','StackTraceElement','StrictMath','String','StringBuffer','System',
        'Thread','ThreadGroup','ThreadLocal','Throwable','Triple','Void','Annotation','Any','BooleanArray','ByteArray','Char','CharArray',
        'DeprecationLevel','DoubleArray','Enum','FloatArray','Function','Int','IntArray','Lazy','LazyThreadSafetyMode','LongArray','Nothing','ShortArray','Unit'];
    } else if (typ == "php") {
      words = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION",
        "__halt_compiler","abstract","and","array","as","break","callable","case","catch","class","clone","const","continue","declare","default",
        "die","do","echo","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","eval","exit","extends","final","for",
        "foreach","function","global","goto","if","implements","include","include_once","instanceof","insteadof","interface","isset","list","namespace","new",
        "or","print","private","protected","public","require","require_once","return","static","switch","throw","trait","try","unset","use","var","while","xor"];
    } else if (typ == "sql") {
      words = ["ADD","EXTERNAL","PROCEDURE","ALL","FETCH","PUBLIC","ALTER","FILE","RAISERROR","AND","FILLFACTOR","READ","ANY","READTEXT","AS","FOREIGN",
        "RECONFIGURE","ASC","FREETEXT","REFERENCES","AUTHORIZATION","FREETEXTTABLE","REPLICATION","BACKUP","FROM","RESTORE","BEGIN","FULL","RESTRICT","BETWEEN",
        "FUNCTION","RETURN","BREAK","GOTO","REVERT","BROWSE","GRANT","REVOKE","BULK","GROUP","RIGHT","BY","HAVING","ROLLBACK","CASCADE","HOLDLOCK","ROWCOUNT",
        "CASE","IDENTITY","ROWGUIDCOL","CHECK","IDENTITY_INSERT","RULE","CHECKPOINT","IDENTITYCOL","SAVE","CLOSE","IF","SCHEMA","CLUSTERED","IN",
        "SECURITYAUDIT","COALESCE","INDEX","SELECT","COLLATE","INNER","SEMANTICKEYPHRASETABLE","COLUMN","INSERT","SEMANTICSIMILARITYDETAILSTABLE","COMMIT",
        "INTERSECT","SEMANTICSIMILARITYTABLE","COMPUTE","INTO","SESSION_USER","CONSTRAINT","IS","SET","CONTAINS","JOIN","SETUSER","CONTAINSTABLE","KEY",
        "SHUTDOWN","CONTINUE","KILL","SOME","CONVERT","LEFT","STATISTICS","CREATE","LIKE","SYSTEM_USER","CROSS","LINENO","TABLE","CURRENT","LOAD","TABLESAMPLE",
        "CURRENT_DATE","MERGE","TEXTSIZE","CURRENT_TIME","NATIONAL","THEN","CURRENT_TIMESTAMP","NOCHECK","TO","CURRENT_USER","NONCLUSTERED","TOP","CURSOR",
        "NOT","TRAN","DATABASE","NULL","TRANSACTION","DBCC","NULLIF","TRIGGER","DEALLOCATE","OF","TRUNCATE","DECLARE","OFF","TRY_CONVERT","DEFAULT","OFFSETS",
        "TSEQUAL","DELETE","ON","UNION","DENY","OPEN","UNIQUE","DESC","OPENDATASOURCE","UNPIVOT","DISK","OPENQUERY","UPDATE","DISTINCT","OPENROWSET",
        "UPDATETEXT","DISTRIBUTED","OPENXML","USE","DOUBLE","OPTION","USER","DROP","OR","VALUES","DUMP","ORDER","VARYING","ELSE","OUTER","VIEW","END",
        "OVER","WAITFOR","ERRLVL","PERCENT","WHEN","ESCAPE","PIVOT","WHERE","EXCEPT","PLAN","WHILE","EXEC","PRECISION","WITH","EXECUTE","PRIMARY",
        "WITHIN GROUP","EXISTS","PRINT","WRITETEXT","EXIT","PROC","LIMIT","MODIFY","COUNT","REPLACE"];
    } else if (typ == "python") {
      words = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "False", "finally", "for", "from", "global", "if", "import",
        "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in", "abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
        "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr",
        "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max",
        "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice",
        "sorted", "staticmethod", "str", "sum", "super", "tuple", "True", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
    }
    for (i = 0; i < words.length; i++) {
      if (typ == "php" || typ == "sql") {
        pos = txt.toLowerCase().indexOf(words[i].toLowerCase());
      } else {
        pos = txt.indexOf(words[i]);
      }
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      }
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }
    return [-1, -1, func];
  }
}