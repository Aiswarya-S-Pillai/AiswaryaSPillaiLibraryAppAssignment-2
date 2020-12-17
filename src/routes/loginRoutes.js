const express = require('express');
const loginRouter=express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav){
    
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        { 
           nav,
        title:'Library',
        loginError : ""
        });
    });
    
    loginRouter.post("/", (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
       Signupdata.findOne({email:email,password:password})
      .then((signup)=>
              {
               if(signup==null){
               res.render("login",
               { 
                  nav,
               title:'Library',
               loginError : "Invalid Email or Password"
               });
              
              
                res.redirect('/login');
                
              }
              else
              {
               
               
             
                res.redirect('/books');
                
              }
              })
    });
    
    return loginRouter;
}

module.exports = router;