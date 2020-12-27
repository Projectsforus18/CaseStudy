const express = require('express');
const signupRoutes = express.Router();
const signupdata = require('../model/signupdata');

function router(nav) {

    signupRoutes.get('/', function(req, res) {
        res.render("register", {
            nav,
            title: 'SIGNUP'

        });
    });
    signupRoutes.post('/add', function(req, res) {
        var item = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password,
            passwordconfirmation: req.body.passwordconf
        }

        var signup = signupdata(item)
        signup.save(); //saving to db
        res.redirect('/books');
    })
    return signupRoutes;
}
module.exports = router;