const express = require("express");
const user = require("../models/user");
const router = express.Router();

const User = require("../models/user");

router.post("/signup",(req,res)=>{
    user=new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber:req.body.phoneNumber, 
        address:req.body.address,
    })
    user.save().then(()=>res.json('new user added'))
    .catch((err)=>res.status(400).json(err));
})



module.exports=router