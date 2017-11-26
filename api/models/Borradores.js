var db=require('../dbconnection');

var Borradores={

getEnviosById:function(callback){

    return db.query("Select * from envios where id_status=1",callback);
}



};
module.exports=Borradores;