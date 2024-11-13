const express = require("express");
const App = express();
const apirouter = require("./router/apiroute")
const mongoose = require("mongoose")
const api = require("./Model/Apimodel")
require("dotenv").config()
App.use(express.json())
App.use("/api",apirouter)

mongoose.connect(process.env.URL).then((res)=>{
    App.listen( process.env.PORT, () => {
        console.log(
           res , `MongoDB is Connected Server is Listening on http://localhost:4000`
        )
    })
}).catch((err)=>{
    console.log(err , "DB Connection Error")
})