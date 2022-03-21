import express from 'express';
import mongoose from 'mongoose';
import projectModel from '../models/projectModel.js';

const router=express.Router()
router.get('/',async (req,res)=>{//a controller
    try {
        const displayProject=await projectModel.find()
        res.status(200).json(displayProject)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.post('/',async(req,res)=>{
    const { title,file64} = req.body;
        const newProject = new projectModel({ title,file64})
        // ,leader:'me',team:[{me:'me'}],list:null 
    try {
        await  newProject.save()
        res.status(201).json(newProject)   
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})
router.patch('/:id',async(req,res)=>{
    const {id}=req.params
    const project = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')
    const updateProject = await projectModel.findByIdAndUpdate(id,project,{new:true})//new:true to recieve the updated version
    res.json(updateProject)
})
export default router
