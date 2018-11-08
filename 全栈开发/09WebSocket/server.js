const http=require('http');
const fs=require('fs');
const mysql=require('mysql');
const io=require('socket.io');
const url=require('url');
const regs=require('./libs/regs');

//数据库
let db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'20181030'});

let httpServer=http.createServer((req,res)=>{
  let {pathname,query}=url.parse(req.url,true);
  if(pathname=='/reg'){
    let {user,pass}=query;
    //1.校验数据
    if(!regs.username.test(user)){
      res.write(JSON.stringify({code:1,msg:'用户名不符合规范'}));
      res.end();
    }else if(!regs.password.test(pass)){
      res.write(JSON.stringify({code:1,msg:'密码不符合规范'}));
      res.end();
    }else {
      //2.检验用户名是否重复
      db.query(`SELECT*FROM user_table WHERE username='${user}'`,(err,data)=>{
        if(err){
          res.write(JSON.stringify({code:1,msg:'数据库有错'}));
          res.end();
        }else if(data.length>0){
          res.write(JSON.stringify({code:1,msg:'此用户名已存在'}));
          res.end();
        }else{
          //3.插入
          db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
            if(err){
              res.write(JSON.stringify({code:1,msg:'数据库有错'}));
              res.end();
            }else{
              res.write(JSON.stringify({code:0,msg:'注册成功'}));
              res.end();
            }
          })
        }
      });
    }
  }else if(pathname=='/login'){
    let {user,pass}=query;
    //1.校验数据
    if(!regs.username.test(user)){
      res.write(JSON.stringify({code:1,msg:'用户名不符合规范'}));
      res.end();
    }else if(!regs.password.test(pass)){
      res.write(JSON.stringify({code:1,msg:'密码不符合规范'}));
      res.end();
    }else{
      //2.取数据
      db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
        if(err){
          res.write(JSON.stringify({code:1,msg:'数据库有错'}));
          res.end();
        }else if(data.length==0){
          res.write(JSON.stringify({code:1,msg:'此用户名不存在'}));
          res.end();
        }else if(data[0].password!=pass){
          res.write(JSON.stringify({code:1,msg:'用户名或密码错误'}));
          res.end();
        }else{
          //3.设置状态
          db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`, (err,data)=>{
            if(err){
              res.write(JSON.stringify({code:1,msg:'数据库有错'}));
              res.end();
            }else{
              res.write(JSON.stringify({code:0,msg:'登录成功'}));
              res.end();
            }
          });
        }
      })
    }
  }else{
    fs.readFile(`www${pathname}`,(err,data)=>{
      if(err){
        res.writeHeader(404);
        res.write('Not Found');
      }else{
        res.write(data);
      }
      res.end();
    });
  }
});

httpServer.listen(10000);

//2.WebSocket服务器
let wsServer=io.listen(httpServer);

wsServer.on('connection',sock=>{
  sock.on('reg', (user,pass)=>{
    //1.校验数据
    if(!regs.username.test(user){
      sock.emit('reg_ret', 1, '用户名不符合规范');
    }else if(!regs.password.test(passs)){
      sock.emit('reg_ret', 1, '密码不符合规范');
    }else{
      // 2.用户名是否存在
      db.query(`SELECT ID FROM user_table WHERE username='${user}'`, (err,data)=>{
        if(err){
          sock.emit('reg_ret',1,'数据库有错');
        }else{
          sock.emit('reg_ret',1,'用户名已存在');
        }else{
          db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
            if(err){
              res.write(JSON.stringify({code:1,msg:'数据库有错'}));
              res.end();
            }else{
              res.write(JSON.stringify({code:0,msg:'登录成功'}));
              res.end();
            }
          })
        }
      })
    }
  });
});
