import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String},
    role:String,
    id:{type:String}
},{timestamps:true})
const userModel=mongoose.model('UserModel',userSchema)
export default userModel