const router = require('express').Router();
const jwt = require('jsonwebtoken')

router.post ( '/login', async (req,res)=>{

   try{
    var data = {username: "admin", password:"admin123"}
    var userdata =req.body;

    if((data.username== userdata.username) && (data.password==userdata.password)){

        var token =jwt.sign({username:"admin"}, "ajsdfSDKFJ%&&$4773" , {expiresIn:"30s"})

        res.cookie("accesstoken", token, {secure:true, httpOnly:true});
        res.json({
            success:true,
            message:"Signin Successfuly"
        })
    }
    else{
        res.status(403).json({
            success : false,
            message: "Worng Password or Username"
        })
    }

   }
   catch(error){
    res.status(505).json({
        success:false,
        message:"Something went worng"
    })
   }

})

module.export = router;