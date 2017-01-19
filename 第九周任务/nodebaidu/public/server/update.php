<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');	//脚本执行期间包含并运行指定文件
	if($link){
		//修改新闻
		$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
		$newstype = addslashes(htmlspecialchars($_POST['newstype']));
		$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
		$newstime = addslashes(htmlspecialchars($_POST['newstime']));
		$newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
		$newsid = addslashes(htmlspecialchars($_POST['id']));

		$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `Id` = '{$newsid}'";//顺序注意

		mysqli_query($link,'SET NAMES utf8');//乱码设置
		$result = mysqli_query($link,$sql);//发送查询语句

		echo json_encode(array('success' => $sql));
	}
	mysqli_close($link);//关闭连接
?>