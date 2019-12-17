const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Users');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email:String,
    password:String  
});


var loginModel = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = {loginModel};