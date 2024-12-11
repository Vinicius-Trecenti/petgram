import { RequestHandler } from "express";
import { updatePost } from "../../models/postModel";

export const updatePostController: RequestHandler = async (req, res) => {
    try {
        const { id_post, description } = req.body;
        console.log(req.body);
        if (!id_post || !description) {
            res.status(400).json({ message: "Id or description are required!" });
            return;
        }

        const result = await updatePost(id_post, description);

        if (!result) {
            res.status(400).json({ message: "Error updating post." });
            return;
        }

        res.status(200).json(result); // Retorna o post atualizado
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Internal error when updating post." });
    }
};