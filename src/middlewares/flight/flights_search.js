const express=require('express')
const FlightDataModel = require('../../models/flightSchema/FlightsSchema')
const route=express.Router()

route.post('/',async (req,res)=>{
 
    const FlightModel=FlightDataModel(req.body.collection)
    const findRouteFlights=await FlightModel.find()

    res.send(findRouteFlights)
})

module.exports=route