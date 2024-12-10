import {Router} from 'express';
import { createUser } from '../controllers/user/userController';
import { auth } from '../middleware/auth';

export const router = Router();

    router.post('/userCreate', createUser);
