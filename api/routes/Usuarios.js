var express = require('express');
var router = express.Router();
var Usuarios=require('../models/Usuarios');

router.post('/',function(req,res,next){
        
       Usuarios.addUsuarios(req.body,function(err,count){
         if(err)
         {
         res.json(err);
         }
         else{
         res.json(req.body);
         }
         });
        });

      
router.get('/:email?',function(req,res,next){       
              Usuarios.getUserName(function(err,rows){
          
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
