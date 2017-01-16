<?php
header("Content-type:appliacation/json;charset=utf-8");
header("Cache-Control:max-age=0");//缓存
// $i = 0;
// while($i<9){
// 	$i++;
	sleep(1);
	$res = array('success' =>"ok" , "text"=>"我是测试的文本");
	echo json_encode($res);

	// sleep(1);
	// $radom = rand(1,999);//1-999
	// echo $radom;
	// echo "<br/>";
	// ob_flush();
	// flush();
// }
?>