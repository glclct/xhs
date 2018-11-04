/**
 * Created by SWF on 2016/11/5.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fs = require('fs');
// app.get('/',function (req,res) {
//    res.send('Test');
// });

//设置静态资源
app.use(express.static('./static'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    fs.readFile('./data/data.json', function(err, data) {
        var arr = [];
        var obj = {};
        obj.name = req.body.name;
        obj.password = req.body.password;
        if (err) {
            console.log('文件不存在');
            console.log(err);
        } else {
            if (data.toString()) {
                arr = JSON.parse(data.toString())
            }
        }
        arr.push(obj);
        fs.writeFile('./data/data.json', JSON.stringify(arr));
        res.json({
            status: 'y',
            meg: '注册成功',
            data: arr
        })
    })
});

app.post('/api/login', (req, res) => {
    fs.readFile('./data/data.json', (err, data) => {
        var arr = [];
        if (err) {
            console.log(err);
        } else {
            if (data.toString()) {
                arr = JSON.parse(data.toString())
            }
            var s = arr.find((item) => {
                if (item.name == req.body.name) {
                    return item
                }
            })
            if (s) {
                if (s.password == req.body.password) {
                    res.json({
                        status: 'y',
                        meg: '登录成功',
                        data: s.name
                    })
                } else {
                    res.json({
                        status: 'err',
                        meg: '密码错误',
                    })
                }
            } else {
                res.json({
                    status: 'n',
                    meg: '用户不存在',
                })
            }
        }
    })
});

app.post('/api/setPaw', (req, res) => {
    fs.readFile('./data/data.json', (err, data) => {
        var arr = [];
        if (err) {
            console.log(err);
        } else {
            arr = JSON.parse(data.toString());
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].name == req.body.name && arr[i].password == req.body.lodPaw) {
                    arr[i].password = req.body.newPaw;
                }
            }
            fs.writeFile('./data/data.json', JSON.stringify(arr));
            res.json({
                status: 'y',
                meg: '密码修改成功',
            });
        }
    })

});

app.listen(3000, function() {
    console.log('3000端口已运行');
});