import { Router } from 'express';
import { loginWithEmail } from '../controllers/auth/login';
import { logoutFunction }   from '../controllers/auth/logout';
import { forgot } from '../controllers/forgotPassword';


export const authRouter = Router();

    authRouter.post('/loginEmail', loginWithEmail);
    authRouter.post('/forgot', forgot);
    authRouter.post('/logout', logoutFunction);
   

