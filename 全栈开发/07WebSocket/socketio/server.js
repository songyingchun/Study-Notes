const http=require('http');
const io=require('socket.io');

// 1.创建http的服务
let httpServer=http.createServer();
httpServer.listen(8081);

// 2.创建WebSocket服务
let wsServer=io.listen(httpServer);

wsServer.on('connection', function (sock){
  sock.on('a', function (num1, num2){
    console.log(`接到了浏览器数据:${num1},${num2}`);
  });
});
