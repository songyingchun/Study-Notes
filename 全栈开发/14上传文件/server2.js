const http=require('http');
const fs=require('fs');
const url=require('url');

let server=http.createServer((req,res)=>{
  const {pathname,query}=url.parse(req.url,true);
  if(pathname='/upload_base64'){
    //3.接收字符串
    let str='';     // 问题不大-以后再改
    req.on('data',data=>{
      str+=data;
    });
    req.on('data',)
    //4.保存下来
  }
})
