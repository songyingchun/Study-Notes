// stream 用于node中数据的交互接口
const fs = require('fs')
const rs = fs.createReadStream('./conf.js');    // 读取流
const ws = fs.createWriteStream('./conf2.js');  // 写入流

rs.pipe(ws);

// 二进制友好
const rs2 = fs.createReadStream('./photo.jpg')     // 读取流
const ws2 = fs.createWriteStream('./02.jpg')    // 读取流

rs2.pipe(ws2)