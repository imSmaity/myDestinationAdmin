const express=require('express')
const HotelDataModel = require('../../models/hotelSchema/HotelsSchema')
const route=express.Router()

route.post('/',async (req,res)=>{

    const Model=HotelDataModel(req.body.city)
    const doc=new Model(req.body)
    await doc.save()

    res.status(200)
})

module.exports=route