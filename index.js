const express = require("express") ;
const cors = require("cors") ;
const  mongoose  = require("mongoose");
const app = express() ;
app.use(express.json());
app.use(cors());
const userRouter = require("./features/user/user.router");
const flightRouter = require("./features/flight/flight.router");
const bookingRouter = require("./features/booking/booking.router");




app.use("/api",userRouter);
app.use("/api/flights",flightRouter);
app.use("/api",bookingRouter);

app.get("/", async(req, res)=>{
    try{
        res.send("API");
     }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.listen("8080",  async()=>{
     await mongoose.connect("mongodb+srv://bishalsharmaece:jBzQjxG7uCS010qL@cluster0.hxvferc.mongodb.net/test")
    console.log(`Listening on http://localhost:8080`);
})
