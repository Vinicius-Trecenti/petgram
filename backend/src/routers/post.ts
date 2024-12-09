import { Router} from 'express';
import { createPostController } from '../controllers/post/createPostController';
import { getAllPostsController } from '../controllers/post/getAllPostController';
import { auth } from '../middleware/auth';
import { upload } from '../middleware/multer';
import { uploadFiles } from '../middleware/uploadFiles';


export const postRouter = Router();

    postRouter.post('/createPost', auth, upload.array('files'), uploadFiles, createPostController);
    postRouter.get('/getAllPost', getAllPostsController);

