$(document).ready(function() {
	//更多产品&换肤
	var top = {
		init: function() {
			var me = this;
			me.render();
			me.bind();

		},
		render: function() {
			//所有的dom元素都在这里
			var me = this;
			me.more = $('.more,.hide-more'); //更多产品
			me.hideMore = $('.hide-more'); //隐藏的更多产品
			me.skin = $('.huanfu');
			me.switch = $('.switch-color');
			me.del = $('.del'); //关闭
		},
		bind: function() {
			//绑定元素
			var me = this;
			me.more.mouseenter(function() {
				me.hideMore.stop(true, true).fadeIn();
			});
			me.more.mouseleave(function() {
				me.hideMore.stop(true, true).fadeOut();
			});
			//换肤
			me.skin.click(function() {
				me.switch.slideDown(500);
			});
			me.del.click(function() {
				me.switch.slideUp(500);
			});
		}
	};
	//导航处的切换
	var navs = {
		init: function() {
			var me = this;
			me.render();
			me.bind();
			if (localStorage) { //储存
				var num = localStorage.indexnum;
				me.navlis.removeClass('swit-color');
				me.navlis.eq(num).addClass('swit-color');

				me.navNone.removeClass('disBlock');
				me.navNone.eq(num).addClass('disBlock');
			}
		},
		render: function() {
			//所有的dom元素都在这里
			var me = this;
			me.navlis = $('#swit-nav li'); //导航li
			me.navNone = $('#mesg-info .disNone'); //隐藏的

		},
		bind: function() {
			//绑定元素
			var me = this;
			me.navlis.each(function(index) {
				me.navlis.eq(index).click(function() {
					localStorage.indexnum = index;
					localStorage.navCls = 'swit-color'; //高亮
					localStorage.pageCls = 'disBlock'; //显示
					me.tab(index);
				});
			});
		},
		tab: function(index) {
			var me = this;
			me.navlis.removeClass('swit-color'); //移除
			me.navlis.eq(index).addClass('swit-color'); //添加
			me.navNone.removeClass('disBlock'); //隐藏
			me.navNone.eq(index).addClass('disBlock'); //显示
		}

	};
	var navContent = {
		init: function() {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me.set = $('.set-icon'); //设置icon
			me.hideSet = $('.set-list');
			me.info = $('#container-info');
			me.myNav = $('.myNav .show'); //我的导航
			me.myStar = $('.myConstellation .show'); //我的星座
			me.myNovel = $('.myNovel .show'); //我的小说
			me.hideNav = $('.myNav .hide'); //我的导航 隐藏
			me.hideStar = $('.myConstellation .hide'); //我的星座 隐藏
			me.hideNovel = $('.myNovel .hide'); //我的小说 隐藏


		},
		bind: function() {
			var me = this;
			me.set.click(function(){
				me.hideSet.stop(true, true).slideToggle(300);
			});

			me.myNav.click(function() {
				me.hideNav.stop(true, true).slideToggle();
				CDicon($(this).children("i")); //调用图片
			});
			me.myStar.click(function() {
				me.hideStar.stop(true, true).slideToggle();
				CDicon($(this).children("i")); 
			});
			me.myNovel.click(function() {
				me.hideNovel.stop(true, true).slideToggle();
				CDicon($(this).children("i")); 
			});
		}
	}
	top.init();
	navs.init();
	navContent.init();
});

//换肤保存
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