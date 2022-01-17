const express=require('express')
const UserModel = require('../../models/UserModel')
const route=express.Router()

route.post('/',async (req,res)=>{
    await UserModel.findByIdAndUpdate(req.body.email,req.body)
    res.json({success:true})
})

module.exports=route