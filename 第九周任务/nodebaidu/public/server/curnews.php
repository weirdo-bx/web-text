<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');	//脚本执行期间包含并运行指定文件
	if ($link) {
		$newsid = $_GET['newsid'];
		mysqli_query($link,'SET NAMES utf8');//乱码设置
		$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";
		$result = mysqli_query($link,$sql);//发送查询语句		
		$senddata = array();//声明一个数组
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata, array(
				'Id' => $row['Id'],//传值。注意：这里要与服务器里添加的一致
				'newstype' => htmlspecialchars_decode($row['newstype']),
				'newstitle' => htmlspecialchars_decode($row['newstitle']),
				'newsimg' => htmlspecialchars_decode($row['newsimg']),
				'newstime' => htmlspecialchars_decode($row['newstime']),
				'newssrc' => htmlspecialchars_decode($row['newssrc']),
			));
		}
		echo json_encode($senddata);//将内容发送给前端
	}

	mysqli_close($link);//关闭连接
?>