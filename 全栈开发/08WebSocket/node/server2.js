const http=require('http');

let server=http.createServer(function(req, res){
  //console.log('有人来请求');
  console.log(`客户端请求的是：${req.url}`);
  console.log(`请求的方法是：${req.method}`);
  res.write('aaaa');
  res.write('aaaasadf');
  res.write('aaaasadfadfa');
  res.end();
});
server.listen(8081);

console.log('监听成功');
