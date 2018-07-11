const mysql = require('mysql');

// 1.连接
// createConnection(哪台服务器，用户名，密码， 库)
var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: '20180712'
});

console.log(db);

// 2.查询
// query(干啥，回调)
db.query("SELECT * FROM `user_table`;", (err, data)=>{
    if(err) {
        console.log("出错了", err);
    }else {
        console.log("成功了", data);
    }
});