import { RequestHandler, response } from 'express';
import { deletePost } from '../../models/postModel';

export const deletePostController: RequestHandler = async( req, res) =>{
    try{
        const { id_post } = req.body;

        const result =  await deletePost(id_post);
        if(!result) {
             res.status(400).json({message:"Error deleting post " })
             return;
        }

        res.status(201).json({message: "publication deleted successfully"});
        return;

    } catch(error){
        console.log("Error deleting post ", error)
        res.status(500).json( {error: "Internal server error"});
        return;
    }
}