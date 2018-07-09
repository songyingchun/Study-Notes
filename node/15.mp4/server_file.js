const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var server = express();
const fs = require('fs');

var objMulter = multer({
    dest: './www/upload/'
});

server.use(objMulter.any());

// server.use(bodyParser.urlencoded({
//     extended: false
// }));

server.post('/', function (req, res) {
    console.log(req.files);
});

server.listen(8080);