import { RequestHandler } from "express";
import { updatePost } from "../../models/postModel";

export const updatePostController: RequestHandler = async (req, res) => {
    try {
        const { id_post, photo_post, description } = req.body;
        console.log(req.body);
        if (!id_post || !description) {
            res.status(400).json({ message: "Id do post e descrição são obrigatórios!" });
            return;
        }

        const result = await updatePost(id_post, photo_post, description);

        if (!result) {
            res.status(400).json({ message: "Erro ao atualizar o post." });
            return;
        }

        res.status(200).json(result); // Retorna o post atualizado
    } catch (error) {
        console.error("Erro ao atualizar post:", error);
        res.status(500).json({ error: "Erro interno ao atualizar post." });
    }
};