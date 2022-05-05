const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String},
    role:String,
    imageUrl:{type:String,required:false,default:''} ,
    // id:{type:String,unique:true,default:''}
},{timestamps:true})
const userModel=mongoose.model('UserModel',userSchema)
module.exports = userModel