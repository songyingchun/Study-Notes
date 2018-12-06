const http=require('http');
let server=http.createServer();

server.on("request",(req,res)=>{
  console.log("req.url:"+req.url);
  if(req.url!=='/favicon.ico'){
    console.log('收到客户端请求');
    res.end();
  }
});

server.on('listening',()=>{
  console.log('服务器监听端口');
});

server.on('connection',()=>{
    console.log('客户端连接已建立');
});

server.on('close',()=>{
    console.log('服务器连接已关闭');
});

server.listen(8080);
