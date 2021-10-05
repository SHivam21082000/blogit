const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const categoryRouter = require('./routes/categories');
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
app.use('/user', userRouter)
app.use('/post',postRouter);
app.use('/categories',categoryRouter)

app.listen('3001',()=>{
    console.log("app is running")
})