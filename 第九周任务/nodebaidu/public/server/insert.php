<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');	//脚本执行期间包含并运行指定文件

	if ($link) {
		//插入新闻
		$newstitle = $_POST['newstitle'];//从前端admin.js中的jsonNews中取到newstitle的内容
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];

		$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";//顺序注意

		mysqli_query($link,'SET NAMES utf8');//乱码设置
		$result = mysqli_query($link,$sql);//发送查询语句

		echo json_encode(array('插入新闻' => 'ok'));
	}
	mysqli_close($link);//关闭连接
?>