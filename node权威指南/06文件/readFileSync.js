const fs=require('fs');
var data=fs.readFileSync('./fs/read1.txt');
console.log(data.toString());
