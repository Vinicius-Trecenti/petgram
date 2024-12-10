import { RequestHandler } from "express";
import { createPost } from "../../models/postModel";
import { postInput } from "../../models/postModel";

export const createPostController: RequestHandler = async (req, res) => {
    try {
        const { description, images, id_user } = { ...req.body };

        if (!id_user ||!description || !images || images.length === 0) {
            res.status(400).json({ error: "Image, id or description are required!" });
            return;
        }

        const result = createPost({
            id_user: id_user,
            photoPost: images,
            description: description
        });

        if (!result) {
            res.status(400).json({ error: "Error creating post, check data!" });
            return;
        }

        res.status(201).json({
            message: "Post created successfully!",
            data: result,
        });
        return;

    } catch (error: any) {
        console.error("Error creating post:", error);
        res.status(500).json({
            error: "Internal server error while creating post.",
            details: error.message || error,
        });
        return;
    }
};
