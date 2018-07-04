const express = require("express");
const bodyParser = require("body-parser");

var server = express();
server.listen(8080);

// GET POST
// server.use('/', function (req, res, next) {
//     var str = '';
//     req.on('data', function (data) {
//         str += data;
//     });
//     req.on('end', function () {
//         req.body = str;
//         next();
//     });
// });

server.use(bodyParser.urlencoded({}));

server.use('/', function (req, res, next) {
    console.log(req.body);
});