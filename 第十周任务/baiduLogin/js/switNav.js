// js
$(document).ready(function() {
    // alert("页面加载完成!");

    // 我的导航
    $('#container-info').on('click','.myNav .show',function() {
        $('.myNav .hide').stop(true,true).slideToggle();
        CDicon($(this).children("i")); //调用图片
    });
    // 我的星座
    $('#container-info').on('click','.myConstellation .show',function() {
        $('.myConstellation .hide').stop(true,true).slideToggle();
        CDicon($(this).children("i")); //调用图片
    });
    // 我的小说
    $('#container-info').on('click','.myNovel .show',function() {
        $('.myNovel .hide').stop(true,true).slideToggle();
        CDicon($(this).children("i")); //调用图片
    });

});
// 图片
function CDicon(mainIcon) {
    if (mainIcon) {
        if (mainIcon.css("background-image").indexOf("img/e-resize.png") >= 0) {
            mainIcon.css("background-image", "url('img/s-resize.png')");
        } else {
            mainIcon.css("background-image", "url('img/e-resize.png')");
        }
    }
}
