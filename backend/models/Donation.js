const mongoose=require("mongoose");
const schema=new mongoose.Schema({donorId:{type:mongoose.Schema.Types.ObjectId,ref:"Donor",required:true},donorName:{type:String,required:true},bloodGroup:{type:String,required:true,enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]},units:{type:Number,required:true,min:1},donationDate:{type:String,required:true},hospital:{type:String,required:true},status:{type:String,default:"Completed"}},{timestamps:true});
module.exports=mongoose.model("Donation",schema);
