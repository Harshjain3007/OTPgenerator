const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    phone:{
        type:Number,
        required:true
    },
    otp:
    {
     type:'String'   
    }
},{timeStamps:true})


module.exports = mongoose.model('otp',otpSchema)