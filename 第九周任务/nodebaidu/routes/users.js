var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./db')
//建立连接
var connection = mysql.createConnection(config);
/* 后台路由页面 */
// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `news`', function(err, rows) {
		res.json(rows);
	});
});
//点击确认更新
router.post('/update', function(req, res) {
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc,
		newsimg = req.body.newsimg;
	//发起查询
	connection.query("UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `Id` = ?", [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows) {
		console.log(rows.changedRows);
		res.json(err); //返回结果

	});
});

//模态框取值
router.get('/curnews', function(req, res) {
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE Id =?', [newsid], function(err, rows) {
		res.json(rows);
	});
});

//delete
router.post('/delete', function(req, res) {
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`Id` = ?', [newsid], function(err, result) {
		console.log(result.affectedRows);
		res.json(result); //返回结果
	});
});

//提交添加
router.post('/insert', function(req, res) {
	var newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc,
		newsimg = req.body.newsimg;
	connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
		if (!err) {
			res.json(result); //返回结果
		}
	});
});
module.exports = router;