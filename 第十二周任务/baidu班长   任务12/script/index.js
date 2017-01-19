/*
单例 模式
作用：
1.模块间的通信;
2.系统中的某个类只能存在 一个;
3.包含自己的属性和方法;
*/



$(document).ready(function() {
	//更多产品  隐藏菜单的高低 = 文档高度
	$('.hide_product').height($(document).height());

	var pages = {
		init:function(){
			this.render();
			this.bind();
			this.judge_personal();
			if(localStorage){
				var num = localStorage.indexnum;
				this.navlis.removeClass('active');
				this.navlis.eq(num).addClass('active');

				this.navPages.removeClass('select_page');
				this.navPages.eq(num).addClass('select_page');
			}
		},
		render:function(){
			var me = this;
			me.navlis    = $("#navigation li");
			me.navPages  = $('.page');
			me.navPer    = $("#navigation .personal");
		},
		bind:function(){
			var me = this;
			//页面主体部分的导航 点击切换选中的状态
			me.navlis.each(function(index) {
				me.navlis.eq(index).click(function(){
					localStorage.indexnum = index;
					localStorage.navCls = "active";//高亮
					localStorage.pageCls = 'select_page';
					me.test(index);
					me.judge_personal();
				});
			});
		},
		//页面主体部分的导航 点击切换选中的状态
		test:function(index){
			var me = this;
			me.navlis.removeClass('active');
			me.navlis.eq(index).addClass('active');
			//localStorage.navCls = 'active';

			me.navPages.removeClass('select_page');
			me.navPages.eq(index).addClass('select_page');
			//localStorage.pageCls = 'select_page';

		},
		//判断 主体导航 我的关心 icon 颜色
		judge_personal:function(){
			var me = this;
			var $clstxt = $("#navigation li:first").attr('class');
			if(/active/.test($clstxt)){
				console.log($clstxt);
				// me.navPer.css('backgroundPosition', '-145px 3px');
			}else{
				// me.navPer.css('backgroundPosition', '-15px 3px');
			}
		}

	};

	var skin = {
		init:function(){
			this.render();
			this.bind();
			if(localStorage){
				this.background.css('backgroundImage', localStorage.bgImgScr);
				this.logoImg.attr('src', localStorage.logoSrc);
			}
		},
		render:function(){
			var me = this;
			me.changeSkin = $("#changeSkin");
			me.skin       = $("#skin");
			me.confirm    = $("#confirm");
			me.cancel     = $("#cancel");
			me.closeBlock = $("#closeBlock");
			me.noSkin     = $("#noSkin");
			me.bgImgs     = $("#skin img");
			me.background = $("#background");
			me.logoImg    = $("#logoImg");
		},
		bind:function(){
			var me = this;
			//点击换肤
			me.changeSkin.click(function(event){
				me.showSkin();
			});
			//点击确认
			me.confirm.click(function(event) {
				me.hideSkin();
			});
			//点击皮肤图片
			me.bgImgs.each(function(index) {
				me.bgImgs.eq(index).click(function(event) {
					me.choice(index);
				});
			});
			//收起
			me.closeBlock.click(function(event) {
				me.hideSkin();
			});
			//不使用皮肤
			me.noSkin.click(function(event) {
				me.background.css('backgroundImage', 'none');
				me.logoImg.attr('src', 'imgs/bd_logo1.png');
				//localStorage.bgImgScr = 'none';
				//localStorage.logoSrc  = 'imgs/bd_logo1.png';
				localStorage.removeItem('bgImgScr');
				localStorage.removeItem('logoSrc');
			});
		},
		showSkin:function(){
			var me = this;
			me.skin.slideDown(300);
		},
		hideSkin:function(){
			var me = this;
			me.skin.slideUp(300);
		},
		choice:function(index){
			var me = this;
			//localStorage.skinIndex = index+1;
			me.background.css('backgroundImage', 'url(imgs/bg-skin0'+(index+1)+'.jpg)');
			me.logoImg.attr('src', 'imgs/logo_white.png');

			localStorage.bgImgScr = 'url(imgs/bg-skin0'+(index+1)+'.jpg)';
			localStorage.logoSrc  = 'imgs/logo_white.png';
		}

	};

	var scrollBar = {
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var me = this;
			me.docu = $(document);
			me.search = $("#search");
			me.searchForm = $("#searchForm");
			me.main   = $("#main");
			me.logo_top = $("#logo_top");
			me.backTop  = $("#backTop");
			me.searchInput = $("#searchInput");
		},
		bind:function(){
			var me = this;
			me.docu.scroll(function(event) {
				me.moveScroll();
			});
			me.backTop.click(function(event) {
				me.goTop();
			});
			me.searchInput.focus();
		},
		moveScroll:function(){
			var me = this;
			var $scrTop = me.docu.scrollTop(),
			    $eleTop = me.search.offset().top;
			if(($eleTop-$scrTop)<=0){
				//固定搜索框 在顶部
				me.search.addClass('fixed-search');
				me.searchForm.css({
					marginTop: '10px'
				});
				me.main.css('marginTop', '90px');
				me.logo_top.css('display','block');
			}
			if($scrTop<166){
				me.search.removeClass('fixed-search');
				me.searchForm.css({
					marginTop: '0'
				});
				me.main.css('marginTop', '50px');
				me.logo_top.css('display','none');
			}    

			if($scrTop>200){
				me.backTop.css('display', 'block');
			}else{
				me.backTop.css('display', 'none');
			}    
		},
		goTop:function(){
			$('body').animate({scrollTop:0},200);
		}

	};

	pages.init();
	// skin.init();
	// scrollBar.init();


});









/*
$navlis.removeClass('active');
$(this).addClass('active');
localStorage.indexnum = index;
localStorage.navCls = "active";

$pages.removeClass('select_page');
$pages.eq(index).addClass('select_page');
localStorage.pageCls = 'select_page';

judge_personal();
*/
   /* var $navlis = $("#navigation li"),
        $pages  = $('.page'),
        $skin   = $("#skin"),
        $bgimgs = $("#skin img"),
        $background = $("#background"),
        $logoImg= $("#logoImg"),
        $backBtn = $("#backTop");

	if(localStorage){
 
		var $stroageIndex = localStorage.indexnum,
		    $storageNav   = localStorage.navCls,
		    $storagePage  = localStorage.pageCls,
		    $storageLogo  = localStorage.logoSrc,
		    $storageBg    = localStorage.bgSrc;

		$navlis.removeClass($storageNav);
		$navlis.eq($stroageIndex).addClass($storageNav);

		$pages.removeClass($storagePage);
		$pages.eq($stroageIndex).addClass($storagePage);

		$background.css('backgroundImage',$storageBg);
		$logoImg.attr('src',$storageLogo);
	}
	$('#searchInput').focus();

    //展开换肤区域;
    $("#changeSkin").click(function() {
    	$skin.slideDown(300);
    });
    //收起
    $("#closeBlock").click(function(event) {
    	closeSkin();
    });
    //取消 换肤
    $("#cancel").click(function(event) {
    	closeSkin();
    });
    
    // 换肤
    $bgimgs.each(function(index) {
    	$(this).click(function(event) {
    		//console.log(index)
    		$background.css('backgroundImage', 'url(imgs/bg-skin0'+(index+1)+'.jpg)');
    		$logoImg.attr('src', 'imgs/logo_white.png');

    		localStorage.skinIndex = index+1;
    	});
    });
    //确定换肤 并且存储localStorage
    
    $("#confirm").click(function() {
    	var $num = localStorage.skinIndex;
    	localStorage.bgSrc = 'url(imgs/bg-skin0'+$num+'.jpg)';
    	localStorage.logoSrc = 'imgs/logo_white.png';
    	closeSkin();
    });

    //不使用皮肤
    $("#noSkin").click(function() {
    	$background.css('backgroundImage','none');
		$logoImg.attr('src','imgs/bd_logo1.png');
		localStorage.bgSrc = 'none';
		localStorage.logoSrc = 'imgs/bd_logo1.png';
		closeSkin();
    });

    //更多产品  隐藏菜单的高低 = 文档高度
	$('.hide_product').height($(document).height());

	//主体 顶部导航 选中状态 和 切换页面
	$navlis.each(function(index) {

		$(this).click(function() {
			$navlis.removeClass('active');
			$(this).addClass('active');
			localStorage.indexnum = index;
			localStorage.navCls = "active";

			$pages.removeClass('select_page');
			$pages.eq(index).addClass('select_page');
			localStorage.pageCls = 'select_page';

			judge_personal();
		});
		
		// if($("#navigation .my-care").className.test('active')){
		// 	$("#navigation .my-care i").css('backgroundPosition', '-150px 3');
		// }
	});
	judge_personal();

	$(document).scroll(function(event) {
		//console.log('当前滚动条滚去的距离:'+$(this).scrollTop())
		var $scrTop = $(this).scrollTop(),
		    $eleTop = $("#search").offset().top;
		if(($eleTop-$scrTop)<=0){
			$("#search").addClass('fixed-search');
			$("#searchForm").css({
				marginTop: '10px'
			});
			$('#main').css('marginTop', '90px');
			$('#logo_top').css('display','block');
		}
		if($scrTop<166){
			$("#search").removeClass('fixed-search');
			$("#searchForm").css({
				marginTop: '0'
			});
			$('#main').css('marginTop', '50px');
			$('#logo_top').css('display','none');
		}    

		if($scrTop>200){
			$backBtn.css('display', 'block');
		}else{
			$backBtn.css('display', 'none');
		}

	});
	//console.log($("#search").offset().top)
    //返回顶部
    $backBtn.click(function(event) {
    	$('body').animate({scrollTop:0},200);
    });
});
//判断 主体导航 我的关心 icon 颜色
function judge_personal(){
	var $clstxt = $("#navigation li:first").attr('class');
	if(/active/.test($clstxt)){
		//console.log($clstxt);
		$("#navigation .personal").css('backgroundPosition', '-145px 3px');
	}else{
		$("#navigation .personal").css('backgroundPosition', '-15px 3px');
	}
}
//关闭 皮肤区域
function closeSkin(){
	$("#skin").slideUp(300);
}*/