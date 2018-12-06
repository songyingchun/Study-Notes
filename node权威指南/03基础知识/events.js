let {EventEmitter}=require('events');
let emitter=new EventEmitter();
console.log(emitter);

let http=require('http');
let server=http.createServer();
console.log(server);

let listener=function(...args){
  console.log(...args);
}

emitter.addListener('msg', listener);
emitter.on('msg', listener);
emitter.emit('msg', 1);
console.log(emitter.listeners('msg'));
let listeners = emitter.listeners('msg');
console.log(listeners[0] === listener);
console.log(listeners[1] === listener);
