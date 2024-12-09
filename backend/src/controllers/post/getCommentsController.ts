import { RequestHandler } from "express";
import { getComment } from "../../models/postModel";

export const getCommentController: RequestHandler = async( req, res) => {
    try {
        const { post_id } = req.body;

        const result = await getComment(post_id);
        if(!result){
            res.status(400).json({message: "error when returning comments"});
            return;
        }

        res.status(201).json({
            message: " comments returned successfully",
            result
        });
        return;

    } catch(error){
        console.error("Error getting all posts:", error);
        res.status(500).json({ error: "Internal server error while getting all posts." });
        return;
    }
    
}