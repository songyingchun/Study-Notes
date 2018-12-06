const fs=require('fs');
fs.readFile('./fs/read1.txt',(err,data)=>{
  console.log(data.toString());
});
