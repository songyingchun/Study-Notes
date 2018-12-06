const fs=require('fs');
fs.watchFile('./fs/read1.txt',(curr,prev)=>{
  if(Date.parse(prev.ctime==0)){
    console.log('文件被创建');
  }else if(Date.parse(curr.ctime==0)){
    console.log('文件被删除');
  }else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime)){
    console.log('文件被修改');
  }
});
