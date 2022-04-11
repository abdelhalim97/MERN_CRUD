import mongoose from 'mongoose'

const projectSchema=mongoose.Schema({
    title:String,
    // leader:String,
    // team:String,
    file64:String,
    // list:[String],//list have cards
    // visibility:Boolean,
},{timestamps:true})
const projectModel=mongoose.model('ProjectModel',projectSchema) //turning the schema to model|must be singular & uppercase
//An instance of a model is called a document.
export default projectModel