// js 
$(document).ready(function() {
    // alert("页面加载完成!");

    var navs = {
        init: function() {
            this.render();
            this.bind();
            // this.judge_personal();
            if (localStorage) {
                var num = localStorage.indexnum;
                this.navlis.removeClass('swit-color');
                this.navlis.eq(num).addClass('swit-color');

                this.navPages.removeClass('disBlock');
                this.navPages.eq(num).addClass('disBlock');
            }
        },
        render: function() {
            var me = this;
            me.navlis = $('#swit-nav li.swit-color');
            me.navPages = $('#mesg-info .disBlock');
            me.navPer    = $("#swit-nav .i");
        },
        bind: function() {
            var me =this;
            me.navlis.each(function(index) {
                me.navlis.eq(index).click(function() {
                    localStorage.indexnum = index;
                    localStorage.navCls = 'swit-color';
                    localStorage.pageCls = 'disBlock';
                    me.tese(index);
                    me.judge_personal();
                });
            });
        },
        tese:function(index){
            var me =this;
            me.navlis.removeClass('swit-color');
            me.navlis.eq(index).addClass('swit-color');

            me.navPages.removeClass('disBlock');
            me.navPages.eq(index).addClass('disBlock');
        },
        // judge_personal:function(){
        //     var me = this;
        //     var $clstxt = $("#swit-nav li:first").attr('class');
        //     if(/swit-color/.test($clstxt)){
        //         console.log($clstxt);
        //         me.navPer.css('backgroundPosition', '-145px 3px');
        //     }else{
        //         me.navPer.css('backgroundPosition', '-15px 3px');
        //     }
        // }
    };
pages.init();

    /*// 导航标签切换
        $('#swit-nav li').each(function(index) { //遍历导航标签
            var $lis = $(this);
            $lis.click(function() { //点击切换
                $('#swit-nav li.swit-color').removeClass('swit-color'); //移除
                $lis.addClass('swit-color'); //添加
                $('#mesg-info .disBlock').removeClass('disBlock');
                $(".disNone").eq(index).addClass("disBlock"); //鼠标移上去的元素获取class
            });
        });*/


/*
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



    //换肤
    $('.huanfu').click(function() {
        $('.switch-color').slideDown(500);
    });
    $('.del').click(function() {
        $('.switch-color').slideUp(500);
    });*/


 /*   // 我的导航。星座。小说
    $('#container-info').on('click', '.myNav .show,.myConstellation .show,.myNovel .show', function() {
        var myTag = null;
        switch (this.parentNode.className) {
            case "myNav my":
                myTag = $('.myNav .hide');
                break;
            case "myConstellation my":
                myTag = $('.myConstellation .hide');
                break;
            case "myNovel my":
                myTag = $('.myNovel .hide');
                break;
            default:
                return;
        }
        myTag.slideToggle();
        CDicon($(this).children("i")); //调用图片
    });

    // 我的星座
    // $('#container-info').on('click','.myConstellation .show',function() {
    //     $('.myConstellation .hide').stop(true,true).slideToggle();
    //     CDicon($(this).children("i")); //调用图片
    // });
    // 我的小说
    // $('#container-info').on('click','.myNovel .show',function() {
    //     $('.myNovel .hide').stop(true,true).slideToggle();
    //     CDicon($(this).children("i")); //调用图片
    // });
*/
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

// 返回顶部
$("#get-top").click(function() {
    var speed = 100; //滑动的速度
    $('body,html').animate({
        scrollTop: 0
    }, speed);
    return false;
});