//Accessing Mongoose Package
const mongoose = require('mongoose'); 

//Database Connection
mongoose.connect('mongodb+srv://userone:userone@aiswaryafiles.usw3y.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema Definintion
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    
    email: String,
    mobile: Number,
    
    dob:String,
    pass: String,
    password: String
});
//Model Creation
var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata; 