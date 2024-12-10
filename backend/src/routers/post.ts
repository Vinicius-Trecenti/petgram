import { Router} from 'express';
import { createPostController } from '../controllers/post/createPostController';
import { getAllPostsController } from '../controllers/post/getAllPostController';
import { auth } from '../middleware/auth';
import { upload } from '../middleware/multer';
import { uploadFiles } from '../middleware/uploadFiles';
import { createCommentController } from '../controllers/post/createCommentController';
import { getCommentController } from '../controllers/post/getCommentsController';
import { updatePostController } from '../controllers/post/updatePostController';

export const postRouter = Router();

    postRouter.post('/createPost', auth, upload.array('files'), uploadFiles, createPostController);
    postRouter.get('/getAllPost', getAllPostsController);
    postRouter.post('/comment', createCommentController);
    postRouter.get('/getComments', getCommentController);
    postRouter.put('/updatePost', auth, upload.array('files'), uploadFiles, updatePostController);
    

