import { RequestHandler } from "express";
import { createComment } from "../../models/postModel";


export const createCommentController: RequestHandler = async (req, res) => {
    try{
        const { post_id, user_id, comment } = req.body;

        const result = await createComment(post_id, user_id, comment);

        res.status(201).json({ 
            message: "Comment created successfully!", 
            data: result 
        });

        return;

    } catch (error){
        console.error("Error creating comment:", error);

        res.status(500).json({ 
            error: "Internal server error while creating comment." 
        });
        
        return;
    }
    
}