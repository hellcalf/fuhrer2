var mysql=require('mysql');
var connection=mysql.createPool({

host:'127.0.0.1',
user:'root',
password:'12345678',
database:'mydb'


});
module.exports=connection;