// var messenger =require("./messenger");
// messenger.printer(" Ashin...");
// messenger.printer("Abhijith");
// messenger.printer("Abhijith");

// var http=require("http");
// http.createServer(function(req,res) {
// // res.write("Welcome to the server...")
// // res.end()
// if(req.url==="/"){
// res.write("Welcome to the index page")
// res.end()
// }else if(req.url==="/login"){
// res.write("Login page...")
// res.end()
// }else{
// res.write(" error : Page not found. ...")
// res.end()
// }
// }).listen(3300)
// console.log("Server is listening to port nmber 3300")


// app.get('/', function(req,res) {
// res.send("Hello.......")
// });
// app.listen(3300);
// app.get('/login', function(req,res){
//     if(req.url==="/login")
//     {
//     res.send("this is login page....")
//     }
// })
const express = require('express')
const app = express();

const nav = [{
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Author'
    }

];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const registerRouter = require('./src/routes/registerRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/admin', adminRouter)
    //Creatd router
app.get('/', function(req, res) {
    // res.send("welcome to the blank page...")
    // res.sendFile(_dirname+"/src/views/index.html")
    // res.render("index",{books :['book1', 'book2'],titleName:'Library'})
    res.render("index1", {
        nav,
        navbar: [{
                link: '/admin',
                name: 'ADD BOOKS'
            },
            {
                link: '/admin/author',
                name: 'ADD Author'
            },
            {
                link: '/login',
                name: 'Login'
            },
            {
                link: '/register',
                name: 'Register'
            }
        ],
        title: "Library"
    })
})
app.get('/login', function(req, res) {
    res.render("login")
})
app.listen(5000);