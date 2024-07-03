import express from "express";
import userController from "../controllers/userController.js";
import messageController from "../controllers/messageController.js";
import auth from "../middleware/authentication.js";
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/user", auth, userController.getOtherUser);

router.get("/send/:_id", auth, messageController.sendMessage);

export default router;