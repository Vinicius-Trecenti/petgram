import {  Router, Request, Response, NextFunction} from "express";
import { authRouter } from  "./login";
import { createUser } from "../controllers/user/userController";
import { auth } from "../middleware/auth";
import { refreshTokenFunction } from "../controllers/auth/refreshtoken";
import { postRouter } from "./post";

const mainRouter = Router();
    mainRouter.use('/user', createUser);
    mainRouter.use('/auth', authRouter);
    mainRouter.use('/refreshtoken', refreshTokenFunction);
    mainRouter.use('/post', postRouter);

export default mainRouter;