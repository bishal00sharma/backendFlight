const mongoose = require("mongoose");

const bookingSchema= new mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId , ref: "user" , required :true  },
    flight :  { type: mongoose.Schema.Types.ObjectId , ref: "flight" , required :true  },
})
const Booking = mongoose.model("booking",bookingSchema);
module.exports = Booking ;