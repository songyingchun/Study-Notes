const express = require("express");
const bodyParser = require("body-parser");

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended: false, //扩展模式
    limit: 2 * 1024 * 1024 // 限制
}));

// GET POST
server.use('/', function (req, res, next) {
    console.log(req.query); // GET
    console.log(req.body); // POST

    console.log('a');

    next();
});

server.use('/', function (req, res, next) {
    console.log('b');
})

// req.query GET
// req.body POST