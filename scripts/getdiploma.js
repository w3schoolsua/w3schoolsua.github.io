// Script for index-files GetDiploma
var foldername;
function getCourseFolder() {
    var pathname = window.location.pathname;
    if (pathname.substr(0,1) == "/") {pathname = pathname.substr(1);}
    pos = pathname.indexOf("/");
    foldername = pathname.substr(0, pos);
    foldername = foldername.toUpperCase();
    if (foldername == "JS") foldername = "JavaScript";
    if (foldername == "QUIZTEST" || foldername == "EXERCISES") {
        document.getElementById("hey").innerText = "a";
    }
    if (foldername == "QUIZTEST" || foldername == "EXERCISES") foldername = "";
    if (foldername == "CS") foldername = "C#";
    if (foldername == "CYBERSECURITY") foldername = "Cyber Security";
    if (foldername == "CPP") foldername = "C++";
    document.getElementById("coursetopic").innerText = foldername;
}
getCourseFolder();