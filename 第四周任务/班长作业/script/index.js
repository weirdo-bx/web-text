$(document).ready(function(){
	/*更多产品的下拉菜单*/
	$("#cpMore,#moreProduct").mouseover(function(){
		$("#moreProduct").show();
	}).mouseout(function(){
		$("#moreProduct").hide();
	});
	
	/*设置下来菜单*/
	$(".setting_menu").mouseover(function(){
		$(".baidu_setting").show();
	}).mouseout(function(){
		$(".baidu_setting").hide();
	})
})