const express = require('express')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
const projectModel = require('../models/projectModel')
var auth = require('../middleware/auth')
var admin = require('../middleware/admin')

var router=express.Router()

router.post('/gmail-signup',async(req,res)=>{
    const {email,name,imageUrl,googleId}=req.body
    try {
        const existingUser =  await userModel.findOne({email})
        if(existingUser) return res.status(200).json(existingUser)
        const result = await userModel.create({id:googleId,email,name,role:'USER',imageUrl})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error})
    }
})
router.post('/signup',async(req,res)=>{
    const {name,password,email,confirm_password}=req.body
    try {
        const existingUser =  await userModel.findOne({email})
        if(existingUser) return res.status(404).json({message:'user exists'})
        if(password.trim().length===0) return res.status(400).json({message:'password is required'})
        if(password.length<6) return res.status(400).json({message:'password has to be longer than 5'})
        if(confirm_password!==password) return res.status(400).json({message:'Password doesnt match'})
        const hashedPassword = await bcrypt.hash(password,12)
        const result = await userModel.create({email,password:hashedPassword,name,role:'ADMIN'})
        const token =jwt.sign({email:result.email,role:result.role,id:result._id},process.env.PRIVATE_KEY,{expiresIn:'2h'})
        res.status(200).json({result,token})
    } catch (error) {
        res.status(409).json({message:error})
    }
})
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body
    try {
        const existingUser  =await userModel.findOne({email})
        if(!existingUser) return res.status(404).json({message:'user doesnt exist'})
        const isPass = await bcrypt.compare(password,existingUser.password)
        if(!isPass) return res.json(400).json({message:'Invalid password'})
        const token =jwt.sign({email:existingUser.email,role:existingUser.role,id:existingUser._id},process.env.PRIVATE_KEY,{expiresIn:'2h'})
        res.status(200).json({result:existingUser,token})
    } catch (error) {
        res.status(500).json({message:error})
    }
})


module.exports = router