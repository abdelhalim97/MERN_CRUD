import mongoose from 'mongoose'

const projectSchema=mongoose.Schema({
    title:String,
    leader:String,
    team:String,
    list:[String],//list have cards
    visibility:Boolean,
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const projectModel=mongoose.model('ProjectModel',projectSchema) //turning the shema to model|must be singular & uppercase
//An instance of a model is called a document.
export default projectModel