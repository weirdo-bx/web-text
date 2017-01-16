$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = { "data": [{ "src": "img-1.jpg" }, { "src": "img-2.jpg" }, { "src": "img-3.jpg" }, { "src": "img-4.jpg" }, { "src": "img-5.jpg" }] }; //模拟网络传入数据的一种格式
        window.onscroll = function() {
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) { //遍历获取
                    var box = $("<div>").addClass("box").appendTo($("#container")); //创建div添加class为box,加到容器container当中
                    var content = $("<div>").addClass("content").appendTo(box);
                    console.log("../Img/" + $(value).attr("src"))
                    $("<img>").attr("src", "./Img/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
        window.onresize = function(){
            imgLocation();
        }
    });
});

function scrollside() { //滚动到边缘加载图片
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //获取当前滚动加载图片的位置
    var documentHeight = $(document).height(); //当前容器的高度
    var scrollHeight = $(window).scrollTop(); //鼠标滚动条的高度
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false; //如果滚动加载图片的位置<滚动的距离+文档的高度那么它将允许滚动返回true，否则返回false不允许滚动

}

function imgLocation() {
    var box = $(".box"); //声明变量得到盒子
    var boxWidth = box.eq(0).width(); //确定盒子的宽度
    var num = Math.floor($(window).width() / boxWidth); //确定盒子的一排能摆放多少个
    var boxArr = []; //创建一个数组
    box.each(function(index, value) {
        value.style.cssText = '';
        // console.log(index+"--"+value); 
        var boxHeight = box.eq(index).height(); //获取盒子的高度
        if (index < num) {
            boxArr[index] = boxHeight;
            // console.log(boxHeight);//获取到高度
        } else {
            var minboxHeight = Math.min.apply(null, boxArr); //获取到最小高度
            // console.log(minboxHeight);//获取到最小高度
            var minboxIndex = $.inArray(minboxHeight, boxArr); //获取到最小高度的位置
            // console.log(minboxIndex); //获取到最小高度的位置
            // console.log(value);//value是每一个div
            $(value).css({ //设置盒子摆放的位置
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height(); //重新计算摆放盒子过后的高度
        }
    });

}
