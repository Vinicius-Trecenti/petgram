import {  Router, Request, Response, NextFunction} from "express";
import { authRouter } from  "./login";
import { createUser } from "../controllers/user/userController";
import { auth } from "../middleware/auth";
import { refreshTokenFunction } from "../controllers/refreshtoken";


const mainRouter = Router();
    mainRouter.use('/user', createUser);
    mainRouter.use('/auth', authRouter);
    mainRouter.use('/refreshtoken', refreshTokenFunction);


    mainRouter.get('/courses', auth,(Request, Response) => {Response.send([
            {id: 1, post: 'papagaio'},
            {id: 2, post: 'cachorro'},
            {id: 3, post: 'gato'},
            {id: 4, post: 'peixe'},
            {id: 5, post: 'lemure'}
        ]);
    });

export default mainRouter;