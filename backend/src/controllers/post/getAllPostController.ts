import { RequestHandler } from "express";
import { getAllPosts } from "../../models/postModel"
export const getAllPostsController: RequestHandler = async (req, res) => {

    try {
        const returnPosts = await getAllPosts()
        res.status(200).json(returnPosts)
        return;
    } catch (error: any) {
        console.error("Error getting all posts:", error);
        res.status(500).json({ error: "Internal server error while getting all posts." });
        return;
    }
}