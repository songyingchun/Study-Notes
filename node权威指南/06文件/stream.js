const fs=require('fs');
const file=fs.createReadStream('./fs/read1.txt');
const out=fs.createWriteStream('./fs/write1.txt');
let count=0;
//1.打开文件
file.on('open',(data)=>{
  console.log('文件已打开');
});
//2.读入数据
file.on('data',(data)=>{
  out.write(data,()=>{
    // console.log(data.toString());
  });
});
//3.每次缓冲区写入完成
out.on('drain',(data)=>{
  count++;
  console.log(`第${count}次写入%d字节数据`,out.bytesWritten);
});
//4.全部结束
file.on('end',(data)=>{
  console.log(`再见，第${count}次写入%d字节数据`,out.bytesWritten);
});
