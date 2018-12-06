const fs=require('fs');
fs.readFile('./fs/read1.txt',(err,data)=>{
  if(data){
    fs.writeFile('./fs/write1.txt',data,{
      flag:'a'
    });
  }else{
    console.log(err);
  }
});
