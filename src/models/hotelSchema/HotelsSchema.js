const mongoose=require('mongoose')
const {Schema}=mongoose

const hotelDataStructure={
    _id: String,
    name:String,
    image:String,
    place:String,
    city:String,
    address:String,
    room:String,
    price:Number,
    gPerRoom:Number

}

const hotelsSchema=new Schema(hotelDataStructure)

function HotelDataModel(hotelRoute){
    return new mongoose.model(hotelRoute,hotelsSchema)
}

module.exports=HotelDataModel