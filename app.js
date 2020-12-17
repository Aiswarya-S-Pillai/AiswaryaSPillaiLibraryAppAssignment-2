const express = require('express');

const app=express();


const nav=[
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  },
  {
    link:'/login',name:'login'
  },
  {
    link:'/signup',name:'signup'
  },
  {
    link:'/AddBook',name:'Add Book'
  },
  {
    link:'/AddAuthor',name:'Add Author'
  }


];
 booksRouter=require('./src/routes/bookRoutes')(nav)
 authorRouter=require('./src/routes/authorRoutes')(nav)
 loginRouter=require('./src/routes/loginRoutes')(nav)
 signupRouter=require('./src/routes/signupRoutes')(nav)
 addRouter=require('./src/routes/addRoutes')(nav)
 addauthorRouter=require('./src/routes/addauthorRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/AddBook',addRouter);
app.use('/AddAuthor',addauthorRouter);
app.get('/',function(req,res){
    res.render("index",
    {
      nav,
      title:'Library'

    });
});



app.listen(5700);