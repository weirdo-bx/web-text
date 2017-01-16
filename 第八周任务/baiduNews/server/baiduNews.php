<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');	//脚本执行期间包含并运行指定文件
	if($link) {
		if($_GET['newstype']){
			$newstype = $_GET['newstype'];
			$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}' limit 0,3";//limit 强制 SELECT 语句返回指定的记录数
			mysqli_query($link,'SET NAMES utf8');//乱码设置
			$result = mysqli_query($link,$sql);//发送查询语句
			$senddata = array();//声明一个数组
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata, array(
					'Id' => $row['Id'],//传值。注意：这里要与服务器里添加的一致
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc'],
				));
			}		
			echo json_encode($senddata);//将内容发送给前端
		}else{
			$sql = 'SELECT * FROM news';//选择表
			mysqli_query($link,'SET NAMES utf8');//乱码设置
			$result = mysqli_query($link,$sql);//发送查询语句
			$senddata = array();//声明一个数组
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata, array(
					'Id' => $row['Id'],//传值。注意：这里要与服务器里添加的一致
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc'],
				));
			}

			echo json_encode($senddata);//将内容发送给前端
		}
	}else{
		echo json_encode(array('连接信息：' => '连接失败'));
	}
	mysqli_close($link);//关闭数据库连接
?>