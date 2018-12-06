const fs=require('fs');
fs.realpath('./fs',(err,resolvePath)=>{
  if(err){

  }else{
    console.log(resolvePath);
  }
});
