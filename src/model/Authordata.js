
//Accessing Mongoose Package
const mongoose = require('mongoose'); 

//Database Connection
mongoose.connect('mongodb+srv://userone:userone@aiswaryafiles.usw3y.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema Definintion
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});
//Model Creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata; 