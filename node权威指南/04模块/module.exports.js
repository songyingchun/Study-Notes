let a=12;
let b=function(){
  console.log(require.main);
}
let c={
  a: a,
  b: b
}

module.exports={a,b,c}
