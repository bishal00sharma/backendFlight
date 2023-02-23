const express = require("express") ;
const User = require("./user.schema") ;
const app = express.Router() ;
app.use(express.json()) ;



app.post("/register", async(req,res) => {
    const { email,password, name} =req.body ;
    const user=  await User.create(req.body);
    res.status(201).send("User created")
})

app.post("/login",async(req,res) =>{
    const {email} =req.body ;
    const user =await User.findOne( req.body) ;
    if(!user){
       return res.send({"error":"Error"} ) ;
    }
    res.status(201).send({"user":user});

}) 

module.exports =app; 