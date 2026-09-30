const mongoose=require("mongoose");
const schema=new mongoose.Schema({name:{type:String,required:true},age:{type:Number,required:true},gender:{type:String,required:true},bloodGroup:{type:String,required:true},phone:{type:String,required:true},email:{type:String,required:true},address:{type:String,required:true},lastDonationDate:{type:String,default:""}},{timestamps:true});
module.exports=mongoose.model("Donor",schema);
