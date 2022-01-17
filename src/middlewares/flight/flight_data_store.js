const express=require('express')
const FlightDataModel = require('../../models/flightSchema/FlightsSchema')
const route=express.Router()

route.post('/',async (req,res)=>{

    const Model=FlightDataModel(req.body.flightsRoute)
    const doc=new Model(req.body)
    await doc.save()

    res.status(200)
})

module.exports=route