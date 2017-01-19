<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');	//脚本执行期间包含并运行指定文件

	if ($link) {
		$newsid = $_POST['newsid'];
		$sql = "DELETE FROM `news` WHERE `news`.`Id` = {$newsid}";
		mysqli_query($link,'SET NAMES utf8');//乱码设置
		$result = mysqli_query($link,$sql);//发送查询语句
		echo json_encode(array('删除状态' => '成功'));
	}
	mysqli_close($link);//关闭连接
?>