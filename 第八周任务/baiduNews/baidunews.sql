-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-12-12 02:53:16
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `Id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`Id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(2, '精选', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(3, '精选', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(4, '百家', '这是我的新闻标题', 'img/timg-3.jpg', '2016-12-12 00:00:00', '新闻来源'),
(5, '本地', '这是我的新闻标题', 'img/timg-3.jpg', '2016-12-12 00:00:00', '新闻来源'),
(6, '本地', '这是我的新闻标题', 'img/timg-3.jpg', '2016-12-12 00:00:00', '新闻来源'),
(7, '图片', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(8, '娱乐', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(9, '娱乐', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(10, '社会', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(11, '军事', '这是我的新闻标题', 'img/timg.jpg', '2016-12-12 00:00:00', '新闻来源'),
(12, '女人', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(13, '女人', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(14, '女人', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(15, '搞笑', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(16, '搞笑', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(17, '搞笑', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(18, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(19, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(20, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(21, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(22, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(23, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(24, '更多', '这是我的新闻标题', 'img/timg.jpg', '2016-12-12 00:00:00', '新闻来源'),
(25, '更多', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(26, '更多', '这是我的新闻标题', 'img/timg-3.jpg', '2016-12-12 00:00:00', '新闻来源'),
(27, '更多', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`Id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
