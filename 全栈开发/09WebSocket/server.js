const http=require('http');
const fs=require('fs');
const mysql=require('mysql');
const io=require('socket.io');
const url=require('url');

//数据库
let db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'20181030'});

let httpServer=http.createServer((res,req)=>{
  let {pathname,query}=url.parse(req.url,true);
  if(pathname=='/reg'){
  //   let {user,pass}=query;
    console.log('reg');
  //   //1.校验数据
  // }else if(req.url=='/login'){
  //   console.log('请求了登录');
  // }else{
  //   fs.readFile(`www${req.url}`,(err,data)=>{
  //     if(err){
  //       res.writeHeader(404);
  //       res.write('Not Found');
  //     }else{
  //       res.write(data);
  //     }
  //     res.end();
  //   });
  }
});

httpServer.listen(8085);
