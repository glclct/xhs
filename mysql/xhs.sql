-- 设置客户端语言
SET NAMES UTF8;
-- 放弃原有数据库(假设有)
DROP DATABASE IF EXISTS xhs;
-- 创建xhs数据库
CREATE DATABASE xhs CHARSET=UTF8;
USE xhs;
-- 
-- 数据表
-- 用户表：xhs_user
DROP TABLE IF EXISTS xhs_user;
CREATE TABLE xhs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8) ,
  password VARCHAR(32) ,
  email VARCHAR(64) ,
  phone  VARCHAR(16) ,
  avatar VARCHAR(128) ,      #头像 
  user_name VARCHAR(18) ,
  birthday DATE,
  gender CHAR(1) 
);

-- 日志表 
DROP TABLE IF EXISTS xhs_diary;
CREATE TABLE xhs_diary(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255),
diary VARCHAR(2048),
img VARCHAR(255),
dtime DATETIME
);

-- 评论表
DROP TABLE IF EXISTS xhs_comment;
CREATE TABLE xhs_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  dtime DATETIME,
  content VARCHAR(25),
);