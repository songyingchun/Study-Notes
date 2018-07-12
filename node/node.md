
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

# 15.mp4 综合
body-parser 解析post数据 application/x-www-form-urlencoded
server.use(bodyParser.urlencode());

multer      解析post文件 multerpart/form-data
var obj = multer({dest: "upload/"});

server.use(obj.any());
server.use(function (req, res) {
    req.files[0].originalname
    req.files[0].path
})

把扩展名加上
var newName = file.path + pathLib.parse(file.originalname).ext

# 16.mp4
模板引擎：适配
1. consolidate
```javascript
consolidate=require
server.set('view engine', 'html');
server.set('views', '模板文件目录');
server.engine('html', consolidate.ejs);

server.get('/', function (req, res) {
    res.render('模板文件', 数据);
});
```

route-路由：
把不同的目录，对应到不同的模块

xxx.com/aaa/        mod1
xxx.com/news/       mod_news
        post                news_post
        list                news_list
        content             news_content
xxx.com/user/       mod_users

server.get();
server.use();
server.post();

Router-迷你server
router.get();
router.post();
router.use();

Router-拆
/user/...       mod_user
/item/...       mod_item

// 1.创建router
var router = express.Router();
// 2.把router添加到server
server.use('/user', router);

// 3.router内部
router.get('/1.html');
router.post('/2.html');

# 17.mp4 数据库
MySQL：
免费、中不网站
优点：性能非常不错
缺点：集群、容灾稍微弱一些

Oracle:
挺贵、大型应用、金融级
优点：性能非常大错、集群、容灾非常强
缺点：挺贵

文件型：
sqlite、Mongodb

空间型：

Server端：
数据存在

Client端：
管理工具（Navicat）、Node

数据基本概念：
两种单位：
1.库：文件夹-用来管理，本身没法存数据
2.表：文件-存数据的

表-Excel
行-一条数据
列(字段、域)-一个数据项

用户名
密码

主键：唯一、性能高
        唯一标识符
        
# 18.mp4

1. 连接
    var db = mysql.createConnection({host, port, user, password, database});
2. 查询
    db.query(SQL, (err, data)=>{});
    
3. SQL=>Structured Query Language(结构化查询语句)

SQL：
4. 大查询语句-增删改查

增-INSERT
INSERT INTO 表 (字段列表) VALUES(值)
INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES(1, 'blue', '123456');

删-DELETE

改-UPDATE

查-SELECT
SELECT * FROM `user_table`;

SQL标准写法
1.关键字大写
2.库、表、字段需要加上

# 19.mp4 搭表
数据字典-数据定出来

1. banner
    ID 
    title 标题 varchar(32)
    sub_title 副标题 varchar(16)
    src 图片地址 varchar(64)
2. 文章
    ID 
    author 作者 varchar(16)
    author_src 作者头像 varchar(64)
    title 标题  varchar(32)
    post_time 发布时间（s）int
    content 内容 text
    n_like 赞 int
3. 用户
    ID 
    username 用户名 varchar(32)
    password 密码 varchar(32)
    src 头像 varchar(64)
# 20.mp4