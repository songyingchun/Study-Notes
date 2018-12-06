const http=require('http');
const fs=require('fs');
let server=http.createServer();
//1.监听请求
server.on('request',(req,res)=>{
  if(req.url!=='/favicon.ico'){
    console.log(req);
    let w1=fs.writeFileSync('./write.txt',JSON.stringify(req.headers));
    res.end();
  }
});
//2.监听端口
server.listen(8080);
