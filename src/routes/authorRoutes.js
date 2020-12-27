const express=require('express')
const Authordata = require('../model/Authordata');
const authorsRouter=express.Router();
function router(nav){
    // var authors=[
    //     {
    //         title:'Pathumma',
    //         author:'basheer',
    //         place:'Kottayam',
    //         img:"a.jpeg"
    //     },
    //     {
    //         title:'Death',
    //         author:'Sadhguru',
    //         place:'Mysuru',
    //         img:"a2.jpeg"
    //     },
    //     {
    //         title:'two states',
    //         author:'New Delhi',
    //         place:'',
    //         img:"a3.jpeg"
    //     }
    // ]

    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",
        {
            nav,
            title:"Authors",
            authors
        })
      })
    })
    
    authorsRouter.get('/:id', function(req,res) {
            const id=req.params.id;
            Authordata.findOne({_id:id})
            .then(function(author){
            res.render("author",
            {
            nav,
            title:"Authors",
            author
            })
            })
            }) 
return authorsRouter;    
}
module.exports=router;    