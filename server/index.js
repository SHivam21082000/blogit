const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()

const DB = process.env.MONGO_URL;
mongoose.connect(DB).then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err);
})
app.use('/',(req,res)=>{
    res.send('Home page')
})

app.listen('3001',()=>{
    console.log("app is running")
})