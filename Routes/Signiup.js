const router =require('express').Router();
const usersignupmodel = require('../Model/UserSignup');


router.get('/records',async function(req,res){
    var signup= await usersignupmodel.find()
    res.json(signup)
})

router.get('/Register',async function(req,res){
    await usersignupmodel.create(req.query);
    res.send("Signup data filled successfuly");
})

// router.put('/',async function(req,res){
//     await usersignupmodel.findByIdAndUpdate(req.query.id,{$set:req.body})
//     res.send("Data Updated Successfuly");
// })

// router .delete('/', async function(req,res){
//     await usersignupmodel.findByIdAndDelete(req.query.id);
//     res.send("Data deleted successfly");
// })


module.exports = router