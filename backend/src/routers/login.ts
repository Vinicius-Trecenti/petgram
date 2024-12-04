import { Router } from 'express';
import { loginWithEmail } from '../controllers/login';
//import { logout }   from '../controllers/logout';
import { forgot } from '../controllers/forgotPassword';
//import { refreshToken } from '../controllers/refreshtoken';

export const authRouter = Router();

    authRouter.post('/loginEmail', loginWithEmail);
    authRouter.post('/forgot', forgot);
    //uthRouter.post('/logout', logout);
   // authRouter.post('/refreshtoken', refreshToken);

