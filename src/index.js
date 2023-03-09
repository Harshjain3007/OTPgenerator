// const express = require('express')
// const mongoose=require('mongoose')

// const aap = express ()
// const route = require('./route/routes')

// aap.use(express.json())
// mongoose.set('strictQuery', false)

// mongoose.connect("mongodb+srv://HarshJain:harsh321@cluster0.dwkz9.mongodb.net/newUser-db").
// then(()=> console.log('mongodb is connected')).
// catch((error)=>console.log(error))


// aap.use('/',route)

// aap.listen(process.env.PORT||3000,function(){
//     console.log('process is running on PORT'+(process.env.PORT||3000))
// })



const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/miniProject",
)
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route); 


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
