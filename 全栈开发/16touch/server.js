const net=require('net');
const crypto=require('crypto');

//1.创建一个tcp服务器
let server=net.createServer((sock)=>{
  console.log('有人连接我了');
});
server.listen(8080);

//3.接收浏览器发过来的特殊头，处理，返回结果
socket.on('data',data=>{
  //第一步，把数据转换成headers的json
  let str=data.toString();
  let aHeaders=str.split('\r\n');

  aHeaders.shift();
  aHeaders.pop();
  aHeaders.pop();

  let headers={};

  aHeaders.forEach(str=>{
    let [name,value]=str.split('：');

    headers[name]=value;
  });

  // 第二步、校验
  if(headers['Connection']=='Upgrade'&&headers['Upgrade']=='websocket'){
    console.log('接到了一个ws以外的协议，扔了');
  }else{
    // 第三步，处理websocket专有头
    if(headers['Sec-WebSocket-Version']!=13){
      console.log('出现了意外的ws版本');
    }else{
      // 第四步，专门处理key
      // C -> S
      // S -> C base4(sha1(''+guid))
      let hash=crypto.createHash('sha1');
      hash.update(headers['Sec-WebSocket-Key']+'258EAFAS-E914-47DA-95CA-C5AB0DC85B11');
      // 输出
      let base64Key=hash.digest();
      //base64Key=>client
      socket.write(
        `HTTP/1.1 101 Switching Protocols
         Upgrade：websocket
         Connection: Upgrade
         Sec-WebSocket-Accept:${base64Key}

        `
      );
      console.log('握手完成');
    }
    // 后续
    socket.on('data',data=>{
      if(data[0]&0x0001){
        alert('最后一个');
      }
    })
  }

  console.log(headers);

  //其他
});

socket.on('end',function(){
  console.log('连接已断开');
});
