const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/Products');
const Schema=mongoose.Schema;

var productSchema=new Schema({
        category:String,
        title:String,
        phone:Number,
        price:Number,
        description:String,
        age:String,
        usage:String,
        condition:String,
        location:String,
        email:String,
        image:String
});

var productModel=mongoose.model('product',productSchema);

module.exports={productModel};