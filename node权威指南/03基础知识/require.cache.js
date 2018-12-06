const http=require('http');
const require2=require('./require2');
console.log(require.cache);
for(var key in require.cache){
  console.log(key);
}
