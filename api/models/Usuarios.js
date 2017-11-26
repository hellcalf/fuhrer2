var db=require('../dbconnection');

var Usuarios={


addUsuarios:function(Usuarios,callback){
    console.log("inside service");
return db.query("Insert into usuario values(?,?,?,?,?,?,?)",[Usuarios.null,Usuarios.null,Usuarios.nombre,Usuarios.hoy,Usuarios.contraseña,Usuarios.email,'adga5gsdrgdsg'],callback);
},
getUserName:function(callback){
            return db.query("select * from usuario",callback);
}
}
module.exports=Usuarios;