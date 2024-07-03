import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import router from "./routes/userRoutes.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import User from "./models/userModel.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
// app.use(cors())
app.use("/api",router)


app.listen(port,()=>{
    connectDB();
    console.log(`Server is running this port ${port}`)
});