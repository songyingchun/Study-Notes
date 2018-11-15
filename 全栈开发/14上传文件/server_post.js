const http=require('http');
let server=http.createServer((req,res)=>{
  let str='';
  req.on('data',data=>{
    str+=data;
  });
  req.on('end',()=>{
    console.log('post数据接收完了'+str);
  });
});
server.listen(8080);
