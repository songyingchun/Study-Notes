// const http = require('http');
// const fs = require('fs');

// var server=http.createServer(function (req, res) {
//     var file_name = './www' + req.url;
//     fs.readFile(file_name, function (err, data) {
//         if(err) {
//             res.write('404');
//         }else {
//             res.write(data);
//         }
//         res.end();
//     });
// });

// 监听-等着
// 端口-数字
// server.listen(8080); var http = require('http');

http.createServer(function (req, res) {
    // POST-req
    var str = "";
    // data-有一段数据到达（很多次）
    var i = 0;
    req.on('data', function (data) {
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    // end-数据全部到达（一次）
    req.on('end', function () {
        console.log(str);
    });
}).listen(8080);