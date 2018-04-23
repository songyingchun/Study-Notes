console.log("test");

self.onmessage = function (event) {
    var data = event.data;
    console.log(data);
    self.postMessage("收到:" + data);
}

importScripts("test2.js");

console.log(123);