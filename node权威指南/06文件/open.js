const fs=require('fs');
fs.open('./fs/read1.txt','r',(err,fd)=>{
  console.log(fd);
  var buf=new Buffer(255);
  fs.read(fd,buf,0,9,3,(err,bytesRead,buffer)=>{
    console.log(buffer.slice(0,bytesRead).toString());
  });
})
