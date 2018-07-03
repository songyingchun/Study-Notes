var express = require('express');
var server = express();
console.log(express);
server.use('/a.html', function (req, res) {
    res.send({1: 1, 2: 2});
    res.end();
});

server.use('/b.html', function (req, res) {
    res.send('123');
    res.end();
});

server.listen(8080);