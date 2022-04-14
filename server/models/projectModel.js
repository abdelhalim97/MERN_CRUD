const mongoose = require('mongoose')

const projectSchema=mongoose.Schema({
    title:{type:String,required:true},
    leader:String,
    team:[String],
    file64:String,
    list:[[{}]],
},{timestamps:true})
const projectModel=mongoose.model('ProjectModel',projectSchema) //turning the schema to model|must be singular & uppercase
//An instance of a model is called a document.
exports.default = projectModel