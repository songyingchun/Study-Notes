const http = require('http');

http.createServer(function (req, res) {
    // POST-req
    var str = "";
    // data-有一段数据到达（很多次）
    var i = 0;
    console.log(121);
    req.on('data', function (data) {
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    // end-数据全部到达（一次）
    req.on('end', function () {
        console.log(str);
    });
}).listen(8888);