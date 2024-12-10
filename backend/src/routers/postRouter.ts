import { Router } from 'express';
import { getAllPosts } from '../controllers/postController';

const postRouter = Router();

postRouter.get('/', getAllPosts);

export default postRouter;
