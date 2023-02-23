const express = require("express") ;
const Flight = require("./flight.schema") ;
const app = express.Router() ;
app.use(express.json()) ;


app.post("/", async(req, res)=>{
    try{
        let flight = req.body
        let p = await Flight.insertMany(flight)
        res.send(flight);
   }
   catch(err){
       res.status(201).send(err.message);
   }
})

app.delete("/:id", async(req, res)=>{
    try{
        let id = req.params.id;
        let flight = await Flight.deleteOne({"_id":id})
        res.send(flight);
   }
   catch(err){
       res.status(202).send(err.message);
   }
})

app.patch("/:id", async (req,res)=>{
    try{
        let id = req.params.id;
        let update = await Flight.updateOne({"_id":id},{$set:{...req.body}});
        res.status(204).send("Details Updated Successfully!");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})


app.get("/", async(req, res)=>{
    try{
        let output = await Flight.find();
        res.send(output);
   }
   catch(err){
       res.status(200).send(err.message);
   }
})


app.get("/:id", async(req, res)=>{
    try{
        let id = req.params.id ;
        let output = await Flight.find({"_id":id});
        res.send(output);
   }
   catch(err){
       res.status(200).send(err.message);
   }
})


module.exports =app; 