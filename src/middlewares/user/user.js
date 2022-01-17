const express=require('express')
const UserModel = require('../../models/UserModel')
const route=express.Router()

route.post('/',async (req,res)=>{
    const  {name,dob,email,password}=req.body
    const user={}
    user._id=email
    user.name=name
    user.dob=dob
    user.email=email
    user.password=password

    const doc=new UserModel(user)
    await doc.save()

    res.status(200).json({success:true})
})

module.exports=route