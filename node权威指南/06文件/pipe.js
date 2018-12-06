const fs=require('fs');
const file=fs.createReadStream('./fs/read1.txt');
const out=fs.createWriteStream('./fs/write1.txt');
file.pipe(out,{end:false});
file.on('end',()=>{
  out.end("再见");
});
