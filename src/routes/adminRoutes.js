const express=require('express')
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const Authordata=require('../model/Authordata');
function router(nav){

adminRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav,
        title:"Add Books"
    })
})

adminRouter.get('/author',function(req,res){
    res.render("addauthor",
    {
        nav,
        title:"Add Author"
    })
})

adminRouter.post('/add',(req,res)=>{
    var item = {
    titl: req.body.titl,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books')
    });
//For adding author
    adminRouter.post('/addauthor',(req,res)=>{
        var item = {
        titl: req.body.titl,
        author: req.body.author,
        place: req.body.place,
        image: req.body.image
        }
        var author = Authordata(item);
        author.save();
        res.redirect('/authors')
        });    


adminRouter.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
    res.render("editbook",
    {
    nav,
    title:'Edit Book',
    book
    });
    });
    });

//for editing author
adminRouter.get('/editauthor/:id', (req,res)=>{
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
    res.render("editauthor",
    {
    nav,
    title:'Edit Author',
    author
    });
    });
    });    

    adminRouter.post('/update/:id', (req,res)=>{
        const id = req.params.id;
        var item = {
        titl: req.body.titl,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
        }
        Bookdata.findByIdAndUpdate(id, item, function(err, docs) {
        if(err) {
        console.log(err)
        }else{
        console.log("updated user:", docs)
        }
        });
        res.redirect('/books')
    })

//for updating author
adminRouter.post('/updateauthor/:id', (req,res)=>{
    const id = req.params.id;
    var item = {
    titl: req.body.titl,
    author: req.body.author,
    place: req.body.place,
    image: req.body.image
    }
    Authordata.findByIdAndUpdate(id, item, function(err, docs) {
    if(err) {
    console.log(err)
    }else{
    console.log("updated user:", docs)
    }
    });
    res.redirect('/authors')
})    

    adminRouter.post('/delete/:id', (req,res)=>{
        const id=req.params.id;
        Bookdata.findByIdAndDelete(id, function(err, docs){
        if(err) {
        console.log(err)
        }else{
        console.log(" Deleted : ",docs)
        }
        });
        res.redirect('/books')
    })   

//for deleting author
adminRouter.post('/deleteauthor/:id', (req,res)=>{
    const id=req.params.id;
    Authordata.findByIdAndDelete(id, function(err, docs){
    if(err) {
    console.log(err)
    }else{
    console.log(" Deleted : ",docs)
    }
    });
    res.redirect('/authors')
}) 
    return adminRouter;    
}
module.exports=router;    