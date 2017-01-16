$(document).ready(function() {
    $(".main>a").click(function() { //.main>a  css里面的选择器,即main下面的第一个a标签//点击事件
        // alert("点击菜单");//测试
        var ulNode = $(this).next("ul");
        // if (ulNode.css("display")=="none") {
        // 	ulNode.css("display","block");
        // }else{
        // 	ulNode.css("display","none");
        // }//繁琐的方法

        // ulNode.show();//点击显示
        // ulNode.hide();//点击隐藏
        ulNode.toggle(500); //数字，slow（慢），normal（正常），fast（快）

        // ulNode.slideDown();//从上到下出现
        // ulNode.slideUp();//从下到上隐藏
        // ulNode.slideToggle(500);//数字，slow（慢），normal（正常），fast（快）

        CDicon($(this)); //调用图片
    });

    // 水平菜单
    $(".hmain").hover(function() { //hover事件
        $(this).children("ul").slideDown(); //从上到下出现
        CDicon($(this).children("a")); //调用图片
    }, function() {
        $(this).children("ul").slideUp(); //从下到上隐藏
        CDicon($(this).children("a")); //调用图片
    });
});

function CDicon(mainIcon) {
    if (mainIcon) {
        if (mainIcon.css("background-image").indexOf("e-resize.png") >= 0) {
            mainIcon.css("background-image", "url('img/s-resize.png')");//注意这里路径，是在html标签里面添加，所以不用选择上级
        } else {
            mainIcon.css("background-image", "url('img/e-resize.png')");
        }
    }
}
