const express = require("express");
const App = express();
const apirouter = require("./router/apiroute")
const mongoose = require("mongoose")
const api = require("./Model/Apimodel")
const cors = require('cors')
require("dotenv").config()
App.use(express.json())
App.use(cors())



App.use("/api",apirouter)


mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res)=>{
    App.listen( process.env.PORT, () => {
        console.log(
           res , `MongoDB is Connected Server is Listening on http://localhost:4000`
        )
    })
}).catch((err)=>{
    console.log(err , "DB Connection Error")
})
