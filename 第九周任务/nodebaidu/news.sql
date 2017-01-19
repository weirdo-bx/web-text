-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-12-15 17:27:48
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
(7, '图片', '12233344', 'img/timg-4.jpg', '2016-12-05 00:00:00', '新闻来源'),
(8, '娱乐', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(9, '娱乐', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(10, '社会', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(11, '军事', '这是我的新闻标题', 'img/timg.jpg', '2016-12-12 00:00:00', '新闻来源'),
(14, '女人', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(16, '搞笑', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(18, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(19, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(21, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-10 00:00:00', '新闻来源'),
(22, '本地', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-11 00:00:00', '新闻来源'),
(23, '互联网', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(25, '更多', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-12 00:00:00', '新闻来源'),
(27, '更多', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-12 00:00:00', '新闻来源'),
(30, '精选', '这是我的新闻标题', 'img/timg.jpg', '2016-12-12 00:00:00', '新闻来源'),
(31, '军事', '这是我的新闻标题', 'img/timg.jpg', '2016-12-12 00:00:00', '新闻来源'),
(33, '百家', '这是我的新闻标题', 'img/timg-4.jpg', '2016-12-13 00:00:00', '新闻来源'),
(34, '军事', '这是我的新闻标题', 'img/timg-2.jpg', '2016-12-22 00:00:00', '新闻来源'),
(91, '军事', '新闻标题', 'img/timg-3.jpg', '2016-12-14 00:00:00', '新闻来源');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
