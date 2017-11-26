var db=require('../dbconnection');

var Envio={

getAllEnvios:function(callback){

return db.query("Select * from envios where id_status=0",callback);

},
postEnvio:function(envio,callback){
    console.log("inside service");
return db.query("Insert into envios values(?,?,?,?,?,?,?,?)",[envio.null,envio.destinatario,0002,envio.asunto,envio.hoy,envio.null,envio.texto,0],callback);
},

deleteEnvio:function(id,callback){
    return db.query("delete from envios where id_envios?",[id],callback);
}

};
module.exports=Envio;