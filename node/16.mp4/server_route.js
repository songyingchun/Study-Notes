const express = require('express');

var server = express();

var routerUser = express.Router();

server.use('/user', routerUser);

// 目录1： /user/
routerUser.get('/1.html', function (req, res) {  //http://xxx.com/user/1.html
    res.send('user1');
});

// 目录2： /user/
routerUser.get('/2.html', function (req, res) {  //http://xxx.com/user/1.html
    res.send('user2');
});

var articleRouter = express.Router();

server.use('/article', articleRouter);
// 

articleRouter.get('/10001.html', function (req, res) {
    res.send('1213');
});

server.listen(8080);

