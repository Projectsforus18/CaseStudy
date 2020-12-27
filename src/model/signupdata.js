const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@fsdproject.2fayv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email: String,
    mobile: String,
    password: String,
    passwordconf: String
});

var Signupdata = mongoose.model('signupdata', SignupSchema);

module.exports = Signupdata;