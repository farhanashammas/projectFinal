const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Users');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    confirmPassword:String,
    dp:String,
    phone:Number
});


var signupModel = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = {signupModel};