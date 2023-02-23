const express = require("express") ;
const Booking = require("./booking.schema") ;

const app = express.Router() ;

app.get("/dashboard", async(req, res)=>{
  try{
      let output = await Booking.find();
      res.send(output);
 }
 catch(err){
     res.status(200).send(err);
 }
})




app.post("/booking", async(req, res)=>{
    try{
        const { userId,flightId } = req.body

            let bookingOrder = await Booking.create({user:req.body.userId , flight:req.body.flightId}) ;
          res.status(201).send(bookingOrder);
      
        
       }
   catch(err){
       res.status(500).send(err.message);
   }
})


module.exports =app; 