const express = require('express');
const multer = require('multer');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const categoryRouter = require('./routes/categories');
const path = require("path");

dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

const DB = process.env.MONGO_URL;
mongoose.connect(DB).then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err);
})
app.get('/',(req,res)=>{
    res.send('Home page')
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "hello.png");
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/auth", authRouter)
app.use('/user', userRouter)
app.use('/post',postRouter);
app.use('/categories',categoryRouter)

app.listen('3001',()=>{
    console.log("app is running")
})