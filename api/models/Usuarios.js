var db=require('../dbconnection');

var Usuarios={


addUsuarios:function(Task,callback){
    console.log("inside service");
    console.log(Task.Id);
return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
}
module.exports=Usuarios;