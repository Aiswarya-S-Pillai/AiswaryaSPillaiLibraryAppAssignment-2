const express = require('express');
const addRouter=express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    addRouter.get('/',function(req,res){
        res.render("AddBook",{
            nav,
            title:'Library',
           
        });
    });
    addRouter.post('/add',function(req,res){
    var item={
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
         image :req.body.image
    }
    var book =  Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');

    });
   
    return addRouter;
}

    module.exports=router;