const express = require('express')
const userModel = require('../models/userModel')
const projectModel = require('../models/projectModel')
var auth = require('../middleware/auth')
var admin = require('../middleware/admin')

var router=express.Router()

router.delete('/:id',admin,async(req,res)=>{//only admin
    const {id} = req.params
    try {
        const existingUser = await userModel.findOne({_id:id})
        if(!existingUser) return res.status(404).send({message:'User doesnt exist'})
        await projectModel.updateMany({leader:id},{leader:null})
        await userModel.findByIdAndRemove(id)
        res.json({message:'User Deleted'})
    } catch (error) {
        res.status(500).json({message:error})
    }
})
module.exports = router