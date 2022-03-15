import express from 'express';
import projectModel from '../models/projectModel.js';

const router=express.Router()
router.get('/',async (req,res)=>{//a controller
    try {
        const displayProject=await projectModel.find()
        console.log(displayProject)
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
export default router
