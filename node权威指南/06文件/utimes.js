const fs=require('fs');
fs.utimes('./fs/read1.txt',new Date(), new Date(), (err)=>{
  if(err){

  }else{
    console.log('成功');
  }
});
