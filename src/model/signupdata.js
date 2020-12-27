const mongoose = require('mongoose'); //accessing mongoos package
mongoose.connect('mongodb+srv://userone:userone@fsdproject.2fayv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    passwordconfirmation: String
}, { strict: false });

var Signupdata = mongoose.model('signupdata', SignupSchema);

module.exports = Signupdata;