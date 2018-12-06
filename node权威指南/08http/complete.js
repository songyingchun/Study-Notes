const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const url=require('url');
//1.创建服务器
let server=http.createServer();
//2.监听request事件
server.on('request',(req,res)=>{
  if(req.url!=='/favicon.ico'){
    console.log('连接到客户端 request');
    //5.接收客户端的信息
    req.on('data',(data)=>{
      console.log('正在接收客户端信息：'+decodeURIComponent(data));
      //7.服务器端返回信息
      fs.writeFile('./write.txt', decodeURIComponent(data), (err,data)=>{
        if(err){
          console.log('写入失败');
        }else{
          setTimeout(()=>{server.close()},3000);
        }
      });
      //8.解析数据
      let obj=querystring.parse(decodeURIComponent(data));
      console.log(obj);
    });
    //6.接收完毕
    req.on('end',()=>{
      console.log('客户端信息接收完毕');
    });

    // 访问网站
    let pathname_obj=url.parse(req.url);
    let pathname=pathname_obj.pathname;
    fs.readFile('./'+pathname,'utf-8',(err,data)=>{
      if(err){
        res.write('HTML 404');
      }else{
        res.write(data);
      }
      res.end();
    });
  }
});
//3.服务器监听端口
server.listen(8080);
server.on('listening',()=>{
  console.log('已连接端口8080 listening');
});
//4.关闭
server.on('close',()=>{
  console.log('服务器已关闭 close');
});
//5.关闭
server.on('connection',(req,res)=>{
  console.log('连接客户端 connection');
});
