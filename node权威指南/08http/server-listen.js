const http=require('http');
//1.创建服务器
let server=http.createServer();
//2.监听request事件
server.on('request',(req,res)=>{
  console.log('服务器连接成功');
});
//3.监听端口号
server.listen(8080);
server.on('listening',()=>{
  console.log('服务器已连接');
});
