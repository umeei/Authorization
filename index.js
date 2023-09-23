const express = require ('express')
const app= express();
const port =3000;
const mongoose = require ('mongoose')
const Signup = require ('./Routes/Signiup')
app.use(express.json())

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.get('/Register', function(req,res){
    res.render(__dirname+'/view/Registeration.ejs')
})



app.use('/api/Signup', Signup);
mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/Signup?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongodb');
}).catch((e)=>{
    console.log(e.message)
})


app.listen(port , ()=>{
    console.log("server is running");
})