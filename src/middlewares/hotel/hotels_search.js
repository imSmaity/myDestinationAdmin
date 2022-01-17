const express=require('express')
const HotelDataModel = require('../../models/hotelSchema/HotelsSchema')
const route=express.Router()

route.post('/',async (req,res)=>{

    const HotelModel=HotelDataModel(req.body.searchId)
    const findHotels=await HotelModel.find()

    res.send(findHotels)
})

module.exports=route