uic_prov_pre("tryit","",subjectFolder);
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
        (xbeforeResize < (468) && afterResize >= (468)) ||(xbeforeResize >= (468) && afterResize < (468))) {
        xbeforeResize = afterResize;
        uic_prov_run();
    }
    if (window.screen.availWidth <= 768) {
        restack(window.innerHeight > window.innerWidth);
    }
    fixDragBtn();
    showFrameSize();
}
var fileID = "";