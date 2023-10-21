//搜索框吸顶
let div = document.getElementsByClassName("search");
window.onscroll = function () {
    let st = document.documentElement.scrollTop || document.body.scrollTop;
    if (st > 50) {
        div[0].style = "position:fixed;top:0;width:100%;z-index:999";
    } else {
        div[0].style = "position:static";
    }
}