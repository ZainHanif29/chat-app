import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: { type: String, require: true },
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profilePhoto: { type: String },
    gender: { type: String, enum: ["male", "female"], require: true },
},{timestamps:true});
const User = mongoose.model("User", userSchema);
export default User;