const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
var projectsRouters = require('./routes/projects')
const usersRouters = require('./routes/users')
const dotenv = require('dotenv')

// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import projectsRouters from './routes/projects.js'
// import usersRouters from './routes/users.js'
// import dotenv from 'dotenv'

const app=express()
dotenv.config()
app.use(bodyParser.json({extended:true,limit:'50mb'})) //calling middlewares |extended => bodparser will include any tpe of data not just strings/we can add ,limit:"30mb"
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',projectsRouters)
app.use('/users',usersRouters)

const CONNECTION__URL=process.env.CONNECTION__URL
const PORT = process.env.PORT||5000;
mongoose.connect(CONNECTION__URL)
    .then(()=>app.listen(PORT,()=>console.log('server running')))
    .catch((err)=>console.log(err))