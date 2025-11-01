import { chatClient } from "../libs/stream.js"; 
/**
 * @description Get Stream token for the user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
export const getStreamToken=async(req,res)=>{
    try {
        if (!chatClient) {
            return res.status(503).json({error:"Stream.io is not configured. Please set STREAM_API_KEY and STREAM_API_SECRET environment variables."});
        }
        //use clerkId not mongodb _id as it is the unique identifier for the user in the database
        const user=req.user;
        const token=await chatClient.createToken(user.clerkId);
        res.status(200).json({token,userId:user.clerkId,userName:user.name,userImage:user.profileImage});
    } catch (error) {
        console.error("error in getStreamToken",error);
        res.status(500).json({error:"Internal server error"});
    }
}