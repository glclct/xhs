-- 设置客户端语言
SET NAMES UTF8;
-- 放弃原有数据库(假设有)
DROP DATABASE IF EXISTS xhs;
-- 创建xhs数据库
CREATE DATABASE xhs CHARSET=UTF8;
USE xhs;
-- 
-- 创建数据表
-- 创建用户表：xhs_user
DROP TABLE IF EXISTS 
CREATE TABLE xhs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8) default NULL,
  upwd VARCHAR(32) default NULL,
  email VARCHAR(64) default NULL,
  phone  VARCHAR(16) default NULL,
  avatar VARCHAR(128) default NULL,
  user_name VARCHAR(18) default NULL,
  birthday DATE,
  gender CHAR(1) default NULL
);



-- 创建日志表 