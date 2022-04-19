const express = require('express')
const mongoose = require('mongoose')
const projectModel = require('../models/projectModel')
var auth = require('../middleware/auth')

var router=express.Router()
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
    const {title,newMember} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no project with that id')
    if(title){
        const updateProject = await projectModel.findByIdAndUpdate(id,{title},{new:true})//new:true to recieve the updated version
        res.json(updateProject)
    }
    if(newMember){
        const existingProject = await projectModel.findOne({_id:id})
        const [newMemberDest] = newMember
        const team= existingProject.team
        team.push(newMemberDest)
        const updateProject = await projectModel.findByIdAndUpdate(id,{team},{new:true})//new:true to recieve the updated version
        res.json(updateProject)
    }
})
router.delete('/:id',auth,async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no project with that id')
    await projectModel.findByIdAndRemove(id)
    res.json({message:'Project Deleted'})
})
module.exports = router
