const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var server = express();
const fs = require('fs');
const pathLib = require('path');

var objMulter = multer({
    dest: './www/upload/'
});

server.use(objMulter.any());

// server.use(bodyParser.urlencoded({
//     extended: false
// }));

server.post('/', function (req, res) {
    console.log(req.files);

    // 1.获取文件扩展名
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    // 2.重名名
    fs.rename(req.files[0].path, newName, function (err, data) {
        if(err) {
            res.send('上传失败');
        }else {
            res.send('成功');
        }
    });
});

server.listen(8080);