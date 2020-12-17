const express = require('express');
const signupRouter=express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library',
            
        });
    });
    signupRouter.post('/newsignup',function(req,res){
        var item = {
      
         email: req.body.email,
         password :req.body.password,
         pass :req.body.pass,
         dob: req.body.dob,
         mobile: req.body.mobile
         
          }  
       var signup =  Signupdata(item);
       signup.save();//saving to database
       res.redirect('/login');
     
      });
    
    return signupRouter;
}

    module.exports=router;