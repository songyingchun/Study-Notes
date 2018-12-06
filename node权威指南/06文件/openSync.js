const fs=require('fs');
const fd=fs.openSync('./fs/read1.txt','r');
var buf=new Buffer(255);

var bytesRead=fs.readSync(fd,buf,0,9,3);
console.log(bytesRead);
