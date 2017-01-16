$(document).ready(function() {
    refreshNews('精选');

    $('nav a').click(function(event){
        event.preventDefault();
        var type = $(this).text();
        console.log(type);
        refreshNews(type);
    });

});

function refreshNews(type) {
    var $lists = $('.news-lists');
    $lists.empty(); //清除内部内容  
    $.ajax({
        url: 'server/baiduNews.php',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
            console.log(data);

            data.forEach(function(item,index,array) {
                // var bdata  = data;
                // debugger;
                var $list = $('<li></li>').addClass('news-list').prependTo($lists); //创建li标签,添加class并插入到ul最前端
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list); //appendTo  被选元素的结尾（仍然在内部）插入指定内容
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);

                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            });
        }
    });
}
