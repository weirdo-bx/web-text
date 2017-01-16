// js
$(document).ready(function() {
    // 初始化首页课程
    if (localStorage.getItem("verifyType") != 0) {
        localStorage.setItem("verifyType", 1);
    }
    HenShu(localStorage.getItem("verifyType"));

    // 搜索框显示&隐藏
    $("#ss-hover").click(function() {

        // $(".ss-submit").fadeIn(200); //淡入显示
        $(".ss-submit").addClass('scale');
    });
    $("#input-del").click(function() {
        // $(".ss-submit").fadeOut(200); //淡出隐藏
        $(".ss-submit").removeClass('scale'); //淡出隐藏
    });

    //导航二级菜单
    $('.nav-list').each(function(index) {
        var $lis = $(this);
        var $showlis = $('.hidden-nav');
        $lis.hover(function() {
            $showlis.eq(index).stop(true, true).css({ 'display': 'block' }); //show(); 
        }, function() {
            $showlis.eq(index).stop(true, true).css({ 'display': 'none' }); //hide();
        });
    });

    // 课程类型
    $('.information dl').each(function(index) {
        var $dts = $(this);
        var $showdts = $('.information dd');
        $dts.hover(function() {
            $showdts.eq(index).stop(true, true).css({ 'display': 'block' });
        }, function() {
            $showdts.eq(index).stop(true, true).css({ 'display': 'none' });
        });
    });

    $("#list li").each(function(index) {
        var $p = $(this);
        var $showp = $('.curriculums-in p');
        $p.mouseenter(function() {
            if (localStorage.getItem("verifyType") == 1) {
                $showp.eq(index).stop(true, true).slideDown(500);
            }
        });
        $p.mouseleave(function() {
            if (localStorage.getItem("verifyType") == 1) {
                $showp.eq(index).stop(true, true).slideUp(500);
            }
        });

    });

});

// 切换按钮
function HenShu(num) {
    verifyType = num;
    localStorage.setItem("verifyType", num);
    if (num == 0) {
        $("#acrossCurriculums").attr("id", "verticalCurriculums");
        $("#list li").each(function(index) {
            $("#item" + index).css("display", "block");
        });
    } else {
        $("#verticalCurriculums").attr("id", "acrossCurriculums");
    }
}
