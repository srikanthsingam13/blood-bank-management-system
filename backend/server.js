const express=require("express"); const cors=require("cors"); const dotenv=require("dotenv"); const connectDB=require("./config/db");
dotenv.config(); connectDB(); const app=express(); app.use(cors()); app.use(express.json());
app.use("/api/users",require("./routes/userRoutes")); app.use("/api/donors",require("./routes/donorRoutes")); app.use("/api/blood",require("./routes/bloodRoutes")); app.use("/api/requests",require("./routes/requestRoutes")); app.use("/api/donations",require("./routes/donationRoutes")); app.use("/api/dashboard",require("./routes/dashboardRoutes"));
app.get("/",(req,res)=>res.json({message:"Blood Bank Management System API is running"})); const PORT=process.env.PORT||5000; app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));
