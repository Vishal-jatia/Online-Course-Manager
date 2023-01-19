if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const passportInitialize = require('./passport-config')
passportInitialize(
    passport,
    email => users.find(users => users.email === email),
    id => users.find(users => users.id === id)
)

const users = [];


//static files
app.use(express.static( 'public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))


app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(flash('warning'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkNotAuthenticated,(req,res)=>{
    res.render('home.ejs')
})

app.get('/dashboard', checkAuthenticated, (req, res) => {
    res.render("dashboard.ejs", { name: req.user.fName })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("login.ejs")
})

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs")
})

app.get('/androidcourse',(req, res) => {
    res.render("androidcourse.ejs", { name: req.user.fName })
})

app.get('/ccourse',(req, res) => {
    res.render("ccourse.ejs", { name: req.user.fName })
})

app.get('/cppcourse',(req, res) => {
    res.render("cppcourse.ejs", { name: req.user.fName })
})

app.get('/csharpcourse',(req, res) => {
    res.render("csharpcourse.ejs", { name: req.user.fName })
})

app.get('/javacourse',(req, res) => {
    res.render("javacourse.ejs", { name: req.user.fName })
})

app.get('/mlcourse',(req, res) => {
    res.render("mlcourse.ejs", { name: req.user.fName })
})

app.get('/pythoncourse',(req, res) => {
    res.render("pythoncourse.ejs", { name: req.user.fName })
})

app.get('/dsacourse',(req, res) => {
    res.render("dsacourse.ejs", { name: req.user.fName })
})

app.get('/webdevcourse',(req, res) => {
    res.render("webdevcourse.ejs", { name: req.user.fName })
})

app.get('/courses',(req, res) => {
    res.render("courses.ejs")
})

app.get('/contact_l', (req, res) => {
    res.render("contact_l.ejs", { name: req.user.fName, email: req.user.email })
})

app.get('/contact', (req, res) => {
    res.render("contact.ejs")
})


app.get('/courses_l', (req, res) => {
    res.render("courses_l.ejs",{ name: req.user.fName })
})

app.post("/login", checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}))

app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            fName: req.body.fname,
            lName: req.body.lname,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.delete('/logout', (req, res, next) => {
    req.logOut(function (err) {
        if (err) { return next(err); }
        res.redirect('/')
    })
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard')
    }
    next()
}

app.listen(port);