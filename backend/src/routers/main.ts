import {  Router} from "express";
import { authRouter } from  "./login";
import { createUser } from "../controllers/user/userController";


const mainRouter = Router();
    mainRouter.use('/user', createUser);
    mainRouter.use('/auth', authRouter);

export default mainRouter;