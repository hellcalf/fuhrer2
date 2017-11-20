var db=require('../dbconnection');

var Usuarios={


addUsuarios:function(Usuarios,callback){
    console.log("inside service");
return db.query("Insert into usuarios values(?,?,?)",[Usuarios.tipo_usuario,Usuarios.nombre,Usuarios.contraseña],callback);
},
}
module.exports=Usuarios;