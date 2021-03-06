const mongoose=require('mongoose')
const {Schema}=mongoose

const userDataStructure={
    _id: String,
    name: String,
    dob: String,
    email: String,
    password: String,
    flightBookings: Array,
    hotelBookings: Array
}
const userSchema=new Schema(userDataStructure)

const UserModel=new mongoose.model("user",userSchema)
module.exports=UserModel