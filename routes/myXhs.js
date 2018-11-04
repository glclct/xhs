const express = require("express");
const router = express.Router();
const pool = require("../pool");
var http=require("http");

// 注册
router.post("/register", (req, res) => {
    if (!$phone) {
        res.send("手机号不能为空！");
        return;
    }
    var sql = "select * from xhs_user where phone=?";
    pool.query(sql, [$phone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send('1');
        } else {
            res.send('0');
        }
    });
});
// 登录
router.post('/login', (req, res) => {
    var $phone = req.body.phone;
    if (!$phone) {
        res.send({ code: 401, msg: '用户名称不存在' });
        return;
    }
    var $password = req.body.password;
    if (!$password) {
        res.send({ code: 402, msg: '用户密码不存在' });
        return;
    }
    var sql = "select * from xhs_user where phone=? and password=?";
    pool.query(sql, [$phone, $password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("登录成功");
        } else {
            res.send("手机号或密码错误");
        }
    })
});

module.exports = router;