const express=require('express')
const FlightDataModel=require('../../models/flightSchema/FlightsSchema')

const route=express.Router()

route.post('/',async (req,res)=>{

    const FlightModel=FlightDataModel(req.body.searchId)
    const findFlight=await FlightModel.findById(req.body.flightId).exec()
    
    res.send(findFlight)
})

module.exports=route