const mongoose=require('mongoose')
const {Schema}=mongoose

const flightDataStructure={
    _id: String,
    companyName: String,
    trackingCode: String,
    travelAirport: {name: String, sName: String,city: String, terminal: String},
    destinationAirport: {name: String, sName: String,city: String, terminal: String},
    arrivalTime: String,
    departureTime: String,
    flightDuration: Number,
    class: String,
    baseFare: Number,
    baggageCheckIn: String,
    baggageCabin: String,
    meal: String
}

const flightsSchema=new Schema(flightDataStructure)

function FlightDataModel(flightRoute){
    return new mongoose.model(flightRoute,flightsSchema)
}

module.exports=FlightDataModel