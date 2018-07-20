const express = require('express');
const static = require('express-static');
const mysql = require('mysql');
const multer = require('multer');
const multerObj = multer({dest: './static/upload'});
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const bodyParser = require('body-parser');

var server = express();
server.listen(8000);

// 1.获取请求数据
// get自带

server.use(bodyParser.urlencoded());
server.use(multerObj.any());

// 2.cookie. session
server.use(cookieParser());
(function () {
    var keys = [];
    for (var i = 0; i < 100000; i++) {
        keys[i] = 'a_' + Math.random();
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 60 * 1000 // 20min
    }));
})();

// 3.模板
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('veiw engine', 'html');

// 4.route
server.use('/', require('./route/web/index')());
server.use('/admin/', require('./route/admin/index')());

// 5.default static
server.use(static('./static/'));