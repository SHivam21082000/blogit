const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
dotenv.config()
app.use(express.json())

const DB = process.env.MONGO_URL;
mongoose.connect(DB).then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err);
})
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.use("/auth", authRouter)

app.listen('3001',()=>{
    console.log("app is running")
})