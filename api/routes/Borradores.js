var express = require('express');
var router = express.Router();
var Borradores=require('../models/Borradores');

router.get('/',function(req,res,next){

Borradores.getEnviosById(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
});
});
module.exports=router;