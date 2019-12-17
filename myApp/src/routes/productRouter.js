var express = require('express');
var productRouter = express.Router();
var {productModel} =require('../models/productsModel');

function route(){

    productRouter.route('/random')
        .get((req, res) => {
            // console.log(req.body)
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            productModel.find((err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    // console.log(result)
                    res.json({product:result});
                }
            }); 
        });

    productRouter.route('/insert')
    .post((req,res)=>{
        res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        res.header("Access-Control-Allow-Origin", "*")
        res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        console.log(req.body);
                var product = new productModel(req.body);
                product.save((err, result) => {
            if (err) {
                res.json({ Status: "Error" });
            }
            else {
                console.log(result);
                res.json({Status:"Success"});
            }
        });
    }); 
        
 

    productRouter.route('/update')
        .post((req,res)=>{
            console.log(req.body)
        productModel.findByIdAndUpdate(req.body._id,{$set:req.body},
          (err,result)=>{
            if(err)
            {
                res.json({Status:"Error"});
            }
            else{
                res.json({Status:"Success"});
            }
          });
    });
    
    productRouter.route('/')
        .post((req, res) => {
            console.log(req.body)
            res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=None");
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            productModel.find({category:req.body.category},(err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(result)
                    res.json({product:result});
                }
            }); 
        });

        productRouter.route('/product')
        .post((req, res) => {
            res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
            res.header("Access-Control-Allow-Origin", "*")
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            console.log(req.body)
            productModel.findById(req.body.id,(err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(result)
                    res.json({product:result});
                }
            }); 
        });

        productRouter.route('/delete')
       
        .post((req,res)=>{
            console.log(req.body)
            productModel.findByIdAndDelete(req.body.id,(err,result)=>{
                console.log(req.body.id)
                if(err){
                    res.json({Status:"Error"});
                }
                else{
                    res.json({Status:"Success"});
                }
            });
        });

        productRouter.route('/ads')
        
        .post((req, res) => {
            console.log(req.body)
            // console.log
            productModel.find({email:req.body.email},(err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    // console.log(result)
                    res.json({product:result});
                }
            });
        });
    return productRouter;
}
module.exports=route;
    