
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

