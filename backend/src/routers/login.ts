import { Router, Request, Response, NextFunction } from 'express';
import { loginWithEmail } from '../controllers/login';
import { logout }   from '../controllers/logout';
import { forgot } from '../controllers/forgotPassword';

export const authRouter = Router();

    authRouter.post('/loginEmail', loginWithEmail);
    authRouter.post('/forgot', forgot);
    authRouter.post('/logout', logout);

