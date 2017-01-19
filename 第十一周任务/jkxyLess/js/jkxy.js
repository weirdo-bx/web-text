$(document).ready(function(){
	//导航二级菜单
    $('.li-hover').each(function(index) {
        var $lis = $(this);
        var $showlis = $('.hoverNav');
        $lis.hover(function() {
            $showlis.eq(index).stop(true, true).css({ 'display': 'block' }); //show(); 
        }, function() {
            $showlis.eq(index).stop(true, true).css({ 'display': 'none' }); //hide();
        });
    });

    // 搜索框显示&隐藏
    $("#input-ss").click(function() {
        $(".ss-submit").addClass('scale');
    });
    $("#del-input").click(function() {
        $(".ss-submit").removeClass('scale'); //淡出隐藏
    });
});
