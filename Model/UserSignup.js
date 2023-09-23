const mongoose =require('mongoose');
const usersignupmodel= mongoose.model("Signup", new mongoose.Schema({

    name:String,
    email:String,
    password:String,
    gender:String,
    PhoneNumber:Number,
}))
module.exports= usersignupmodel