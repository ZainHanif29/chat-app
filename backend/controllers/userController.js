import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
class userController {

    static register = async (req, res) => {
        try {
            const { fullName, userName, password, confirmPassword, gender } = req.body;
            if (!fullName || !userName || !password || !confirmPassword || !gender) {
                return res.status(400).json({ message: "All fields are required" });
            }
            if (password !== confirmPassword) {
                return res.status(400).json({ message: "Password do not match" });
            }
            const exitUser = await User.findOne({ userName: userName });
            if (exitUser) {
                return res.status(400).json({ message: "Username already exit" });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const malePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`
            const femalePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`
            const users = await User({ fullName, userName, password: hashPassword, profilePhoto: gender == "male" ? malePhoto : femalePhoto, gender });

            await users.save();
            return res.status(200).json({ message: "Register Success", status: 200 });
        } catch (error) {
            console.log(error);
        }
    }

    static login = async (req, res) => {
        try {
            const { userName, password } = req.body;
            if (!userName || !password) {
                return res.status(400).json({ message: "All fields are required" })
            }
            const exitUser = await User.findOne({ userName: userName });
            if (!exitUser) {
                return res.status(400).json({ message: "Username not exit" });
            }
            const hashPassword = await bcrypt.compare(password, exitUser.password);
            if (!hashPassword) {
                return res.status(400).json({ message: "Incorrect password" });
            }
            const data = {
                userID: exitUser._id
            };
            const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1d' });
            return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, samesite: 'strict' }).json({
                _id: exitUser._id,
                userName: exitUser.userName,
                fullName: exitUser.fullName,
                profilePhoto: exitUser.profilePhoto,
                "token": token
            });
        } catch (error) {
            console.log(error)
        }
    }

    static logout = (req, res) => {
        try {
            return res.status(200).cookie("token", "", { maxAge: 0 }).json({
                message: "logged out successfully"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getOtherUser = async (req, res) => {
        try {
            const loggedUserId = req._id;
            const otherUser = await User.find({ _id: { $ne: loggedUserId } }).select("-password");
            return res.status(200).json({ otherUser });
        } catch (error) {
            console.log(error)
        }
    }





}

export default userController;