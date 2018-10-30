const mysql=require('mysql');
console.log(mysql);
// 连接池
let db=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: '20180712'
});
//
db.query('SELECT*FROM user_table', (err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
