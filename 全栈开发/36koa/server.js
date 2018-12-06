const koa=require('koa');
const static=require('koa-static');
const route=require('koa-route');

let server=new koa();
server.listen(8080);

//1.接口
// 注册:/reg?user=xxx&pass=xxx
server.use(route.get('/a',async (ctx, next)=>{
  console.log(ctx);
  ctx.req
  ctx.res
  ctx.request
  ctx.response
  ctx.request.body
  ctx.response.body='abc';
}));

//2.静态文件
// server.use(static('www'));
