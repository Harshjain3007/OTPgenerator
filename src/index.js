const express = require('express')
const mongoose=require('mongoose')

const aap = express ()
const route = require('./route/routes')

aap.use(express.json())
mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://HarshJain:harsh321@cluster0.dwkz9.mongodb.net/newUser-db").
then(()=> console.log('mongodb is connected')).
catch((error)=>console.log(error))


aap.use('/',route)

aap.listen(process.env.PORT||3000,function(){
    console.log('process is running on PORT'+(process.env.PORT||3000))
})