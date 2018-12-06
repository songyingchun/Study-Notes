const http=require('http');
const server=http.createServer();
server.on('request',function(...args){
  console.log(...args);
});
server.emit('request','req', 'res');
// server.listen('8080');
