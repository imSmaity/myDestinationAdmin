const express=require('express')
const app=express()
const cors=require('cors')
const parser=require('body-parser')
const database = require('../config/database')
require('dotenv').config()

const PORT= process.env.PORT
app.listen(PORT,serverStart(PORT))

function serverStart(){
    console.log("Server start port "+PORT)
    database()
}


app.use(cors())
app.use(parser.json())
app.use('/',require('../middlewares/home/home'))
app.use('/user',require('../middlewares/user/user'))

app.use('/flights_data_store',require('../middlewares/flight/flight_data_store'))
app.use('/flights',require('../middlewares/flight/flights_search'))
app.use('/flights/search',require('../middlewares/flight/flight_search'))

app.use('/hotels_data_store',require('../middlewares/hotel/hotel_data_store'))
app.use('/hotels',require('../middlewares/hotel/hotels_search'))
app.use('/hotels/search',require('../middlewares/hotel/hotel_search'))

app.use('/user/search_user',require('../middlewares/user/user_search'))
app.use('/user/update_data',require('../middlewares/user/update_data'))
