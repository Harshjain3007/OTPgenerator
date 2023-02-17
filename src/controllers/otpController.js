const model = require('../models/otpModel')
let otpGenerator=require("otp-generator")
const express=require('express')
const mongoose= require('mongoose')
const otpModel = require('../models/otpModel')


const getOtp =async function(req,res){
    let data= req.body 
    
    if(Object.keys(data).length==0) return res.status(400).send({status:false,msg:'please enter phone number'})
    let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
   
     let obj= {phone:req.body.phone,otp:otp}
    let createOtp= await otpModel.create(obj)
    res.status(200).send({status:true, createOtp})

}

module.exports.getOtp = getOtp