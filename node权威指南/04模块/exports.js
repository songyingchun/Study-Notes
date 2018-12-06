let a=12;
let b=function(){
  console.log(require.main);
}
let c={
  a: a,
  b: b
}
exports.a=a;
exports.b=b;
exports.c=c;
