const fs=require('fs');
fs.readFile('./fs/read1.txt',(err,data)=>{
  console.log(data);
  if(data){
    fs.writeFile('./fs/write1.txt',data);
  }else{
    console.log(err);
  }
});
