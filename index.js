const express = require ('express')
const app= express();
const port =3000;
const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser')
app.use(express.json())


const Signup = require ('./Routes/Signiup')
app.use('/api/Signup', Signup);


const Signin= require('/Routes/Signin')
app.use('/api/Signin',Signin)



app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.get('/Register', function(req,res){
    res.render(__dirname+'/views/Registeration.ejs')
})


app.get('/login',(req,res)=>{
    if(req.cookies.accesstoken){
        try{
            var TokenVlid=jwt.verify(req.cookies.accesstoken, "ajsdfSDKFJ%&&$4773")
            res.redirect('/Dashboard')
        }
        catch (error){
            console.log(error.message);
        }
    }
    res.redirect(__dirname+'/Signin')
})


app.get('/Profile',(req,res)=>{
    if(req.access.token){
        try{
            var TokenVlid=jwt.verify(req.cookies.accesstoken, "ajsdfSDKFJ%&&$4773")
            console.log(TokenVlid);
        }
        catch(error){
            res.redirect('/login')

        }
    }
    else{
        res.redirect('/login')

    }
})


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/Signup?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongodb');
}).catch((e)=>{
    console.log(e.message)
})


app.listen(port , ()=>{
    console.log("server is running");
})