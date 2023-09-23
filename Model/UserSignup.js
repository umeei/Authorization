const mongoose =require('mongoose');
const usersignupmodel= mongoose.model("Signup", new mongoose.Schema({

    user:String,
    email:String,
    Password:String,
    
}))
module.exports= usersignupmodel