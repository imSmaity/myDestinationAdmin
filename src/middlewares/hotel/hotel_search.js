const express=require('express')
const HotelDataModel=require('../../models/hotelSchema/HotelsSchema')

const route=express.Router()

route.post('/',async (req,res)=>{

    const HotelModel=HotelDataModel(req.body.searchId)
    const findHotel=await HotelModel.findById(req.body.hotelId).exec()
    
    res.send(findHotel)
})

module.exports=route