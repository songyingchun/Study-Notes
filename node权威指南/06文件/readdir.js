const fs=require('fs');
fs.readdir('./fs',(err,data)=>{
  if(err){

  }else{
      console.log(data);
  }
});

fs.readdir('./fs2',(err,data)=>{
  if(!err){
    console.log(data);
  }
})

fs.readdir('./fs3',(err,data)=>{
  if(!err){
    console.log(data);
  }
})

fs.readdir('./',(err,data)=>{
  if(!err){
    console.log(data);
  }
})
