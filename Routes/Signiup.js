const router =require('express').Router();
const usersignupmodel = require('../Model/UserSignup');
const signupm= require('../Model/UserSignup')

router.get('/',async function(req,res){
    var signup= await usersignupmodel.find()
    res.json(signup)
})

router.post('/',async function(req,res){
    await usersignupmodel.create(req.body)

    res.send("Signup data filled successfuly");
})

router.put('/',async function(req,res){
    await usersignupmodel.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Data Updated Successfuly");
})

router .delete('/', async function(req,res){
    await usersignupmodel.findByIdAndDelete(req.query.id);
    res.send("Data deleted successfly");
})


module.exports = router