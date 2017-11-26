var express = require('express');
var router = express.Router();
var Task=require('../models/Task');

router.get('/',function(req,res,next){


 Task.getAllEnvios(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });

});
router.post('/',function(req,res,next){
    
   Task.postEnvio(req.body,function(err,count){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(req.body);
     }
     });
    });

module.exports=router;