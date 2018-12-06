const mod1=require('./exports');
const mod2=require('./module.exports');
console.log(mod1);
console.log(mod2);

const foo=require('foo');
console.log(foo.foo);
