const mongoose=require("mongoose");
const schema=new mongoose.Schema({patientName:{type:String,required:true},patientEmail:{type:String,required:true},phone:{type:String,required:true},bloodGroup:{type:String,required:true,enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]},units:{type:Number,required:true,min:1},hospital:{type:String,required:true},reason:{type:String,required:true},status:{type:String,enum:["Pending","Approved","Rejected","Completed"],default:"Pending"}},{timestamps:true});
module.exports=mongoose.model("BloodRequest",schema);
