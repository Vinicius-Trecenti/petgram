import { Router } from 'express';
import { loginWithEmail } from '../controllers/login';
import { forgot } from '../controllers/auth';

export const authRouter = Router();

    authRouter.post('/loginEmail', loginWithEmail);
    authRouter.post('/forgot', forgot);

