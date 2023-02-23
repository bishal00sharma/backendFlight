const mongoose = require("mongoose");

const flightSchema= new mongoose.Schema({
    airline : {  type:String , required: true } ,
    flightNo: {  type:String, required: true, unique:true },
    departure : {  type:String  } ,
    arrival : {  type:String  } ,
    departureTime : { type : Date, default: Date.now } ,
    arrivalTime : { type : Date, default: Date.now } ,
    seats : {  type: Number  } ,
    price : {  type:Number } ,
})
const Flight = mongoose.model("flight", flightSchema);
module.exports = Flight ;