import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js"

class messageController {
    static sendMessage = async (req, res) => {
        const senderId = req._id;
        const receiveId = req.params._id;
        const { message } = req.body;

        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, receiveId] },
        });

        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiveId]
            });
        }

        const newMessage = await Message.create({
            senderId, receiveId, message
        });
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        };
        await gotConversation.save();
        res.status(200).json({ message: "message send" })

    }
}

export default messageController;