import express from 'express';
import mongoose from 'mongoose';
import projectModel from '../models/projectModel.js';
import auth from '../middleware/auth.js'

const router=express.Router()
router.get('/',async (req,res)=>{//a controller
    try {
        const displayProject=await projectModel.find()
        res.status(200).json(displayProject)
    } catch (error) {
        res.status(404).json({message:error})
    }
})
router.post('/',auth,async(req,res)=>{
    const projectData = req.body;
    const leader = req.userId.toString()
    const newProject = new projectModel({...projectData,leader,team:[leader],list:[[{}]]})
    try {
        await  newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(409).json({message:error})
    }
})
router.patch('/:id',auth,async(req,res)=>{
    const {id}=req.params
    const project = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no project with that id')
    const updateProject = await projectModel.findByIdAndUpdate(id,project,{new:true})//new:true to recieve the updated version
    res.json(updateProject)
})
router.delete('/:id',auth,async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no project with that id')
    await projectModel.findByIdAndRemove(id)
    res.json({message:'Project Deleted'})
})
export default router
