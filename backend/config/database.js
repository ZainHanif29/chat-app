import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE}`).then(
        console.log("Database connected")
    ).catch((error)=>{
        console.log(`Error! ${error}`)
    })
}

export default connectDB;