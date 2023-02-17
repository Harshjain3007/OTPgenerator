const model = require('../models/userModel')
const otpmodel=require('../models/otpModel')

const controller= require('../controllers/otpController')
const userModel = require('../models/userModel')



const createUser = async function(req,res){
    let data = req.body
    let {otpId, fname, email,password} = data
    let saveddata =  await userModel.create(data)
  let findUser = await otpmodel.findById(otpId).select({__v:0})
    res.status(201).send({status:true,data:{saveddata,findUser}})
}


module.exports.createUser = createUser 