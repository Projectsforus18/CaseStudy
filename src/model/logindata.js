const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@fsdproject.2fayv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email: String,
    Password: String

});

var Logindata = mongoose.model('logindata', LoginSchema);

module.exports = Logindata;