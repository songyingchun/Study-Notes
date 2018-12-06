const http=require('http');
let req=http.request({
  hostname:'localhost',
  port: '8080',
  method: 'get',
  path:'/'
},(res)=>{
  res.setEncoding('utf-8');
  res.on("data",(chunk)=>{
    console.log('响应内容:'+chunk)
  });
});

req.end();
