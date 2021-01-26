/*SQL tryit head*/
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
    snhb.queue.push(function(){  snhb.startAuction(["try_it_leaderboard", "sidebar_sticky"]); });
}
}