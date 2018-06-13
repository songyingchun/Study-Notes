# 第1章 欢迎进入Node.js世界

## 异步和事件触发

事件轮询:

1、浏览器:
异步执行的运行机制如下：
（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。

事件轮询：
主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

除了放置异步任务的事件，"任务队列"还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做"定时器"（timer）功能，也就是定时执行的代码。

2、Node.js
Node的事件轮询：
（1）V8引擎解析JavaScript脚本。
（2）解析后的代码，调用Node API。
（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
（4）V8引擎再将结果返回给用户。

## DIRT程序
Node所针对的应用程序有一个专门的简称：DIRT。它表示数据密集型实时（data-intensive real-time）程序。

## 事件驱动

从事件角度说，事件驱动程序的基本结构是由一个事件收集器、一个事件发送器和一个事件处理器组成。
事件收集器专门负责收集所有事件，包括来自用户的（如鼠标、键盘事件等）、来自硬件的（如时钟事件等）和来自软件的（如操作系统、应用程序本身等）。
事件发送器负责将收集器收集到的事件分发到目标对象中。
事件处理器做具体的事件响应工作，它往往要到实现阶段才完全确定，因而需要运用虚函数机制（函数名往往取为类似于HandleMsg的一个名字）。

## hello World HTTP 服务器
```js
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello World\n");
}).listen(3000);
console.log("Server running at http://localhost:3000/");
```

事件驱动
```js
var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
});
server.listen(3000);
console.log("Server running at http://localhost:3000/");
```

## 流数据

可以把数据流看成特殊的数组，只不过数组中的数据分散在空间上，而数据流中的数据是分散在时间上的。通过将数据一块一块地传送，开发人员可以每收到一块数据就开始处理，而不用等所有数据都到了再做处理。

```js
var stream = fs.createReadStream('./resource.json');
stream.on('data', function (chunk) {
    console.log(chunk);
});

stream.on('end', function () {
    console.log('finished');
})
```

只要有新的数据块准备好，就会激发data事件，当所有数据块都加载完之后，会激发一个end事件。

可读和可写数据流可以连接起来形成管道。

```js
var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    fs.createReadStream('./image.png').pipe(res);
})

server.listen(3000);
```

数据从文件中读进来（fs.createReadStream），然后数据随着进来就被送到（.pipe）客户端（res）。

## 小结

* 构建在JavaScript之上
* 事件触发和异步的
* 专为数据密集型实时程序设计的

# 构建有多个房间的聊天室程序

访问内存（RAM）要比访问文件系统快得多，所以Node程序通常会把常用的数据缓存到内存里。

# Node编程基础

## Node功能的组织及重用

### module.exports

如果模块返回的函数或变量不止一个，通过设定exports对象的属性来指明它们。如果只返回一个函数或变量，则可以设定module.exports属性。
```javascript
// 多个变量
exports.canadianToUs = function () {}
exports.USToCanadian = function () {}

// 一个变量
module.exports = function () {}
module.exports = exports = function () {}
```
require是Node中少数几个同步I/O操作之一。

### 用node_modules重用模块
1、开始在程序文件同一目录下查找
2、在当前目录下的node_modules目录下查找
3、父目录查找
4、环境变量NODE_PATH指定的目录查找

### 找到模块目录
1、查找package.json文件
2、package.json有main指定的文件
3、查找index.js文件

## 异步编程技术

用回调处理一次性事件

用事件发射器处理重复性事件

# 构建Node Web程序

## HTTP服务器的基础知识

HTTP请求生命周期：
1、HTTP客户端，发起一个HTTP请求。
2、Node接受连接，以及发送给HTTP服务器的请求数据。
3、HTTP服务器解析完HTTP头，将控制权交给请求回调函数。
4、请求回调执行应用逻辑。
5、响应通过HTTP服务器送回去，由它为客户端构造格式正确的HTTP响应。

## 构建RESTful Web服务
表征状态转移REST。

data事件默认地提供Buffer对象。最好将流编码设定为ascii或utf8，这样data事件会给出字符串。
```javascript
req.setEncoding('utf8');
```

POST 向待办事项清单添加事项；
GET 显示当前事项列表，或者显示某一事项的详情；
DELETE 从待办事项清单中移除事项；
PUT 修改已有事项。

__dirname的值是该文件所在目录路径。

req.method属性查看用哪个http方法

第一次调用res.write()时会写入带有默认域的响应头和传给它的数据。

设定Content-Length头
```javascript
res.setHeader('Content-Length', Buffer.byteLength(body));
```

fs.ReadStream:高层流式硬盘访问，从硬盘中读取文件的过程中会发射出data事件。
```javascript
var stream = fs.createReadStream(path);
stream.on('data', function (chunk) {
    res.write(chunk);
});

stream.on('end', function () {
    res.end();
});
```

Stream.pipe()：优化数据传输
```javascript
var stearm = fs.createReadStream(path);

stream.pipe(res);
```

# 存储Node程序中的数据
存储数据而无需安装和配置DBMS；
用关系型数据库存储数据，具体说就是MySQL和PostgreSQL；
用NoSQL数据库存储数据，具体说就是Redis、MonogoDB和Mongoose。

## 无服务器的数据存储

### 内存存储
```javascript
var http = require('http');
var counter = 0;

var server = http.createServer(function (req, res) {
    counter++;
    res.write('I have been accessed ' + counter + ' times.');
    res.end();
}).listen(8888);
```

### 基于文件的存储
将数据存储于本地

## 关系型数据库管理系统

### MySQL
安装
```nodejs
npm install mysql
```

## NoSQL数据库

### Redis
Redis非常适合处理那些不需要长期访问的简单数据存储

# Connect 
Connect是一个框架，它使用被称为中间件的模块化组件，以可重用的方式实现Web程序中的逻辑。在Connect中，中间件组件是一个函数，它拦截HTTP服务器提供的请求和响应对象，执行逻辑，然后或者结束响应，或者把它传递给下一个中间件组件。Connect用分派器把中间件“连接”在一起。
在Connect中，可以使用自己编写的中间件，但它也提供了几个常用的组件，可以用来帮求日志、静态文件服务、请求体解析、会话管理等。

