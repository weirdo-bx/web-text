var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./db')
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
	var newstype = req.query.newstype;
	//建立数据库连接
	var connection = mysql.createConnection(config);

	connection.connect();
	//发送查询语句
	connection.query('SELECT * FROM `news` WHERE `newstype` = ?', [newstype], function(err, rows, fields) {
		// console.log(rows);
		res.json(rows);//获取内容
	});

});

module.exports = router;