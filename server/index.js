import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express()
app.use(bodyParser.json({extended:true})) //calling middlewares |extended => bodparser will include any tpe of data not just strings/we can add ,limit:"30mb"
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
const CONNECTION__URL=process.env.CONNECTION__URL||'mongodb+srv://abdelhalim:alsamad1@cluster0.sor4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT||3000;
mongoose.connect(CONNECTION__URL)
    .then(()=>app.listen(PORT,()=>console.log('server running')))
    .catch((err)=>console.log(err))