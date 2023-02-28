const mongoose = require("mongoose");

const productsSchema= new mongoose.Schema({
    name: {  type:String },
    description : {  type:String },
    category : {  type:String },
    image :{  type:String },
    location : {  type:String },
    postedAt : {  type:String },
    price : {  type:Number },
})
const Product = mongoose.model("product",productsSchema);
module.exports = Product ;
