/*Dark mode switch*/
function darkmode(n) {
    if (document.body.className === "darktheme dark_" + n) {
        document.body.className = "darktheme";
    } else {
        document.body.className = "darktheme dark_" + n;
    }
}

/*
function darkmode(n) {
    let currentTheme = document.body.className;
    let darkThemeClass = "darktheme";
    let darkNThemeClass = "dark_" + n;

    if (currentTheme.includes(darkNThemeClass)) {
        document.body.className = darkThemeClass;
    } else {
        document.body.className = darkThemeClass + " " + darkNThemeClass;
    }
}
 */