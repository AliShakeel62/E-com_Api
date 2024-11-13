const mongoose = require("mongoose") ;
const ApiSchema = new mongoose.Schema({
    category : {
        type : String,
        require : [true, "category is required"]
    },
    image : {
        type : String,
        require : [true, "image is required"]
    },
    description : {
        type : String,
        require : [true, "description is required"]
    },
    price : {
        type : Array,
        require : [true, "price is required"]
    },
    firstName: {
        type: String,
        require: [true, "firstname is required"],
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: [true, "email is required"],
        uniqe: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    password: {
        type: String,
        require: [true, "password is required"],
        minlenght: [6, "Passward at least 6 characters long"],
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now,
    },
})

const Apimodel = mongoose.model("Api", ApiSchema);
module.exports = Apimodel;