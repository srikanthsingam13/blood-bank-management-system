const mongoose=require("mongoose");
const schema=new mongoose.Schema({bloodGroup:{type:String,required:true,enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]},units:{type:Number,required:true,min:0},collectionDate:{type:Date,required:true},expiryDate:{type:Date,required:true},status:{type:String,enum:["Available","Low Stock","Out of Stock","Expired"],default:"Available"}},{timestamps:true});
module.exports=mongoose.model("BloodStock",schema);
