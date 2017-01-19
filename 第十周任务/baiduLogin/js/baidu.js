// js
$(document).ready(function() {
    // alert("页面加载完成!");
    // 更多产品
    $(".more,.hide-more").mouseenter(function() {
        $(".hide-more").stop(true, true).fadeIn();
    });
    $(".more,.hide-more").mouseleave(function() {
        $(".hide-more").stop(true, true).fadeOut();
    });


    // 设置icon下拉
    $('.set-icon').click(function() {
        $('.set-list').stop(true, true).slideToggle(300);
    });


    // 导航标签切换

    //加载默认我的关注的页面
    $('#mesg-info').load('html/attention.html');
    $('#swit-nav li').each(function(index) { //遍历导航标签
        $(this).click(function() { //点击切换
            $('#swit-nav li.swit-color').removeClass('swit-color'); //移除
            $(this).addClass('swit-color'); //添加
        });
        if (index == 0) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/attention.html'); //我的关注
            });
        } else if (index == 1) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/nav.html'); //导航
            });
        } else if (index == 2) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/recommend.html'); //推荐
            })
        } else if (index == 3) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/novel.html'); //小说
            });
        } else if (index == 4) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/video.html'); //视屏
            });
        } else if (index == 5) {
            $(this).click(function() {
                // console.log(index);
                $('#mesg-info').load('html/shopping.html'); //购物
            });
        }
    });
    $('.huanfu').click(function() {
        $('.switch-color').slideDown(500);
    });
    $('.del').click(function() {
        $('.switch-color').slideUp(500);
    });

});

function changeSkin(skin) {
    localStorage.setItem("pfColor", skin);
    document.getElementById('body').style.backgroundColor = skin;
}

function getPfColor() {
    var pfColor = localStorage.getItem("pfColor");
    if (pfColor != null) {
        changeSkin(pfColor);
    }
}
