
5.mp4

GET数据：
写在url上面
req.url urlLib.parse(, true);

POST数据接收：
POST数据比GET大得多（GET数据小于32K， POST小于1G）

data-有一段数据到达（很多次）
```javascript
req.on('data', function (data) {
    str+= data;
})
```
end-数据全部到达（一次）

8.mp4

1. 模块
    require-引入其他模块
    exports-输出
    module-批量输出
```javascript
var mod = require('./mod');
(function (require, exports, module) {

})();
```
引入模块
    exports-输出
    module-批量输出
*.js*可选

2. npm:NodeJS Package Manager(NodeJS包管理器)
    统一下载途径
    自动下载依赖

3. node_modules
    模块放这里
    如果有"./"，从当前目录找
    如果没有"./"，先从系统模块，更麻烦node_modules找

4.上传模块
npm login
npm whomai
npm init
npm publish
npm update
npm --force unpublish

# 9.mp4
Express：
1. 依赖中间件
2. 接收请求
get/post/use
get('/地址', function (req, res) {})
3. 非破坏式的
req.url
4. static用法 
const static = require('epress-static');
server.use(static('./www'));

# 10.mp4
1. GET 无需中间件
req.query

POST 需要'body-parser'
server.use(bodyParser.urlencoded({
    limit: 2*1024*1024
}));  // 解析数据

server.use(function (req) {
    req.body;
})

2. 链式操作:调用next
```javascript
server.get('/', function (req, res, next) {
    next();
});
server.post('/', function (req, res, next) {
    next();
});
server.use('/', function (req, res, next) {
    next();
});
```

3. 中间件(body-parser)、自己写中间件

# 11.mp4
cookie: 在浏览器保存一些数据，每次请求都会带过来
“不安全，有限（4K）”
session：保存在服务器
“安全、无限”

session: 基于cookie实现的
 *cookie中会有一个session的ID，服务器利用session找到session文件、读取、写入

隐患：session劫持

cookie:
1. cookie空间非常小-省着用
2. 安全性非常差

res.secret = '签名'
a.发送cookie(名字，值，{path: '/': maxAge: 毫秒, signed: true});

b.读取cookie
cookie-parser

server.use(cookieParser('签名'));
server.use(function (req, res) {
    req.cookies 
    req.signedCookies
});

c.删除cookie
server.use(function (req, res) {
    res.clearCookie('user');
});

session: 
cookie-session:

# 12.mp4 模板引擎
jade-破坏式、侵入式、强依赖
ejs-温和、非侵入式、弱依赖

jade
```

```