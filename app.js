const express = require('express')
const app = express();
const port = process.env.port || 5000;

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
app.listen(port);