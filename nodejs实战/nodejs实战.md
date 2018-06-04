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

如果模块返回的函数或变量不止一个，通过设定exports对象的属性来指明它们。如果只返回一个函数或变量，则可以设定module.exports属性。

require是Node中少数几个同步I/O操作之一。
