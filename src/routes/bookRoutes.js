const express=require('express');
const Bookdata = require('../model/Bookdata');
const booksRouter=express.Router();
function router(nav){
// var books=[
//     {
//         title:'goyfouyf',
//         author:'uykfykf',
//         genre:'drama',
//         img:"a.jpeg"
//     },
//     {
//         title:'goyfouyf',
//         author:'uykfykf',
//         genre:'drama',
//         img:"a2.jpeg"
//     },
//     {
//         title:'goyfouyf',
//         author:'uykfykf',
//         genre:'drama',
//         img:"a3.jpeg"
//     }
// ]

booksRouter.get('/',function(req,res){
    Bookdata.find()
     .then(function(books){
    res.render("books",
    {
        nav,
        title:"Books",
        books
      })
    })
})

booksRouter.get('/:id', function(req,res) {
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
    res.render("book",
    {
    nav,
    title: "Book",
    book
})
    })
    })
return booksRouter;    
}
module.exports=router;    