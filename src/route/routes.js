const express = require('express')
const otp = require('../controllers/otpController')
const user=require('../controllers/userController')

const router = express.Router()


router.post('/getotp',otp.getOtp)
router.post('/createUser',user.createUser)



module.exports = router