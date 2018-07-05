const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

// cookie
server.use(cookieParser('wrwfsxfsafdf'));

server.use('/', function (req, res, next) {
    req.secret = 'wrwfsxfsafdf';
    res.cookie('user', 'blue', {
        signed: true
    });

    console.log('签名cookie：' + JSON.stringify(req.signedCookies));
    console.log('无签名cookie：' + JSON.stringify(req.cookies));
    res.clearCookie('user');
    res.send('OK');
});


server.listen(8080);
