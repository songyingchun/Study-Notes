const fs=require('fs');
fs.stat('./fs',(err,data)=>{
  console.log(data);
});
