const http=require('http');
const fs=require('fs');
const mysql=require('mysql');
const io=require('socket.io');
const url=require('url');
const regs=require('./libs/regs');

//数据库
let db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'20181030'});

let httpServer=http.createServer((req,res)=>{
  const {pathname,query}=url.parse(req.url,true);
  fs.readFile(`www${pathname}`,(err,data)=>{
    if(err){
      res.writeHeader(404);
      res.write('Not Found');
    }else{
      res.write(data);
    }
    res.end();
  });
});

httpServer.listen(8080);

//2.WebSocket服务器
let aSock=[];
let wsServer=io.listen(httpServer);
wsServer.on('connection',sock=>{
  aSock.push(sock);
  let cur_username='';
  let cur_userID=0;
  //1.注册
  sock.on('reg', (user,pass)=>{
    //1.校验数据
    if(!regs.username.test(user)){
      sock.emit('reg_ret', 1, '用户名不符合规范');
    }else if(!regs.password.test(pass)){
      sock.emit('reg_ret', 1, '密码不符合规范');
    }else{
      //2.用户名是否存在
      db.query(`SELECT ID FROM user_table WHERE username='${user}'`, (err,data)=>{
        if(err){
          sock.emit('reg_ret',1,'数据库有错');
        }else if(data.length>0){
          sock.emit('reg_ret',1,'用户名已存在');
        }else{
          db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
            if(err){
              sock.emit('reg_ret',1,'数据库有错');
            }else{
              sock.emit('reg_ret',0,'注册成功');
            }
          });
        }
      });
    }
  });
  //2.登录
  sock.on('login',(user,pass)=>{
    //1.校验数据
    if(!regs.username.test(user)){
      sock.emit('login_ret', 1, '用户名不符合规范');
    }else if(!regs.password.test(pass)){
      sock.emit('login_ret', 1, '密码不符合规范');
    }else{
      //2.用户名是否存在
      db.query(`SELECT ID FROM user_table WHERE username='${user}'`, (err,data)=>{
        if(err){
          sock.emit('login_ret',1,'数据库有错');
        }else{
          db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`, (err,data)=>{
            if(err){
              sock.emit('login_ret',1,'数据库有错');
            }else{
              sock.emit('login_ret',0,'登录成功');
            }
          });
        }
      });
    }
  });

  //3.离线
  sock.on('disconnect', ()=>{
    db.query(`UDPATE user_table SET online=0 WHERE ID='${cur_userID}'`, err=>{
      if(err){
        console.log('数据库有错',err);
      }
      cur_username='';
      cur_userID=0;
      aSock=aSock.filter(item=>item!=sock);
    })
  })

  //4.发言
  sock.on('msg', txt=>{
    if(!txt){
      sock.emit('msg_ret',1,'消息文本不能为空');
    }else{
      //广播给所有人
      aSock.forEach(item=>{
        if(item==sock)return;
        item.emit('msg',cur_username,txt);
      });
      sock.emit('msg_ret',0,'发送成功');
    }
  })
});
