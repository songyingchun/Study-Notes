# 跨源资源共享

## CORS
CORS(Cross-Origin Resource Sharing，跨源资源共享):服务器认为这个请求可以接受，就在 Access-Control-Allow-Origin 头部中回发相同的源信息（如果是公共资源，可以回发 "*" ）。

```javascript
Access-Control-Allow-Origin: http://www.nczonline.net
```

### IE

引入了 XDR（ XDomainRequest ）类型

```javascript
var xdr = new XDomainRequest();
xdr.onload = function(){
    alert(xdr.responseText);
};
xdr.onerror = function(){
    alert("An error occurred.");
};
xdr.open("get", "http://www.somewhere-else.com/page/");
xdr.send(null);
```

### 其他浏览器对CORS的实现

要请求位于另一个域中的资源，使用标准的 XHR对象并在 open() 方法中传入绝对 URL即可。

```javascript
var xhr = createXHR();
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
};
xhr.open("get", "http://www.somewhere-else.com/page/", true);
xhr.send(null);
```

## 其他跨域技术

### 图像Ping

```javascript
var img = new Image();
img.onload = img.onerror = function(){
    alert("Done!");
};
img.src = "http://www.example.com/test?name=Nicholas";
```

### JSONP

```javascript
unction handleResponse(response){
    alert("You’re at IP address " + response.ip + ", which is in " +
    response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
```

### Comet(高级的ajax事件):长轮询和HTTP流

**长轮询**
轮询的优势是所有浏览器都支持，因为使用 XHR 对象和 setTimeout() 就能实现。而你要做的就是决定什么时候发送请求。

**HTTP流**
```javascript
function createStreamingClient(url, progress, finished) {
    var xhr = new XMLHttpRequest(),
        received = 0;
    xhr.open("get", url, true);
    xhr.onreadystatechange = function () {
        var result;
        if (xhr.readyState == 3) {
            //只取得最新数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;
            //调用 progress 回调函数
            progress(result);
        } else if (xhr.readyState == 4) {
            finished(xhr.responseText);
        }
    };
    xhr.send(null);
    return xhr;
}
var client = createStreamingClient("streaming.php", function(data) {
    alert("Received: " + data);
}, function (data) {
    alert("Done!");
});
```

### 服务器发送事件

**SSE API**

```javascript
var source = new EventSource("myevents.php");
```
还有以下三个事件。
> * open ：在建立连接时触发。
> * message ：在从服务器接收到新事件时触发。
> * error ：在无法建立连接时触发。

### Web Sockets

**客户端**

```javascript
var socket = new WebSocket("ws://www.example.com/server.php");

socket.send(JSON.stringify(message));

socket.onmessage = function(event){
    var data = event.data;
};

socket.onopen = function(){
    alert("Connection established.");
};

socket.onerror = function(){
    alert("Connection error.");
};

socket.onclose = function(){
    alert("Connection closed.");
};
```

# 小结
同源策略是对 XHR 的一个主要约束，它为通信设置了“相同的域、相同的端口相同的协议”这一限制。试图访问上述限制之外的资源，都会引发安全错误，除非采用被认可的跨域解决方案。这个解决方案叫做 CORS（Cross-Origin Resource Sharing，跨源资源共享）。

> * IE8 通过 XDomainRequest 对象支持CORS，其他浏览器通过 XHR 对象原生支持 CORS。
> * 图像 Ping 和 JSONP 是另外两种跨域通信的技术，但不如 CORS 稳妥。
> * Comet 是对 Ajax 的进一步扩展，让服务器几乎能够实时地向客户端推送数据。实现 Comet 的手段主要有两个：长轮询和 HTTP 流。
> * SSE（Server-Sent Events，服务器发送事件）是一种实现 Comet 交互的浏览器 API，既支持长轮询，也支持
HTTP 流。
> * Web Sockets是一种与服务器进行全双工、双向通信的信道。与其他方案不同，Web Sockets 不使用HTTP 协议，而使用一种自定义的协议。这种协议专门为快速传输小数据设计。虽然要求使用不同的Web 服务器，但却具有速度上的优势。


