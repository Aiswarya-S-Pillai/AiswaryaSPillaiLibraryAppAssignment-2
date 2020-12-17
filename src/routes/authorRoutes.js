const express = require('express');
const authorRouter=express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
//    var authors=[
//         {
//         title:'Tom and Jerry',
//         author:'Joseph Barbera',
//         genre:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century' ,
//         img:"e.jfif"
//     },
//     {
//         title:'Harry Potter',
//         author:'J K Rowling',
//         genre:'J. K. Rowling, is a British author, philanthropist, film producer and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history',
//         img:"d.jfif"
//     },
//     {
//         title:'Pathummayude aadu',
//         author:'Basheer',
//         genre:'Vaikom Muhammad Basheer,also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham',
//         img:"c.jfif"
//     },
    
//     ]
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        });
      
    });
    authorRouter.get('/:id',function(req,res){
       const id= req.params.id;
       Authordata.findOne({_id: id})
       .then(function(author){
        res.render('author',{
            nav,
            title:'Library',  
            author
          });
       });
         
        });
        ////////////////////////////////////////////////////
        authorRouter.get('/delete/:id',function(req,res){
            const id = req.params.id;
            Authordata.findOneAndDelete({_id:id})
                .then(function(authors){
                    res.redirect('/authors');
                });
    });
    
    authorRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('editAuthor',{
                nav,
                title:'Library',
                author 
            });
           })
            
        });
        authorRouter.post('/edit/:id',function(req,res){
            const id = req.params.id;
           Authordata.findOne({_id:id})
                .then(function(author){
                        if (!author){
                            return next(new Error('cant load'));
                        }
                        else {
                            var itemedit = {
                                title: req.body.title,
                                author: req.body.author,
                                genre:  req.body.genre,
                                image:  req.body.image
                            }
                            // var authoredit = Authordata(itemedit);
                            // authoredit.save();
                            Authordata.findByIdAndUpdate(id,itemedit,(er,author1) => {
                                res.redirect('/authors/'+author1._id);
                            });
                        }
                });
        });
    
        //////////////////////////////////////////////////
    return authorRouter;
}

    module.exports=router;