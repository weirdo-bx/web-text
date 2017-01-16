var timoutid;
$(document).ready(function() {
    $("#tabFirst li").each(function(index) { //each遍历
        var liNode = $(this);
        liNode.mouseover(function() { //鼠标移上
            timoutid = setTimeout(function() {
                $("div.content").removeClass("content"); //移除当前class
                $("#tabFirst li.tabin").removeClass("tabin");
                $("div").eq(index).addClass("content"); //鼠标移上去的元素获取class
                liNode.addClass("tabin");
            }, 300);
        }).mouseout(function() {
            clearTimeout(timoutid);
        });
    });















    

    $("#realContent").load("tabDiv1.html"); //加载第一个页面
    $("#tabsecond li").each(function(index) {
        $(this).click(function() {
            $("#tabsecond li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if (index == 0) {
                $("#realContent").load("tabDiv1.html");
            } else if (index == 1) {
                $("#realContent").load("tabDiv2.html");
            } else if (index == 2) {
                $("#realContent").load("tabDiv3.html");
            }
        });
    });
});
