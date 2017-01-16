//打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault(); //取消事件的默认动作
        //输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newssrc').val() === "" || $('#newstime').val() === "") {
            //新闻标题
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error'); //给父级元素添加class。has-error是bootsrap里面的class
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            //新闻图片
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error'); //给父级元素添加class。has-error是bootsrap里面的class
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            //新闻来源
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error'); //给父级元素添加class。has-error是bootsrap里面的class
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
            //新闻时间
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error'); //给父级元素添加class。has-error是bootsrap里面的class
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            //新闻类型
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error'); //给父级元素添加class。has-error是bootsrap里面的class
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = { //获取输入的值
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //提交添加
            $.ajax({
                url: 'server/insert.php', //路径
                type: 'post', //提交方式
                data: jsonNews, //数据类型
                datatype: 'json', //返回的数据类型
                success: function(data) {
                    $('#newstitle').val('');//提交之后重置数据为空
                    $('#newstype').val('');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
                    console.log(data);
                    refreshNews(); //刷新内容
                }
            });
        }
    });

    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) { //删除
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: 'server/delete.php',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log(data);
                    $('#deleteModal').modal('hide');
                    refreshNews(); //刷新内容
                }
            });
        }
    });

    //修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) { //修改
        $('#updateModal').modal('show');

        updateId = $(this).parent().prevAll().eq(5).html();
        console.log(updateId);
        // debugger
        $.ajax({
            url: 'server/curnews.php',
            type: 'post',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
            }
        });
    });
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url:'server/update.php',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val(),
                id:updateId
            },
            success:function(data){
                console.log(1);
                $('#updateModal').modal('hide');
                refreshNews();
            }
        });
    });

    // 刷新页面
    function refreshNews() {
        //empty table
        $newsTable.empty(); //清空
        console.log("refreshNews");
        $.ajax({
            type: 'get',
            url: 'server/baiduNews.php',
            datatype: 'json',
             data: { newstype: null },
            success: function(data) {
                console.log('data');
                data.forEach(function(item, index, array) { //forEach是原生的方式。each是jquery中的方式
                    var $tdid = $('<td>').html(item.Id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                });
            }
        });
    }
});
