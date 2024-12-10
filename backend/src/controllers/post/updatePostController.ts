import { RequestHandler } from "express";
import { updatePost } from "../../models/postModel";

export const updatePostController: RequestHandler = async (req, res) => {
    try {
        
        const { id_post, photo_post, description } = { ...req.body };

        console.log(req.body);

            if(!id_post) {
                res.status(400).json({ message: "Id post is required!" });
                return;
            }

        const result = await updatePost(id_post, photo_post, description);

            if(!result) {
                res.status(400).json({ message: "Error updating post" });
                return;
            }

        res.status(201).json({ message: "Post updated successfully!" });
        return;

    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Internal server error while updating post." });
        return;
    }
}