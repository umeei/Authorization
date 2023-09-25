const express = require ('express')
const app= express();
const port =3000;
const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
app.use(express.json())


const Signup = require ('./Routes/Signiup')
app.use('/api/Signup', Signup);


const Signin= require('./Routes/Signin')
app.use('/api/Signin',Signin)



app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());


app.get('/', function(req,res){
    res.render(__dirname+'/views/Registeration.ejs')
})




app.get('/login',(req,res)=>{
    if(req.cookies.accessToken){
        try{
            var TokenVlid=jwt.verify(req.cookies.accessToken, "ajsdfSDKFJ%&&$4773")
            res.redirect('/Dashboard')
        }
        catch (error){
            console.log(error.message);
        }
    }
    res.render(__dirname+'/views/Registeration.ejs')
})


app.get('/Dashboard',(req,res)=>{
    if(req.cookies.accessToken){
        try{
            var TokenVlid=jwt.verify(req.cookies.accessToken, "ajsdfSDKFJ%&&$4773")
            console.log(TokenVlid);
        }
        catch(error){
            res.redirect('/Registeration')

        }
    }
    else{
        res.redirect('/Registerion')

    }
    res.render(__dirname + "/views/Dashboard.ejs")
})


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/Signup?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongodb');
}).catch((e)=>{
    console.log(e.message)
})


app.listen(port , ()=>{
    console.log("server is running");
})