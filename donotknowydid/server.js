const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();



const Port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))

// 



app.get('/', (req, res) => {
    res.send('hello')
})

    



const studentRouter = require('./routes/student.js')



app.use('/api',studentRouter)


app.listen(Port,()=>{console.log(`listening on ${Port}`)})



