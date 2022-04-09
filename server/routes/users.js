import express from 'express';
import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router=express.Router()
router.post('/signup',async(req,res)=>{
    const {name,password,email,confirm_password}=req.body
    
    try {
        const existingUser =  await userModel.findOne({email})
    if(existingUser) return res.status(404).json({message:'user exists'})
    if(confirm_password!==password) return res.status(400).json({message:'Password doesnt match'})
    const hashedPassword = await bcrypt.hash(password,12)
    const result = await userModel.create({email,password:hashedPassword,name})
    const token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'})
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
        const token =jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1h'})
        res.status(200).json({result:existingUser,token})
    } catch (error) {
        res.status(500).json({message:error})
    }
})
export default router